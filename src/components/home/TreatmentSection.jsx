"use client";

import {
  ArrowRight,
  Grid2x2,
  HeartPulse,
  ScanFace,
  Sparkles,
  ShieldPlus,
} from "lucide-react";

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
    bg: "bg-[#eef8f8]",
  },
  {
    title: "Facial Surgery",
    desc: "Advanced reconstructive procedures with precision care.",
    icon: ScanFace,
    bg: "bg-[#eef4fb]",
  },
  {
    title: "Smile Design",
    desc: "Customized cosmetic treatments for confident smiles.",
    icon: Sparkles,
    bg: "bg-[#f2f5fb]",
  },
  {
    title: "Root Canal",
    desc: "Comfort-focused treatment to restore oral health safely.",
    icon: HeartPulse,
    bg: "bg-[#f5f3fb]",
  },
  {
    title: "Teeth Whitening",
    desc: "Professional whitening treatments for brighter smiles.",
    icon: Sparkles,
    bg: "bg-[#eef8f8]",
  },
  {
    title: "Jaw Alignment",
    desc: "Specialized correction procedures for improved function.",
    icon: ScanFace,
    bg: "bg-[#eef4fb]",
  },
  {
    title: "Orthodontics",
    desc: "Modern braces and aligners for perfectly aligned teeth.",
    icon: ShieldPlus,
    bg: "bg-[#f2f5fb]",
  },
  {
    title: "Facial Aesthetics",
    desc: "Balanced facial enhancement with natural-looking outcomes.",
    icon: HeartPulse,
    bg: "bg-[#f5f3fb]",
  },
];

const TreatmentSection = () => {
  return (
    <section className="bg-[#fafaf7] py-24">
      
      <div className="mx-auto max-w-7xl">
        
        {/* TOP SECTION */}
        <div className="grid gap-8 lg:grid-cols-[1fr_620px]">
          
          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-between">
            
            <div>
              <p className="text-[12px] font-medium uppercase tracking-[2px] text-[#6E7C87]">
                Advanced Care. Natural Results.
              </p>

              <h2 className="mt-6 max-w-[480px] text-[54px] font-semibold leading-[1.1] tracking-[-2px] text-[#0E2A47]">
                Our Treatments
                <br />
                Dental &
                <br />
                Maxillofacial Care
              </h2>

              <p className="mt-7 max-w-[420px] text-[16px] leading-8 text-[#6E7C87]">
                Specialized dental and facial treatments
                designed with modern technology, precision,
                and patient-focused care.
              </p>

              <button
                className="
                  mt-10
                  flex
                  h-[56px]
                  items-center
                  gap-3
                  rounded-full
                  bg-gradient-to-r
                  from-[#2DBBC4]
                  to-[#0E2A47]
                  px-7
                  text-sm
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                "
              >
                Explore Treatments
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="grid gap-6 md:grid-cols-2">
            
            {/* CARD */}
            <div className="rounded-[32px] border border-[#dbe7ea] bg-white p-6">
              
              <div className="flex items-start gap-4">
                
                <div className="h-14 w-14 rounded-full bg-[#eef8f8]" />

                <div>
                  <h3 className="text-[22px] font-semibold text-[#0E2A47]">
                    Dental Care
                  </h3>

                  <p className="mt-2 max-w-[240px] text-[14px] leading-7 text-[#6E7C87]">
                    Modern treatments focused on oral health,
                    aesthetics, and long-term comfort.
                  </p>
                </div>
              </div>

              <div
                className="
                  mt-8
                  flex
                  h-[260px]
                  items-center
                  justify-center
                  rounded-[28px]
                  bg-gradient-to-br
                  from-[#eef8f8]
                  to-[#f8fbfb]
                "
              >
                <img
                  src="/treatment-1.png"
                  alt="Dental Treatment"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            {/* CARD */}
            <div className="rounded-[32px] border border-[#dbe7ea] bg-white p-6">
              
              <div className="flex items-start gap-4">
                
                <div className="h-14 w-14 rounded-full bg-[#eef4fb]" />

                <div>
                  <h3 className="text-[22px] font-semibold text-[#0E2A47]">
                    Facial Surgery
                  </h3>

                  <p className="mt-2 max-w-[240px] text-[14px] leading-7 text-[#6E7C87]">
                    Precision-based maxillofacial procedures
                    with advanced surgical care.
                  </p>
                </div>
              </div>

              <div
                className="
                  mt-8
                  flex
                  h-[260px]
                  items-center
                  justify-center
                  rounded-[28px]
                  bg-gradient-to-br
                  from-[#eef4fb]
                  to-[#f7faff]
                "
              >
                <img
                  src="/treatment-2.png"
                  alt="Facial Treatment"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CATEGORY BAR */}
        <div className="mt-16 overflow-x-auto">
          
          <div
            className="
              flex
              min-w-max
              items-center
              rounded-full
              border
              border-[#dbe7ea]
              bg-white
              p-2
            "
          >
            
            {categories.map((item, index) => (
              <button
                key={index}
                className={`
                  flex
                  items-center
                  gap-2
                  whitespace-nowrap
                  rounded-full
                  px-5
                  py-3
                  text-[14px]
                  font-medium
                  transition-all
                  duration-300
                  ${
                    index === 0
                      ? "bg-[#f3f8f8] text-[#0E2A47]"
                      : "text-[#6E7C87] hover:text-[#0E2A47]"
                  }
                `}
              >
                {index === 0 && (
                  <Grid2x2 size={16} />
                )}

                {item}
              </button>
            ))}
          </div>
        </div>

        {/* GRID TITLE */}
        <div className="mt-14 flex items-center gap-3">
          
          <div
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-[#eef8f8]
            "
          >
            <Grid2x2
              size={18}
              className="text-[#2DBBC4]"
            />
          </div>

          <h3 className="text-[34px] font-semibold tracking-[-1px] text-[#0E2A47]">
            All Treatments
          </h3>
        </div>

        {/* TREATMENT GRID */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          
          {treatments.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-[#dbe7ea]
                  bg-white
                  p-4
                  transition-all
                  duration-500
                  hover:-translate-y-2
                "
              >
                
                <div className="flex gap-4">
                  
                  {/* IMAGE AREA */}
                  <div
                    className={`
                      ${item.bg}
                      relative
                      h-[160px]
                      w-[90px]
                      shrink-0
                      rounded-[20px]
                    `}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon
                        strokeWidth={1.5}
                        className="
                          h-10
                          w-10
                          text-[#2DBBC4]
                          opacity-70
                        "
                      />
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="flex flex-col justify-between">
                    
                    <div>
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
                  className="
                    absolute
                    bottom-0
                    right-0
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-tl-[22px]
                    bg-[#f5f8f8]
                    text-[#0E2A47]
                    transition-all
                    duration-300
                    group-hover:bg-[#2DBBC4]
                    group-hover:text-white
                  "
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TreatmentSection;