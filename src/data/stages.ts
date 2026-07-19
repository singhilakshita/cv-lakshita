export interface PipelineStage {
  name: string;
  mode: "sketch" | "draft" | "proto" | "shipped";
  title: string;
  body?: string;
  bullets?: string[];
  metric?: { value: string; label: string; caption: string };
}

export const heroStages: PipelineStage[] = [
  {
    mode: "sketch",
    name: "Ambiguous brief",
    title: '"We need corporate cards for SMEs"',
    body: 'A bank says: "Our corporate clients want better spend control." No requirements, no scope, no numbers.',
  },
  {
    mode: "draft",
    name: "Discovery & research",
    title: "Market & user research",
    bullets: [
      "TAM across 700+ SMEs / 1.2M users",
      "Competitor & workflow teardown",
      "Stakeholder + user interviews",
    ],
  },
  {
    mode: "proto",
    name: "PRD (AI-drafted)",
    title: "Requirements, AI-drafted",
    bullets: [
      "Scope, flows & acceptance criteria",
      "Edge cases pressure-tested with AI",
      "RICE-prioritized backlog",
    ],
  },
  {
    mode: "proto",
    name: "Prototype (AI-native)",
    title: "Working MVP, not a slide",
    bullets: [
      "Functional card-orchestration CMS",
      "Issuance · BIN config · spend controls",
      "Stakeholder-validated before build",
    ],
  },
  {
    mode: "shipped",
    name: "Shipped",
    title: "Corporate card platform",
    metric: {
      value: "10K+",
      label: "cards issued",
      caption: "12+ enterprise clients · $2.8M savings identified · 2024–25",
    },
  },
];

export const caseStudyPipeline: PipelineStage[] = [
  {
    mode: "sketch",
    name: "Ambiguous brief",
    title: '"Banks need spend control"',
    body: "Unquantified enterprise opportunity, undefined onboarding.",
  },
  {
    mode: "draft",
    name: "Discovery",
    title: "Sized the market",
    bullets: ["TAM: 700+ SMEs · 1.2M users", "KYC/KYB · PCI-DSS · UAE Central Bank"],
  },
  {
    mode: "shipped",
    name: "Shipped",
    title: "Corporate card platform",
    metric: {
      value: "$2.8M",
      label: "annual savings identified",
      caption: "Onboarding accelerated 50–70% · 2024",
    },
  },
];
