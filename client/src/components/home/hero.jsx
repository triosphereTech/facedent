"use client";

import {
  ArrowRight,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { clinicImages } from "@/data/unsplashImages";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-36 pb-20">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 right-0 h-[420px] w-[420px] rounded-full bg-[#2DBBC4]/10 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        
        {/* HERO CONTAINER */}
        <div className="relative overflow-hidden rounded-[40px]  bg-white">
          
          {/* CURVE LINES */}
          <div className="absolute -right-40 top-[-120px] h-[700px] w-[700px] rounded-full border border-[#e6f1f2]" />

          <div className="absolute -right-24 top-[-60px] h-[620px] w-[620px] rounded-full border border-[#edf5f6]" />

          <div className="relative z-10 grid min-h-[760px] items-center lg:grid-cols-2">
            
            {/* LEFT SIDE */}
            <div className="px-8 py-16 sm:px-10 lg:px-14">
              
              {/* TAG */}
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#dbe7ea] bg-[#f8fbfb] px-4 py-2">
                <Sparkles
                  size={16}
                  className="text-[#2DBBC4]"
                />

                <span className="text-sm font-medium text-[#0E2A47]">
                  Advanced Dental Care
                </span>
              </div>

              {/* HEADING */}
              <h1 className="max-w-[560px] text-[42px] font-semibold leading-[1.1] tracking-[-2px] text-[#0E2A47] sm:text-[52px]">
                Passionate About
                <br />
                Care. Dedicated to
                <br />
                Changing Lives.
              </h1>

              {/* DESCRIPTION */}
              <p className="mt-7 max-w-[560px] text-[16px] leading-8 text-[#6E7C87]">
                At FaceDent, we combine expertise, innovation,
                and compassion to deliver exceptional dental and
                facial care that enhances confidence, comfort,
                and overall quality of life.
              </p>

              {/* BUTTONS */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                
                <button className="flex h-[54px] items-center gap-2 rounded-full bg-gradient-to-r from-[#2DBBC4] to-[#0E2A47] px-7 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02]">
                  Our Story
                  <ArrowRight size={17} />
                </button>

                <button className="h-[54px] rounded-full border border-[#dbe7ea] bg-white px-7 text-sm font-medium text-[#0E2A47] transition-all duration-300 hover:border-[#2DBBC4] hover:text-[#2DBBC4]">
                  Book Consultation
                </button>
              </div>

              {/* STATS */}
              <div className="mt-16 grid grid-cols-3 gap-6">
                
                {/* ITEM */}
                <div className="border-r border-[#e8eff0] pr-4">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#dbe7ea] bg-[#f8fbfb]">
                    <HeartHandshake
                      size={20}
                      className="text-[#2DBBC4]"
                    />
                  </div>

                  <h3 className="text-[34px] font-semibold text-[#0E2A47]">
                    15+
                  </h3>

                  <p className="mt-1 text-sm text-[#7B8790]">
                    Years Experience
                  </p>
                </div>

                {/* ITEM */}
                <div className="border-r border-[#e8eff0] px-2">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#dbe7ea] bg-[#f8fbfb]">
                    <ShieldCheck
                      size={20}
                      className="text-[#2DBBC4]"
                    />
                  </div>

                  <h3 className="text-[34px] font-semibold text-[#0E2A47]">
                    20K+
                  </h3>

                  <p className="mt-1 text-sm text-[#7B8790]">
                    Happy Patients
                  </p>
                </div>

                {/* ITEM */}
                <div className="pl-2">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#dbe7ea] bg-[#f8fbfb]">
                    <Sparkles
                      size={20}
                      className="text-[#2DBBC4]"
                    />
                  </div>

                  <h3 className="text-[34px] font-semibold text-[#0E2A47]">
                    10K+
                  </h3>

                  <p className="mt-1 text-sm text-[#7B8790]">
                    Treatments Done
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="relative flex h-full items-end justify-center">
              
              {/* IMAGE */}
              <Image
                src={clinicImages.hero}
                alt="FaceDent Doctors"
                width={720}
                height={720}
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="relative z-10 h-[520px] w-full max-w-[620px] rounded-[32px] border border-[#dbe7ea] object-cover shadow-[0_24px_60px_-35px_rgba(14,42,71,0.45)] transition-transform duration-500 hover:scale-[1.02] lg:h-[640px]"
              />

              {/* FLOATING CARD */}
              <div className="absolute bottom-10 left-4 z-20 w-[320px] rounded-[28px] border border-[#dbe7ea] bg-white/90 p-5 shadow-[0_15px_40px_rgba(15,42,71,0.08)] backdrop-blur-xl">
                
                <div className="flex gap-4">
                  
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f4fbfc]">
                    <HeartHandshake
                      size={24}
                      className="text-[#2DBBC4]"
                    />
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-[#0E2A47]">
                      Our Mission
                    </h4>

                    <p className="mt-2 text-sm leading-7 text-[#6E7C87]">
                      Delivering world-class care with advanced
                      technology and a patient-first approach.
                    </p>
                  </div>
                </div>
              </div>

              {/* BRAND */}
              <div className="absolute right-10 top-12 hidden lg:block">
                
                <div className="flex items-center gap-3">
                  
                  <div className="h-14 w-14 overflow-hidden rounded-full border border-[#dbe7ea] bg-white">
                    <Image
                      src="/images/Brand/Logo.png"
                      alt="FaceDent"
                      width={56}
                      height={56}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="text-[28px] font-semibold tracking-[-1px] text-[#0E2A47]">
                      <span className="text-[#2DBBC4]">
                        Face
                      </span>
                      Dent
                    </h3>

                    <p className="text-sm leading-6 text-[#6E7C87]">
                      Advanced Care.
                      <br />
                      Natural Results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM SHAPE */}
          {/* <div className="absolute bottom-0 left-0 h-[120px] w-full rounded-t-[100px] bg-gradient-to-r from-[#f7fbfb] to-[#eef7f8]" /> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
