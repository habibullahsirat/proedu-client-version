const API = process.env.NEXT_PUBLIC_API_URL!;

export async function getFeedbacks(): Promise<Feedback[]> {
  const res = await fetch(`${API}/feedbacks`, {
    next: {
      revalidate: 60,
    },
  });

  const json = await res.json();

  return json.data;
}