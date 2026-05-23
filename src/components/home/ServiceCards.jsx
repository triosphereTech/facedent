"use client";

import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Smile,
  ScanFace,
} from "lucide-react";

const services = [
  {
    title: "Cosmetic Dentistry",
    desc: "Enhancing your smile with aesthetic treatments for a confident you.",
    icon: Sparkles,
    bg: "bg-[#eef8f8]",
    glow: "group-hover:opacity-20",
  },
  {
    title: "Dental Implants",
    desc: "Restore missing teeth with durable and natural-looking solutions.",
    icon: ShieldCheck,
    bg: "bg-[#eef4f9]",
    glow: "group-hover:opacity-20",
  },
  {
    title: "Orthodontic Care",
    desc: "Straighten your teeth with advanced braces and aligner treatments.",
    icon: ScanFace,
    bg: "bg-[#eef3fb]",
    glow: "group-hover:opacity-20",
  },
  {
    title: "Teeth Whitening",
    desc: "Brighten your smile safely with professional whitening care.",
    icon: Smile,
    bg: "bg-[#f3f1fb]",
    glow: "group-hover:opacity-20",
  },
];

const ServiceCards = () => {
  return (
    <section className="bg-[#ffffff69] py-24">
      
      <div className="mx-auto max-w-7xl">
        
        {/* TOP */}
        <div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          
          {/* LEFT */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#dbe7ea] bg-white px-4 py-2">
              <Sparkles
                size={15}
                className="text-[#2DBBC4]"
              />

              <span className="text-sm font-medium text-[#0E2A47]">
                 Services
              </span>
            </div>

            <h2 className="text-[44px] font-semibold tracking-[-2px] text-[#0E2A47]">
             Our Care
            </h2>
          </div>

          {/* RIGHT */}
          <p className="max-w-[520px] text-right text-[17px] leading-8 text-[#6E7C87]">
            Personalized dental and facial treatments
            designed with precision, comfort, and
            long-term care in mind.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-[32px] border border-[#dbe7ea] ${service.bg} min-h-[440px] p-8 transition-all duration-500 hover:-translate-y-2`}
              >
                
                {/* CONTENT */}
                <div className="relative z-10">
                  
                  <h3 className="max-w-[220px] text-[34px] font-semibold leading-[1.15] tracking-[-1.5px] text-[#0E2A47]">
                    {service.title}
                  </h3>

                  <p className="mt-6 text-[15px] leading-8 text-[#6E7C87]">
                    {service.desc}
                  </p>
                </div>

                {/* BUTTON */}
                <button
                  className="
                    absolute
                    bottom-7
                    left-7
                    z-20
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    bg-gradient-to-r
                    from-[#2DBBC4]
                    to-[#0E2A47]
                    text-white
                    transition-all
                    duration-300
                    group-hover:scale-110
                  "
                >
                  <ArrowRight size={20} />
                </button>

                {/* BIG ICON */}
                <div
                  className={`
                    absolute
                    bottom-4
                    right-4
                    transition-all
                    duration-500
                    opacity-[0.06]
                    ${service.glow}
                  `}
                >
                  <Icon
                    strokeWidth={1.2}
                    className="
                      h-[170px]
                      w-[170px]
                      text-[#2DBBC4]
                    "
                  />
                </div>

                {/* HOVER GLOW */}
                <div
                  className="
                    absolute
                    bottom-0
                    right-0
                    h-[220px]
                    w-[220px]
                    rounded-full
                    bg-[#2DBBC4]/10
                    blur-3xl
                    opacity-0
                    transition-all
                    duration-500
                    group-hover:opacity-100
                  "
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;