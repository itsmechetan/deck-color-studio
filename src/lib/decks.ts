// PowerPoint official theme color slots
export interface ThemeColors {
  dk1: string;      // Dark 1 – main text
  lt1: string;      // Light 1 – main background
  dk2: string;      // Dark 2
  lt2: string;      // Light 2
  accent1: string;
  accent2: string;
  accent3: string;
  accent4: string;
  accent5: string;
  accent6: string;
  hlink: string;    // Hyperlink
  folHlink: string; // Followed hyperlink
}

export const themeColorLabels: Record<keyof ThemeColors, string> = {
  dk1: "Dark 1 (Text)",
  lt1: "Light 1 (Background)",
  dk2: "Dark 2",
  lt2: "Light 2",
  accent1: "Accent 1",
  accent2: "Accent 2",
  accent3: "Accent 3",
  accent4: "Accent 4",
  accent5: "Accent 5",
  accent6: "Accent 6",
  hlink: "Hyperlink",
  folHlink: "Followed Link",
};

export const themeColorOrder: (keyof ThemeColors)[] = [
  "dk1", "lt1", "dk2", "lt2",
  "accent1", "accent2", "accent3", "accent4", "accent5", "accent6",
  "hlink", "folHlink"
];

export interface Deck {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  slideCount: number;
}

export const decks: Deck[] = [
  {
    slug: "pitch-deck-pro",
    title: "Pitch Deck Pro",
    description: "Impress investors with a clean, professional pitch deck",
    tags: ["Pitch", "Startup", "Business"],
    slideCount: 12,
  },
  {
    slug: "consulting-strategy",
    title: "Consulting Strategy",
    description: "Strategic frameworks for consulting presentations",
    tags: ["Consulting", "Strategy", "Professional"],
    slideCount: 15,
  },
  {
    slug: "dashboard-analytics",
    title: "Dashboard Analytics",
    description: "Data-driven presentations with chart layouts",
    tags: ["Dashboard", "Analytics", "Data"],
    slideCount: 10,
  },
  {
    slug: "creative-portfolio",
    title: "Creative Portfolio",
    description: "Showcase your work with style",
    tags: ["Portfolio", "Creative", "Design"],
    slideCount: 8,
  },
  {
    slug: "tech-product",
    title: "Tech Product Launch",
    description: "Modern slides for tech product launches",
    tags: ["Tech", "Product", "Launch"],
    slideCount: 14,
  },
  {
    slug: "sales-proposal",
    title: "Sales Proposal",
    description: "Win deals with compelling proposals",
    tags: ["Sales", "Proposal", "Business"],
    slideCount: 11,
  },
  {
    slug: "marketing-plan",
    title: "Marketing Plan",
    description: "Present your marketing strategy effectively",
    tags: ["Marketing", "Strategy", "Plan"],
    slideCount: 13,
  },
  {
    slug: "minimal-corporate",
    title: "Minimal Corporate",
    description: "Clean, minimalist corporate presentations",
    tags: ["Corporate", "Minimal", "Professional"],
    slideCount: 9,
  },
  {
    slug: "education-course",
    title: "Education Course",
    description: "Engaging slides for educational content",
    tags: ["Education", "Course", "Teaching"],
    slideCount: 16,
  },
  {
    slug: "financial-report",
    title: "Financial Report",
    description: "Professional financial presentations",
    tags: ["Finance", "Report", "Business"],
    slideCount: 12,
  },
  {
    slug: "startup-roadmap",
    title: "Startup Roadmap",
    description: "Timeline and roadmap presentations",
    tags: ["Startup", "Roadmap", "Timeline"],
    slideCount: 10,
  },
  {
    slug: "team-intro",
    title: "Team Introduction",
    description: "Introduce your team with style",
    tags: ["Team", "HR", "Introduction"],
    slideCount: 8,
  },
  {
    slug: "project-kickoff",
    title: "Project Kickoff",
    description: "Start projects with clear presentations",
    tags: ["Project", "Kickoff", "Planning"],
    slideCount: 11,
  },
  {
    slug: "quarterly-review",
    title: "Quarterly Review",
    description: "Present quarterly results effectively",
    tags: ["Quarterly", "Review", "Business"],
    slideCount: 14,
  },
  {
    slug: "event-keynote",
    title: "Event Keynote",
    description: "Bold slides for event presentations",
    tags: ["Event", "Keynote", "Conference"],
    slideCount: 15,
  },
];

export function getDeckBySlug(slug: string): Deck | undefined {
  return decks.find((deck) => deck.slug === slug);
}

export async function loadThemeColors(slug: string): Promise<ThemeColors> {
  try {
    const response = await fetch(`/decks/${slug}/theme.json`);
    if (!response.ok) throw new Error("Theme not found");
    return await response.json();
  } catch {
    // Return default theme if loading fails
    return getDefaultTheme();
  }
}

export function getDefaultTheme(): ThemeColors {
  return {
    dk1: "#1E293B",
    lt1: "#FFFFFF",
    dk2: "#475569",
    lt2: "#E2E8F0",
    accent1: "#0055FF",
    accent2: "#00D4AA",
    accent3: "#FF6B6B",
    accent4: "#845EF7",
    accent5: "#F59E0B",
    accent6: "#10B981",
    hlink: "#0055FF",
    folHlink: "#00D4AA",
  };
}
