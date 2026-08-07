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
    <div className="grid gap-8 lg:grid-cols-[1fr_620px]">
      {/* LEFT CONTENT */}
      <div className="flex flex-col justify-between">
        <div>
          <p className="text-[12px] font-medium uppercase tracking-[2px] text-[#6E7C87]">
            Advanced Care. Natural Results.
          </p>

          <h2 className="mt-6 max-w-[480px] text-[36px] font-semibold leading-[1.1] tracking-[-1px] text-[#0E2A47] sm:text-[44px] lg:text-[54px] lg:tracking-[-2px]">
            Our Treatments
            <br />
            Dental &amp;
            <br />
            Maxillofacial Care
          </h2>

          <p className="mt-7 max-w-[420px] text-[16px] leading-8 text-[#6E7C87]">
            Specialized dental and facial treatments designed with modern
            technology, precision, and patient-focused care.
          </p>

          <button
            className="mt-10 flex h-[56px] items-center gap-3 rounded-full bg-gradient-to-r from-[#2DBBC4] to-[#0E2A47] px-7 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02]"
          >
            Explore Treatments
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* RIGHT CARDS */}
      <div className="grid gap-6 sm:grid-cols-2">
        {featureCards.map((card) => (
          <div
            key={card.title}
            className="rounded-[32px] border border-[#dbe7ea] bg-white p-6"
          >
            <div className="flex items-start gap-4">
              <div className={`h-14 w-14 shrink-0 rounded-full ${card.iconBg}`} />

              <div>
                <h3 className="text-[20px] font-semibold text-[#0E2A47] sm:text-[22px]">
                  {card.title}
                </h3>

                <p className="mt-2 max-w-[240px] text-[14px] leading-7 text-[#6E7C87]">
                  {card.desc}
                </p>
              </div>
            </div>

            <RoundedImage
                src={card.image}
                alt={card.alt}
                sizes="(min-width: 1024px) 300px, 100vw"
                className={`mt-8 h-[220px] rounded-[24px] sm:h-[260px] ${card.imageBg}`}
              />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TreatmentHero;
