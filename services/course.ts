// import { apiFetch } from "@/lib/api";

// export interface Course {
//   _id: string;

//   title: string;

//   description: string;

//   price: number;

//   image: {
//     url: string;
//     public_id: string;
//   };

//   isActive: boolean;
// }

// export async function getCourses() {
//   const courses = await apiFetch<Course[]>("/courses");

//   return courses.filter((course) => course.isActive);
// }

import { apiFetch } from "@/lib/api";

export interface Course {
  _id: string;

  title: string;

  description: string;

  price: number;

  image: {
    url: string;
    public_id: string;
  };
}

export async function getCourses() {
  return apiFetch<Course[]>("/courses");
}