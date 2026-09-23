// Tailwind needs full class names in source, so accent colors are mapped here
// rather than built with string templates.
import type { Tone } from "./types";

export const toneText: Record<Tone, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  tertiary: "text-tertiary",
};

export const toneBg: Record<Tone, string> = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  tertiary: "bg-tertiary",
};

export const toneHover: Record<Tone, string> = {
  primary: "group-hover:text-primary",
  secondary: "group-hover:text-secondary",
  tertiary: "group-hover:text-tertiary",
};

export const toneLink: Record<Tone, string> = {
  primary: "hover:text-primary hover:border-primary",
  secondary: "hover:text-secondary hover:border-secondary",
  tertiary: "hover:text-tertiary hover:border-tertiary",
};
