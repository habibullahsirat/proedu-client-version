import { getAbout, getHomeStats } from "@/services/about";

export default async function About() {
  const [about, stats] = await Promise.all([getAbout(), getHomeStats()]);

  if (!about) return null;

  return (
    <section className="py-8 md:py-14 lg:py-20">
      <div className="mx-auto max-w-[1320px] px-5 md:px-[50px] lg:px-0">
        <div className="overflow-hidden rounded-[5px] bg-[#F4FAFD]">
          <div className="flex flex-col md:flex-row">
            {/* Image */}

            <div
              className="
                h-[224px]
                w-full
                bg-cover
                bg-center

                md:h-[543px]
                md:w-[334px]

                lg:h-[806px]
                lg:w-[600px]
              "
              style={{
                backgroundImage: `url(${about.image.url})`,
              }}
            />

            {/* Content */}

            <div
              className="
                flex-1
                p-5

                md:p-10

                lg:flex lg:flex-col lg:justify-center
                lg:p-14
              "
            >
              {/* Heading */}

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
                {about.title}
              </h2>

              {/* Description */}

              <p
                className="
                  mt-4
                  text-[#777777]

                  text-[14px]
                  leading-[21px]

                  md:text-[16px]
                  md:leading-[26px]

                  lg:mt-6
                  lg:leading-[30px]
                "
              >
                {about.description}
              </p>

              {/* Stats */}

              <div
                className="
                  mt-6
                  grid
                  grid-cols-2
                  gap-6

                  md:grid-cols-2

                  lg:grid-cols-3
                  lg:gap-10
                "
              >
                <div>
                  <h3 className="text-[25px] font-semibold text-[#1D1D1D] lg:text-[45px] lg:leading-[60px]">
                    {stats.courses}
                  </h3>

                  <p className="mt-1 text-[16px] font-medium text-[#777777] lg:text-[20px]">
                    Online Course
                  </p>
                </div>

                <div>
                  <h3 className="text-[25px] font-semibold text-[#1D1D1D] lg:text-[45px] lg:leading-[60px]">
                    {stats.instructors}
                  </h3>

                  <p className="mt-1 text-[16px] font-medium text-[#777777] lg:text-[20px]">
                    Expert Member
                  </p>
                </div>

                <div>
                  <h3 className="text-[25px] font-semibold text-[#1D1D1D] lg:text-[45px] lg:leading-[60px]">
                    {stats.reviews}
                  </h3>

                  <p className="mt-1 text-[16px] font-medium text-[#777777] lg:text-[20px]">
                    Rating &amp; Review
                  </p>
                </div>
              </div>

              {/* Button */}

              <button
                className="
                  mt-8

                  h-[38px]
                  w-[123px]

                  rounded-[5px]
                  bg-[#289BDE]

                  text-[16px]
                  font-semibold
                  text-white

                  transition
                  hover:opacity-90

                  md:h-[49px]
                  md:w-[134px]
                  md:text-[18px]

                  lg:mt-10
                  lg:h-[56px]
                  lg:w-[175px]
                  lg:text-[20px]
                "
              >
                {about.buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
