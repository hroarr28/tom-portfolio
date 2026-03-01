import { CaseStudyLayout } from "@/components/case-study-layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PromptLens Case Study — Tom Chamberlin",
  description: "How I built a computer vision pipeline that extracts design styles from screenshots and generates AI-ready prompts for Cursor, Stitch, and Anima.",
};

export default function PromptLensCaseStudy() {
  return (
    <CaseStudyLayout
      meta={{
        title: "Computer vision extraction to structured AI prompts",
        project: "PromptLens",
        role: "Solo developer — architecture, frontend, backend, AI pipeline",
        timeline: "2 weeks",
        stack: [
          "Next.js 14",
          "TypeScript",
          "Supabase",
          "Claude Vision API",
          "Stripe",
          "Tailwind CSS",
        ],
        githubUrl: "https://github.com/hroarr28/promptlens",
      }}
    >
      <h2>The problem</h2>
      <p>
        When developers use AI coding tools (Cursor, Stitch, Anima) to build from designs, they spend 20-30 minutes manually describing the visual style: &quot;The background is #1a1a2e, headings use Inter at 24px semi-bold, cards have 8px border radius with a subtle shadow...&quot;
      </p>
      <p>
        PromptLens automates this entirely. Upload a screenshot of any design, and Claude Vision extracts every style property into structured data — then generates a prompt optimised for your specific AI tool.
      </p>

      <h2>The Claude Vision pipeline</h2>

      <h3>Why base64, not URL</h3>
      <p>
        Design screenshots are stored in Supabase Storage as private files. Claude Vision accepts images as either URLs or base64. The obvious approach would be to generate a signed URL and pass it to Claude.
      </p>
      <p>
        Problem: Claude&apos;s API fetches URLs from its own servers. Supabase signed URLs are time-limited and can fail if there&apos;s any latency between URL generation and Claude&apos;s fetch. More critically, private storage URLs sometimes return 403s when accessed from external IPs.
      </p>
      <p>
        The reliable path: download the image server-side, convert to base64, and pass it inline. Slightly larger payload, but 100% reliable. No timing issues, no external fetch failures.
      </p>

      <h3>Structured extraction in one API call</h3>
      <p>
        The prompt asks Claude to return two things: a JSON code block with structured style data (colours, typography, spacing, borders, shadows, layout patterns), and a natural language prompt separated by <code>---PROMPT---</code>.
      </p>
      <p>
        The JSON block is parsed into a structured object for display (colour chips, typography tables, spacing values). The natural language prompt is the exportable output.
      </p>
      <p>
        I tried asking for JSON-only first, but the resulting prompts were robotic. The two-output approach lets Claude be structured <em>and</em> natural in the same response.
      </p>

      <h3>Multi-tool export as a competitive moat</h3>
      <p>
        Each AI tool has different prompt conventions. Cursor wants concise inline instructions. Stitch expects detailed design system descriptions. Anima needs component-focused breakdowns. A generic prompt doesn&apos;t work well for any of them.
      </p>
      <p>
        PromptLens generates four tool-specific prompts from the same extracted data. This is harder for competitors to replicate because it requires understanding each tool&apos;s conventions — not just calling an API.
      </p>

      <h2>Billing and usage enforcement</h2>
      <p>
        Free tier: 3 analyses per month. Pro: unlimited at £7/month. Server-side enforcement was critical — client-side checks can be bypassed.
      </p>
      <p>
        Usage tracking happens in a <code>usage_logs</code> table. Before each analysis, the API checks the user&apos;s subscription status and monthly count. If they&apos;re free and at the limit, the request is rejected before hitting Claude (which would cost money).
      </p>
      <p>
        Monthly reset runs via a Vercel Cron job on the 1st of each month, protected by a <code>CRON_SECRET</code> header.
      </p>

      <h2>The public prompt library</h2>
      <p>
        Phase 2 moat: users can make their extracted prompts public, creating a library of reusable design-to-code prompts. This creates a community flywheel — more users means more public prompts, which attracts more users.
      </p>
      <p>
        Implementation: <code>is_public</code> boolean on the prompts table, a separate <code>/explore</code> route with search and filtering, and RLS policies that allow public reads while protecting private prompts.
      </p>

      <h2>Security considerations</h2>
      <p>
        The system <code>ANTHROPIC_API_KEY</code> environment variable on my machine contains an OAuth token from OpenClaw (my agent framework), not a real Anthropic key. If PromptLens used that, every API call would fail silently.
      </p>
      <p>
        Solution: a dedicated <code>PROMPTLENS_ANTHROPIC_KEY</code> environment variable. The API route explicitly rejects any key starting with <code>oat01</code> as a safety check.
      </p>
      <p>
        Additional hardening: CSP headers, X-Frame-Options DENY, rate limiting (30 uploads/min, 10 analyses/min per user), and input validation via Zod schemas.
      </p>

      <h2>AI usage</h2>
      <ul>
        <li><strong>Claude Vision (claude-sonnet-4-20250514)</strong> — the core of the product. Analyses design screenshots and extracts structured style data plus natural language prompts.</li>
        <li><strong>Structured prompt engineering</strong> — the Claude prompt uses JSON code block + separator pattern for reliable parsing across varied designs.</li>
        <li><strong>Cursor + Claude</strong> — used for Stripe integration boilerplate and Supabase RLS policy writing. I designed the architecture and wrote the core extraction logic.</li>
      </ul>

      <h2>Results</h2>
      <ul>
        <li><strong>~15 seconds</strong> from upload to 4 tool-specific prompts</li>
        <li><strong>£0.003 per analysis</strong> using Claude Sonnet</li>
        <li><strong>Build clean</strong>, lint clean, TypeScript strict</li>
        <li><strong>4 export formats</strong>: Cursor, Stitch, Anima, Generic</li>
        <li><strong>SEO ready</strong>: JSON-LD structured data, sitemap, semantic HTML</li>
      </ul>

      <h2>What I&apos;d do differently</h2>
      <ul>
        <li><strong>Redis for rate limiting</strong> — in-memory rate limiting doesn&apos;t work across multiple Vercel function instances. Upstash Redis would persist limits correctly.</li>
        <li><strong>Edge function for the extraction</strong> — moving the Claude call to a Supabase Edge Function would avoid Vercel&apos;s cold start and put the call closer to the database.</li>
        <li><strong>Batch analysis</strong> — currently analyses images sequentially. For multi-page designs, parallel analysis with merged output would be faster.</li>
      </ul>
    </CaseStudyLayout>
  );
}
