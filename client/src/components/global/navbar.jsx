"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Mail, Menu, Phone, X } from "lucide-react";
import Logo from "../../../public/images/Brand/Logo.png";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Doctors", href: "/doctors" },
  {label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeTimeout = useRef(null);

  const openMenu = () => {
    setMenuVisible(true);
    clearTimeout(closeTimeout.current);
    // double rAF so the initial (closed) state paints before we transition open
    requestAnimationFrame(() => requestAnimationFrame(() => setMenuOpen(true)));
  };

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    closeTimeout.current = setTimeout(() => setMenuVisible(false), 400);
  }, []);

  // Scroll-aware navbar
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuVisible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuVisible]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && closeMenu();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeMenu]);

  return (
    <>
      <header className="w-full flex justify-center px-4 sm:px-6 lg:px-8 pt-5 fixed top-0 left-0 z-50">
        <nav
          className={`
            w-full max-w-7xl h-[86px] rounded-[30px] px-5 lg:px-8
            flex items-center justify-between
            border transition-all duration-500
            ${
              isScrolled
                ? "bg-white/85 border-white/60 shadow-[0_8px_30px_rgba(15,45,75,0.1)] backdrop-blur-xl"
                : "bg-white/70 border-white/40 shadow-[0_8px_30px_rgba(15,45,75,0.06)] backdrop-blur-xl"
            }
          `}
        >
          {/* LEFT SIDE */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-[58px] h-[58px] rounded-full overflow-hidden border border-[#dbe7ea] bg-white flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Image
                src={Logo}
                alt="FaceDent Logo"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="hidden sm:flex flex-col leading-none">
              <h1 className="text-[28px] lg:text-[31px] font-semibold tracking-[-1px] text-[#0E2A47]">
                <span className="text-[#2DBBC4]">Face</span>Dent
              </h1>

              <p className="text-[11px] text-[#6E7C87] mt-1 tracking-[0.4px]">
                Facial Reconstructive &amp; Dental Treatment
              </p>
            </div>
          </Link>

          {/* CENTER MENU */}
          <div className="hidden lg:flex items-center gap-11">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative py-2 text-[15px] font-medium"
                >
                  <span
                    className={`transition-colors duration-300 ${
                      isActive
                        ? "text-[#0E2A47]"
                        : "text-[#16314D]/80 group-hover:text-[#2DBBC4]"
                    }`}
                  >
                    {link.label}
                  </span>
                  <span
                    className={`
                      absolute -bottom-0.5 left-0 h-[2px] rounded-full bg-[#2DBBC4]
                      transition-all duration-300 ease-out
                      ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                    `}
                  />
                </Link>
              );
            })}
          </div>

          {/* RIGHT CTA */}
          <div className="flex items-center gap-3">
            <button className="hidden md:flex items-center gap-4 h-[56px] pl-7 pr-2 rounded-full bg-gradient-to-r from-[#2DBBC4] to-[#0E2A47] text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_10px_25px_rgba(45,187,196,0.25)] active:scale-[0.98]">
              <span className="text-[14px] font-medium whitespace-nowrap">
                Book Appointment
              </span>
              <div className="w-11 h-11 rounded-full bg-white/25 backdrop-blur-md flex items-center justify-center">
                <ArrowUpRight size={18} className="text-white" />
              </div>
            </button>

            {/* MOBILE MENU TRIGGER */}
            <button
              onClick={openMenu}
              aria-label="Open menu"
              className="lg:hidden w-[52px] h-[52px] rounded-full border border-[#dbe7ea] bg-white flex items-center justify-center text-[#16314D] transition-transform duration-300 active:scale-90"
            >
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE MENU — iOS / Airbnb style full-screen sheet */}
      {menuVisible && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          {/* Backdrop */}
          <div
            onClick={closeMenu}
            className={`absolute inset-0 bg-[#0E2A47]/50 backdrop-blur-sm transition-opacity duration-300 ${
              menuOpen ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Sheet */}
          <div className="absolute inset-0 p-3 sm:p-4">
            <div
              className={`
                relative h-full w-full rounded-[36px] bg-white shadow-[0_20px_60px_rgba(15,45,75,0.25)]
                flex flex-col overflow-hidden
                transition-all duration-400 ease-out
                ${
                  menuOpen
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-8 scale-[0.97]"
                }
              `}
            >
              {/* TOP BAR */}
              <div className="flex items-center justify-between px-6 pt-6">
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="flex items-center gap-3"
                >
                  <div className="w-11 h-11 rounded-full overflow-hidden border border-[#dbe7ea] bg-white flex items-center justify-center shrink-0">
                    <Image
                      src={Logo}
                      alt="FaceDent Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h1 className="text-[22px] font-semibold tracking-[-0.5px] text-[#0E2A47]">
                    <span className="text-[#2DBBC4]">Face</span>Dent
                  </h1>
                </Link>

                <button
                  onClick={closeMenu}
                  aria-label="Close menu"
                  className="w-11 h-11 rounded-full border border-[#dbe7ea] bg-[#fafaf7] flex items-center justify-center text-[#16314D] transition-transform duration-300 active:scale-90"
                >
                  <X size={20} />
                </button>
              </div>

              {/* NAV LINKS */}
              <div className="flex-1 overflow-y-auto px-6 pt-10">
                <p className="mb-4 text-[12px] font-semibold uppercase tracking-[3px] text-[#6E7C87]">
                  Menu
                </p>

                <nav className="flex flex-col">
                  {NAV_LINKS.map((link, index) => {
                    const isActive =
                      link.href === "/"
                        ? pathname === "/"
                        : pathname?.startsWith(link.href);

                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={closeMenu}
                        style={{
                          transitionDelay: menuOpen
                            ? `${80 + index * 45}ms`
                            : "0ms",
                        }}
                        className={`
                          group flex items-center justify-between border-b border-[#eef2f4] py-5
                          transition-all duration-300 ease-out
                          ${
                            menuOpen
                              ? "opacity-100 translate-x-0"
                              : "opacity-0 translate-x-4"
                          }
                        `}
                      >
                        <span
                          className={`text-[26px] font-semibold tracking-[-0.5px] ${
                            isActive ? "text-[#2DBBC4]" : "text-[#0E2A47]"
                          }`}
                        >
                          {link.label}
                        </span>

                        <ArrowRight
                          size={20}
                          className={`text-[#2DBBC4] transition-all duration-300 ${
                            isActive
                              ? "opacity-100 translate-x-0"
                              : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                          }`}
                        />
                      </Link>
                    );
                  })}
                </nav>

                {/* CONTACT */}
                <div className="mt-8 flex flex-col gap-4">
                  <a
                    href="tel:+910000000000"
                    className="flex items-center gap-4 text-[#24384d]"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#dbe7ea] bg-[#fafaf7]">
                      <Phone size={16} className="text-[#2DBBC4]" />
                    </div>
                    <span className="text-[15px] font-medium">
                      +91 00000 00000
                    </span>
                  </a>

                  <a
                    href="mailto:hello@facedent.com"
                    className="flex items-center gap-4 text-[#24384d]"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#dbe7ea] bg-[#fafaf7]">
                      <Mail size={16} className="text-[#2DBBC4]" />
                    </div>
                    <span className="text-[15px] font-medium">
                      hello@facedent.com
                    </span>
                  </a>
                </div>
              </div>

              {/* BOTTOM CTA — pinned, safe-area aware */}
              <div className="px-6 pb-[max(24px,env(safe-area-inset-bottom))] pt-4">
                <button
                  onClick={closeMenu}
                  className="flex w-full items-center justify-between gap-4 h-[64px] pl-7 pr-2 rounded-full bg-gradient-to-r from-[#2DBBC4] to-[#0E2A47] text-white transition-transform duration-300 active:scale-[0.98]"
                >
                  <span className="text-[15px] font-medium">
                    Book Appointment
                  </span>
                  <div className="w-12 h-12 rounded-full bg-white/25 backdrop-blur-md flex items-center justify-center">
                    <ArrowUpRight size={20} className="text-white" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
