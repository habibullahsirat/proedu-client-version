import { getFeaturedStudents } from "@/services/student";

export default async function Students() {
  const students = await getFeaturedStudents();

  return (
    <section className="py-8 md:py-14 lg:py-20">
      <div className="mx-auto max-w-[1320px] px-5 md:px-[50px] lg:px-0">
        {/* Heading */}
        <div className="mb-8 md:mb-12 lg:mb-14">
          <div className="mx-auto max-w-[305px] text-center md:max-w-[549px] lg:mx-0 lg:max-w-[549px] lg:text-left">
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
              Meet Our Successful Students
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
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>

        {/* Students Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {students.map((student) => (
            <div
              key={student._id}
              className="
                overflow-hidden
                rounded-[5px]
                border border-[#E8E8E8]
                bg-white
                transition
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              {/* Image */}
              <div
                className="
                  h-[300px]
                  w-full
                  bg-cover
                  bg-center
                "
                style={{
                  backgroundImage: `url(${student.image.url})`,
                }}
              />

              {/* Content */}
              <div className="p-5">
                <h3
                  className="
                    text-[20px]
                    font-semibold
                    leading-[30px]
                    text-[#4A4A4A]
                  "
                >
                  {student.name}
                </h3>

                <p
                  className="
                    mt-1
                    text-[16px]
                    leading-6
                    text-[#777777]
                  "
                >
                  {student.department}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
