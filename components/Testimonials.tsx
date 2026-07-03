import Image from "next/image";
import { getFeedbacks } from "@/services/feedback";

export default async function Testimonials() {
  const feedbacks = await getFeedbacks();

  if (!feedbacks.length) return null;

  return (
    <section className="py-8 md:py-14 lg:py-20">
      <div className="mx-auto max-w-[1320px] px-5 md:px-[50px] lg:px-0">
        {/* Heading */}
        <div className="mx-auto mb-8 max-w-[305px] text-center md:mb-12 md:max-w-[606px]">
          <h2
            className="
              font-semibold
              text-[#1D1D1D]

              text-[20px]
              leading-[30px]

              md:text-[30px]
              md:leading-[45px]

              lg:text-[45px]
              lg:leading-[60px]
            "
          >
            Some Students Feedback
          </h2>

          <p
            className="
              mt-4
              text-[#777777]

              text-[14px]
              leading-[21px]

              md:text-[16px]
              md:leading-[30px]
            "
          >
            Read what our successful students are saying about their learning
            experience.
          </p>
        </div>

        {/* Feedback Cards */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {feedbacks.slice(0, 2).map((feedback) => (
            <div
              key={feedback._id}
              className="
                rounded-[5px]
                border
                border-[#E8E8E8]
                bg-white
                p-5
                transition
                hover:shadow-lg

                md:p-8

                lg:p-10
              "
            >
              {/* Top */}
              <div className="flex items-center justify-between">
                <svg
                  className="h-8 w-8 text-[#D9D9D9] md:h-10 md:w-10"
                  fill="currentColor"
                  viewBox="0 0 40 32"
                >
                  <path d="M0 32V19.2C0 8.533 5.333 2.133 16 0l2.4 4C13.067 5.333 10.4 8 10.4 12H18V32H0zm22 0V19.2C22 8.533 27.333 2.133 38 0l2.4 4C35.067 5.333 32.4 8 32.4 12H40V32H22z" />
                </svg>

                <span className="text-[12px] text-[#777777] md:text-[14px]">
                  {new Date(feedback.createdAt).toLocaleDateString()}
                </span>
              </div>

              {/* Message */}
              <p
                className="
                  mt-6
                  text-[#777777]

                  text-[14px]
                  leading-[24px]

                  md:text-[16px]
                  md:leading-[30px]
                "
              >
                {feedback.message}
              </p>

              {/* Student */}
              <div className="mt-8 flex items-center gap-4">
                <Image
                  src={feedback.student.image.url}
                  alt={feedback.student.name}
                  width={56}
                  height={56}
                  className="rounded-full object-cover"
                />

                <div>
                  <h4
                    className="
                      text-[18px]
                      font-semibold
                      text-[#4A4A4A]

                      md:text-[20px]
                    "
                  >
                    {feedback.student.name}
                  </h4>

                  <p
                    className="
                      text-[14px]
                      text-[#777777]

                      md:text-[16px]
                    "
                  >
                    {feedback.student.department}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
