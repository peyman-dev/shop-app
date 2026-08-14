/**
 * Clean image url that may come in markdown format like [http://...](http://...)
 * or wrapped in [] or with extra spaces.
 */
export function cleanImageUrl(raw: string | null | undefined): string | null {
  if (!raw) return null;

  let url = raw.trim();
  if (!url) return null;

  // Handle markdown link [url](url) or [url](url)
  // If it matches pattern [something](something)
  const markdownMatch = url.match(/\[.*?\]\((.*?)\)/);
  if (markdownMatch && markdownMatch[1]) {
    url = markdownMatch[1].trim();
  }

  // Remove surrounding brackets [] if still present
  if (url.startsWith("[") && url.endsWith("]")) {
    url = url.slice(1, -1).trim();
  }

  // Remove surrounding parentheses
  if (url.startsWith("(") && url.endsWith(")")) {
    url = url.slice(1, -1).trim();
  }

  // Remove quotes
  url = url.replace(/^["']|["']$/g, "").trim();

  // Basic validation
  if (!url.startsWith("http://") && !url.startsWith("https://") && !url.startsWith("/") && !url.startsWith("data:")) {
    return null;
  }

  return url;
}

export function hasValidImage(raw: string | null | undefined): boolean {
  return !!cleanImageUrl(raw);
}
