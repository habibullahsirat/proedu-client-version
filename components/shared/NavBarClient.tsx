"use client";

import Image from "next/image";
import { useState } from "react";

interface Props {
  settings: {
    siteName: string;

    logo: {
      url: string;
    };
  };
}

export default function NavBarClient({ settings }: Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1380px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}

        <Image
          src={settings.logo.url}
          alt={settings.siteName}
          width={170}
          height={60}
          priority
          className="h-12 w-auto object-contain"
        />

        {/* Desktop Menu */}

        <ul className="hidden items-center gap-8 text-[#777777] lg:flex">
          {["Home", "Courses", "Deals", "Success", "About"].map((item) => (
            <li
              key={item}
              className="cursor-pointer transition hover:text-[#289BDE]"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Desktop Button */}

        <button className="hidden rounded border border-[#289BDE] px-6 py-2 font-semibold text-[#289BDE] transition hover:bg-[#289BDE] hover:text-white lg:block">
          Register
        </button>

        {/* Mobile Button */}

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded p-2 lg:hidden"
        >
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}

      {mobileMenuOpen && (
        <div className="border-t bg-white lg:hidden">
          <ul className="space-y-1 px-6 py-5">
            {["Home", "Courses", "Deals", "Success", "About"].map((item) => (
              <li
                key={item}
                className="cursor-pointer rounded px-3 py-2 transition hover:bg-gray-100 hover:text-[#289BDE]"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="px-6 pb-6">
            <button className="w-full rounded bg-[#289BDE] py-3 font-semibold text-white">
              Register
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
