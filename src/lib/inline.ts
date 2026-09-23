// Minimal inline formatting for content strings: **bold**, *italic*, `code`.
// Text is HTML-escaped first, so content files can't inject markup.

const escape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function inline(text: string): string {
  return escape(text)
    .replace(/`([^`]+)`/g, '<code class="font-code-sm text-[0.9em] text-primary bg-surface-container px-1.5 py-0.5 rounded-lg">$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong class="text-on-surface font-semibold">$1</strong>')
    .replace(/\*([^*]+)\*/g, "<em>$1</em>");
}
