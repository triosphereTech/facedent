"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/images/Brand/Logo.png"

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#fafaf7] pt-10 pb-6">
      
      <div className="mx-auto max-w-7xl">
        
        {/* MAIN FOOTER */}
        <div
          className="overflow-hidden rounded-[40px] border border-[#dbe7ea] bg-white"
        >
          
          {/* TOP */}
          <div className="grid gap-12 px-8 py-12 lg:grid-cols-[1.2fr_1fr_1fr_1fr_1.2fr]">
            
            {/* BRAND */}
            <div>
              
              {/* LOGO */}
              <div className="flex items-center gap-4">
                
                <div
                  className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-[#dbe7ea] bg-white"
                >
                  <Image
                    src={Logo}
                    alt="FaceDent"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-[34px] font-semibold tracking-[-1px] text-[#0E2A47]">
                    <span className="text-[#2DBBC4]">
                      Face
                    </span>
                    Dent
                  </h3>

                  {/* <p className="text-[13px] text-[#6E7C87]">
                    Advanced Dental & Facial Care
                  </p> */}
                </div>
              </div>

              {/* DESCRIPTION */}
              <p className="mt-7 max-w-[320px] text-[15px] leading-8 text-[#6E7C87]">
                FaceDent delivers modern dental and
                maxillofacial treatments with precision,
                compassion, and patient-first care.
              </p>

              {/* SOCIAL */}
              <div className="mt-8 flex items-center gap-3">
                
                {[
                  FaInstagram,
                  FaFacebookF,
                  FaTwitter,
                  FaLinkedinIn,
                ].map((Icon, index) => (
                  <button
                    key={index}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[#dbe7ea] bg-[#f8fbfb] text-[#0E2A47] transition-all duration-300 hover:border-[#2DBBC4] hover:bg-[#2DBBC4] hover:text-white"
                  >
                    <Icon size={16} />
                  </button>
                ))}
              </div>
            </div>

            {/* TREATMENTS */}
            <div>
              
              <div
                className="mb-6 inline-flex rounded-full bg-[#f3f8f8] px-4 py-2"
              >
                <p className="text-[13px] font-medium text-[#0E2A47]">
                  Treatments
                </p>
              </div>

              <div className="flex flex-col gap-4">
                
                {[
                  "Dental Implants",
                  "Smile Design",
                  "Teeth Whitening",
                  "Orthodontics",
                  "Facial Surgery",
                  "Jaw Correction",
                ].map((item, index) => (
                  <Link
                    key={index}
                    href="/"
                    className="w-fit text-[15px] text-[#6E7C87] transition-all duration-300 hover:text-[#2DBBC4]"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            {/* CLINIC */}
            <div>
              
              <div
                className="mb-6 inline-flex rounded-full bg-[#f3f8f8] px-4 py-2"
              >
                <p className="text-[13px] font-medium text-[#0E2A47]">
                  Clinic
                </p>
              </div>

              <div className="flex flex-col gap-4">
                
                {[
                  "About Us",
                  "Our Doctors",
                  "Testimonials",
                  "Gallery",
                  "FAQs",
                ].map((item, index) => (
                  <Link
                    key={index}
                    href="/"
                    className="w-fit text-[15px] text-[#6E7C87] transition-all duration-300 hover:text-[#2DBBC4]"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            {/* PATIENTS */}
            <div>
              
              <div
                className="mb-6 inline-flex rounded-full bg-[#f3f8f8] px-4 py-2"
              >
                <p className="text-[13px] font-medium text-[#0E2A47]">
                  Patients
                </p>
              </div>

              <div className="flex flex-col gap-4">
                
                {[
                  "Book Appointment",
                  "Patient Stories",
                  "Insurance Support",
                  "Consultation",
                  "Care Guidelines",
                ].map((item, index) => (
                  <Link
                    key={index}
                    href="/"
                    className="w-fit text-[15px] text-[#6E7C87] transition-all duration-300 hover:text-[#2DBBC4]"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            {/* CONTACT */}
            <div>
              
              <div
                className="mb-6 inline-flex rounded-full bg-[#f3f8f8] px-4 py-2"
              >
                <p className="text-[13px] font-medium text-[#0E2A47]">
                  Contact Us
                </p>
              </div>

              <div className="flex flex-col gap-5">
                
                {/* ADDRESS */}
                <div className="flex items-start gap-4">
                  
                  <div
                    className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f3f8f8]"
                  >
                    <MapPin
                      size={18}
                      className="text-[#2DBBC4]"
                    />
                  </div>

                  <p className="text-[15px] leading-7 text-[#6E7C87]">
                    FaceDent Clinic,
                    <br />
                    Vadodara, Gujarat
                  </p>
                </div>

                {/* PHONE */}
                <div className="flex items-center gap-4">
                  
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f3f8f8]"
                  >
                    <Phone
                      size={18}
                      className="text-[#2DBBC4]"
                    />
                  </div>

                  <p className="text-[15px] text-[#6E7C87]">
                    +91 98765 43210
                  </p>
                </div>

                {/* EMAIL */}
                <div className="flex items-center gap-4">
                  
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f3f8f8]"
                  >
                    <Mail
                      size={18}
                      className="text-[#2DBBC4]"
                    />
                  </div>

                  <p className="text-[15px] text-[#6E7C87]">
                    hello@facedent.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM */}
          <div
            className="flex flex-col gap-5 border-t border-[#dbe7ea] px-8 py-6 lg:flex-row lg:items-center lg:justify-between"
          >
            
            {/* LEFT */}
            <p className="text-[14px] text-[#6E7C87]">
              © 2026 FaceDent. All rights reserved.
            </p>

            {/* CENTER */}
            <div className="flex flex-wrap items-center gap-6">
              
              {[
                "Privacy Policy",
                "Terms & Conditions",
                "Cookies",
              ].map((item, index) => (
                <Link
                  key={index}
                  href="/"
                  className="text-[14px] text-[#6E7C87] transition-all duration-300 hover:text-[#2DBBC4]"
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-3">
              
              <div
                className="h-3 w-3 rounded-full bg-[#2DBBC4]"
              />

              <p className="text-[14px] text-[#6E7C87]">
                Designed for confident smiles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;