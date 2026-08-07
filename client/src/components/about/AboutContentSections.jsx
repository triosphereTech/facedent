"use client";

import {
  Award,
  CheckCircle2,
  HeartHandshake,
  Microscope,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import RoundedImage from "@/components/ui/RoundedImage";
import { clinicImages } from "@/data/unsplashImages";

const values = [
  "Compassionate communication",
  "Honest treatment planning",
  "Clinical precision",
  "Long-term patient relationships",
];

const trustReasons = [
  "Clear diagnosis and transparent treatment options",
  "Experienced specialists for dental and facial care",
  "Comfort-first procedures with attentive follow-up",
  "Modern planning tools for predictable outcomes",
];

const founders = [
  {
    name: "Dr. Aarya Mehta",
    role: "Lead Maxillofacial Specialist",
    focus: "Facial reconstruction, implants, and surgical planning",
  },
  {
    name: "Dr. Rohan Shah",
    role: "Cosmetic & Restorative Dentist",
    focus: "Smile design, restorative dentistry, and patient rehabilitation",
  },
];

const SectionHeader = ({ eyebrow, title, text }) => (
  <div className="mx-auto max-w-2xl text-center">
    <p className="text-[12px] font-semibold uppercase tracking-[3px] text-[#2DBBC4]">
      {eyebrow}
    </p>
    <h2 className="mt-4 text-[32px] font-semibold leading-[1.15] tracking-[-0.5px] text-[#0E2A47] sm:text-[40px]">
      {title}
    </h2>
    {text && <p className="mt-5 text-[16px] leading-8 text-[#6E7C87]">{text}</p>}
  </div>
);

const IconCard = ({ icon: Icon, title, text }) => (
  <article className="rounded-[24px] border border-[#dbe7ea] bg-white p-7 shadow-[0_18px_40px_-32px_rgba(14,42,71,0.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_-34px_rgba(14,42,71,0.55)]">
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#eef8f8]">
      <Icon size={20} className="text-[#2DBBC4]" />
    </div>
    <h3 className="mt-6 text-[20px] font-semibold text-[#0E2A47]">{title}</h3>
    <p className="mt-3 text-[14.5px] leading-7 text-[#6E7C87]">{text}</p>
  </article>
);

const MissionVisionValues = () => {
  return (
    <section className="bg-[#fafaf7] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Purpose"
          title="Our Mission, Vision & Values"
          text="FaceDent is built around thoughtful care, precise treatment, and a calmer patient journey from consultation to recovery."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <IconCard
            icon={Target}
            title="Our Mission"
            text="To deliver advanced dental and maxillofacial care that improves health, restores function, and helps every patient feel confident in their smile."
          />
          <IconCard
            icon={Sparkles}
            title="Our Vision"
            text="To become a trusted center for integrated facial and dental care where modern technology and compassionate medicine work together."
          />
          <article className="rounded-[24px] border border-[#dbe7ea] bg-white p-7 shadow-[0_18px_40px_-32px_rgba(14,42,71,0.45)] transition-all duration-300 hover:-translate-y-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#eef8f8]">
              <HeartHandshake size={20} className="text-[#2DBBC4]" />
            </div>
            <h3 className="mt-6 text-[20px] font-semibold text-[#0E2A47]">
              Our Values
            </h3>
            <div className="mt-5 space-y-3">
              {values.map((value) => (
                <div key={value} className="flex items-center gap-3">
                  <CheckCircle2 size={17} className="shrink-0 text-[#2DBBC4]" />
                  <p className="text-[14.5px] leading-6 text-[#6E7C87]">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

const PatientTrust = () => {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <RoundedImage
          src={clinicImages.mission}
          alt="Patient consultation at FaceDent"
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="h-[360px] rounded-[28px] lg:h-[520px]"
        />

        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[3px] text-[#2DBBC4]">
            Why Patients Trust FaceDent
          </p>
          <h2 className="mt-4 max-w-[560px] text-[34px] font-semibold leading-[1.15] tracking-[-0.5px] text-[#0E2A47] sm:text-[42px]">
            Calm guidance, careful diagnosis, and care that stays personal.
          </h2>
          <p className="mt-6 max-w-[620px] text-[16px] leading-8 text-[#6E7C87]">
            Patients choose FaceDent because every treatment plan is explained
            clearly, designed carefully, and supported by a team that values
            comfort as much as clinical results.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {trustReasons.map((reason) => (
              <div
                key={reason}
                className="rounded-[20px] border border-[#dbe7ea] bg-[#fafaf7] p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_16px_35px_-30px_rgba(14,42,71,0.5)]"
              >
                <ShieldCheck size={19} className="text-[#2DBBC4]" />
                <p className="mt-3 text-[14.5px] leading-7 text-[#0E2A47]">
                  {reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TechnologySection = () => {
  const features = [
    "Digital treatment planning",
    "Modern surgical suites",
    "Sterile clinical workflows",
    "Comfort-focused recovery spaces",
  ];

  return (
    <section className="bg-[#fafaf7] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[3px] text-[#2DBBC4]">
            Advanced Technology & Infrastructure
          </p>
          <h2 className="mt-4 max-w-[560px] text-[34px] font-semibold leading-[1.15] tracking-[-0.5px] text-[#0E2A47] sm:text-[42px]">
            Built for precision, comfort, and predictable care.
          </h2>
          <p className="mt-6 max-w-[600px] text-[16px] leading-8 text-[#6E7C87]">
            Our infrastructure supports everything from preventive dentistry to
            complex facial procedures with cleaner planning, better visibility,
            and a smoother patient experience.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white">
                  <Microscope size={16} className="text-[#2DBBC4]" />
                </div>
                <p className="text-[15px] font-medium text-[#0E2A47]">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>

        <RoundedImage
          src={clinicImages.technology}
          alt="Advanced FaceDent clinical infrastructure"
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="h-[360px] rounded-[28px] lg:h-[500px]"
        />
      </div>
    </section>
  );
};

const FoundersSection = () => {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Leadership"
          title="Meet Our Founders / Lead Specialists"
          text="Our specialists bring clinical experience, gentle communication, and a shared commitment to natural, functional outcomes."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <RoundedImage
            src={clinicImages.founders}
            alt="FaceDent lead specialists"
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="h-[360px] rounded-[28px] lg:h-[480px]"
          />

          <div className="grid gap-5">
            {founders.map((doctor) => (
              <article
                key={doctor.name}
                className="rounded-[24px] border border-[#dbe7ea] bg-[#fafaf7] p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_42px_-32px_rgba(14,42,71,0.5)]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white">
                    <Users size={19} className="text-[#2DBBC4]" />
                  </div>
                  <div>
                    <h3 className="text-[21px] font-semibold text-[#0E2A47]">
                      {doctor.name}
                    </h3>
                    <p className="mt-1 text-[14px] font-medium text-[#2DBBC4]">
                      {doctor.role}
                    </p>
                    <p className="mt-3 text-[14.5px] leading-7 text-[#6E7C87]">
                      {doctor.focus}
                    </p>
                  </div>
                </div>
              </article>
            ))}

            <div className="rounded-[24px] border border-[#dbe7ea] bg-white p-7 shadow-[0_18px_42px_-34px_rgba(14,42,71,0.45)]">
              <Award size={22} className="text-[#2DBBC4]" />
              <p className="mt-4 text-[15px] leading-7 text-[#6E7C87]">
                Together, the team focuses on treatment plans that are medically
                sound, aesthetically balanced, and easy for patients to
                understand before care begins.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutContentSections = () => {
  return (
    <>
      <MissionVisionValues />
      <PatientTrust />
      <TechnologySection />
      <FoundersSection />
    </>
  );
};

export default AboutContentSections;
