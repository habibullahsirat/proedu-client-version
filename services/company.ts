export interface Company {
  _id: string;
  name: string;

  logo: {
    url: string;
    public_id: string;
  };
}

const API = process.env.NEXT_PUBLIC_API_URL!;

export async function getCompanies(): Promise<Company[]> {
  const res = await fetch(`${API}/companies`, {
    next: {
      revalidate: 60,
    },
  });

  const json = await res.json();

  return json.data;
}