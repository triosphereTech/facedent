"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import Image from "next/image";
import Logo from "../../../public/images/Brand/Logo.png"

const Navbar = () => {
  return (
    <header className="w-full flex justify-center px-4 sm:px-6 lg:px-8 pt-5 absolute top-0 left-0 z-50">
      <nav
        className="
          w-full 
          max-w-7xl 
          h-[86px]
          bg-white/70
          backdrop-blur-xl
          border border-white/40
          rounded-[30px]
          px-5 lg:px-8
          flex items-center justify-between
          shadow-[0_8px_30px_rgba(15,45,75,0.06)]
        "
      >
        {/* LEFT SIDE */}
        <Link href="/" className="flex items-center gap-3 group">
          
          {/* LOGO */}
          <div
            className="
              w-[58px]
              h-[58px]
              rounded-full
              overflow-hidden
              border border-[#dbe7ea]
              bg-white
              flex items-center justify-center
              shrink-0
            "
          >
            <Image
              src={Logo}
              alt="FaceDent Logo"
              className="w-full h-full object-cover"
            />
          </div>

          {/* BRAND */}
          <div className="flex flex-col leading-none">
            <h1
              className="
                text-[31px]
                font-semibold
                tracking-[-1px]
                text-[#0E2A47]
              "
            >
              <span className="text-[#2DBBC4]">Face</span>Dent
            </h1>

            <p
              className="
                text-[11px]
                text-[#6E7C87]
                mt-1
                tracking-[0.4px]
              "
            >
              Facial Reconstructive & Dental Treatment
            </p>
          </div>
        </Link>

        {/* CENTER MENU */}
        <div className="hidden lg:flex items-center gap-14">
          <Link
            href="/"
            className="
              text-[15px]
              font-medium
              text-[#16314D]
              hover:text-[#2DBBC4]
              transition-all duration-300
            "
          >
            Home
          </Link>

          <Link
            href="/about"
            className="
              text-[15px]
              font-medium
              text-[#16314D]
              hover:text-[#2DBBC4]
              transition-all duration-300
            "
          >
            About
          </Link>

          <Link
            href="/services"
            className="
              text-[15px]
              font-medium
              text-[#16314D]
              hover:text-[#2DBBC4]
              transition-all duration-300
            "
          >
            Services
          </Link>

          <Link
            href="/doctors"
            className="
              text-[15px]
              font-medium
              text-[#16314D]
              hover:text-[#2DBBC4]
              transition-all duration-300
            "
          >
            Doctors
          </Link>

          <Link
            href="/contact"
            className="
              text-[15px]
              font-medium
              text-[#16314D]
              hover:text-[#2DBBC4]
              transition-all duration-300
            "
          >
            Contact
          </Link>
        </div>

        {/* RIGHT CTA */}
        <div className="flex items-center gap-3">
          
          {/* CTA BUTTON */}
          <button
            className="
              hidden md:flex
              items-center
              gap-4
              h-[56px]
              pl-7
              pr-2
              rounded-full
              bg-gradient-to-r
              from-[#2DBBC4]
              to-[#0E2A47]
              text-white
              transition-all duration-300
              hover:scale-[1.02]
              hover:shadow-[0_10px_25px_rgba(45,187,196,0.25)]
            "
          >
            <span className="text-[14px] font-medium whitespace-nowrap">
              Book Appointment
            </span>

            <div
              className="
                w-11
                h-11
                rounded-full
                bg-white/25
                backdrop-blur-md
                flex items-center justify-center
              "
            >
              <div className="w-3 h-3 rounded-full bg-white" />
            </div>
          </button>

          {/* MOBILE MENU */}
          <button
            className="
              lg:hidden
              w-[52px]
              h-[52px]
              rounded-full
              border border-[#dbe7ea]
              bg-white
              flex items-center justify-center
              text-[#16314D]
            "
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;