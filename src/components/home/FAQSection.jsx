"use client";

import { useState } from "react";

import {
  ArrowRight,
  Minus,
  Plus,
  Sparkles,
} from "lucide-react";

const faqs = [
  {
    question: "What treatments does FaceDent offer?",
    answer:
      "We provide advanced dental, facial aesthetic, and maxillofacial treatments including smile design, implants, aligners, facial contouring, jaw correction, and reconstructive procedures tailored to individual patient needs.",
  },
  {
    question:
      "How do I know which treatment is right for me?",
    answer:
      "Our specialists guide you through a personalized consultation process to recommend the most suitable treatment plan.",
  },
  {
    question:
      "Is the treatment process painful?",
    answer:
      "Patient comfort is one of our priorities. Most procedures are performed using modern pain-management techniques.",
  },
  {
    question:
      "How long does each treatment take?",
    answer:
      "Treatment duration depends on the procedure and complexity, which will be explained during consultation.",
  },
  {
    question:
      "What is the recovery time like?",
    answer:
      "Recovery varies based on the treatment, but our team provides detailed aftercare guidance for faster healing.",
  },
  {
    question:
      "Are the results permanent?",
    answer:
      "Many treatments provide long-lasting or permanent results when combined with proper care and maintenance.",
  },
  {
    question:
      "Do you offer consultations?",
    answer:
      "Yes, FaceDent offers personalized consultations to evaluate your goals and treatment requirements.",
  },
];

const FAQSection = () => {
  const [activeFAQ, setActiveFAQ] = useState(0);

  return (
    <section className="bg-[#fafaf7] py-24">
      
      <div className="mx-auto max-w-7xl">
        
        <div className="grid gap-12 lg:grid-cols-[480px_1fr]">
          
          {/* LEFT SIDE */}
          <div>
            
            {/* TAG */}
            <div className="mb-6 flex items-center gap-3">
              
              <p className="text-[12px] font-semibold uppercase tracking-[3px] text-[#6E7C87]">
                FAQ
              </p>

              <div className="h-[1px] w-12 bg-[#2DBBC4]/40" />
            </div>

            {/* HEADING */}
            <h2 className="leading-[0.95] tracking-[-4px]">
              
              <span className="block text-[72px] font-semibold text-[#0E2A47]">
                Questions?
              </span>

              <span
                className="
                  mt-2
                  block
                  font-serif
                  text-[64px]
                  italic
                  text-[#2DBBC4]
                "
              >
                We’ve got answers.
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-8 max-w-[380px] text-[17px] leading-9 text-[#6E7C87]">
              Find answers to the most common questions
              about our treatments, process, and what to
              expect at FaceDent.
            </p>

            {/* CARD */}
            <div
              className="
                relative
                mt-12
                overflow-hidden
                rounded-[36px]
                border
                border-[#dbe7ea]
                bg-gradient-to-br
                from-[#f8fbfb]
                to-[#f3f7fb]
                p-10
              "
            >
              
              <div
                className="
                  flex
                  h-[240px]
                  items-center
                  justify-center
                  rounded-[28px]
                  border
                  border-[#dbe7ea]
                  bg-white/70
                "
              >
                
                <div
                  className="
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#dbe7ea]
                    bg-white
                  "
                >
                  <Sparkles
                    size={34}
                    className="text-[#2DBBC4]"
                  />
                </div>
              </div>
            </div>

            {/* CONTACT MINI */}
            <div className="mt-10 flex items-center gap-5">
              
              <button
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#dbe7ea]
                  bg-white
                  text-[#2DBBC4]
                  transition-all
                  duration-300
                  hover:bg-[#2DBBC4]
                  hover:text-white
                "
              >
                <ArrowRight size={22} />
              </button>

              <div>
                <h4 className="text-[20px] font-semibold text-[#0E2A47]">
                  Still have questions?
                </h4>

                <p className="mt-1 text-[15px] text-[#6E7C87]">
                  Contact our support team anytime.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-4">
            
            {faqs.map((faq, index) => {
              const isActive = activeFAQ === index;

              return (
                <div
                  key={index}
                  className="
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-[#dbe7ea]
                    bg-white
                    transition-all
                    duration-300
                  "
                >
                  
                  {/* HEADER */}
                  <button
                    onClick={() =>
                      setActiveFAQ(isActive ? -1 : index)
                    }
                    className="
                      flex
                      w-full
                      items-start
                      gap-5
                      px-7
                      py-7
                      text-left
                    "
                  >
                    
                    {/* ICON */}
                    <div
                      className={`
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        transition-all
                        duration-300
                        ${
                          isActive
                            ? "border-[#2DBBC4] bg-[#2DBBC4] text-white"
                            : "border-[#dbe7ea] bg-[#f8fbfb] text-[#2DBBC4]"
                        }
                      `}
                    >
                      {isActive ? (
                        <Minus size={18} />
                      ) : (
                        <Plus size={18} />
                      )}
                    </div>

                    {/* QUESTION */}
                    <div>
                      <h3 className="text-[22px] font-medium leading-8 text-[#0E2A47]">
                        {faq.question}
                      </h3>

                      {/* ANSWER */}
                      <div
                        className={`
                          overflow-hidden
                          transition-all
                          duration-500
                          ${
                            isActive
                              ? "mt-5 max-h-[300px] opacity-100"
                              : "max-h-0 opacity-0"
                          }
                        `}
                      >
                        <p className="max-w-[720px] text-[16px] leading-8 text-[#6E7C87]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div
          className="
            relative
            mt-16
            overflow-hidden
            rounded-[40px]
            border
            border-[#dbe7ea]
            bg-gradient-to-r
            from-[#f8fbfb]
            via-[#f7f8fc]
            to-[#f3f7fb]
            px-8
            py-10
          "
        >
          
          {/* GLOW */}
          <div className="absolute right-0 top-0 h-[240px] w-[240px] rounded-full bg-[#2DBBC4]/10 blur-3xl" />

          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            
            {/* LEFT */}
            <div className="flex items-center gap-8">
              
              {/* IMAGE */}
              <div
                className="
                  hidden
                  h-24
                  w-24
                  shrink-0
                  overflow-hidden
                  rounded-full
                  border
                  border-[#dbe7ea]
                  bg-white
                  lg:block
                "
              >
                <img
                  src="/patients/support.jpg"
                  alt="Support"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* TEXT */}
              <div>
                <h3 className="text-[42px] font-semibold leading-[1.1] tracking-[-2px] text-[#0E2A47]">
                  Can’t find what
                  <br />
                  you’re looking for?
                </h3>
              </div>
            </div>

            {/* CENTER */}
            <p className="max-w-[340px] text-[17px] leading-8 text-[#6E7C87]">
              Our care experts are here to help you with
              personalized answers and treatment guidance.
            </p>

            {/* BUTTON */}
            <button
              className="
                flex
                h-[58px]
                items-center
                gap-3
                rounded-full
                bg-gradient-to-r
                from-[#2DBBC4]
                to-[#0E2A47]
                px-8
                text-[15px]
                font-medium
                text-white
                transition-all
                duration-300
                hover:scale-[1.03]
              "
            >
              Contact Us
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;