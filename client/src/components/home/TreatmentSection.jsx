"use client";

import { useLayoutEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Grid2x2,
  HeartPulse,
  ScanFace,
  Sparkles,
  ShieldPlus,
} from "lucide-react";
import TreatmentHero from "./Treatmenthero";
import RoundedImage from "@/components/ui/RoundedImage";
import { treatmentImages } from "@/data/unsplashImages";

const categories = [
  "All Treatments",
  "Dental Care",
  "Facial Surgery",
  "Smile Design",
  "Jaw Correction",
  "Dental Implants",
];

const treatments = [
  {
    title: "Dental Implants",
    desc: "Permanent and natural-looking solutions for missing teeth.",
    icon: ShieldPlus,
    image: treatmentImages[0],
    bg: "bg-[#eef8f8]",
    categories: ["Dental Care", "Dental Implants"],
  },
  {
    title: "Facial Surgery",
    desc: "Advanced reconstructive procedures with precision care.",
    icon: ScanFace,
    image: treatmentImages[1],
    bg: "bg-[#eef4fb]",
    categories: ["Facial Surgery"],
  },
  {
    title: "Smile Design",
    desc: "Customized cosmetic treatments for confident smiles.",
    icon: Sparkles,
    image: treatmentImages[2],
    bg: "bg-[#f2f5fb]",
    categories: ["Smile Design"],
  },
  {
    title: "Root Canal",
    desc: "Comfort-focused treatment to restore oral health safely.",
    icon: HeartPulse,
    image: treatmentImages[3],
    bg: "bg-[#f5f3fb]",
    categories: ["Dental Care"],
  },
  {
    title: "Teeth Whitening",
    desc: "Professional whitening treatments for brighter smiles.",
    icon: Sparkles,
    image: treatmentImages[4],
    bg: "bg-[#eef8f8]",
    categories: ["Smile Design", "Dental Care"],
  },
  {
    title: "Jaw Alignment",
    desc: "Specialized correction procedures for improved function.",
    icon: ScanFace,
    image: treatmentImages[5],
    bg: "bg-[#eef4fb]",
    categories: ["Jaw Correction"],
  },
  {
    title: "Orthodontics",
    desc: "Modern braces and aligners for perfectly aligned teeth.",
    icon: ShieldPlus,
    image: treatmentImages[6],
    bg: "bg-[#f2f5fb]",
    categories: ["Dental Care", "Smile Design"],
  },
  {
    title: "Facial Aesthetics",
    desc: "Balanced facial enhancement with natural-looking outcomes.",
    icon: HeartPulse,
    image: treatmentImages[7],
    bg: "bg-[#f5f3fb]",
    categories: ["Facial Surgery"],
  },
];

const TreatmentCategoryGrid = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });
  const buttonRefs = useRef([]);

  const activeCategory = categories[activeIndex];

  const visibleTreatments =
    activeIndex === 0
      ? treatments
      : treatments.filter((item) => item.categories.includes(activeCategory));

  const measurePill = () => {
    const btn = buttonRefs.current[activeIndex];
    if (btn) {
      setPillStyle({ left: btn.offsetLeft, width: btn.offsetWidth });
    }
  };

  useLayoutEffect(() => {
    measurePill();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  useLayoutEffect(() => {
    measurePill();
    window.addEventListener("resize", measurePill);
    return () => window.removeEventListener("resize", measurePill);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* CATEGORY BAR */}
      <div className="mt-16 overflow-x-auto">
        <div
          className="relative flex min-w-max items-center rounded-full border border-[#dbe7ea] bg-white p-2"
        >
          {/* SLIDING PILL */}
          <div
            className="absolute top-2 bottom-2 rounded-full bg-[#f3f8f8] transition-all duration-300 ease-out"
            style={{ left: pillStyle.left, width: pillStyle.width }}
          />

          {categories.map((item, index) => (
            <button
              key={item}
              ref={(el) => {
                buttonRefs.current[index] = el;
              }}
              onClick={() => setActiveIndex(index)}
              className={`relative z-10 flex items-center gap-2 whitespace-nowrap rounded-full px-5 py-3 text-[14px] font-medium transition-colors duration-300 ${ index === activeIndex ? "text-[#0E2A47]" : "text-[#6E7C87] hover:text-[#0E2A47]" }`}
            >
              {index === activeIndex && <Grid2x2 size={16} />}
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* GRID TITLE */}
      <div className="mt-14 flex items-center gap-3">
        <div
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#eef8f8]"
        >
          <Grid2x2 size={18} className="text-[#2DBBC4]" />
        </div>

        <h3 className="text-[26px] font-semibold tracking-[-1px] text-[#0E2A47] sm:text-[34px]">
          {activeCategory}
        </h3>
      </div>

      {/* TREATMENT GRID */}
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visibleTreatments.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-[28px] border border-[#dbe7ea] bg-white p-4 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="flex flex-col gap-4 sm:flex-row">
                {/* IMAGE AREA */}
                <RoundedImage
                  src={item.image}
                  alt={`${item.title} treatment`}
                  sizes="(min-width: 640px) 180px, 100vw"
                  className={`${item.bg} h-[160px] w-full shrink-0 rounded-[20px] shadow-none sm:w-[180px]`}
                />

                {/* CONTENT */}
                <div className="flex flex-col justify-between pb-10 sm:pb-0">
                  <div>
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#eef8f8]">
                      <Icon
                        strokeWidth={1.5}
                        className="h-5 w-5 text-[#2DBBC4]"
                      />
                    </div>

                    <h4 className="text-[18px] font-semibold text-[#0E2A47]">
                      {item.title}
                    </h4>

                    <p className="mt-4 text-[14px] leading-7 text-[#6E7C87]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* BUTTON */}
              <button
                className="absolute bottom-0 right-0 flex h-14 w-14 items-center justify-center rounded-tl-[22px] bg-[#f5f8f8] text-[#0E2A47] transition-all duration-300 group-hover:bg-[#2DBBC4] group-hover:text-white"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          );
        })}

        {visibleTreatments.length === 0 && (
          <p className="text-[14px] text-[#6E7C87]">
            No treatments found in this category yet.
          </p>
        )}
      </div>
    </>
  );
};

const TreatmentSection = () => {
  return (
    <section className="bg-[#fafaf7] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <TreatmentHero />
        <TreatmentCategoryGrid />
      </div>
    </section>
  );
};

export default TreatmentSection;
