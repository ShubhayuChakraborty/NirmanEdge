function sanitizeForLog(value: unknown): string {
  return String(value).replace(/[\r\n\t]/g, " ").slice(0, 500);
}

export function reportNirmanEdgeError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const message = error instanceof Error ? error.message : String(error);
  console.error("[NirmanEdge Error]", sanitizeForLog(message), context);
}
