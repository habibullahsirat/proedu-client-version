export interface SiteSetting {
  siteName: string;

  logo: {
    url: string;
    public_id: string;
  };

  favicon: {
    url: string;
    public_id: string;
  };

  address: string;

  facebook: string;

  instagram: string;

  linkedin: string;

  youtube: string;
}

const API = process.env.NEXT_PUBLIC_API_URL!;

export async function getSiteSettings(): Promise<SiteSetting> {
  const res = await fetch(`${API}/site-settings`, {
    next: {
      revalidate: 60,
    },
  });

  const json = await res.json();

  return json.data;
}
