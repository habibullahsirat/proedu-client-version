"use client";

import { useState } from "react";
import type { FAQ as FAQType } from "@/services/faq";

interface Props {
  faqs: FAQType[];
}

export default function FAQ({ faqs }: Props) {
  const [openFaq, setOpenFaq] = useState(0);

  if (!faqs.length) return null;

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
            Frequently Asked Questions
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
            Everything you need to know.
          </p>
        </div>

        {/* Accordion */}
        <div className="mx-auto max-w-[335px] space-y-4 md:max-w-[734px] lg:max-w-[872px]">
          {faqs.map((faq, index) => (
            <div
              key={faq._id}
              className="overflow-hidden rounded-[5px] border border-[#E8E8E8]"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  bg-white
                  px-5
                  py-4
                  text-left

                  md:px-6
                  md:py-5
                "
              >
                <span
                  className="
                    font-semibold
                    text-[#4A4A4A]

                    text-[16px]
                    leading-6

                    md:text-[18px]

                    lg:text-[20px]
                    lg:leading-[30px]
                  "
                >
                  {faq.question}
                </span>

                <span
                  className="
                    ml-4
                    shrink-0
                    text-[#4A4A4A]
                    text-xl
                    md:text-2xl
                  "
                >
                  {openFaq === index ? "−" : "+"}
                </span>
              </button>

              {openFaq === index && (
                <div
                  className="
                    bg-[#F4FAFD]
                    px-5
                    py-4

                    text-[#777777]

                    text-[14px]
                    leading-[24px]

                    md:px-6
                    md:py-5
                    md:text-[16px]
                    md:leading-[30px]
                  "
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
