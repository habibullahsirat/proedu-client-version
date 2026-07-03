import { apiFetch } from "@/lib/api";

export interface Hero {
  _id: string;
  title: string;
  description: string;
  buttonText: string;
  isActive: boolean;
  image: {
    url: string;
    public_id: string;
  };
}

export async function getHero() {
  const heroes = await apiFetch<Hero[]>("/hero");

  return heroes.find((hero) => hero.isActive) || null;
}