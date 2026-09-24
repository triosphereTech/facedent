"use client";

import { ArrowRight } from "lucide-react";
import RoundedImage from "@/components/ui/RoundedImage";
import { clinicImages } from "@/data/unsplashImages";

const featureCards = [
  {
    title: "Dental Care",
    desc: "Modern treatments focused on oral health, aesthetics, and long-term comfort.",
    image: clinicImages.treatmentDental,
    alt: "Dental Treatment",
    iconBg: "bg-[#eef8f8]",
    imageBg: "from-[#eef8f8] to-[#f8fbfb]",
  },
  {
    title: "Facial Surgery",
    desc: "Precision-based maxillofacial procedures with advanced surgical care.",
    image: clinicImages.treatmentFacial,
    alt: "Facial Treatment",
    iconBg: "bg-[#eef4fb]",
    imageBg: "from-[#eef4fb] to-[#f7faff]",
  },
];

const TreatmentHero = () => {
  return (
    <div className="w-full text-left">
      <div className="mx-auto flex max-w-full flex-col items-start">
        <p className="text-[12px] font-medium uppercase tracking-[2px] text-[#6E7C87]">
          Advanced Care. Natural Results.
        </p>

        <h2 className="mt-6 max-w-full text-[36px] font-semibold leading-[1.1] tracking-[-1px] text-[#0E2A47] sm:text-[44px] lg:text-[54px] lg:tracking-[-2px]">
          Our Treatments
          <br />
          Dental &amp; Maxillofacial Care
        </h2>

        <p className="mt-7 max-w-[520px] text-[16px] leading-8 text-[#6E7C87]">
          Specialized dental and facial treatments designed with modern
          technology, precision, and patient-focused care.
        </p>

        {/* <button
          className="mt-10 flex h-[56px] items-center gap-3 rounded-full bg-gradient-to-r from-[#2DBBC4] to-[#0E2A47] px-7 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02]"
        >
          Explore Treatments
          <ArrowRight size={18} />
        </button> */}
      </div>
    </div>
  );
};

export default TreatmentHero;