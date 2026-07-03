import { apiFetch } from "@/lib/api";

export interface Student {
  _id: string;

  studentId: string;

  name: string;

  email: string;

  department: string;

  image: {
    url: string;
    public_id: string;
  };
}

export async function getFeaturedStudents() {
  return apiFetch<Student[]>("/students/featured");
}