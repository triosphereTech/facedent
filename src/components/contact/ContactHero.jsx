"use client";

import { useState } from "react";
import { HiOutlinePhone, HiOutlineEnvelope, HiOutlinePaperAirplane, HiChevronDown } from "react-icons/hi2";

const SERVICE_OPTIONS = [
  "General Dentistry",
  "Cosmetic Dentistry",
  "Dental Implants",
  "Root Canal Treatment",
  "Orthodontics",
  "Pediatric Dentistry",
  "Oral & Maxillofacial Surgery",
  "TMJ & Jaw Disorders",
  "Facial Aesthetic Procedures",
  "Emergency Dental Care",
];

const TIMEFRAME_OPTIONS = [
  "As soon as possible",
  "Within a week",
  "Within a month",
  "Just exploring options",
];

const ContactHero = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    timeframe: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hook this up to your form handler / API route
    console.log(form);
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1920&q=80"
          alt="FaceDent clinic reception"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-white/85 backdrop-blur-xs" />
      </div>

      <div className="mx-auto max-w-7xl px-5 pt-36 pb-20 sm:px-8 sm:pt-40 sm:pb-24 lg:pt-44">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-2 lg:gap-10">
          {/* Left content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#207589]">
              Get in Touch
            </p>
            <h1 className="mt-4 text-[30px] font-semibold leading-tight text-[#20181d] sm:text-[38px]">
              We'd love to hear from you
            </h1>
            <p className="mt-4 max-w-md text-[15px] leading-7 text-black/60 sm:text-[16px]">
              Have a question about a treatment or want to book a consultation?
              Reach out to our team directly or send us a message and we'll get
              back to you shortly.
            </p>

            <div className="mt-9 space-y-5">
              <a
                href="tel:+919999999999"
                className="flex items-center gap-4 rounded-[16px] border border-black/8 bg-white/70 p-4 backdrop-blur-sm transition-colors duration-200 hover:border-[#207589]/30"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#207589]/10 text-[#207589]">
                  <HiOutlinePhone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[13px] text-black/50">Call us</p>
                  <p className="text-[15px] font-semibold text-[#20181d]">
                    +91 99999 99999
                  </p>
                </div>
              </a>

              <a
                href="mailto:info@facedent.com"
                className="flex items-center gap-4 rounded-[16px] border border-black/8 bg-white/70 p-4 backdrop-blur-sm transition-colors duration-200 hover:border-[#207589]/30"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#207589]/10 text-[#207589]">
                  <HiOutlineEnvelope className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[13px] text-black/50">Email us</p>
                  <p className="text-[15px] font-semibold text-[#20181d]">
                    info@facedent.com
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Right form */}
          <div className="rounded-[24px] border border-black/8 bg-white p-6 shadow-[0_24px_70px_rgba(32,24,29,0.10)] sm:p-8">
            <h2 className="text-[20px] font-semibold text-[#20181d] sm:text-[22px]">
              Send us a message
            </h2>
            <p className="mt-1.5 text-[14px] leading-6 text-black/55">
              Fill in your details and we'll respond within one business day.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-[13px] font-medium text-black/60">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="mt-1.5 w-full rounded-[12px] border border-black/12 bg-[#fbfaf8] px-4 py-3 text-[14px] text-[#20181d] outline-none transition-colors duration-200 focus:border-[#207589]"
                  />
                </div>
                <div>
                  <label className="text-[13px] font-medium text-black/60">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Your phone"
                    className="mt-1.5 w-full rounded-[12px] border border-black/12 bg-[#fbfaf8] px-4 py-3 text-[14px] text-[#20181d] outline-none transition-colors duration-200 focus:border-[#207589]"
                  />
                </div>
              </div>

              <div>
                <label className="text-[13px] font-medium text-black/60">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="mt-1.5 w-full rounded-[12px] border border-black/12 bg-[#fbfaf8] px-4 py-3 text-[14px] text-[#20181d] outline-none transition-colors duration-200 focus:border-[#207589]"
                />
              </div>

              <div>
                <label className="text-[13px] font-medium text-black/60">Type of Service Needed</label>
                <div className="relative mt-1.5">
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                    className="w-full appearance-none rounded-[12px] border border-black/12 bg-[#fbfaf8] px-4 py-3 text-[14px] text-[#20181d] outline-none transition-colors duration-200 focus:border-[#207589]"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {SERVICE_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <HiChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-black/40" />
                </div>
              </div>

              <div>
                <label className="text-[13px] font-medium text-black/60">
                  When Are You Looking to Consult?
                </label>
                <div className="mt-2.5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {TIMEFRAME_OPTIONS.map((option) => (
                    <label
                      key={option}
                      className={`flex cursor-pointer items-center gap-2.5 rounded-[12px] border px-4 py-3 text-[13.5px] transition-colors duration-200 ${
                        form.timeframe === option
                          ? "border-[#207589] bg-[#207589]/8 text-[#20181d]"
                          : "border-black/12 bg-[#fbfaf8] text-black/65"
                      }`}
                    >
                      <input
                        type="radio"
                        name="timeframe"
                        value={option}
                        checked={form.timeframe === option}
                        onChange={handleChange}
                        required
                        className="h-3.5 w-3.5 accent-[#207589]"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-[13px] font-medium text-black/60">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell us how we can help"
                  className="mt-1.5 w-full resize-none rounded-[12px] border border-black/12 bg-[#fbfaf8] px-4 py-3 text-[14px] text-[#20181d] outline-none transition-colors duration-200 focus:border-[#207589]"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#207589] px-6 py-3.5 text-[14px] font-semibold text-white transition-colors duration-200 hover:bg-[#185c6b] sm:w-auto"
              >
                Send Message
                <HiOutlinePaperAirplane className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;