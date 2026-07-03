import { apiFetch } from "@/lib/api";

export interface About {
  image: {
    url: string;
    public_id: string;
  };

  title: string;
  description: string;
  buttonText: string;
}

export interface HomeStats {
  courses: number;
  instructors: number;
  reviews: number;
}

export async function getAbout() {
  const about = await apiFetch<About[]>("/about");

  return about[0];
}

export async function getHomeStats() {
  return apiFetch<HomeStats>("/home/stats");
}