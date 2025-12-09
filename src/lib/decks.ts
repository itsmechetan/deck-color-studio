export interface DeckColor {
  name: string;
  key: string;
  default: string;
}

export interface Deck {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  slideCount: number;
  colors: DeckColor[];
}

export const defaultColors: Record<string, string> = {
  primary: "#E85D4C",
  secondary: "#2D9596",
  accent1: "#FFB347",
  accent2: "#87CEEB",
  background: "#FFFFFF",
  textDark: "#1A1A2E",
  textLight: "#FFFFFF",
  success: "#4CAF50",
};

export const decks: Deck[] = [
  {
    slug: "pitch-deck-pro",
    title: "Pitch Deck Pro",
    description: "Impress investors with a clean, professional pitch deck",
    tags: ["Pitch", "Startup", "Business"],
    slideCount: 12,
    colors: [
      { name: "Primary", key: "primary", default: "#E85D4C" },
      { name: "Secondary", key: "secondary", default: "#2D9596" },
      { name: "Accent 1", key: "accent1", default: "#FFB347" },
      { name: "Accent 2", key: "accent2", default: "#87CEEB" },
      { name: "Background", key: "background", default: "#FFFFFF" },
      { name: "Text Dark", key: "textDark", default: "#1A1A2E" },
      { name: "Text Light", key: "textLight", default: "#FFFFFF" },
      { name: "Success", key: "success", default: "#4CAF50" },
    ],
  },
  {
    slug: "consulting-strategy",
    title: "Consulting Strategy",
    description: "Strategic frameworks for consulting presentations",
    tags: ["Consulting", "Strategy", "Professional"],
    slideCount: 15,
    colors: [
      { name: "Primary", key: "primary", default: "#003366" },
      { name: "Secondary", key: "secondary", default: "#0066CC" },
      { name: "Accent 1", key: "accent1", default: "#FF6B35" },
      { name: "Accent 2", key: "accent2", default: "#98D8C8" },
      { name: "Background", key: "background", default: "#FAFAFA" },
      { name: "Text Dark", key: "textDark", default: "#2C3E50" },
      { name: "Text Light", key: "textLight", default: "#FFFFFF" },
      { name: "Success", key: "success", default: "#27AE60" },
    ],
  },
  {
    slug: "dashboard-analytics",
    title: "Dashboard Analytics",
    description: "Data-driven presentations with chart layouts",
    tags: ["Dashboard", "Analytics", "Data"],
    slideCount: 10,
    colors: [
      { name: "Primary", key: "primary", default: "#6C5CE7" },
      { name: "Secondary", key: "secondary", default: "#A29BFE" },
      { name: "Accent 1", key: "accent1", default: "#00CEC9" },
      { name: "Accent 2", key: "accent2", default: "#FD79A8" },
      { name: "Background", key: "background", default: "#F8F9FA" },
      { name: "Text Dark", key: "textDark", default: "#2D3436" },
      { name: "Text Light", key: "textLight", default: "#FFFFFF" },
      { name: "Success", key: "success", default: "#00B894" },
    ],
  },
  {
    slug: "creative-portfolio",
    title: "Creative Portfolio",
    description: "Showcase your work with style",
    tags: ["Portfolio", "Creative", "Design"],
    slideCount: 8,
    colors: [
      { name: "Primary", key: "primary", default: "#FF6B6B" },
      { name: "Secondary", key: "secondary", default: "#4ECDC4" },
      { name: "Accent 1", key: "accent1", default: "#FFE66D" },
      { name: "Accent 2", key: "accent2", default: "#95E1D3" },
      { name: "Background", key: "background", default: "#FFFFFF" },
      { name: "Text Dark", key: "textDark", default: "#1A1A2E" },
      { name: "Text Light", key: "textLight", default: "#FFFFFF" },
      { name: "Success", key: "success", default: "#2ECC71" },
    ],
  },
  {
    slug: "tech-product",
    title: "Tech Product Launch",
    description: "Modern slides for tech product launches",
    tags: ["Tech", "Product", "Launch"],
    slideCount: 14,
    colors: [
      { name: "Primary", key: "primary", default: "#0052CC" },
      { name: "Secondary", key: "secondary", default: "#36B37E" },
      { name: "Accent 1", key: "accent1", default: "#FF5630" },
      { name: "Accent 2", key: "accent2", default: "#6554C0" },
      { name: "Background", key: "background", default: "#FAFBFC" },
      { name: "Text Dark", key: "textDark", default: "#172B4D" },
      { name: "Text Light", key: "textLight", default: "#FFFFFF" },
      { name: "Success", key: "success", default: "#36B37E" },
    ],
  },
  {
    slug: "sales-proposal",
    title: "Sales Proposal",
    description: "Win deals with compelling proposals",
    tags: ["Sales", "Proposal", "Business"],
    slideCount: 11,
    colors: [
      { name: "Primary", key: "primary", default: "#1E3A8A" },
      { name: "Secondary", key: "secondary", default: "#3B82F6" },
      { name: "Accent 1", key: "accent1", default: "#F59E0B" },
      { name: "Accent 2", key: "accent2", default: "#10B981" },
      { name: "Background", key: "background", default: "#FFFFFF" },
      { name: "Text Dark", key: "textDark", default: "#1F2937" },
      { name: "Text Light", key: "textLight", default: "#FFFFFF" },
      { name: "Success", key: "success", default: "#10B981" },
    ],
  },
  {
    slug: "marketing-plan",
    title: "Marketing Plan",
    description: "Present your marketing strategy effectively",
    tags: ["Marketing", "Strategy", "Plan"],
    slideCount: 13,
    colors: [
      { name: "Primary", key: "primary", default: "#EC4899" },
      { name: "Secondary", key: "secondary", default: "#8B5CF6" },
      { name: "Accent 1", key: "accent1", default: "#06B6D4" },
      { name: "Accent 2", key: "accent2", default: "#F97316" },
      { name: "Background", key: "background", default: "#FEFEFE" },
      { name: "Text Dark", key: "textDark", default: "#18181B" },
      { name: "Text Light", key: "textLight", default: "#FFFFFF" },
      { name: "Success", key: "success", default: "#22C55E" },
    ],
  },
  {
    slug: "minimal-corporate",
    title: "Minimal Corporate",
    description: "Clean, minimalist corporate presentations",
    tags: ["Corporate", "Minimal", "Professional"],
    slideCount: 9,
    colors: [
      { name: "Primary", key: "primary", default: "#374151" },
      { name: "Secondary", key: "secondary", default: "#6B7280" },
      { name: "Accent 1", key: "accent1", default: "#3B82F6" },
      { name: "Accent 2", key: "accent2", default: "#10B981" },
      { name: "Background", key: "background", default: "#FFFFFF" },
      { name: "Text Dark", key: "textDark", default: "#111827" },
      { name: "Text Light", key: "textLight", default: "#FFFFFF" },
      { name: "Success", key: "success", default: "#10B981" },
    ],
  },
  {
    slug: "education-course",
    title: "Education Course",
    description: "Engaging slides for educational content",
    tags: ["Education", "Course", "Teaching"],
    slideCount: 16,
    colors: [
      { name: "Primary", key: "primary", default: "#7C3AED" },
      { name: "Secondary", key: "secondary", default: "#A78BFA" },
      { name: "Accent 1", key: "accent1", default: "#FBBF24" },
      { name: "Accent 2", key: "accent2", default: "#34D399" },
      { name: "Background", key: "background", default: "#F5F3FF" },
      { name: "Text Dark", key: "textDark", default: "#1F2937" },
      { name: "Text Light", key: "textLight", default: "#FFFFFF" },
      { name: "Success", key: "success", default: "#34D399" },
    ],
  },
  {
    slug: "financial-report",
    title: "Financial Report",
    description: "Professional financial presentations",
    tags: ["Finance", "Report", "Business"],
    slideCount: 12,
    colors: [
      { name: "Primary", key: "primary", default: "#064E3B" },
      { name: "Secondary", key: "secondary", default: "#059669" },
      { name: "Accent 1", key: "accent1", default: "#0EA5E9" },
      { name: "Accent 2", key: "accent2", default: "#F59E0B" },
      { name: "Background", key: "background", default: "#FFFFFF" },
      { name: "Text Dark", key: "textDark", default: "#1E293B" },
      { name: "Text Light", key: "textLight", default: "#FFFFFF" },
      { name: "Success", key: "success", default: "#059669" },
    ],
  },
  {
    slug: "startup-roadmap",
    title: "Startup Roadmap",
    description: "Timeline and roadmap presentations",
    tags: ["Startup", "Roadmap", "Timeline"],
    slideCount: 10,
    colors: [
      { name: "Primary", key: "primary", default: "#DC2626" },
      { name: "Secondary", key: "secondary", default: "#EA580C" },
      { name: "Accent 1", key: "accent1", default: "#0891B2" },
      { name: "Accent 2", key: "accent2", default: "#7C3AED" },
      { name: "Background", key: "background", default: "#FFFBEB" },
      { name: "Text Dark", key: "textDark", default: "#292524" },
      { name: "Text Light", key: "textLight", default: "#FFFFFF" },
      { name: "Success", key: "success", default: "#16A34A" },
    ],
  },
  {
    slug: "team-intro",
    title: "Team Introduction",
    description: "Introduce your team with style",
    tags: ["Team", "HR", "Introduction"],
    slideCount: 8,
    colors: [
      { name: "Primary", key: "primary", default: "#0284C7" },
      { name: "Secondary", key: "secondary", default: "#38BDF8" },
      { name: "Accent 1", key: "accent1", default: "#FB923C" },
      { name: "Accent 2", key: "accent2", default: "#A855F7" },
      { name: "Background", key: "background", default: "#F0F9FF" },
      { name: "Text Dark", key: "textDark", default: "#0C4A6E" },
      { name: "Text Light", key: "textLight", default: "#FFFFFF" },
      { name: "Success", key: "success", default: "#22C55E" },
    ],
  },
  {
    slug: "project-kickoff",
    title: "Project Kickoff",
    description: "Start projects with clear presentations",
    tags: ["Project", "Kickoff", "Planning"],
    slideCount: 11,
    colors: [
      { name: "Primary", key: "primary", default: "#4338CA" },
      { name: "Secondary", key: "secondary", default: "#6366F1" },
      { name: "Accent 1", key: "accent1", default: "#EC4899" },
      { name: "Accent 2", key: "accent2", default: "#14B8A6" },
      { name: "Background", key: "background", default: "#FAFAFA" },
      { name: "Text Dark", key: "textDark", default: "#1E1B4B" },
      { name: "Text Light", key: "textLight", default: "#FFFFFF" },
      { name: "Success", key: "success", default: "#14B8A6" },
    ],
  },
  {
    slug: "quarterly-review",
    title: "Quarterly Review",
    description: "Present quarterly results effectively",
    tags: ["Quarterly", "Review", "Business"],
    slideCount: 14,
    colors: [
      { name: "Primary", key: "primary", default: "#1D4ED8" },
      { name: "Secondary", key: "secondary", default: "#60A5FA" },
      { name: "Accent 1", key: "accent1", default: "#F472B6" },
      { name: "Accent 2", key: "accent2", default: "#34D399" },
      { name: "Background", key: "background", default: "#FFFFFF" },
      { name: "Text Dark", key: "textDark", default: "#1E3A5F" },
      { name: "Text Light", key: "textLight", default: "#FFFFFF" },
      { name: "Success", key: "success", default: "#34D399" },
    ],
  },
  {
    slug: "event-keynote",
    title: "Event Keynote",
    description: "Bold slides for event presentations",
    tags: ["Event", "Keynote", "Conference"],
    slideCount: 15,
    colors: [
      { name: "Primary", key: "primary", default: "#BE185D" },
      { name: "Secondary", key: "secondary", default: "#DB2777" },
      { name: "Accent 1", key: "accent1", default: "#8B5CF6" },
      { name: "Accent 2", key: "accent2", default: "#06B6D4" },
      { name: "Background", key: "background", default: "#FDF4FF" },
      { name: "Text Dark", key: "textDark", default: "#1C1917" },
      { name: "Text Light", key: "textLight", default: "#FFFFFF" },
      { name: "Success", key: "success", default: "#22C55E" },
    ],
  },
];

export function getDeckBySlug(slug: string): Deck | undefined {
  return decks.find((deck) => deck.slug === slug);
}

export function getDefaultColorsForDeck(deck: Deck): Record<string, string> {
  const colors: Record<string, string> = {};
  deck.colors.forEach((color) => {
    colors[color.key] = color.default;
  });
  return colors;
}
