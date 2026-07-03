const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";

export async function apiFetch<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }

  const result = await response.json();

  return result.data;
}