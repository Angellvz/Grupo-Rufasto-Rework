export function splitAccentWords(text: string, accentWordCount?: number) {
  if (!accentWordCount || accentWordCount <= 0) {
    return { main: text, accent: "" };
  }

  const words = text.trim().split(/\s+/);
  if (words.length <= accentWordCount) {
    return { main: "", accent: text };
  }

  return {
    main: words.slice(0, -accentWordCount).join(" "),
    accent: words.slice(-accentWordCount).join(" "),
  };
}
