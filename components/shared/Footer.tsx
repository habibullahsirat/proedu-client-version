export default function Footer() {
  return (
    <footer className="bg-[#161616] py-10 md:py-14 lg:py-20">
      <div className="mx-auto max-w-[1320px] px-5 md:px-[50px] lg:px-0">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <h2
            className="
              font-semibold
              text-white

              text-[25px]
              leading-[38px]

              md:text-[35px]
              md:leading-[52px]

              lg:text-[40px]
              lg:leading-[60px]
            "
          >
            Pro Edu
          </h2>

          {/* Address */}
          <p
            className="
              mt-4
              max-w-[320px]
              text-[#BDBDBD]

              text-[14px]
              leading-6

              md:max-w-[420px]
              md:text-[16px]
              md:leading-[30px]
            "
          >
            Office 41, Zawaya Building, Ghala Muscat, Sultanate of Oman
          </p>

          {/* Privacy */}
          <p
            className="
              mt-3
              text-[#BDBDBD]

              text-[14px]

              md:text-[16px]
            "
          >
            Privacy Policy • Terms of Use
          </p>

          {/* Social Icons */}
          <div className="mt-8 flex items-center justify-center gap-4">
            {["F", "TW", "IN", "TK"].map((icon) => (
              <button
                key={icon}
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-[#242424]

                  text-sm
                  font-semibold
                  text-white

                  transition
                  duration-300
                  hover:bg-[#289BDE]
                "
              >
                {icon}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
