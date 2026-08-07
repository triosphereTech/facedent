import React from "react";
import RoundedImage from "@/components/ui/RoundedImage";
import { clinicImages } from "@/data/unsplashImages";

const OurStory = () => {
  return (
    <div>
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}

          <div>
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[2px] text-[#2DBBC4]">
              Our Story
            </p>

            <h2 className="max-w-[440px] text-[38px] font-semibold leading-[1.15] text-[#0E2A47]">
              Caring Beyond Treatment, Building Trust Every Day.
            </h2>

            <p className="mt-7 text-[16px] leading-8 text-[#6E7C87]">
              FaceDent Hospital was founded with one simple belief— exceptional
              healthcare begins by listening. Every patient receives
              personalized attention, advanced treatment planning, and
              compassionate care in an environment designed for comfort and
              confidence.
            </p>

            <p className="mt-5 text-[16px] leading-8 text-[#6E7C87]">
              From preventive dentistry to complex maxillofacial procedures, our
              multidisciplinary team combines experience, innovation, and
              precision to deliver outcomes that improve both health and quality
              of life.
            </p>

            <div className="mt-10 flex items-center gap-6">
              <div>
                <h3 className="text-[46px] font-semibold text-[#0E2A47]">
                  15+
                </h3>

                <p className="text-[15px] text-[#6E7C87]">
                  Years of Excellence
                </p>
              </div>

              <div className="h-14 w-px bg-[#dbe7ea]" />

              <div>
                <h3 className="text-[46px] font-semibold text-[#0E2A47]">
                  20K+
                </h3>

                <p className="text-[15px] text-[#6E7C87]">Happy Patients</p>
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div className="relative h-[560px]">
            <RoundedImage
              src={clinicImages.storyPrimary}
              alt="FaceDent care team"
              sizes="(min-width: 1024px) 320px, 70vw"
              className="absolute right-0 top-0 h-[360px] w-[320px] rounded-[28px]"
            />

            <RoundedImage
              src={clinicImages.storySecondary}
              alt="Modern dental treatment room"
              sizes="(min-width: 1024px) 240px, 60vw"
              className="absolute bottom-0 left-0 h-[260px] w-[240px] rounded-[24px]"
            />

            <div className="absolute bottom-8 right-20 rounded-[28px] border border-[#dbe7ea] bg-white p-6 shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#2DBBC4]" />
                  <p className="text-[15px] text-[#0E2A47]">Patient First</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#2DBBC4]" />
                  <p className="text-[15px] text-[#0E2A47]">
                    Modern Technology
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#2DBBC4]" />
                  <p className="text-[15px] text-[#0E2A47]">
                    Compassionate Care
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute right-10 top-10 -z-10 h-[420px] w-[420px] rounded-full bg-[#eef8f8]" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;
