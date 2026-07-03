export interface FAQ {
  _id: string;
  question: string;
  answer: string;
  order: number;
  isActive: boolean;
}

const API = process.env.NEXT_PUBLIC_API_URL!;

export async function getFaqs(): Promise<FAQ[]> {
  const res = await fetch(`${API}/faqs`, {
    next: {
      revalidate: 60,
    },
  });

  const json = await res.json();

  return json.data;
}