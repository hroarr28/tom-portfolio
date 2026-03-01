import { CaseStudyLayout } from "@/components/case-study-layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Split & Play Case Study — Tom Chamberlin",
  description: "How I built a real-time audio engine with 7-stem AI separation, smart click track generation, and fire-and-forget polling architecture.",
};

export default function SplitAndPlayCaseStudy() {
  return (
    <CaseStudyLayout
      meta={{
        title: "Building a real-time audio engine with 7-stem AI separation",
        project: "Split & Play",
        role: "Solo developer — architecture, frontend, backend, DevOps",
        timeline: "4 weeks",
        stack: [
          "Next.js 16",
          "TypeScript",
          "Supabase",
          "Replicate",
          "Modal",
          "Howler.js",
          "Tone.js",
          "Zustand",
          "Tailwind CSS",
        ],
        liveUrl: "https://part-master.vercel.app",
        githubUrl: "https://github.com/hroarr28/partMaster",
      }}
    >
      <h2>The problem</h2>
      <p>
        Musicians learning new songs need to isolate specific instruments — hear just the bass line, mute the vocals to sing along, slow down a guitar solo. Existing tools either cost £20+/month, only split into 2 stems (vocals/accompaniment), or have no practice features beyond basic playback.
      </p>
      <p>
        I wanted to build a tool that does the separation <strong>and</strong> provides a proper practice environment: mixer controls, tempo adjustment, pitch shifting, section markers, and intelligent click tracks — all in the browser.
      </p>

      <h2>Architecture decisions that shaped everything</h2>

      <h3>Why fire-and-forget with frontend polling</h3>
      <p>
        The biggest constraint was Vercel&apos;s 60-second function timeout. Demucs stem separation takes 2-5 minutes. I couldn&apos;t run it server-side.
      </p>
      <p>
        The solution: a <strong>fire-and-forget process route</strong> that triggers the Replicate job and returns immediately, plus a <strong>status route</strong> that the frontend polls every 3 seconds. When stems are ready, the status route downloads them one at a time (each stem is 5-15MB as MP3) and uploads to Supabase Storage.
      </p>
      <p>
        One-stem-per-poll was critical — downloading all 6 stems in a single response would exceed Vercel&apos;s function payload limit.
      </p>

      <h3>Why Replicate, not self-hosted Demucs</h3>
      <p>
        I built local Demucs separation first (Python venv, htdemucs_6s model). It works perfectly on my Mac Mini. But Demucs needs ~4GB RAM and several minutes of CPU time — that&apos;s impossible on Vercel&apos;s serverless functions.
      </p>
      <p>
        Replicate runs the same model on GPU for ~$0.05/song. The tradeoff was clear: local for development, Replicate for production.
      </p>
      <p>
        One gotcha: the original Replicate model (<code>cjwbw/demucs</code>) was broken — it returned identical audio for every stem. I had to switch to <code>ryan5453/demucs</code> and specify <code>htdemucs_ft</code> with 320kbps MP3 output. Debugging that cost a full day because the files <em>looked</em> different in file size but sounded identical.
      </p>

      <h3>Direct browser-to-Supabase uploads</h3>
      <p>
        Vercel has a 4.5MB function body limit. Song files are 5-50MB. The solution was to upload directly from the browser to Supabase Storage using a signed upload URL, bypassing the API route entirely for the file payload.
      </p>

      <h2>The smart click track challenge</h2>
      <p>
        A basic metronome is just a beep every N milliseconds. A <strong>smart</strong> click track detects the actual beats in the song and places clicks on them — including accented downbeats and a count-in.
      </p>
      <p>
        I built a Python script using <strong>librosa</strong> for onset strength analysis and beat tracking. It generates a WAV file with 1200Hz tones on downbeats and 800Hz on other beats, plus a 4-beat count-in at the detected BPM.
      </p>
      <p>
        For production, this runs on a <strong>Modal</strong> serverless endpoint. The original approach was to fire-and-forget from the status route, but Modal&apos;s cold start (30-60 seconds) caused timeouts. I moved it to a dedicated <code>/api/songs/[songId]/generate-click</code> endpoint with a 60-second timeout, called separately from stem separation.
      </p>
      <p>
        Race condition: if two users trigger click generation simultaneously, you get duplicate processing. I added an atomic lock using a <code>click_generating</code> boolean column on the songs table, with a 2-minute stale lock reset.
      </p>

      <h2>The audio engine</h2>
      <p>
        Seven independent audio streams (vocals, drums, bass, guitar, piano, other, click) need to play perfectly synchronised with individual volume, mute, and solo controls. Plus tempo change (0.25x-2x) and pitch shift (±12 semitones) applied to all stems simultaneously.
      </p>
      <p>
        <strong>Howler.js</strong> handles playback and volume. <strong>Tone.js</strong> handles tempo and pitch via its GrainPlayer. The tricky part was sync drift — after tempo changes, stems can drift apart by 10-15ms. I added a sync correction that resets all stem positions when drift exceeds the threshold.
      </p>
      <p>
        A-B looping had its own edge case: if the loop region was too small (&lt;0.5 seconds), stems would enter an infinite seek loop trying to snap to the boundaries. I enforced a minimum 0.5-second gap.
      </p>

      <h2>Mobile: harder than expected</h2>
      <p>
        shadcn&apos;s Button component with the <code>outline</code> variant has background overrides (<code>bg-background</code> and <code>dark:bg-input/30</code>) that fight custom active/inactive styling for mute and solo buttons. On desktop this wasn&apos;t visible, but on mobile the wrong background bled through.
      </p>
      <p>
        Fix: replaced shadcn Buttons with native <code>&lt;button&gt;</code> elements for all toggle controls, and added <code>touch-manipulation</code> CSS to prevent the 300ms tap delay on mobile Safari.
      </p>

      <h2>AI usage</h2>
      <ul>
        <li><strong>Demucs AI model</strong> — the core of the product. Separates mixed audio into 6 stems using deep learning.</li>
        <li><strong>librosa beat detection</strong> — analyses onset strength patterns to find beat positions for the click track.</li>
        <li><strong>web-audio-beat-detector</strong> — browser-side BPM detection for immediate tempo display before server analysis.</li>
        <li><strong>Cursor + Claude</strong> — used for complex audio sync logic and debugging the Replicate integration. I wrote the architecture and core logic; AI helped with edge cases and the more verbose Howler.js API calls.</li>
      </ul>

      <h2>Results</h2>
      <ul>
        <li><strong>7-stem separation</strong> working end-to-end on Vercel</li>
        <li><strong>74 tests passing</strong>, lint clean, build clean</li>
        <li><strong>~$0.05 per song</strong> processing cost</li>
        <li><strong>Sub-2-second</strong> page load (static shell + client hydration)</li>
        <li><strong>Full practice suite</strong>: mixer, tempo, pitch, loops, markers, session tracking, CSV export</li>
      </ul>

      <h2>What I&apos;d do differently</h2>
      <ul>
        <li><strong>WebSocket instead of polling</strong> — the 3-second poll interval means up to 3 seconds of unnecessary delay. A WebSocket connection would push status updates instantly.</li>
        <li><strong>Web Audio API directly</strong> — Howler.js abstracts away useful low-level controls. For a v2, I&apos;d build the audio engine on raw Web Audio API for tighter sync control.</li>
        <li><strong>Test the Replicate model earlier</strong> — I assumed the top-result model would work. It didn&apos;t. Always test the actual output before building the integration layer.</li>
      </ul>
    </CaseStudyLayout>
  );
}
