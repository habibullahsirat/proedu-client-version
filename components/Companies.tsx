import Image from "next/image";
import { getCompanies } from "@/services/company";

export default async function Companies() {
  const companies = await getCompanies();

  if (!companies.length) return null;

  return (
    <section className="hidden pb-20 lg:block">
      <div className="mx-auto max-w-[1320px]">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2
            className="
              text-[45px]
              font-semibold
              leading-[60px]
              text-[#1D1D1D]
            "
          >
            Trusted by our Partner Companies
          </h2>
        </div>

        {/* Logos */}
        <div className="grid grid-cols-6 items-center justify-items-center gap-8">
          {companies.map((company) => (
            <div
              key={company._id}
              className="
                flex
                h-[80px]
                w-full
                items-center
                justify-center
                transition
                duration-300
                hover:scale-105
              "
            >
              <Image
                src={company.logo.url}
                alt={company.name}
                width={160}
                height={60}
                className="h-auto max-h-[50px] w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
