"use client";

import {
  ArrowRight,
  Heart,
  Quote,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";

const testimonials = [
  {
    name: "Aarohi Shah",
    treatment: "Smile Makeover",
    image: "/patients/patient-1.jpg",
    review:
      "The care and precision at FaceDent completely transformed my smile and confidence.",
    highlight: "confidence.",
  },
  {
    name: "Rahul Mehta",
    treatment: "Facial Contouring",
    image: "/patients/patient-2.jpg",
    review:
      "From consultation to final results, the experience felt smooth, modern, and reassuring.",
    highlight: "smooth, modern, and reassuring.",
  },
  {
    name: "Nida Khan",
    treatment: "Dental Implants",
    image: "/patients/patient-3.jpg",
    review:
      "The team was incredibly professional and the results were beyond what I imagined.",
    highlight: "beyond what I imagined.",
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

const TestimonialsSection = () => {
  return (
    <section className="bg-[#fafaf7] py-24">
      
      <div className="mx-auto max-w-7xl">
        
        {/* TOP */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          
          {/* LEFT */}
          <div>
            
            <div className="mb-6 flex items-center gap-3">
              <p className="text-[12px] font-semibold uppercase tracking-[3px] text-[#6E7C87]">
                Testimonials
              </p>

              <div className="h-[1px] w-12 bg-[#2DBBC4]/40" />
            </div>

            <h2 className="text-[72px] leading-[0.95] tracking-[-4px] text-[#0E2A47]">
              <span className="font-semibold">
                Real stories.
              </span>

              <br />

              <span
                className="
                  font-serif
                  italic
                  text-[#2DBBC4]
                "
              >
                Real confidence.
              </span>
            </h2>
          </div>

          {/* RIGHT */}
          <div>
            <p className="max-w-[420px] text-[18px] leading-9 text-[#6E7C87]">
              Every smile transformation reflects the
              precision, compassion, and care we bring to
              each patient experience.
            </p>

            <button
              className="
                mt-10
                flex
                items-center
                gap-4
                text-[#0E2A47]
                transition-all
                duration-300
                hover:translate-x-1
              "
            >
              
              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#dbe7ea]
                  bg-white
                "
              >
                <ArrowRight size={20} />
              </div>

              <span className="text-[16px] font-medium">
                View All Reviews
              </span>
            </button>
          </div>
        </div>

        {/* TESTIMONIAL CARDS */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-[#dbe7ea]
                bg-white
                p-8
                transition-all
                duration-500
                hover:-translate-y-2
              "
            >
              
              {/* TOP */}
              <div className="flex items-center justify-between">
                
                <Quote
                  size={34}
                  className="
                    fill-[#2DBBC4]
                    text-[#2DBBC4]
                    opacity-80
                  "
                />

                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={15}
                      className="
                        fill-[#2DBBC4]
                        text-[#2DBBC4]
                      "
                    />
                  ))}
                </div>
              </div>

              {/* CONTENT */}
              <div className="mt-10 flex gap-5">
                
                {/* IMAGE */}
                <div
                  className="
                    h-24
                    w-24
                    shrink-0
                    overflow-hidden
                    rounded-full
                    border
                    border-[#dbe7ea]
                  "
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* REVIEW */}
                <div>
                  <p className="text-[17px] leading-9 text-[#24384d]">
                    {item.review.split(item.highlight)[0]}

                    <span
                      className="
                        font-serif
                        italic
                        text-[#2DBBC4]
                      "
                    >
                      {item.highlight}
                    </span>
                  </p>

                  <div className="mt-6 h-[2px] w-10 bg-[#2DBBC4]/30" />

                  <h4 className="mt-5 text-[18px] font-semibold tracking-[0.5px] text-[#0E2A47]">
                    {item.name}
                  </h4>

                  <p className="mt-1 text-[15px] text-[#6E7C87]">
                    {item.treatment}
                  </p>
                </div>
              </div>

              {/* HOVER GLOW */}
              <div
                className="
                  absolute
                  bottom-0
                  right-0
                  h-[180px]
                  w-[180px]
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
          ))}
        </div>

        {/* CENTER DIVIDER */}
        <div className="my-12 flex items-center justify-center gap-6">
          
          <div className="h-[1px] w-full max-w-[280px] bg-[#dbe7ea]" />

          <Quote
            size={30}
            className="
              fill-[#2DBBC4]
              text-[#2DBBC4]
              opacity-80
            "
          />

          <div className="h-[1px] w-full max-w-[280px] bg-[#dbe7ea]" />
        </div>

        {/* STATS BAR */}
        <div
          className="
            grid
            gap-6
            rounded-[36px]
            border
            border-[#dbe7ea]
            bg-gradient-to-r
            from-[#f8fbfb]
            to-[#f3f8fb]
            p-8
            md:grid-cols-2
            xl:grid-cols-4
          "
        >
          
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  flex
                  items-center
                  gap-5
                  xl:border-r
                  xl:border-[#dbe7ea]
                  xl:pr-6
                  last:border-r-0
                "
              >
                
                {/* ICON */}
                <div
                  className="
                    flex
                    h-20
                    w-20
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#dbe7ea]
                    bg-white
                  "
                >
                  <Icon
                    size={32}
                    strokeWidth={1.8}
                    className="text-[#2DBBC4]"
                  />
                </div>

                {/* TEXT */}
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