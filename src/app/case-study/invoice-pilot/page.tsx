import { CaseStudyLayout } from "@/components/case-study-layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invoice Pilot Case Study — Tom Chamberlin",
  description: "How I built a freemium invoicing tool with live PDF preview, Stripe billing, and a no-signup-required first experience.",
};

export default function InvoicePilotCaseStudy() {
  return (
    <CaseStudyLayout
      meta={{
        title: "Building a freemium invoicing tool with zero-friction onboarding",
        project: "Invoice Pilot",
        role: "Solo developer — architecture, frontend, backend, payments",
        timeline: "2 days",
        stack: [
          "Next.js 15",
          "TypeScript",
          "Supabase",
          "Stripe",
          "Tailwind CSS",
          "Server-side PDF generation",
        ],
        liveUrl: "https://invoicepilot.swiftlabs.dev",
        githubUrl: "https://github.com/hroarr28/swiftlabs-invoicepilot",
      }}
    >
      <h2>The problem</h2>
      <p>
        Freelancers and sole traders need to send invoices, but existing tools either cost too much for someone billing a handful of clients, require account creation before you can do anything, or bundle invoicing inside bloated accounting software you don&apos;t need.
      </p>
      <p>
        I wanted to build something where a freelancer could land on the page, fill in their details, and download a professional PDF invoice in under 60 seconds — no signup, no credit card, no friction.
      </p>

      <h2>Architecture decisions that shaped everything</h2>

      <h3>Zero-signup first experience</h3>
      <p>
        The biggest product decision was letting users create their first invoice without any authentication. The <code>/create</code> page is fully functional with no auth gate — you fill in your details, add line items, and download a PDF immediately.
      </p>
      <p>
        Authentication only becomes necessary when you want to <em>save</em> invoices, set up recurring billing, or customise branding. This meant the create page had to work entirely client-side for anonymous users while also integrating with Supabase for authenticated ones.
      </p>

      <h3>Live preview with split-pane layout</h3>
      <p>
        The create page uses a two-column layout: form on the left, live invoice preview on the right. Every field update re-renders the preview instantly using React state — no debouncing, no API calls. This gives users immediate confidence that their invoice looks professional.
      </p>
      <p>
        On mobile, the preview collapses below the form. I considered a toggle between form/preview modes but decided the scroll was more intuitive — users fill in fields and naturally scroll down to see the result.
      </p>

      <h3>Server-side PDF generation via print</h3>
      <p>
        Rather than pulling in a heavy PDF library like Puppeteer or jsPDF, I took a lighter approach: the <code>/api/pdf</code> route receives the invoice data, renders it as a styled HTML document, and returns it. The client opens this in a new window and triggers <code>window.print()</code>, which gives users a native print-to-PDF experience.
      </p>
      <p>
        This approach has tradeoffs. The output depends on the browser&apos;s print engine, so there&apos;s slight variation between Chrome and Safari. But it eliminated a heavy dependency, works on every platform, and the print dialog gives users control over paper size and margins.
      </p>

      <h3>Stripe subscription with row-level security</h3>
      <p>
        The freemium model uses Stripe for Pro subscriptions (£8/month). Webhook events update a <code>subscription_status</code> column on the profiles table. Supabase row-level security policies then gate Pro features at the database level — even if someone bypasses the UI, they can&apos;t access Pro data without an active subscription.
      </p>
      <p>
        The <code>getSubscriptionStatus()</code> helper runs server-side in the dashboard, so subscription checks never hit the client and can&apos;t be spoofed.
      </p>

      <h2>Key challenges</h2>

      <h3>Currency and tax flexibility</h3>
      <p>
        Supporting GBP, USD, and EUR with configurable tax rates meant every calculation had to be currency-aware. I used a simple symbol map rather than <code>Intl.NumberFormat</code> for the preview to avoid hydration mismatches between server and client rendering.
      </p>

      <h3>Invoice numbering</h3>
      <p>
        For anonymous users, invoice numbers are generated client-side with <code>INV-{'{'}random 4 digits{'}'}</code>. For authenticated users in a future iteration, these would be sequential per-account. The random approach was a conscious shortcut — it works for the MVP and avoids needing a database counter for users who haven&apos;t signed up.
      </p>

      <h2>How AI was used</h2>
      <ul>
        <li><strong>Claude (via OpenClaw agents)</strong> — the entire application was scaffolded and built by my autonomous SwiftLabs pipeline. The Builder agent generated the codebase, the Designer agent created the UI, and the deployment was fully automated through GitHub → Vercel → Stripe → DNS.</li>
        <li><strong>Architecture decisions</strong> — I defined the product spec and revenue model; the agents handled implementation details like the print-based PDF approach and the Supabase auth flow.</li>
        <li><strong>Code review</strong> — automated nightly review via local Ollama catches issues before they reach production.</li>
      </ul>

      <h2>Results</h2>
      <ul>
        <li><strong>60-second time to first invoice</strong> — no signup required</li>
        <li><strong>Live preview</strong> with instant feedback on every field change</li>
        <li><strong>Stripe billing</strong> with server-side subscription enforcement</li>
        <li><strong>2-day build time</strong> from spec to production deployment</li>
        <li><strong>Mobile responsive</strong> — full functionality on phone screens</li>
      </ul>

      <h2>What I&apos;d do differently</h2>
      <ul>
        <li><strong>Proper PDF library</strong> — the print-to-PDF approach works but feels hacky. For v2, I&apos;d use <code>@react-pdf/renderer</code> to generate consistent PDFs server-side with exact control over layout.</li>
        <li><strong>Invoice persistence for anonymous users</strong> — currently, if you close the tab, your invoice is gone. LocalStorage or a temporary session would let users come back to unfinished invoices.</li>
        <li><strong>Email delivery</strong> — sending invoices directly from the app (via Resend or similar) would complete the workflow without requiring users to download and manually email PDFs.</li>
        <li><strong>Sequential invoice numbers</strong> — the random numbering works for one-off invoices but isn&apos;t suitable for businesses that need audit-friendly sequential numbering.</li>
      </ul>
    </CaseStudyLayout>
  );
}
