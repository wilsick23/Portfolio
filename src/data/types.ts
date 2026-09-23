// Shared content types for projects and case studies.

export type Tone = "primary" | "secondary" | "tertiary";

// Content blocks for case-study sections, rendered in order.
// Strings support **bold**, *italic*, and `code`.
export type Block =
  | { type: "p"; text: string }
  | { type: "callout"; text: string; icon?: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  // Two or three images side by side (stacked on phones).
  | { type: "gallery"; items: { src: string; alt: string }[]; caption?: string }
  | { type: "list"; ordered?: boolean; items: { lead?: string; text: string }[] }
  | { type: "cards"; items: { title: string; body: string; icon?: string; tone?: Tone; detail?: string }[] }
  | { type: "quotes"; items: { text: string; source: string }[] }
  | { type: "stats"; items: { value: string; tone: Tone; label: string; body: string }[] }
  // Horizontal bar chart. `value` is the count shown; `pct` sets the bar length (0–100).
  | { type: "bars"; title: string; items: { label: string; value: string; pct: number }[] }
  // Table. Rows become stacked cards on phones.
  | { type: "table"; headers: string[]; rows: string[][] };

export interface Section {
  eyebrow: string;
  heading: string;
  blocks: Block[];
}

export interface Project {
  slug: string;
  title: string;
  fullTitle: string;
  tone: Tone;
  cardEyebrow: string;
  cardSummary: string;
  image: string;
  imageAlt: string;
  // How the cover fills its frame: "cover" crops to fill (default), "contain" shows it whole
  // on `imageBg`. Use "contain" for portrait or poster-style covers.
  imageFit?: "cover" | "contain";
  imageBg?: string;
  // Case study. `heroImage` defaults to `image` when left out.
  heroImage?: string;
  category: string;
  summary: string;
  meta: { label: string; value: string; detail: string }[];
  heroCaption?: string;
  challenge?: { heading: string; paragraphs: string[] };
  solution?: { heading: string; paragraphs: string[] };
  sections?: Section[];
}
