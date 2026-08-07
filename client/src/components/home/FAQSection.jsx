"use client";

import { Mail, Phone, Plus } from "lucide-react";
import { useState } from "react";
import RoundedImage from "@/components/ui/RoundedImage";
import { clinicImages } from "@/data/unsplashImages";

const faqs = [
  {
    question: "How do I know which treatment is right for me?",
    answer:
      "Every plan starts with a consultation where we look at your teeth, your goals, and your budget together, not just what's clinically possible. You'll leave with a written plan showing the recommended options, timelines, and costs, so you can decide without pressure and come back with questions whenever you're ready.",
  },
  {
    question: "Will the procedure hurt?",
    answer:
      "Most treatments use local anesthesia and modern techniques that keep discomfort minimal, and we always talk you through what a procedure will actually feel like beforehand. For anything more involved, like implants or contouring, we discuss sedation options and give clear aftercare guidance so recovery stays predictable rather than surprising.",
  },
  {
    question: "How long does a smile makeover usually take?",
    answer:
      "It depends entirely on what's included. Whitening or minor cosmetic work can be done in a single visit, while implants or full Invisalign courses run over several months by design, since your body and bite need time to adjust properly. We map out a realistic timeline together at the consultation.",
  },
  {
    question: "Do you accept dental insurance?",
    answer:
      "We work with most major insurance providers and will help verify your coverage before any treatment begins, so there are no surprise bills. If a procedure isn't covered, our front desk team will walk you through financing plans that spread the cost over manageable monthly payments.",
  },
  {
    question: "What should I do to prepare for my first visit?",
    answer:
      "Bring a list of any medications you're taking, your insurance details if applicable, and a rough idea of what's bothering you or what you'd like to change. We'll take it from there with a full exam and photos, so you don't need to prepare anything else in advance.",
  },
  {
    question: "How do I care for my teeth after a procedure?",
    answer:
      "You'll get written aftercare instructions specific to your treatment before you leave the clinic, plus a direct line to reach us if anything feels off during recovery. Most patients also get a follow-up appointment scheduled automatically so we can check healing without you having to remember to book it.",
  },
  {
    question: "Can I reschedule or cancel an appointment?",
    answer:
      "Yes, we just ask for at least 24 hours' notice so we can offer the slot to another patient. You can reschedule directly through the confirmation link in your email or text, or call the front desk if it's easier to just talk it through with someone.",
  },
  {
    question: "Is financing available for larger treatments?",
    answer:
      "We offer interest-free payment plans on most major procedures, including implants, Invisalign, and full smile makeovers, so cost doesn't have to be the reason you delay care. The team will walk you through the exact monthly breakdown before you commit to anything.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-[400px_1fr] lg:gap-20">
          {/* LEFT — STICKY */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-[1px] w-8 bg-[#2DBBC4]/40" />
              <p className="text-[12px] font-semibold uppercase tracking-[3px] text-[#6E7C87]">
                FAQs
              </p>
            </div>

            <h2 className="text-[38px] leading-[1.05] tracking-[-1.5px] text-[#0E2A47] md:text-[44px]">
              <span className="font-semibold">Questions, </span>
              <span className="font-serif italic text-[#2DBBC4]">
                answered.
              </span>
            </h2>

            <p className="mt-5 max-w-[360px] text-[16px] leading-8 text-[#6E7C87]">
              Everything patients usually ask before their first visit. Can&apos;t
              find what you need here? Reach out directly.
            </p>

            {/* CONTACT CARD */}
            <div className="mt-10 rounded-[28px] border border-[#dbe7ea] bg-[#fafaf7] p-7">
              <RoundedImage
                src={clinicImages.faq}
                alt="FaceDent consultation room"
                sizes="(min-width: 1024px) 360px, 100vw"
                className="mb-6 h-[180px] rounded-[22px] shadow-none"
              />

              <p className="text-[14px] font-semibold uppercase tracking-[2px] text-[#0E2A47]">
                Still have a question?
              </p>

              <div className="mt-5 flex flex-col gap-4">
                <a
                  href="tel:+910000000000"
                  className="flex items-center gap-4 text-[#24384d] transition-colors hover:text-[#2DBBC4]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#dbe7ea] bg-white">
                    <Phone size={17} className="text-[#2DBBC4]" />
                  </div>
                  <span className="text-[15px] font-medium">
                    +91 00000 00000
                  </span>
                </a>

                <a
                  href="mailto:hello@facedent.com"
                  className="flex items-center gap-4 text-[#24384d] transition-colors hover:text-[#2DBBC4]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#dbe7ea] bg-white">
                    <Mail size={17} className="text-[#2DBBC4]" />
                  </div>
                  <span className="text-[15px] font-medium">
                    hello@facedent.com
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT — ACCORDION */}
          <div className="flex flex-col gap-4">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`overflow-hidden rounded-[24px] border bg-white transition-colors duration-300 ${isOpen ? "border-[#2DBBC4]/40" : "border-[#dbe7ea]"}`}
                >
                  <button
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 px-7 py-6 text-left"
                  >
                    <span
                      className={`text-[17px] font-semibold tracking-[-0.2px] transition-colors duration-300 ${isOpen ? "text-[#2DBBC4]" : "text-[#0E2A47]"}`}
                    >
                      {item.question}
                    </span>

                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${ isOpen ? "rotate-45 border-[#2DBBC4] bg-[#2DBBC4] text-white" : "border-[#dbe7ea] bg-[#fafaf7] text-[#0E2A47]" }`}
                    >
                      <Plus size={16} />
                    </div>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-7 pb-7 text-[14.5px] leading-7 text-[#5c6b78]">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
