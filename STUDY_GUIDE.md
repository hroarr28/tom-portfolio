# Portfolio Study Guide — What You Need To Know

Everything in your portfolio case studies, explained so you can talk about it confidently in interviews. Read this over a weekend, then practise explaining each concept out loud in plain English.

---

## 1. RAG (Retrieval-Augmented Generation)

### What it is
A pattern that stops AI from making stuff up. Instead of asking an AI a question and hoping it knows the answer, you:
1. Search your own documents for relevant passages first
2. Give those passages to the AI as context
3. Tell the AI: "Only answer using this context"

### Why it exists
ChatGPT hallucinates — it confidently says things that aren't true. RAG fixes this by grounding the AI's response in actual source material. If the answer isn't in the documents, it says "I don't know" instead of guessing.

### The flow (memorise this)
```
User asks question
    → Question gets converted to a vector (embedding)
    → Vector is compared against all stored document vectors
    → Top 5-6 most similar chunks are retrieved
    → Those chunks are injected into the AI's prompt as context
    → AI generates answer using ONLY that context
    → Answer includes [Source 1], [Source 2] citations
```

### How to explain it in an interview
"RAG is a pattern where you retrieve relevant documents before generating an answer. The AI only sees your actual content, so it can't hallucinate. I built a full pipeline: documents are chunked, embedded as vectors, stored in Postgres with pgvector, then retrieved via cosine similarity when someone asks a question."

---

## 2. Vector Embeddings

### What they are
A way to turn text into numbers that capture meaning. The sentence "The cat sat on the mat" becomes a list of 1,536 numbers (a vector). Similar sentences produce similar numbers.

### Why they matter
You can't search for meaning with traditional text search. "What's the company's revenue?" wouldn't match a document saying "We generated £2.3M in sales" — the words are different. But their embeddings would be similar because the meaning is similar.

### Key details for your portfolio
- **Model:** OpenAI's `text-embedding-3-small` — produces 1,536-dimensional vectors
- **Why small, not large?** 5x cheaper ($0.02 vs $0.10 per million tokens), and retrieval benchmarks show minimal quality difference for document search. The large model only wins for cross-lingual or very nuanced tasks.
- **Cosine similarity:** Measures how similar two vectors are. 1.0 = identical, 0 = unrelated. You used a threshold of 0.3 to filter out irrelevant results.

### How to explain it
"Embeddings convert text into numbers that represent meaning. Similar text produces similar numbers. I use OpenAI's embedding model to convert document chunks and user questions into vectors, then find the closest matches using cosine similarity in Postgres."

---

## 3. pgvector

### What it is
A Postgres extension that lets you store and search vectors directly in your database. No separate vector database needed.

### Why not a dedicated vector DB (Pinecone, Weaviate)?
Supabase already runs Postgres. Adding pgvector means vectors live alongside your other data — no extra service, no extra cost, no sync issues. For collections under 100k items, it's plenty fast.

### IVFFlat index
Instead of comparing your query vector against every single stored vector (slow), IVFFlat groups similar vectors into clusters. When you search, it only looks at the nearest clusters. Much faster, with negligible accuracy loss.

**If asked "why IVFFlat and not HNSW?":** HNSW (the other option) is faster for queries but uses more memory and is slower to build. IVFFlat is better for smaller datasets where build speed matters and memory is limited. For a portfolio project with hundreds of chunks, either would work fine.

### How to explain it
"I used pgvector in Supabase so vectors live alongside my regular data. The IVFFlat index clusters similar vectors for fast approximate search — I don't need to compare against every document, just the nearby clusters."

---

## 4. Chunking

### What it is
Splitting a long document into smaller pieces before embedding it.

### Why you can't just embed the whole document
Embeddings capture the "average meaning" of the text. A 50-page document about many topics would produce a vector that represents everything vaguely and nothing specifically. A 500-word chunk about one topic produces a focused vector that matches relevant queries accurately.

### Your chunking strategy
- **500 tokens per chunk** — long enough for context, short enough for specificity
- **50-token overlap** — the last 50 tokens of chunk N are repeated at the start of chunk N+1, so context at boundaries isn't lost
- **Split on paragraph boundaries** — don't cut mid-sentence. Find the nearest paragraph break to the 500-token mark
- **Track headings** — store which section heading each chunk falls under, so you can show "Source: Section 3 — Revenue" in citations

### How to explain it
"I chunk documents at around 500 tokens with a 50-token overlap, splitting on paragraph boundaries rather than arbitrary character counts. The overlap ensures context isn't lost at chunk edges. Each chunk also stores its section heading as metadata."

---

## 5. Fire-and-Forget with Frontend Polling

### The problem
Vercel serverless functions time out after 60 seconds. AI stem separation takes 2-5 minutes. You can't keep a request open that long.

### The solution
1. **Process route** — receives the request, starts the AI job (on Replicate), returns immediately with "processing started"
2. **Status route** — frontend calls this every 3 seconds to check if the job is done
3. When stems are ready, the status route downloads them one at a time and saves to storage

### Why one stem per poll
Each stem is 5-15MB. Downloading all 6 in one response would hit Vercel's function payload limit (4.5MB). So each poll downloads one stem, and the frontend keeps polling until all stems are saved.

### How to explain it
"Vercel has a 60-second timeout but stem separation takes minutes. So I use a fire-and-forget pattern: trigger the job and return immediately, then the frontend polls a status endpoint every few seconds. When stems are ready, I download them one at a time to stay under Vercel's payload limit."

---

## 6. Base64 vs URL for Vision APIs

### The problem
Claude Vision can receive images as URLs or as base64-encoded data. The obvious approach is to pass a URL to the image in Supabase Storage.

### Why URLs fail
Supabase generates signed URLs for private files. These URLs are time-limited and sometimes fail when accessed from external servers (Claude's servers). The request might work 90% of the time but fail unpredictably.

### The fix
Download the image on your server, convert it to a base64 string, and pass it inline in the API request. Slightly larger payload, but 100% reliable. No timing issues, no external fetch failures.

### How to explain it
"Supabase signed URLs can be unreliable when accessed from external servers like Claude's. So I download the image server-side first and pass it as base64 inline. Slightly larger request, but it never fails."

---

## 7. Demucs (AI Stem Separation)

### What it is
A deep learning model from Meta Research that separates a mixed song into individual instruments. The `htdemucs_ft` variant separates into 4 stems; `htdemucs_6s` does 6 stems (vocals, drums, bass, guitar, piano, other).

### How it works (high level)
Neural network trained on thousands of songs where both the mix and individual stems were available. It learns to predict what each instrument sounds like from the mixed audio. You don't need to understand the ML architecture — just know it's a pretrained model you run via an API.

### Replicate
A platform that hosts ML models and runs them on GPUs. You send audio via API, it runs Demucs, returns separated stems. ~$0.05 per song.

### The broken model story
The first Replicate model I tried (`cjwbw/demucs`) returned identical audio for every stem — they were all the same file but with different names. Debugging this was hard because the files had different sizes (due to MP3 encoding variance), so they looked different. I had to actually listen to them to discover the bug, then switch to a different model (`ryan5453/demucs`).

### How to explain it
"Demucs is Meta's AI model for stem separation. I run it via Replicate on GPU for about 5p per song. The tricky part was finding a working Replicate model — the most popular one was broken and returned identical audio for all stems."

---

## 8. Smart Click Track (librosa + Modal)

### What it is
A metronome that follows the actual beats of the song instead of just beeping at a fixed tempo.

### How it works
- **librosa** — a Python library for audio analysis. It detects "onset strength" (where beats are in the waveform) and tracks the beat pattern
- The script generates a WAV file with clicks on each beat: 1200Hz tone on downbeats (beat 1), 800Hz on other beats
- Includes a 4-beat count-in before the track starts

### Modal
A serverless platform for running Python code. I deployed the click track generator there because Vercel can't run Python with librosa. The endpoint takes an audio URL + BPM, returns a WAV file.

### The cold start problem
Modal spins down inactive containers. First request after inactivity takes 30-60 seconds to cold start. Originally I triggered click generation from the stem status route, but the combined time (stem check + cold start) exceeded Vercel's timeout. Fix: dedicated endpoint with its own 60-second timeout, triggered separately.

### How to explain it
"The click track uses librosa to detect actual beats in the song, then generates a WAV with accent on downbeats. It runs on Modal because Vercel can't run Python audio libraries. I had to give it a dedicated endpoint because Modal's cold start was too slow to piggyback on other requests."

---

## 9. Streaming Responses (Vercel AI SDK)

### What it is
Instead of waiting for the entire AI response to generate (which can take 5-10 seconds), you stream it token by token as it's generated. The user sees text appearing in real time.

### How it works
The Vercel AI SDK's `streamText` function calls the AI API with streaming enabled and returns a ReadableStream. The frontend reads from this stream and appends each chunk to the displayed text.

### How to explain it
"I use the Vercel AI SDK to stream responses token by token. The user sees the answer appearing in real time instead of waiting for the full response. Better UX, especially for longer answers."

---

## 10. Supabase Row Level Security (RLS)

### What it is
Database-level access control. Instead of checking permissions in your API code, Postgres itself enforces who can read/write which rows.

### Why it matters
Even if someone bypasses your API and connects directly to the database (using the anon key from your frontend code), they still can't access other users' data. The security is at the database layer, not the application layer.

### Example
"Users can only read their own documents" becomes a Postgres policy:
```sql
CREATE POLICY "Users read own docs" ON documents
  FOR SELECT USING (auth.uid() = user_id);
```

### How to explain it
"Supabase RLS enforces access control at the database level. Even if someone grabs the anon key from the frontend, they can only access their own data. I use it on every table — it's more secure than checking permissions in API routes."

---

## Interview Practice

For each project, practise answering these questions out loud:

1. **"Walk me through the architecture."** — Draw the flow from user action to final result.
2. **"Why did you choose X over Y?"** — Every technology choice should have a reason.
3. **"What was the hardest technical challenge?"** — Pick one, explain the problem and solution.
4. **"What would you do differently?"** — Shows growth mindset. Use the answers from your case studies.
5. **"How did you use AI in building this?"** — Be honest. "I designed the architecture, AI helped with boilerplate and edge cases."

### The golden rule
If you can't explain it simply, you don't understand it yet. Read the relevant section again and practise until you can explain it to a non-technical person.

---

## Quick Reference Card

| Term | One-line explanation |
|------|---------------------|
| RAG | Search your docs first, then ask AI to answer using only what you found |
| Embeddings | Numbers that represent the meaning of text |
| pgvector | Postgres extension for storing and searching vectors |
| Cosine similarity | Measures how similar two vectors are (0-1) |
| IVFFlat | Index that clusters vectors for faster search |
| Chunking | Splitting documents into small pieces for better search |
| Fire-and-forget | Start a long job, return immediately, poll for results |
| Base64 | Encoding binary data (images) as text to send inline |
| Demucs | Meta's AI model for separating songs into instruments |
| librosa | Python library for audio analysis (beat detection) |
| Modal | Serverless platform for running Python/ML code |
| RLS | Database-level security that controls who sees which rows |
| Streaming | Sending AI responses token by token instead of all at once |
