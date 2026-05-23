"use client";

import {
  ArrowRight,
  Check,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const features = [
  "Advanced Dental Technology",
  "Personalized Patient Care",
  "Experienced Specialists",
  "Comfort-Focused Treatments",
  "Modern Surgical Solutions",
  "Trusted Smile Transformations",
];

const AboutSection = () => {
  return (
    <section className="bg-[#fafaf7] py-24">
      
      <div className="mx-auto max-w-7xl">
        
        {/* MAIN GRID */}
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          
          {/* LEFT CONTENT */}
          <div>
            
            {/* SMALL TAG */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#dbe7ea] bg-white px-4 py-2">
              <Sparkles
                size={15}
                className="text-[#2DBBC4]"
              />

              <span className="text-sm font-medium text-[#0E2A47]">
                About FaceDent
              </span>
            </div>

            {/* HEADING */}
            <h2 className="max-w-[520px] text-[48px] font-semibold leading-[1.1] tracking-[-2px] text-[#0E2A47]">
              Redefining Modern
              <br />
              Dental & Facial Care.
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-7 max-w-[560px] text-[16px] leading-8 text-[#6E7C87]">
              FaceDent combines advanced clinical expertise,
              modern technology, and compassionate care to
              deliver exceptional dental and facial treatment
              experiences focused on long-term health,
              confidence, and comfort.
            </p>

            {/* FEATURES */}
            <div className="mt-10 grid gap-y-5 sm:grid-cols-2">
              
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      bg-[#eef8f8]
                    "
                  >
                    <Check
                      size={18}
                      className="text-[#2DBBC4]"
                    />
                  </div>

                  <p className="text-[15px] font-medium text-[#0E2A47]">
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            {/* STATS */}
            <div className="mt-14 flex flex-wrap gap-10">
              
              {/* ITEM */}
              <div className="flex items-center gap-5">
                
                <h3 className="text-[62px] font-semibold leading-none tracking-[-3px] text-[#0E2A47]">
                  20+
                </h3>

                <p className="max-w-[120px] text-[15px] leading-7 text-[#6E7C87]">
                  Years of trusted patient care.
                </p>
              </div>

              {/* ITEM */}
              <div className="flex items-center gap-5">
                
                <h3 className="text-[62px] font-semibold leading-none tracking-[-3px] text-[#0E2A47]">
                  25K+
                </h3>

                <p className="max-w-[130px] text-[15px] leading-7 text-[#6E7C87]">
                  Successful treatments completed.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            
            {/* IMAGE CONTAINER */}
            <div
              className="
                relative
                overflow-hidden
                rounded-tl-[120px]
                rounded-tr-[32px]
                rounded-br-[32px]
                rounded-bl-[32px]
                border
                border-[#dbe7ea]
                bg-gradient-to-br
                from-[#eef8f8]
                via-[#f5fbfb]
                to-[#eef3fb]
                p-4
              "
            >
              
              {/* IMAGE */}
              <img
                src="/about-image.jpg"
                alt="FaceDent Clinic"
                className="
                  h-[620px]
                  w-full
                  rounded-tl-[110px]
                  rounded-tr-[24px]
                  rounded-br-[24px]
                  rounded-bl-[24px]
                  object-cover
                "
              />

              {/* FLOAT CARD */}
              <div
                className="
                  absolute
                  bottom-8
                  left-8
                  rounded-[28px]
                  border
                  border-white/60
                  bg-white/85
                  p-5
                  shadow-[0_15px_40px_rgba(15,42,71,0.08)]
                  backdrop-blur-xl
                "
              >
                
                <div className="flex items-start gap-4">
                  
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      bg-[#eef8f8]
                    "
                  >
                    <HeartHandshake
                      size={24}
                      className="text-[#2DBBC4]"
                    />
                  </div>

                  <div>
                    <h4 className="text-[18px] font-semibold text-[#0E2A47]">
                      Patient-First Philosophy
                    </h4>

                    <p className="mt-2 max-w-[260px] text-[14px] leading-7 text-[#6E7C87]">
                      Every treatment is designed to provide
                      comfort, confidence, and lasting results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA SECTION */}
        <div
          className="
            relative
            mt-14
            overflow-hidden
            rounded-[40px]
            bg-gradient-to-r
            from-[#0E2A47]
            via-[#123454]
            to-[#2DBBC4]
            px-8
            py-16
          "
        >
          
          {/* GLOW */}
          <div className="absolute right-0 top-0 h-[260px] w-[260px] rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            
            {/* LEFT */}
            <div>
              <h3 className="text-[42px] font-semibold leading-[1.15] tracking-[-2px] text-white">
                Experience Modern Dental
                <br />
                Care Designed Around You.
              </h3>

              <p className="mt-5 max-w-[580px] text-[16px] leading-8 text-white/75">
                From routine care to advanced facial and dental
                procedures, FaceDent delivers precision-driven
                treatments in a comfortable and modern
                environment.
              </p>
            </div>

            {/* BUTTON */}
            <button
              className="
                flex
                h-[60px]
                w-fit
                items-center
                gap-3
                rounded-full
                bg-white
                px-8
                text-[15px]
                font-medium
                text-[#0E2A47]
                transition-all
                duration-300
                hover:scale-[1.03]
              "
            >
              Book Consultation
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;