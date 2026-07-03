import { getHero } from "@/services/hero";

export default async function Hero() {
  const hero = await getHero();

  if (!hero) return null;

  return (
    <section className="mx-auto mt-5 max-w-[1320px] px-5 md:px-[50px] lg:px-0">
      <div className="relative overflow-hidden rounded-[5px]">
        {/* Background Image */}
        <div
          className="
            h-[262px]
            md:h-[400px]
            lg:h-[700px]
            w-full
            bg-cover
            bg-center
          "
          style={{
            backgroundImage: `url(${hero.image.url})`,
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
          <div className="text-center px-6 max-w-[274px] md:max-w-[573px] lg:max-w-[671px]">
            {/* Title */}
            <h1
              className="
                font-semibold
                text-white
                leading-tight
                text-[20px]
                md:text-[40px]
                lg:text-[65px]
                md:leading-[50px]
                lg:leading-[85px]
              "
            >
              {hero.title}
            </h1>

            {/* Description */}
            <p
              className="
                mx-auto
                mt-4
                text-[#F4F4F4]
                text-[12px]
                leading-[18px]
                md:mt-5
                md:text-[16px]
                md:leading-[30px]
                lg:mt-6
                lg:text-[18px]
              "
            >
              {hero.description}
            </p>

            {/* Button */}
            <button
              className="
                mt-5
                h-[40px]
                w-[130px]
                rounded-[5px]
                bg-[#289BDE]
                text-[16px]
                font-semibold
                text-white
                transition
                hover:opacity-90

                md:mt-5
                md:h-[49px]
                md:w-[140px]
                md:text-[18px]

                lg:mt-8
                lg:h-[56px]
                lg:w-[182px]
                lg:text-[20px]
              "
            >
              {hero.buttonText}
            </button>
          </div>
        </div>

        {/* Left Arrow (Tablet & Desktop) */}
        <button className="absolute left-5 top-1/2 hidden -translate-y-1/2 md:flex lg:left-[50px]">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur hover:bg-[#289BDE] transition">
            <svg
              className="h-5 w-5 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>
        </button>

        {/* Right Arrow (Tablet & Desktop) */}
        <button className="absolute right-5 top-1/2 hidden -translate-y-1/2 md:flex lg:right-[50px]">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur hover:bg-[#289BDE] transition">
            <svg
              className="h-5 w-5 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </button>
      </div>
    </section>
  );
}
