import { CaseStudyLayout } from "@/components/case-study-layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insight Case Study — Tom Chamberlin",
  description: "How I built a RAG pipeline from PDF upload to cited AI answers using pgvector embeddings, intelligent chunking, and streaming responses.",
};

export default function InsightCaseStudy() {
  return (
    <CaseStudyLayout
      meta={{
        title: "RAG pipeline: from PDF upload to cited AI answers",
        project: "Insight",
        role: "Solo developer — architecture, frontend, backend, AI pipeline",
        timeline: "1 week",
        stack: [
          "Next.js 16",
          "TypeScript",
          "Supabase pgvector",
          "OpenAI Embeddings",
          "GPT-4o-mini",
          "Vercel AI SDK",
          "Tailwind CSS",
        ],
        githubUrl: "https://github.com/hroarr28/insight",
      }}
    >
      <h2>The problem</h2>
      <p>
        Generic AI chatbots hallucinate. Ask ChatGPT about a specific document and it&apos;ll confidently give you information that isn&apos;t in the document. For knowledge workers who need accurate answers grounded in their actual files, this is useless.
      </p>
      <p>
        Insight solves this with RAG (Retrieval-Augmented Generation): upload your documents, ask questions, and every answer is grounded in the actual content with source citations. When the answer isn&apos;t in the documents, it says so instead of guessing.
      </p>

      <h2>The RAG pipeline</h2>

      <h3>Document ingestion and chunking</h3>
      <p>
        Documents come in as PDF, TXT, or Markdown. PDFs are parsed with <code>pdf-parse</code> to extract raw text. Then the text is split into chunks.
      </p>
      <p>
        Chunking strategy matters more than most people think. Too large and the embeddings lose specificity — the vector represents too many topics. Too small and you lose context — a sentence fragment is meaningless without its paragraph.
      </p>
      <p>
        I settled on <strong>500-token chunks with 50-token overlap</strong>, splitting on paragraph boundaries rather than arbitrary character counts. The overlap ensures that context at chunk boundaries isn&apos;t lost. Headings are tracked and stored as metadata so results can show which section a passage came from.
      </p>

      <h3>Vector embeddings with pgvector</h3>
      <p>
        Each chunk is embedded using OpenAI&apos;s <code>text-embedding-3-small</code> model, which produces 1536-dimensional vectors. These are stored in Supabase using the pgvector extension.
      </p>
      <p>
        Why text-embedding-3-small instead of text-embedding-3-large? Cost efficiency. At $0.02 per million tokens, it&apos;s 5x cheaper than the large model, and retrieval performance benchmarks show minimal difference for document search tasks. The quality gap only matters for cross-lingual or highly nuanced semantic tasks.
      </p>
      <p>
        The pgvector index uses <strong>IVFFlat with cosine distance</strong>. IVFFlat partitions vectors into clusters for approximate nearest-neighbour search — much faster than brute-force comparison across all vectors, with negligible accuracy loss for collections under 100k chunks.
      </p>

      <h3>Semantic search</h3>
      <p>
        When the user asks a question, the question itself is embedded using the same model. A Postgres function (<code>match_documents</code>) computes cosine similarity between the query vector and all stored chunk vectors, returning the top 6 matches above a 0.3 similarity threshold.
      </p>
      <p>
        The threshold prevents irrelevant results. Without it, you always get results — even if the documents contain nothing related to the question. 0.3 was tuned empirically: low enough to catch related passages, high enough to filter noise.
      </p>

      <h3>Grounded generation with citations</h3>
      <p>
        The retrieved chunks are injected into the system prompt with <code>[Source N]</code> labels. The model is instructed to only use provided context, reference sources using the notation, and explicitly state when information isn&apos;t available.
      </p>
      <p>
        Responses are streamed using the Vercel AI SDK&apos;s <code>streamText</code> function. Source metadata is passed separately via a base64-encoded custom HTTP header (<code>X-Sources</code>), keeping the streaming response clean while providing citation data to the frontend.
      </p>

      <h2>Frontend design decisions</h2>
      <p>
        The interface is a sidebar + chat layout. Documents are managed in the sidebar (upload, list, delete). Questions and answers appear in the main area with expandable source cards below each response.
      </p>
      <p>
        Each source card shows the document name, section heading, matched passage, and similarity score as a percentage. This transparency is important — users can verify the AI&apos;s sources and judge answer quality.
      </p>
      <p>
        Drag-and-drop upload with a clear empty state that explains the product in three suggested queries. No onboarding tutorial needed — the interface teaches itself.
      </p>

      <h2>Technical challenges</h2>

      <h3>Batch embedding uploads</h3>
      <p>
        A large PDF might produce 50+ chunks. Embedding all of them in one API call works, but inserting 50 rows with 1536-dimensional vectors into Supabase can hit payload limits. Solution: batch inserts of 20 chunks at a time with rollback on failure (delete the document record if any chunk batch fails).
      </p>

      <h3>Build-time Supabase initialisation</h3>
      <p>
        Next.js evaluates module-level code during build. Creating a Supabase client at module scope fails when environment variables aren&apos;t set (CI, build servers). I used a Proxy-based lazy initialisation pattern — the client is only created on first access at runtime, not at import time.
      </p>

      <h2>AI usage</h2>
      <ul>
        <li><strong>OpenAI text-embedding-3-small</strong> — converts text chunks and queries into 1536-dimensional vectors for semantic search.</li>
        <li><strong>GPT-4o-mini</strong> — generates grounded answers from retrieved context with source citations. Chosen for cost ($0.15/1M input tokens) and speed.</li>
        <li><strong>Vercel AI SDK</strong> — handles streaming responses and the AI provider abstraction layer.</li>
        <li><strong>Cursor</strong> — used for the pgvector function syntax and Vercel AI SDK streaming patterns. I designed the RAG architecture, chunking strategy, and grounding approach.</li>
      </ul>

      <h2>Results</h2>
      <ul>
        <li><strong>Full RAG pipeline</strong>: upload → chunk → embed → store → search → generate → cite</li>
        <li><strong>&lt;3 seconds</strong> from question to first streamed token (including embedding + search)</li>
        <li><strong>~$0.002 per query</strong> (embedding + GPT-4o-mini)</li>
        <li><strong>Build clean</strong>, TypeScript strict, zero lint errors</li>
        <li><strong>Transparent citations</strong> with similarity scores and expandable source cards</li>
      </ul>

      <h2>What I&apos;d do differently</h2>
      <ul>
        <li><strong>Hybrid search</strong> — combine vector similarity with keyword (BM25) search for better recall. pgvector handles vectors; Postgres full-text search handles keywords. Merging results with reciprocal rank fusion would catch passages that are semantically related but use different terminology.</li>
        <li><strong>Reranking</strong> — the initial retrieval is fast but approximate. A reranking step using a cross-encoder model would reorder the top 20 results for better precision before passing to the LLM.</li>
        <li><strong>Chunking with overlap aware of sentences</strong> — current overlap is word-count based. Sentence-boundary-aware overlap would preserve more meaning at chunk edges.</li>
        <li><strong>Authentication</strong> — currently open (RLS allows all operations). For production, I&apos;d add Supabase Auth with per-user document isolation.</li>
      </ul>
    </CaseStudyLayout>
  );
}
