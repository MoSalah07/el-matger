export async function withErrorHandling<T>(
  fn: () => Promise<T>
): Promise<[T | null, Error | null]> {
  try {
    const result = await fn();
    return [result, null];
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Server Action Error:", error.message);
      return [null, error];
    }
    console.error("Unknown error:", error);
    return [null, new Error("An unknown error occurred")];
  }
}
