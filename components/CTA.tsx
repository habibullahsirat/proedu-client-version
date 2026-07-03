export default function CTA() {
  return (
    <section className="py-8 md:py-14 lg:py-20">
      <div className="mx-auto max-w-[1320px] px-5 md:px-[50px] lg:px-0">
        <div
          className="
            rounded-[5px]
            bg-[#289BDE]

            px-5
            py-8

            md:px-10
            md:py-12

            lg:px-16
            lg:py-16
          "
        >
          <div
            className="
              flex
              flex-col
              items-center
              gap-6
              text-center

              lg:flex-row
              lg:justify-between
              lg:text-left
            "
          >
            {/* Content */}
            <div className="max-w-[305px] md:max-w-[533px] lg:max-w-[562px]">
              <h2
                className="
                  font-semibold
                  text-white

                  text-[18px]
                  leading-[27px]

                  md:text-[30px]
                  md:leading-[45px]

                  lg:text-[45px]
                  lg:leading-[60px]
                "
              >
                Ready to Join?
              </h2>

              <p
                className="
                  mt-4
                  text-white

                  text-[14px]
                  leading-6

                  md:text-[16px]
                  md:leading-[30px]
                "
              >
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>

            {/* Button */}
            <button
              className="
                flex
                items-center
                justify-center

                h-[38px]
                w-[136px]

                rounded-[5px]
                bg-white

                text-[16px]
                font-semibold
                text-[#289BDE]

                transition
                hover:bg-gray-100

                md:h-[49px]
                md:text-[18px]

                lg:h-[56px]
                lg:w-[160px]
                lg:text-[20px]
              "
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
