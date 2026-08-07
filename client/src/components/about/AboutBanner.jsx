"use client";

import Link from "next/link";
import { ChevronRight, Sparkles } from "lucide-react";
import RoundedImage from "@/components/ui/RoundedImage";
import { clinicImages } from "@/data/unsplashImages";

const AboutBanner = () => {
  return (
    <section className="bg-[#fafaf7] pt-36 pb-20">
  <div className="mx-auto max-w-7xl">
    <div className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">

      {/* LEFT */}
      <div>

        <p className="mb-5 text-[13px] font-semibold uppercase tracking-[3px] text-[#2DBBC4]">
          About FaceDent
        </p>

        <h1 className="max-w-[500px] text-[42px] font-semibold leading-[1.15] tracking-[-1px] text-[#0E2A47]">
  More Than Dentistry.
  <br />
  We Build Confidence.
</h1>

<p className="mt-6 max-w-[480px] text-[16px] leading-8 text-[#6E7C87]">
  FaceDent Hospital combines advanced dental and
  maxillofacial expertise with compassionate care,
  creating a comfortable experience focused on your
  health, confidence, and long-term well-being.
</p>

        <div className="mt-12 flex items-center gap-2 text-[15px]">
          <Link href="/" className="text-[#6E7C87]">
            Home
          </Link>

          <ChevronRight size={16} />

          <span className="font-medium text-[#0E2A47]">
            About
          </span>
        </div>

      </div>

      {/* RIGHT */}
      <div className="relative">

        <div className="overflow-hidden rounded-tl-[140px] rounded-br-[40px] rounded-tr-[40px] rounded-bl-[40px] border border-[#dbe7ea] bg-[#eef8f8] p-4">

          <RoundedImage
            src={clinicImages.aboutBanner}
            alt="FaceDent clinical consultation"
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="h-[420px] rounded-tl-[120px] rounded-br-[28px] rounded-tr-[28px] rounded-bl-[28px] border-0 shadow-none"
          />

        </div>

        <div className="absolute -left-8 bottom-10 rounded-[28px] bg-white px-8 py-6 shadow-lg">

          <h2 className="text-[54px] font-semibold leading-none text-[#0E2A47]">
            15+
          </h2>

          <p className="mt-2 text-[15px] leading-7 text-[#6E7C87]">
            Years of trusted
            <br />
            patient care.
          </p>

        </div>

      </div>

    </div>
  </div>
</section>
  );
};

export default AboutBanner;
