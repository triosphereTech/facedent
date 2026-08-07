"use client";

import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Heart,
  Quote,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Aarohi Shah",
    treatment: "Smile Makeover",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop",
    highlight: "A smile that changed how I show up.",
    review:
      "I put off fixing my smile for years because I was nervous about how it would feel to sit through the process. From the very first consultation, the team at FaceDent walked me through every step before it happened, so nothing felt sudden or scary. The clinic itself felt calm rather than clinical, and my dentist kept checking in on comfort, not just progress. Six months later I catch myself smiling in photos without thinking about it, which sounds small but has genuinely changed how I carry myself at work and with new people.",
  },
  {
    name: "Rahul Mehta",
    treatment: "Facial Contouring",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
    highlight: "Results that still look like me, just sharper.",
    review:
      "My biggest worry going in was ending up looking 'done' rather than like a better version of myself. The consultation was honest about what contouring could and couldn't achieve on my face shape, which I appreciated more than a sales pitch. The recovery was easier than I expected, and the follow-up appointments meant small adjustments were caught early instead of becoming permanent regrets. A year on, people ask if I've been sleeping better or working out more, not what I had done, which is exactly the outcome I wanted.",
  },
  {
    name: "Nida Khan",
    treatment: "Dental Implants",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=300&auto=format&fit=crop",
    highlight: "Chewing without thinking about it again.",
    review:
      "I lost a molar in an accident and lived with a gap for almost two years out of fear of the implant process. The team scanned everything digitally first, so I could actually see the plan before agreeing to anything, which took away most of the anxiety. The placement itself was far less uncomfortable than the dentist visits I'd had as a kid. What surprised me most is how quickly I stopped noticing the implant was there at all. It just became part of my mouth, the way a real tooth would.",
  },
  {
    name: "Karan Desai",
    treatment: "Teeth Whitening",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    highlight: "Coffee-proof confidence, finally.",
    review:
      "I've tried every whitening strip and kit sold online and always ended up disappointed with the uneven results and the sensitivity afterward. The in-clinic session was quick, the staff explained exactly why my teeth had yellowed unevenly in the first place, and they matched a shade that still looked natural under normal light rather than blindingly white. Three months in, my morning coffee habit hasn't undone any of it, and that's the part that actually convinced me it was worth doing properly.",
  },
  {
    name: "Priya Nair",
    treatment: "Invisalign",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=300&auto=format&fit=crop",
    highlight: "Straight teeth without anyone noticing the process.",
    review:
      "As an adult, the idea of visible braces at client meetings was a dealbreaker for me, so Invisalign was really the only option I'd consider. The FaceDent team mapped out the full tray sequence upfront, so I always knew how many months were left and what my teeth would look like at each stage. The aligners were more comfortable than I braced myself for, and swapping trays every two weeks became a routine rather than a chore. My bite feels noticeably different now, and nobody at work ever clocked that I was mid-treatment.",
  },
  {
    name: "Vivaan Kapoor",
    treatment: "Gum Contouring",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300&auto=format&fit=crop",
    highlight: "Balanced my smile in one short visit.",
    review:
      "I never realized how much a 'gummy smile' was affecting how self-conscious I felt until a friend mentioned contouring as an option. The procedure itself was over faster than I expected, done under local anesthetic with barely any downtime. What stood out was how the dentist actually sketched the proposed gumline on a photo of my smile beforehand, so there were no surprises in the mirror afterward. Healing took about a week, and now my smile finally looks proportionate the way I always pictured it could.",
  },
];

const stats = [
  {
    title: "4.9/5",
    desc: "Average Rating from 1,200+ Reviews",
    icon: Star,
  },
  {
    title: "98%",
    desc: "Patients Recommend FaceDent",
    icon: Users,
  },
  {
    title: "15+",
    desc: "Years of Trusted Care",
    icon: ShieldCheck,
  },
  {
    title: "20K+",
    desc: "Happy Patients & Counting",
    icon: Heart,
  },
];

const AUTO_SLIDE_MS = 4000;

const TestimonialsSection = () => {
  const scrollRef = useRef(null);
  const [expanded, setExpanded] = useState({});
  const [isPaused, setIsPaused] = useState(false);

  const toggleExpanded = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const getStep = () => {
    const container = scrollRef.current;
    if (!container) return 400;
    const card = container.querySelector("[data-card]");
    const gap = 24;
    return card ? card.offsetWidth + gap : 400;
  };

  const slide = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    const step = getStep();

    const atEnd =
      container.scrollLeft + container.clientWidth >=
      container.scrollWidth - 10;
    const atStart = container.scrollLeft <= 10;

    if (direction === "next") {
      if (atEnd) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: step, behavior: "smooth" });
      }
    } else {
      if (atStart) {
        container.scrollTo({
          left: container.scrollWidth,
          behavior: "smooth",
        });
      } else {
        container.scrollBy({ left: -step, behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      slide("next");
    }, AUTO_SLIDE_MS);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPaused]);

  return (
    <section className="bg-[#fafaf7] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* HEADING — CENTERED */}
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <div className="mb-5 flex items-center gap-3">
            <div className="h-[1px] w-8 bg-[#2DBBC4]/40" />
            <p className="text-[12px] font-semibold uppercase tracking-[3px] text-[#6E7C87]">
              Testimonials
            </p>
            <div className="h-[1px] w-8 bg-[#2DBBC4]/40" />
          </div>

          <h2 className="text-[38px] leading-[1.05] tracking-[-1.5px] text-[#0E2A47] md:text-[44px]">
            <span className="font-semibold">Real stories. </span>
            <span className="font-serif italic text-[#2DBBC4]">
              Real confidence.
            </span>
          </h2>

          <p className="mt-5 text-[16px] leading-8 text-[#6E7C87]">
            Every smile transformation reflects the precision, compassion,
            and care we bring to each patient experience.
          </p>
        </div>

        {/* CAROUSEL */}
        <div
          className="relative mt-16"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* ARROWS */}
          <button
            aria-label="Previous testimonials"
            onClick={() => slide("prev")}
            className="absolute left-0 top-1/2 z-10 hidden h-12 w-12 -translate-x-6 -translate-y-1/2 items-center justify-center rounded-full border border-[#dbe7ea] bg-white text-[#0E2A47] shadow-sm transition-all duration-300 hover:bg-[#0E2A47] hover:text-white md:flex"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            aria-label="Next testimonials"
            onClick={() => slide("next")}
            className="absolute right-0 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 translate-x-6 items-center justify-center rounded-full border border-[#dbe7ea] bg-white text-[#0E2A47] shadow-sm transition-all duration-300 hover:bg-[#0E2A47] hover:text-white md:flex"
          >
            <ChevronRight size={20} />
          </button>

          {/* TRACK */}
          <div
            ref={scrollRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.map((item, index) => {
              const isOpen = !!expanded[index];

              return (
                <div
                  key={index}
                  data-card
                  className="group relative flex h-[440px] w-[85%] shrink-0 snap-start flex-col overflow-hidden rounded-[28px] border border-[#dbe7ea] bg-white p-7 transition-shadow duration-300 hover:shadow-[0_20px_45px_-25px_rgba(14,42,71,0.35)] sm:w-[360px]"
                >
                  {/* TOP */}
                  <div className="flex items-center justify-between">
                    <Quote
                      size={28}
                      className="fill-[#2DBBC4] text-[#2DBBC4] opacity-80"
                    />
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={13}
                          className="fill-[#2DBBC4] text-[#2DBBC4]"
                        />
                      ))}
                    </div>
                  </div>

                  {/* HIGHLIGHT — what the review is about */}
                  <p className="mt-5 font-serif text-[19px] italic leading-7 text-[#0E2A47]">
                    “{item.highlight}”
                  </p>

                  {/* DESCRIPTION */}
                  <div className="relative mt-4 flex-1 overflow-hidden">
                    <div
                      className={
                        isOpen
                          ? "h-full overflow-y-auto pr-1 [scrollbar-width:thin]"
                          : "h-full overflow-hidden"
                      }
                    >
                      <p className="text-[14.5px] leading-7 text-[#5c6b78]">
                        {item.review}
                      </p>
                    </div>

                    {!isOpen && (
                      <div
                        className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"
                      />
                    )}
                  </div>

                  {/* SHOW MORE / LESS */}
                  <button
                    onClick={() => toggleExpanded(index)}
                    className="mt-2 flex w-fit items-center gap-1 text-[13px] font-semibold text-[#2DBBC4] transition-colors hover:text-[#0E2A47]"
                  >
                    {isOpen ? "Show less" : "Show more"}
                    <ChevronDown
                      size={15}
                      className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* DIVIDER */}
                  <div className="mt-5 h-[1px] w-full bg-[#eef2f4]" />

                  {/* USER */}
                  <div className="mt-5 flex items-center gap-4">
                    <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full border border-[#dbe7ea]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={48}
                        height={48}
                        sizes="48px"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-[15px] font-semibold tracking-[0.2px] text-[#0E2A47]">
                        {item.name}
                      </h4>
                      <p className="text-[13px] text-[#6E7C87]">
                        {item.treatment}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CENTER DIVIDER */}
        <div className="my-12 flex items-center justify-center gap-6">
          <div className="h-[1px] w-full max-w-[280px] bg-[#dbe7ea]" />
          <Quote
            size={30}
            className="fill-[#2DBBC4] text-[#2DBBC4] opacity-80"
          />
          <div className="h-[1px] w-full max-w-[280px] bg-[#dbe7ea]" />
        </div>

        {/* STATS BAR */}
        <div
          className="grid gap-6 rounded-[36px] border border-[#dbe7ea] bg-gradient-to-r from-[#f8fbfb] to-[#f3f8fb] p-8 md:grid-cols-2 xl:grid-cols-4"
        >
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="flex items-center gap-5 xl:border-r xl:border-[#dbe7ea] xl:pr-6 last:border-r-0"
              >
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-[#dbe7ea] bg-white">
                  <Icon size={32} strokeWidth={1.8} className="text-[#2DBBC4]" />
                </div>
                <div>
                  <h3 className="text-[42px] font-semibold tracking-[-2px] text-[#0E2A47]">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-[180px] text-[15px] leading-7 text-[#6E7C87]">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
