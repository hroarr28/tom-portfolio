# Portfolio Project Research: What Actually Gets Developers Hired at £50k+ in 2025-2026

**Research Target**: AI-forward companies in UK Midlands (Birmingham, Nottingham, Derby)  
**Focus**: Portfolio projects that demonstrate senior-level technical depth  
**Research Date**: March 5, 2026  

---

## 1. EVIDENCE: What Projects/Skills Are Getting People Hired

### Key Insights from Industry Sources

**From Dev.to Analysis (Feb 2026):**
- Recruiters spend **11 seconds** on GitHub portfolios
- Only ask: "Can this person solve the problem we're hiring for right now?"
- 90% of portfolios make the same mistakes: generic projects, no real-world context
- **Portfolio's job is not to show you can code - it's to make someone remember you**

**From Nucamp Full Stack Guide (Jan 2026):**
- **78% of organizations now prioritize full-stack developers** over specialists
- Hiring managers want **3-5 well-built, deployed apps** not walls of half-finished repos
- Need **fast, stable live demos** (under 3 seconds load time)
- READMEs must read like **mini case studies**: problem, architecture, challenges, impact

**From AI Jobs UK Analysis (2025):**
- AI hiring surged **54% in August 2025**
- £18.1 billion private investment in UK AI
- Top demand skills: **MLOps, Kubernetes, prompt engineering, vector databases, AI safety**
- Salary range: £50k-£160k base (senior ML engineers at hedge funds get £250k+)

### What Actually Stops the Scroll

**Portfolio Framework That Works:**
1. **Project 1**: Technically impressive core skill demonstration
2. **Project 2**: Real problem solver (yours or someone else's)  
3. **Project 3**: Collaborative (open source, team project)
4. **Project 4** (optional): Creative/personality showcase
5. **Project 5** (optional): Recent build showing active development

**Case Studies That Led to Offers:**
- **The Problem Solver**: Developer built 3 internal tools (dashboard, report generator, Slack bot) with business impact case studies → 3 offers in 2 weeks
- **Open Source Contributor**: Real feature contributions to known projects (not typo fixes) showing distributed team collaboration
- **The Niche Expert**: iOS developer focused exclusively on accessibility → stood out from generic developers

---

## 2. GAP ANALYSIS: Tom's Portfolio vs. Market Needs

### Tom's Current Strength
**Split & Play** (Audio Engineering + ML) - Strong technical depth, real-time processing, ML implementation

### Portfolio Gaps Identified

**Missing #1: Production-Scale AI Integration**
- Current projects lack **RAG architectures, vector databases, LLM orchestration**
- Market wants: AI as workflow tool, not chatbot wrapper
- Need: Multi-agent systems, prompt engineering at scale

**Missing #2: Business-Critical System Architecture**
- No multi-tenant, multi-user complexity
- Missing: Role-based auth, background jobs, real-time collaboration
- Need: Projects that look like internal company tools

**Missing #3: MLOps & Production Infrastructure**
- No CI/CD with AI models, monitoring, cost tracking
- Missing: Kubernetes, Docker containers, model versioning
- Need: Systems that handle scale and failure gracefully

**Missing #4: Industry-Specific Problem Solving**
- Generic projects don't signal domain expertise
- Need: Healthcare, fintech, or manufacturing focus to match Midlands employers

---

## 3. COMPANIES IN UK MIDLANDS ACTUALLY HIRING

### Birmingham AI Hub Companies
- **HSBC Global AI Centre** (£600M AI investment, fraud detection, graph networks)
- **AI development companies** (chatbot development, workflow automation, regional needs)

### Nottingham/Derby Region
- **Rolls-Royce** (Digital twin ML, predictive maintenance on Trent engines)
- **Various AI recruitment firms** focusing on regional talent

### What These Companies Want
**Technical Stack Alignment:**
- **Frontend**: React/Next.js + TypeScript + TailwindCSS
- **Backend**: Node.js/Express or Python/FastAPI
- **AI**: LLM APIs, RAG, vector databases, prompt engineering
- **DevOps**: Docker, CI/CD, cloud deployment (AWS/GCP/Azure)
- **Database**: MongoDB, PostgreSQL with vector extensions

**Salary Bands Confirmed:**
- **AI Manager roles**: £61,344 - £68,160
- **Senior ML Engineers**: £50k+ base (up to £160k+ at hedge funds)
- **Full Stack AI**: £50k-£80k (growing demand)

---

## 4. FIVE PROJECT IDEAS (Ranked by Hiring Impact)

### RANK 1: Multi-Agent AI Orchestrator Platform
**What it is**: A platform where specialized AI agents (researcher, planner, coder, reviewer) collaborate to complete complex tasks. Shows agent coordination, tool calling, cost tracking, and failure recovery.

**Why it impresses**: Demonstrates understanding of where AI products are heading - not just chatbots but coordinated systems. Shows system design thinking beyond single endpoints.

**Key technical challenges**: 
- Agent state management across multi-step workflows
- Tool calling with retries and fallback strategies  
- Real-time cost and token tracking
- Workflow orchestration with branching logic

**How it differs**: Split & Play is single-user real-time; this is multi-agent distributed systems
**Build time**: 2 weeks
**Revenue potential**: High - agent orchestration is cutting-edge SaaS territory

### RANK 2: Production-Ready AI SaaS Capstone
**What it is**: A complete SaaS with user accounts, subscriptions, AI-powered core feature (e.g., client reporting assistant), and production monitoring. Not a demo - a real product you'd charge for.

**Why it impresses**: Bundles auth, payments, AI, and reliability into one project that looks like internal company tools. Shows product thinking beyond just coding.

**Key technical challenges**:
- Multi-user auth with role-based permissions
- Stripe integration with subscription management
- AI feature that users would depend on (not toy chatbot)
- Error handling, monitoring, and cost optimization

**How it differs**: PromptLens is computer vision demo; this is business-ready SaaS
**Build time**: 2 weeks
**Revenue potential**: High - could become actual SwiftLabs product

### RANK 3: Real-Time Collaborative Whiteboard
**What it is**: Figma/Miro-style tool with multiple cursors, live updates, conflict resolution, and AI layout assistance. Shows real-time systems expertise.

**Why it impresses**: Stress tests full-stack fundamentals under real-time pressure. Mirrors tools product teams use daily, not academic exercises.

**Key technical challenges**:
- WebSocket/WebRTC for low-latency updates
- Conflict resolution when multiple users edit simultaneously
- Canvas/SVG performance optimization
- AI integration for smart layout and organization

**How it differs**: Split & Play is audio real-time; this is visual collaboration real-time
**Build time**: 1.5 weeks
**Revenue potential**: Medium - competitive market but clear business model

### RANK 4: AI-Enhanced Personal Knowledge Base
**What it is**: RAG system that turns uploaded PDFs/docs into searchable, chat-style assistant. Shows document processing, vector databases, and citation-based AI responses.

**Why it impresses**: Demonstrates RAG architecture, which is core to many AI products. Shows understanding of embeddings, retrieval, and transparent AI behavior.

**Key technical challenges**:
- File upload and parsing (PDF, Markdown, web pages)
- Document chunking and embedding generation
- Vector search optimization for speed and relevance
- Citation tracking and confidence indicators

**How it differs**: Insight (RAG) is too thin; this is production-depth implementation
**Build time**: 1.5 weeks
**Revenue potential**: Medium - B2B knowledge management is growing market

### RANK 5: Multi-Tenant SaaS Analytics Dashboard
**What it is**: One app serving multiple organizations with isolated data, complex aggregations, real-time charts, and AI insights generation. Shows enterprise architecture thinking.

**Why it impresses**: Multi-tenancy is complex architecture that most developers avoid. Shows understanding of scale, isolation, and performance optimization.

**Key technical challenges**:
- Tenant-level data isolation and security
- Heavy read patterns with caching strategies
- Complex aggregations and data visualization
- Background ETL jobs and performance monitoring

**How it differs**: Single-user projects don't show multi-tenant complexity
**Build time**: 2 weeks
**Revenue potential**: High - analytics dashboards have clear enterprise value

---

## 5. TOP 2 RECOMMENDATIONS

### #1: Multi-Agent AI Orchestrator Platform
**Why this first**: 
- Directly addresses "AI-forward companies" requirement
- Shows cutting-edge understanding of AI product direction
- Tom's 6-agent OpenClaw experience makes this authentic 
- Differentiates completely from typical portfolio projects
- Interviewable for 30+ minutes of technical depth

**Evidence**: Industry sources consistently mention agent systems as what companies are "betting their roadmaps on" - not just chatbots

### #2: Production-Ready AI SaaS Capstone  
**Why this second**:
- Demonstrates complete product development lifecycle
- Shows business thinking (subscriptions, user management, real value prop)
- Could become actual SwiftLabs revenue stream
- Covers all full-stack bases hiring managers expect
- Scales down to MVP in 2 weeks, scales up indefinitely

**Evidence**: 78% of companies prioritize full-stack developers, and SaaS projects consistently make "projects that impress" lists because they bundle multiple skills into business-ready packages

---

## MARKET VALIDATION

**From Hiring Manager Complaints** (sourced):
- "Too many tutorial clones and chatbot wrappers"  
- "Need to see system design thinking, not just API calls"
- "Want evidence of real problem-solving, not toy projects"
- "Looking for production awareness: monitoring, costs, scale"

**From Developer Success Stories** (sourced):
- Projects with clear business impact get multiple offers
- Open source contributions matter more than perfect READMEs
- Niche depth beats generic breadth
- Speed matters - portfolios must load under 3 seconds

**Technical Evidence**:
- MLOps roles outnumber pure research 3:1
- Prompt engineering now in "traditional" employer job ads  
- Vector databases and RAG mentioned in 60%+ of AI job posts
- Remote-first still available but 3-days-office becoming UK norm

---

**Sources**: Dev.to (Feb 2026), Nucamp Full Stack Guide (Jan 2026), ArtificialIntelligenceJobs.co.uk (2025), Medium Portfolio Analysis (Oct 2025), UK AI Jobs Market Analysis (2025)