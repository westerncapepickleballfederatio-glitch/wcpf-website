"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/team", label: "Federation" },
  { href: "/clubs", label: "Clubs" },
  { href: "/tournaments", label: "Tournaments" },
  { href: "/rules", label: "Rules" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

const F = "'Barlow Condensed', 'Arial Narrow', Arial, sans-serif";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const isHome = pathname === "/";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || !isHome ? "bg-[#0A1F5C] shadow-lg" : "bg-transparent"}`}>
      {/* Red accent stripe */}
      <div className="h-1 bg-[#CC1B1B] w-full" />
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-[#F5C800] shadow-md flex-shrink-0">
              <Image src="/logo.jpg" alt="WCPF Logo" width={44} height={44} className="w-full h-full object-cover" priority />
            </div>
            <div className="hidden sm:block">
              <p className="text-white font-black text-sm leading-none" style={{ fontFamily: F, letterSpacing: "0.06em" }}>WESTERN CAPE</p>
              <p className="text-[#F5C800] font-bold text-xs leading-none mt-0.5" style={{ fontFamily: F, letterSpacing: "0.12em" }}>PICKLEBALL FEDERATION</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`nav-link px-3 py-2 text-sm font-black transition-colors duration-200 ${pathname === link.href ? "text-[#F5C800] active" : "text-white/85 hover:text-white"}`}
                  style={{ fontFamily: F, letterSpacing: "0.08em" }}
                >
                  {link.label.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/tournaments"
              className="hidden md:inline-flex items-center bg-[#CC1B1B] text-white px-4 py-2 rounded-lg text-sm font-black hover:bg-[#E82222] transition-colors duration-200 shadow-md"
              style={{ fontFamily: F, letterSpacing: "0.08em" }}
            >
              PLAY NOW
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 text-white rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-[#0A1F5C] border-t border-white/10 px-4 pb-4 pt-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block py-3 px-2 text-base font-black border-b border-white/10 transition-colors ${pathname === link.href ? "text-[#F5C800]" : "text-white/80 hover:text-white"}`}
              style={{ fontFamily: F, letterSpacing: "0.06em" }}
            >
              {link.label.toUpperCase()}
            </Link>
          ))}
          <Link
            href="/tournaments"
            className="mt-4 block text-center bg-[#CC1B1B] text-white py-3 rounded-lg font-black text-base hover:bg-[#E82222] transition-colors"
            style={{ fontFamily: F, letterSpacing: "0.1em" }}
          >
            REGISTER FOR A TOURNAMENT
          </Link>
        </div>
      </div>
    </header>
  );
}
