"use client";

import { ArrowUpRight, Phone } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="bg-[#fafaf7] px-4 pb-5 pt-4 sm:px-6 lg:px-8">
      <div
        className="
          relative
          mx-auto
          flex
          max-w-7xl
          flex-col
          items-center
          gap-8
          overflow-hidden
          rounded-[32px]
          bg-[#0E2A47]
          px-6
          py-10
          sm:px-10
          lg:flex-row
          lg:justify-between
          lg:gap-6
          lg:py-8
        "
      >
        {/* AMBIENT GLOW */}
        <div className="pointer-events-none absolute -left-16 -top-24 h-[260px] w-[260px] rounded-full bg-[#2DBBC4]/25 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-24 -right-16 h-[260px] w-[260px] rounded-full bg-[#2DBBC4]/15 blur-[100px]" />

        {/* TEXT */}
        <div className="relative text-center lg:text-left">
          <p className="text-[12px] font-semibold uppercase tracking-[3px] text-[#8fd9de]">
            Book a Visit
          </p>

          <h2 className="mt-2 text-[26px] leading-[1.2] tracking-[-0.5px] text-white sm:text-[30px]">
            <span className="font-semibold">Your smile deserves </span>
            <span className="font-serif italic text-[#2DBBC4]">
              expert care.
            </span>
          </h2>
        </div>

        {/* BUTTONS */}
        <div className="relative flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="tel:+910000000000"
            className="
              flex
              h-[52px]
              items-center
              gap-3
              rounded-full
              border
              border-white/25
              px-6
              text-white
              transition-all
              duration-300
              hover:border-white/50
              hover:bg-white/5
            "
          >
            <Phone size={16} className="text-[#2DBBC4]" />
            <span className="text-[14px] font-medium whitespace-nowrap">
              +91 00000 00000
            </span>
          </a>

          <button
            className="
              flex
              h-[52px]
              items-center
              gap-3
              rounded-full
              bg-white
              pl-6
              pr-2
              text-[#0E2A47]
              transition-all
              duration-300
              hover:scale-[1.02]
              hover:shadow-[0_10px_25px_rgba(255,255,255,0.15)]
              active:scale-[0.98]
            "
          >
            <span className="text-[14px] font-semibold whitespace-nowrap">
              Book Appointment
            </span>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-[#2DBBC4] to-[#0E2A47]">
              <ArrowUpRight size={16} className="text-white" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;