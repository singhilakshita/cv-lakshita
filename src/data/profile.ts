export const profile = {
  name: "Lakshita Singhi",
  title: "Product Manager",
  resumeTitle: "Product Manager",
  tagline: "I turn ambiguous problems into shipped fintech products.",
  location: "Pune, India",
  email: "lakshitasinghi03@gmail.com",
  phone: "+91 6265468429",
  github: "https://github.com/singhilakshita",
  linkedin: "https://linkedin.com/in/lakshita-singhi-760676227",
  portfolio: "https://cv-lakshita.vercel.app",
  availability:
    "Notice period: 15–30 days · Open to remote-first, hybrid in Pune / Bengaluru · PM / APM / Product Owner roles",
  // Casual blurb shown on the portfolio homepage hero
  intro:
    "Product Manager with 2+ years shipping 0-to-1 agentic AI, B2B SaaS, corporate cards, digital banking and consumer growth products. I own the whole arc — discovery, competitive research, PRDs, pricing, GTM and KPI-led delivery — and I prototype with AI before a single sprint is planned, so stakeholders see the product, not a slide.",
  // Formal summary shown on the résumé view (ATS-friendly, keyword-dense)
  summary:
    "Product Manager with 2+ years building 0-to-1 agentic AI, B2B SaaS, enterprise fintech, and platform products across corporate cards, digital banking, expense management, UPI/PPI payment infrastructure, in-app growth engines, and workforce automation. Currently at Dice.Tech, driving product discovery, competitive market research, PRDs, platform commercialization, GTM planning, pricing models, stakeholder alignment, and KPI-led delivery across enterprise banking and consumer growth products. Strong at turning ambiguous user and business problems into shipped product surfaces using AI tools, API-first thinking, analytics, and cross-functional execution.",
};

export const education = {
  school: "Institute of Engineering & Technology, DAVV — Indore",
  degree: "B.Tech, Electronics & Telecommunications Engineering",
  period: "2021 — 2025",
};

export const metrics = [
  { value: "700+", label: "SMEs analyzed (TAM)", detail: "Emirates NBD corporate cards · 1.2M users · $2.8M annual savings identified · 2024–25" },
  { value: "50K", label: "consumers launched", detail: "Club Dice growth engine · +30% engagement · +25% MAU · 2024–25" },
  { value: "85%", label: "faster visa processing", detail: "Visa-integrated enterprise travel · versus the prior manual workflow" },
  { value: "12+", label: "enterprise clients onboarded", detail: "Pine Labs & JioPay white-label GTM · 10K+ corporate cards · 2024–25" },
];

// Core competency chips — shown in the résumé header and on LinkedIn
export const competencies = [
  "Product Strategy & Roadmapping",
  "0→1 Discovery & PRDs",
  "Agentic AI Product Design",
  "Fintech & Payments (UPI · PPI · BBPS)",
  "Corporate Cards & Expense",
  "Growth Loops & Experimentation",
  "GTM & Commercialization",
  "API-First Platform Thinking",
  "Data & Analytics (SQL · Mixpanel)",
  "AI-Native Prototyping",
];

export interface ExperiencePoint {
  label?: string;
  text: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  points: ExperiencePoint[];
}

export const experience: Experience[] = [
  {
    company: "Dice.Tech (fintech · acquired by Zaggle)",
    role: "Associate Product Manager — Platform Growth & Enterprise Products",
    period: "Aug 2024 — Present",
    points: [
      {
        label: "Corporate Cards & Expense (Emirates NBD)",
        text: "Led discovery and requirements for ENBD's corporate card platform — TAM analysis across 700+ SMEs and 1.2M users surfaced a $2.8M annual savings opportunity. Designed white-label card infrastructure (enterprise onboarding, issuance, spend controls) and multi-card/BIN programs with MCC, spend-limit and geo controls, including RBAC and KYC/KYB approval flows under PCI-DSS and UAE Central Bank regulatory compliance; accelerated corporate onboarding by 50–70%.",
      },
      {
        label: "Platform Growth (Club Dice & in-app marketing)",
        text: "Launched Club Dice end-to-end to 50K consumers across 2024–25, with growth loops that drove +30% portal engagement and +25% MAU. Defined personas and A/B-tested cohort targeting for an in-app marketing engine (8%+ CTR, +22% feature adoption), and shipped an employee-benefits module via a partnership with Hamara Benefits (a zero-cost employee benefits suite) that lifted engagement 40%.",
      },
      {
        label: "Digital Banking PaaS (YES Bank)",
        text: "Owned digital-banking modules that eliminated 90% of manual reconciliation and supported a 200+ client pipeline with +13% partnership revenue. Launched YES Pay Leap as sole PM across discovery, go-live, migration, SOC compliance and client audits; shipped Accounts Payable and Utility Bill Payment via BBPS with Pennydrop verification.",
      },
      {
        label: "Enterprise Travel & AI Agents",
        text: "Architected a 0→1 visa-integrated travel platform — built via a live Atlys integration — that cut processing time by 85%, and reimagined corporate travel as an agentic workflow — co-owning the PRD for 6+ AI agents (calendar inference, policy compliance and inventory ranking) with a dual-change recalibration model, projected to reduce trip-planning time by 80%. Architected Travel-Desk (TDB) and Self-Serve-Booking (SBT) flows API-first with role-based approvals (user / approver / travel desk) across SSO, payments and real-time status.",
      },
      {
        label: "White-label Fintech GTM (Pine Labs & JioPay)",
        text: "Defined GTM and commercialization for white-labeled fintech products, onboarding 12+ enterprise clients and enabling 10K+ corporate card issuance. Led Pine Labs KYC/KYB card issuance and POS validation across PPI stacks, and JioPay UPI infrastructure with client-wise VPAs, QR flows and automated reconciliation.",
      },
      {
        label: "Product Operations",
        text: "Drove issue-to-resolution for a 9-member FDE team resolving 200+ monthly issues — cut turnaround from 7 days to 48 hours, reduced live incidents by 40%, improved system stability 50%, SLA adherence 30% and CSAT 50%, translating recurring production issues into backlog improvements.",
      },
    ],
  },
];

export interface CaseStudy {
  slug: string;
  title: string;
  metric: string;
  summary: string;
  problem: string;
  approach: string[];
  outcome: string;
  tags: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "enbd-cards",
    title: "Emirates NBD — corporate card & expense platform",
    metric: "$2.8M",
    summary:
      "0→1 discovery and requirements for a bank-grade corporate card platform, sized against a real market.",
    problem:
      "Emirates NBD needed a white-label corporate card and expense platform, but the opportunity was unquantified and the enterprise onboarding and spend-governance workflows were undefined — a classic ambiguous, high-stakes fintech brief.",
    approach: [
      "Ran TAM analysis across 700+ SMEs and 1.2M users to size the opportunity and surface a $2.8M annual savings case.",
      "Wrote the PRD for white-label card infrastructure: enterprise onboarding, card issuance and spend-control workflows.",
      "Specced multi-card and BIN-based programs with MCC, spend-limit and geo controls to meet enterprise compliance and governance.",
      "Defined RBAC and KYC/KYB approval flows to satisfy PCI-DSS and UAE Central Bank regulatory compliance.",
      "De-risked the build by shipping a functional card-orchestration CMS MVP with AI-native tools before engineering handoff.",
    ],
    outcome:
      "A validated, quantified platform with corporate onboarding accelerated 50–70% and a clear spend-governance model — engineering built from concrete specs, not guesswork.",
    tags: ["0→1 discovery", "TAM analysis", "Corporate cards", "PRD"],
  },
  {
    slug: "club-dice",
    title: "Club Dice — consumer growth engine",
    metric: "50K consumers",
    summary:
      "Launched a consumer rewards-and-benefits surface end-to-end and instrumented the growth loops behind it.",
    problem:
      "The platform had a large consumer base but weak engagement and no data-driven upsell motion — growth was happening by accident, not design.",
    approach: [
      "Designed growth loops and launched Club Dice end-to-end to 50K consumers.",
      "Defined consumer personas and A/B-tested cohort targeting for an in-app marketing engine.",
      "Built funnel-conversion and CTR dashboards so growth teams could find high-intent segments.",
      "Shipped an employee-benefits module through a partnership with Hamara Benefits — a zero-cost employee benefits suite — owning the cross-platform integration.",
    ],
    outcome:
      "+30% portal engagement, +25% MAU, 8%+ CTR, +22% feature adoption, and a further +40% engagement lift from the Hamara Benefits partnership.",
    tags: ["Growth loops", "A/B testing", "Cohort targeting", "Consumer"],
  },
  {
    slug: "yes-bank-paas",
    title: "YES Bank — digital banking PaaS (YES Pay Leap)",
    metric: "90% less manual reconciliation",
    summary:
      "Sole PM for a digital-banking stack launch under real regulatory and compliance constraints.",
    problem:
      "MSME payouts and reconciliation were heavily manual, and a new digital-banking stack had to ship under SOC compliance, client audits and a live 200+ client pipeline.",
    approach: [
      "Owned discovery, go-live, product migration, SOC compliance and client-audit coordination as sole PM.",
      "Shipped Accounts Payable and Utility Bill Payment modules with automated MSME payouts via BBPS.",
      "Integrated Pennydrop/Pennyless verification APIs into payment-automation flows.",
      "Bridged Dice and banking stakeholders across regulatory timelines and delivery dependencies.",
    ],
    outcome:
      "Eliminated 90% of manual reconciliation, supported a 200+ client pipeline and drove +13% partnership revenue.",
    tags: ["Digital banking", "BBPS", "Compliance", "Sole PM"],
  },
  {
    slug: "agentic-travel",
    title: "Enterprise travel — reimagined as AI agents",
    metric: "85% faster visas",
    summary:
      "A 0→1 visa-integrated travel platform, then a bet on agentic workflows for near-zero-input booking.",
    problem:
      "Corporate travel was slow and manual across booking, visa, reimbursement and expense — a consumer-grade experience was missing, and every step demanded human input.",
    approach: [
      "Mapped end-to-end travel journeys through stakeholder interviews to find friction across booking, visa and expense.",
      "Architected a visa-integrated platform via a live Atlys integration, with API-first Travel-Desk (TDB) and Self-Serve-Booking (SBT) flows and role-based approvals (user / approver / travel desk) across SSO, payments and real-time status.",
      "Co-owned the PRD for 6+ AI agents — spanning calendar inference, policy compliance and inventory ranking — with a dual-change recalibration model for near-zero-input booking.",
      "Built tiered and usage-based pricing models to evaluate GTM and commercialization trade-offs.",
    ],
    outcome:
      "Visa processing time cut 85%, with an agentic booking experience projected to reduce trip-planning time by 80%.",
    tags: ["Agentic AI", "API-first", "Pricing", "0→1"],
  },
  {
    slug: "white-label-gtm",
    title: "Pine Labs & JioPay — white-label fintech GTM",
    metric: "12+ enterprise clients",
    summary:
      "Commercialization and launch strategy for white-labeled fintech delivered to major partners.",
    problem:
      "White-label fintech products needed a repeatable GTM and integration model to onboard enterprise partners and issue corporate cards at scale.",
    approach: [
      "Defined GTM commercialization and launch planning across partners.",
      "Led Pine Labs KYC/KYB card issuance, POS validation and expense auto-linking across PPI stacks.",
      "Built JioPay UPI infrastructure with client-wise VPAs, QR flows and automated reconciliation.",
    ],
    outcome:
      "Onboarded 12+ enterprise clients and enabled 10K+ corporate card issuance across partner stacks.",
    tags: ["GTM", "UPI / PPI", "KYC / KYB", "Partnerships"],
  },
];

export const languages = ["SQL", "Java", "C", "C++"];

// Product-arc layout for portfolio homepage skill cards
export const skills: { group: string; items: string[] }[] = [
  {
    group: "Discovery & Research",
    items: ["User research & interviews", "Competitive market research", "TAM / market sizing", "Stakeholder mapping", "Problem framing"],
  },
  {
    group: "Specing & Prioritization",
    items: ["PRDs & specs", "RICE / MoSCoW", "OKRs & KPI definition", "Backlog management", "Acceptance criteria", "User stories"],
  },
  {
    group: "AI-Native Prototyping",
    items: ["Agentic AI product design", "Human-in-the-loop design", "Claude & ChatGPT for specs", "Lovable · Bolt · Emergent", "Figma AI"],
  },
  {
    group: "Delivery & GTM",
    items: ["GTM & launch planning", "Pricing & packaging", "Cross-functional execution", "Sprint planning · Agile", "Compliance (PCI-DSS · SOC)"],
  },
  {
    group: "Metrics & Growth",
    items: ["Growth loops & funnels", "Cohort & A/B testing", "SQL · Mixpanel · Amplitude", "Dashboards & reporting", "Retention & adoption"],
  },
];

// Granular layout for the résumé view — matches CV structure for ATS coverage
export const resumeSkills: { group: string; items: string[] }[] = [
  {
    group: "Product Management",
    items: ["Product strategy", "Product lifecycle management", "PRD writing", "Roadmapping", "Backlog prioritization", "Acceptance criteria", "Sprint planning", "Agile / Scrum", "RICE / MoSCoW", "OKRs", "Stakeholder management", "User research", "Customer interviews", "GTM planning & execution"],
  },
  {
    group: "Growth & Analytics",
    items: ["Growth loops", "Funnel analysis", "Cohort analysis", "A/B testing", "KPI definition & tracking", "Feature adoption", "Retention metrics", "Pricing & revenue analysis", "SQL", "Excel", "Mixpanel", "Amplitude", "Google Analytics"],
  },
  {
    group: "AI & Automation",
    items: ["Agentic AI product design", "LLM workflow automation", "Human-in-the-loop design", "Natural-language interfaces", "Agent evaluation", "Enterprise productivity automation", "ChatGPT", "Claude", "Lovable", "Bolt", "Emergent", "Figma AI"],
  },
  {
    group: "Fintech & Payments",
    items: ["UPI", "PPI cards", "BBPS", "KYC / KYB", "Payment gateway flows", "Corporate card programs", "BIN hosting", "MCC controls", "Digital banking PaaS", "Expense management", "Automated reconciliation"],
  },
  {
    group: "Design & Collaboration",
    items: ["Figma", "Miro", "Jira", "Confluence", "Notion", "ClickUp", "Postman", "REST APIs", "Webhook integration", "System design"],
  },
  {
    group: "Technical",
    items: ["Java", "C", "C++", "SQL", "REST APIs", "API-first product design", "Multi-tenant architecture", "Core banking integrations"],
  },
];

// ── Product builds ────────────────────────────────────────────────────────
// 0→1 product collaborations I drove alongside the engineering team — owning
// discovery, user stories, PRDs, success metrics and rollout. Rendered on the
// homepage + résumé and fed to the AI assistant.
export interface ProjectDetailSection {
  heading: string;
  body: string;
}

export interface ProjectVideo {
  src: string;
  caption: string;
}

export interface ProjectDetailData {
  overview: string;
  sections: ProjectDetailSection[];
  videos?: ProjectVideo[];
  metrics?: { value: string; label: string }[];
  techStack?: { group: string; items: string[] }[];
  extraLinks?: { label: string; url: string }[];
  diagrams?: { title: string; code: string }[];
  roles?: { name: string; power: string; color: string }[];
}

export interface ProjectTarget {
  platform: "Android" | "iOS" | "Wear OS" | "watchOS" | "Desktop" | "Web";
  deviceFrame: "phone" | "watch" | "desktop" | "browser" | "widget";
  screens: string[];
  liveUrl?: string;
  note?: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  highlights: string[];
  links: { label: string; url: string }[];
  status: string;
  badges: string[];
  detail?: ProjectDetailData;
  targets?: ProjectTarget[];
  screens?: { file: string; caption: string }[];
  theme?: {
    accent: string;
    accentDim: string;
    ink?: string;
    surface?: string;
    card?: string;
    line?: string;
    displayFont?: string;
  };
  icon?: string;
}

export const projects: Project[] = [
  {
    slug: "mileway",
    name: "Mileway",
    tagline: "0→1 expense, mileage & travel product — a consumer-grade enterprise app across five surfaces.",
    description:
      "A cross-platform expense-and-travel product I drove with the engineering team — from discovery and user stories to the reimbursement-policy model and rollout. It directly extends the corporate-card and expense work I own at Dice: same domain, taken end-to-end as a product.",
    stack: ["Cross-platform", "Offline-first", "Expense & travel", "AI assistant", "Multi-surface"],
    highlights: [
      "Ran discovery across corporate travellers, approvers and finance ops to map the booking → expense → reimbursement journey and its friction points.",
      "Authored the PRD and acceptance criteria for a reimbursement-policy engine — per-vehicle rate rules with approval-side policy-violation flags.",
      "Made offline-first a hard product requirement, so field users log trips and expenses with zero connectivity and never lose a claim.",
      "Scoped a persona-driven experience (Corporate Commuter, Gig Driver, Super-App Consumer, Minimal Guest) so one app reshapes itself per segment.",
    ],
    links: [],
    status: "5 surfaces · offline-first · persona-driven",
    badges: ["0→1 product", "Expense & travel", "Offline-first", "Multi-surface"],
    theme: {
      accent: "#8b5cf6",
      accentDim: "#7c3aed",
      ink: "#0a0812",
      surface: "#120f1e",
      card: "#1a1530",
      line: "#2c2545",
    },
    icon: "/projects/mileway/brand/mileway-icon.svg",
    targets: [
      { platform: "Android", deviceFrame: "phone", screens: ["home_screen_loaded.png", "tracking_success_screen.png", "track_detail_screen.png", "set_pin_screen.png", "hardware_events_log_screen.png"] },
      { platform: "iOS", deviceFrame: "widget", screens: ["widget_ios_home.png", "widget_ios_lockscreen.png", "live_activity.png", "live_activity_dynamic_island.png"], note: "Home-screen widget, Lock Screen widget and a Live Activity — surfacing a trip-in-progress where the user already looks." },
      { platform: "Wear OS", deviceFrame: "watch", screens: ["wear_dashboard.png", "wear_trip_list.png"] },
      { platform: "watchOS", deviceFrame: "watch", screens: ["watchos_app.png"], note: "Same product, on the wrist." },
      { platform: "Desktop", deviceFrame: "desktop", screens: ["desktop_dashboard.png"] },
    ],
    detail: {
      overview:
        "Mileway is a 0→1 expense, mileage and travel product I shaped end-to-end with the engineering team — the same domain I own at Dice (corporate cards, expense, reimbursement), taken from an ambiguous brief to a shipped, multi-surface app. My focus was the product: who the users are, what jobs they're hiring the app for, the reimbursement rules the business needs, and the offline reality of field users — not the framework it's built in.",
      sections: [
        {
          heading: "Problem & discovery",
          body: "Expense and mileage tracking is where field users, approvers and finance ops all feel pain at once: reps lose mileage in low-signal areas, approvers rubber-stamp claims they can't verify, and finance chases policy exceptions by hand. I ran discovery across all three groups, mapped the booking → expense → reimbursement journey, and turned the friction into a prioritized problem list that drove scope.",
        },
        {
          heading: "Representative user stories",
          body: "As a field sales rep, I want to log a trip even with no signal, so my mileage is never lost. As a finance approver, I want policy violations flagged automatically, so I don't manually audit every claim. As a frequent traveller, I want a trip-in-progress on my watch and lock screen, so I don't open the app to check status. As an admin, I want one account to behave differently per persona, so I don't ship four apps.",
        },
        {
          heading: "Key product decisions",
          body: "Offline-first was non-negotiable — a claim must survive zero connectivity and a mid-submit crash, so I specced a durable submit journal as an acceptance criterion, not a stretch goal. Reimbursement had to be rule-driven (per-vehicle rates, auto-flagged violations) so approvals scale. And rather than four apps, one persona-driven experience (Corporate Commuter, Gig Driver, Super-App Consumer, Minimal Guest) reshapes hubs and flows per segment.",
        },
        {
          heading: "Success metrics",
          body: "I defined success as: zero lost claims (durability), reduced approver time-per-claim (auto-flagged violations), and trip-status glanceability (watch + widget + Live Activity adoption). Each surface earned its place against one of those metrics rather than being added for novelty.",
        },
        {
          heading: "Scope & rollout",
          body: "The product ships across mobile, watch and desktop surfaces from one shared data model, with home-screen widgets and an iOS Live Activity for in-progress trips. An offline, retrieval-grounded assistant lets users ask about their own trips and expenses — assist, not autopilot — keeping a human in the loop on anything that touches money.",
        },
      ],
      metrics: [
        { value: "5", label: "user surfaces, one model" },
        { value: "4", label: "persona presets" },
        { value: "0", label: "connectivity required" },
        { value: "1", label: "durable claim journal" },
      ],
      techStack: [
        { group: "Product surfaces", items: ["Mobile phones", "Wearables", "Desktop", "Widgets + iOS Live Activity"] },
        { group: "Domain logic I specced", items: ["Reimbursement-rate policy engine", "Approval-side policy-violation flags", "Durable submit-outbox (no lost / duplicate claims)"] },
        { group: "AI & assist", items: ["Offline retrieval-grounded assistant", "Voice input / output", "Local usage analytics"] },
      ],
    },
    screens: [
      { file: "super_profile_personas.gif", caption: "Persona presets reshape the app" },
      { file: "track_a_trip.gif", caption: "Track a trip — live flow" },
      { file: "delegation_manager.gif", caption: "Delegation — acting as a manager" },
      { file: "log_and_expense.gif", caption: "Log & expense — live flow" },
      { file: "approvals_payables.gif", caption: "Approvals & payables — policy flags" },
      { file: "ai_assistant.gif", caption: "Offline AI assistant" },
      { file: "home_screen_loaded.png", caption: "Home dashboard" },
      { file: "tracking_success_screen.png", caption: "Trip logged + reimbursement" },
      { file: "track_detail_screen.png", caption: "Trip detail — route stats" },
      { file: "approvals_screen_pending_tab.png", caption: "Approvals — policy badges" },
      { file: "spends_home_screen.png", caption: "Spends home" },
      { file: "travel_home_screen.png", caption: "Travel hub" },
      { file: "create_trip_screen.png", caption: "Create trip request" },
      { file: "payables_home_screen.png", caption: "Payables hub" },
      { file: "cards_home_screen.png", caption: "Cards home" },
      { file: "wear_dashboard.png", caption: "Watch — dashboard" },
      { file: "watchos_app.png", caption: "watchOS app" },
      { file: "widget_ios_home.png", caption: "iOS home-screen widget" },
      { file: "live_activity_dynamic_island.png", caption: "Dynamic Island — tracking" },
      { file: "desktop_dashboard.png", caption: "Desktop window" },
    ],
  },
  {
    slug: "paymentslab",
    name: "PaymentsLab",
    tagline: "A payments product exploration — every gateway and money-movement rail behind one checkout.",
    description:
      "A payments product I shaped with the engineering lead, mapping the full money-movement surface — pay-in, payouts, mandates, card vault, marketplace split and wallet — the same rails I work with across UPI, PPI and corporate cards at Dice. My job: define the coverage strategy, the trust model, and what 'settled' actually means to a user.",
    stack: ["Payments", "UPI", "Multi-gateway", "Multi-rail", "Trust model"],
    highlights: [
      "Framed the product bet: one checkout contract over 66 gateways, so adding a provider is a config decision, not a rebuild.",
      "Set the trust requirement — a client 'success' is only a hint; the server decides truth after verification and webhook reconciliation.",
      "Made recoverability a product requirement: an in-flight payment must survive a process kill and reconcile on next launch.",
      "Specced five money-movement rails beyond one-shot pay-in (payouts, mandates, card vault, marketplace Connect, wallet ledger).",
    ],
    links: [],
    status: "66 gateways · 5 money rails · one checkout",
    badges: ["Payments product", "UPI & cards", "Trust model", "Multi-rail"],
    theme: {
      accent: "#a78bfa",
      accentDim: "#7c3aed",
      ink: "#120a1f",
      surface: "#1b1130",
      card: "#241844",
      line: "#3f2b66",
    },
    icon: "/projects/paymentslab/brand/paymentslab-icon.svg",
    targets: [
      { platform: "Android", deviceFrame: "phone", screens: ["home_screen_dashboard.png", "lab_home_screen_catalog.png", "provider_lab_screen_running.png", "checkout_screen_order_summary.png", "history_screen_with_filters.png"] },
      { platform: "iOS", deviceFrame: "phone", screens: ["ios_catalog.png", "ios_catalog_stripe.png", "ios_catalog_all_native.png"], note: "Native gateway SDKs behind the same checkout contract." },
    ],
    detail: {
      overview:
        "Payments is the hardest surface in fintech: every gateway is different, the client can lie about the outcome, and the logic that matters (verification, webhooks, idempotency, recovery) lives on the server. PaymentsLab makes that surface legible — a 66-gateway catalog and five money-movement rails behind one checkout, with each transaction visualized step by step. I shaped the product decisions: coverage strategy, the trust model, and what a user is actually told at each step.",
      sections: [
        {
          heading: "Problem & discovery",
          body: "Integrating payments the naive way means the app trusts whatever the gateway SDK says and re-writes itself for every new provider. That's slow to expand and unsafe to trust. The product question I framed: how do we cover many gateways cheaply, and how do we only ever tell a user 'paid' when it's genuinely settled?",
        },
        {
          heading: "Representative user stories",
          body: "As a merchant, I want to switch or add a payment provider without an app rebuild, so I can chase better rates. As a customer, I want 'success' to mean the money truly moved, so I'm never told paid when it wasn't. As a finance/ops user, I want a marketplace split and payouts, so money can move in and out, not just in. As support, I want a redacted, replayable record of a payment, so I can debug without leaking card data.",
        },
        {
          heading: "Key product decisions",
          body: "One checkout contract over all gateways — adding a provider is configuration, not code, so coverage scales. Server-as-source-of-truth — the client callback is a hint; only server-side verification + webhook reconciliation flips a payment to settled. Recoverability as a requirement — an in-flight payment is journaled before the SDK opens, so a crash mid-payment always reconciles. Redaction by default — no secret or PII ever renders or logs.",
        },
        {
          heading: "Success metrics",
          body: "Coverage (gateways addable without touching existing code), trust (share of 'settled' states that are server-verified, targeted at 100%), and recoverability (in-flight payments that reconcile after a process kill). These are product guarantees a real payments surface is judged on — so they're the metrics.",
        },
        {
          heading: "Coverage & rollout",
          body: "The catalog spans 66 gateways — native SDKs (Razorpay, Cashfree, Stripe, Square, Omise), a UPI intent flow, and generic archetypes covering hosted-webview and mobile-money classes — plus five rails: pay-in, payouts, mandates/subscriptions, a card vault, marketplace Connect and a double-entry wallet ledger. Every provider degrades honestly to a mock mode until real sandbox keys are set.",
        },
      ],
      metrics: [
        { value: "66", label: "gateways mapped" },
        { value: "5", label: "money-movement rails" },
        { value: "1", label: "checkout contract" },
        { value: "100%", label: "settled = server-verified" },
      ],
      techStack: [
        { group: "Coverage strategy", items: ["One checkout contract", "66-gateway catalog", "Native SDK + hosted-webview + mobile-money archetypes", "UPI intent flow"] },
        { group: "Trust model", items: ["Server as source of truth", "Signature verification + webhook reconciliation", "Process-death journal & recovery", "Redaction by default"] },
        { group: "Money rails", items: ["Pay-in", "Payouts", "Mandates / subscriptions", "Card vault", "Marketplace Connect + wallet ledger"] },
      ],
    },
    screens: [
      { file: "activity_flow.gif", caption: "Live activity flow" },
      { file: "checkout_flow.gif", caption: "Checkout flow" },
      { file: "explore_verify_flow.gif", caption: "Explore & verify flow" },
      { file: "home_screen_dashboard.png", caption: "Home dashboard — live stats" },
      { file: "lab_home_screen_catalog.png", caption: "Provider catalog" },
      { file: "provider_lab_screen_running.png", caption: "Live payment timeline" },
      { file: "provider_lab_screen_settled_success.png", caption: "Settled — verified success" },
      { file: "payment_flow_diagram_verified.png", caption: "Server-verified flow" },
      { file: "payment_flow_diagram_unverified.png", caption: "Unverified — client hint only" },
      { file: "checkout_screen_order_summary.png", caption: "Checkout — order summary" },
      { file: "checkout_screen_settled_success.png", caption: "Checkout — settled" },
      { file: "history_screen_with_filters.png", caption: "Payment history + filters" },
      { file: "gateway_brand_badges.png", caption: "Gateway coverage" },
      { file: "redaction_reveal.png", caption: "Redacted payload" },
      { file: "ios_catalog.png", caption: "iOS — provider catalog" },
      { file: "ios_catalog_stripe.png", caption: "iOS — native SDK" },
    ],
  },
  {
    slug: "kursi",
    name: "Kursi",
    tagline: "A consumer social game — product design for onboarding, engagement and retention.",
    description:
      "A consumer product where I owned the player journey: the onboarding funnel, progressive-disclosure UX, retention loops and accessibility. It's deliberate range — proof I carry consumer growth thinking, not just enterprise fintech.",
    stack: ["Consumer", "Cross-platform", "Onboarding", "Retention", "Accessibility"],
    highlights: [
      "Designed a tutorial-first onboarding funnel that teaches one mechanic at a time, so a first-timer isn't handed an expert dashboard.",
      "Specced progressive disclosure — Focus → Guided → Analyst density layers players graduate through as they learn.",
      "Built retention surfaces: a career/rank ladder, daily challenges and a story campaign to give players a reason to return.",
      "Made accessibility a requirement: colourblind-safe palette, per-role patterns and a reduced-motion mode with static end-frames.",
    ],
    links: [],
    status: "4 platforms · onboarding-first · accessible",
    badges: ["Consumer product", "Onboarding & retention", "Accessibility", "UX"],
    theme: {
      accent: "#e8c874",
      accentDim: "#c99a3b",
      ink: "#1e1008",
      surface: "#291a12",
      card: "#33241c",
      line: "#4a3724",
      displayFont: "'Rozha One', Georgia, serif",
    },
    icon: "/projects/kursi/brand/kursi-icon.svg",
    targets: [
      { platform: "Android", deviceFrame: "phone", screens: ["home_phone.png", "4p_focus_phone.png", "setup_phone.png", "darbar_table_phone.png", "gazette_roles_phone.png", "results_phone.png"] },
      { platform: "iOS", deviceFrame: "phone", screens: ["4p_coach_action_phone.png", "tutorial_coup_phone.png", "career_phone.png", "settings_phone.png"] },
      { platform: "Desktop", deviceFrame: "desktop", screens: ["review_replay.png", "home_ranked.png"] },
      { platform: "Web", deviceFrame: "browser", screens: ["home.png"], liveUrl: "/kursi-app/index.html", note: "Playable right here in the browser." },
    ],
    detail: {
      overview:
        "Kursi is a consumer social-deduction game — and my chance to own a consumer product journey rather than an enterprise workflow. The engineering is a deterministic multiplatform engine; my contribution was the product layer: how a stranger learns the game, why they come back, and whether everyone can actually play it. It sits on the site to show range beyond fintech.",
      sections: [
        {
          heading: "Problem & discovery",
          body: "Social-deduction games are notoriously hard to onboard: the rules are dense, the first game is intimidating, and drop-off is brutal. The product problem wasn't 'build the game' — it was 'get a first-timer from install to a won bluff without quitting', then give them a reason to return.",
        },
        {
          heading: "Representative user stories",
          body: "As a first-time player, I want to learn one mechanic at a time, so I'm not overwhelmed. As a returning player, I want a ladder and daily challenge, so I have a reason to come back. As a colourblind player, I want roles distinguishable without colour, so I can play at all. As a casual player, I want a reduced-motion mode, so the game doesn't make me queasy.",
        },
        {
          heading: "Key product decisions",
          body: "Progressive disclosure over a manual: three density layers (Focus → Guided → Analyst) reveal complexity only as players earn it, paired with a tutorial you can't leave until you catch a bluff. Retention is designed, not hoped for — a rank ladder, daily challenge and story campaign. Accessibility is a launch requirement, not a patch: colourblind-safe palette plus per-role engraved patterns, and a reduced-motion path with bespoke static frames.",
        },
        {
          heading: "Success metrics",
          body: "Tutorial completion → first-game conversion, day-2 / day-7 return via the ladder and daily challenge, and accessibility coverage (every role readable without colour, every animated beat with a static equivalent). The AI opponent exists so a solo player always has a game — assist, never a wall.",
        },
        {
          heading: "Range & rollout",
          body: "It ships on mobile, desktop and web (playable in the browser), with ten AI opponent personas so there's always a match. The point on this portfolio isn't the game — it's that I can carry a consumer product from onboarding to retention with the same rigor I bring to enterprise fintech.",
        },
      ],
      metrics: [
        { value: "3", label: "UX density layers" },
        { value: "10", label: "AI opponent personas" },
        { value: "4", label: "platforms" },
        { value: "1", label: "tutorial-first funnel" },
      ],
      techStack: [
        { group: "Onboarding", items: ["Tutorial-first funnel", "Progressive disclosure (Focus → Guided → Analyst)", "One-mechanic-at-a-time teaching"] },
        { group: "Retention", items: ["Rank / career ladder", "Daily challenge", "Story campaign", "10 AI opponent personas"] },
        { group: "Accessibility", items: ["Colourblind-safe palette", "Per-role patterns (no colour reliance)", "Reduced-motion static frames"] },
      ],
    },
    screens: [
      { file: "onboarding.gif", caption: "Onboarding — live flow" },
      { file: "modes.gif", caption: "Game modes" },
      { file: "turn.gif", caption: "A turn — claim, block, challenge" },
      { file: "coach.gif", caption: "AI coach — assist" },
      { file: "home.png", caption: "Home — mode grid" },
      { file: "home_ranked.png", caption: "Ranked & daily challenge" },
      { file: "tutorial_intro.png", caption: "Interactive tutorial" },
      { file: "4p_coach_action.png", caption: "AI coach — suggested action" },
      { file: "results.png", caption: "Match results" },
      { file: "career.png", caption: "Career / retention loop" },
      { file: "leaderboard.png", caption: "Leaderboard" },
      { file: "reduced_motion_frames.png", caption: "Reduced-motion static frames" },
    ],
  },
  {
    slug: "card-cms",
    name: "Card Orchestration CMS",
    tagline: "0→1 card-issuance control plane for Emirates NBD, built AI-native to de-risk requirements.",
    description:
      "A working card-orchestration CMS MVP I built with AI-native tools — card issuance, BIN configuration, corporate card programs, MCC controls, spend limits and operator workflows — to turn a vague enterprise brief into concrete specs before engineering ever picked it up.",
    stack: ["Emergent", "Lovable", "Figma AI", "Corporate cards"],
    highlights: [
      "Built an end-to-end functional MVP covering issuance, BIN config, spend limits and operator workflows.",
      "Designed consumer-facing and ops-facing UX in Figma AI and validated program-configuration flows with stakeholders.",
      "Cut requirement ambiguity and accelerated sprint planning by converting workflows into a clickable, demoable product.",
    ],
    links: [],
    status: "MVP · stakeholder-validated",
    badges: ["0→1", "Corporate cards", "AI-native prototyping"],
  },
  {
    slug: "shipfinix-marketplace",
    name: "ShipFinix — Verified Marketplace Operations",
    tagline: "0→1 internal operations & trust layer for a high-value asset marketplace.",
    description:
      "A product I scoped end-to-end — the admin/operations backbone for a high-value asset marketplace (maritime & certified premium goods): seller onboarding, listing verification, transaction handling, payouts and disputes, with RBAC and maker-checker approvals. I authored the full PRD and built a working prototype.",
    stack: ["Marketplace ops", "RBAC & maker-checker", "Risk scoring", "PRD", "AI-native prototype"],
    highlights: [
      "Authored a ~18-section PRD: lifecycle state machines, a 0–100 weighted risk-scoring engine, SLA/notification matrices, edge cases and a phased MVP→Phase-3 plan.",
      "Designed maker-checker approval matrices and role-based access across five operational lifecycle stages.",
      "Built a functional prototype to validate operator workflows before engineering handoff.",
    ],
    links: [
      { label: "Live prototype", url: "https://marketplaceoperation.lovable.app" },
      { label: "PRD (GitHub)", url: "https://github.com/singhilakshita/verified-marketplace-prd" },
    ],
    status: "PRD + working prototype",
    badges: ["0→1", "Marketplace", "PRD", "Ops & trust"],
  },
];

// ── AI-native product toolkit ─────────────────────────────────────────────
// The tools I use to turn ambiguous briefs into demoable products before a
// sprint is planned. Rendered on the homepage and fed to the AI assistant.
export interface SharedLib {
  name: string;
  url: string;
  role: string;
  usedBy: string[];
}

export const sharedFoundation: {
  blurb: string;
  libs: SharedLib[];
} = {
  blurb:
    "My products aren't slide decks. I prototype and pressure-test them with AI-native tools before a single sprint is planned, so stakeholders react to a working surface instead of a wireframe — and engineering starts from concrete specs, not a guess. This is the same toolkit I used to ship the Emirates NBD card-orchestration CMS MVP.",
  libs: [
    { name: "Claude & ChatGPT", url: "https://claude.ai", role: "PRD drafting, edge-case pressure-testing, user stories, spec reviews and product critique.", usedBy: ["PRDs", "Specs", "Strategy"] },
    { name: "Lovable & Bolt", url: "https://lovable.dev", role: "Functional product builds and clickable MVPs from a written spec — stakeholder demos in hours, not sprints.", usedBy: ["MVPs", "Demos"] },
    { name: "Emergent", url: "https://app.emergent.sh", role: "End-to-end functional prototypes — used to build the ENBD card-orchestration CMS MVP.", usedBy: ["Card CMS"] },
    { name: "Figma AI", url: "https://www.figma.com", role: "UX flows, journey maps and hi-fi prototypes validated with stakeholders before engineering handoff.", usedBy: ["UX", "Handoff"] },
  ],
};

export interface GrowthItem {
  date: string;
  title: string;
  detail: string;
}

// Recent shipping timeline — "what I've shipped lately".
export const recentGrowth: GrowthItem[] = [
  { date: "2025", title: "Card Orchestration CMS MVP", detail: "Shipped an end-to-end card-issuance CMS MVP (BIN config, spend limits, operator workflows) with Emergent, Lovable & Figma AI for Emirates NBD — de-risking requirements before engineering." },
  { date: "2025", title: "AI-agentic corporate travel", detail: "Co-owned the PRD for 6+ AI agents with a dual-change recalibration model; projected 80% cut in corporate trip-planning time." },
  { date: "2024–25", title: "Club Dice — 50K consumers", detail: "Launched the Club Dice growth engine end-to-end: +30% engagement, +25% MAU, 8%+ CTR and +22% feature adoption." },
  { date: "2024", title: "YES Pay Leap go-live", detail: "Sole PM across discovery, SOC compliance, client audits and migration; eliminated 90% of manual reconciliation." },
];
