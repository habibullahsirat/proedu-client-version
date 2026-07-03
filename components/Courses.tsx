import { getCourses } from "@/services/course";

export default async function Courses() {
  const courses = await getCourses();

  return (
    <section className="py-8 md:py-14 lg:py-20">
      <div className="mx-auto max-w-[1320px] px-5 md:px-[50px] lg:px-0">
        {/* Heading */}
        <div className="mx-auto mb-8 max-w-[305px] text-center md:mb-12 md:max-w-[606px]">
          <h2
            className="
              font-semibold text-[#1D1D1D]
              text-[18px]
              leading-[27px]
              md:text-[30px]
              md:leading-[45px]
              lg:text-[45px]
              lg:leading-[60px]
            "
          >
            Discover Our Popular Courses
          </h2>

          <p
            className="
              mt-3
              text-[#777777]
              text-[14px]
              leading-6
              md:mt-4
              md:text-[16px]
              md:leading-[30px]
            "
          >
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-5 lg:grid-cols-2">
          {courses.map((course) => (
            <div
              key={course._id}
              className="
                overflow-hidden
                rounded-[5px]
                border border-[#E8E8E8]
                bg-white
                transition
                hover:shadow-lg
              "
            >
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div
                  className="
                    h-[224px]
                    w-full
                    shrink-0
                    bg-cover
                    bg-center

                    md:h-[200px]
                    md:w-[200px]
                  "
                  style={{
                    backgroundImage: `url(${course.image.url})`,
                  }}
                />

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between p-5 md:p-8">
                  <div>
                    <h3
                      className="
                        text-[#4A4A4A]
                        font-semibold
                        text-[16px]
                        leading-6
                        md:text-[25px]
                        md:leading-[38px]
                      "
                    >
                      {course.title}
                    </h3>

                    <p
                      className="
                        mt-2
                        text-[#777777]
                        text-[14px]
                        leading-[21px]
                        md:mt-3
                        md:text-[16px]
                        md:leading-6
                      "
                    >
                      {course.description}
                    </p>
                  </div>

                  <h4
                    className="
                      mt-4
                      font-semibold
                      text-[#289BDE]
                      text-[18px]
                      leading-[27px]
                    "
                  >
                    Price : ${course.price}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-8 text-center md:mt-12">
          <button
            className="
              h-[49px]
              w-[108px]
              rounded-[5px]
              bg-[#289BDE]
              text-[18px]
              font-semibold
              text-white
              transition
              hover:opacity-90

              lg:h-[56px]
              lg:w-[248px]
              lg:text-[20px]
            "
          >
            <span className="hidden lg:inline">See More Courses</span>
            <span className="lg:hidden">View All</span>
          </button>
        </div>
      </div>
    </section>
  );
}
