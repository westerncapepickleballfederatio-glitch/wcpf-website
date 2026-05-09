import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import Image from "next/image";

const F = "'Barlow Condensed', 'Arial Narrow', Arial, sans-serif";

const navGroups = [
  { title: "Federation", links: [{ href: "/about", label: "About WCPF" }, { href: "/team", label: "Meet the Team" }, { href: "/clubs", label: "Affiliated Clubs" }, { href: "/contact", label: "Contact Us" }] },
  { title: "Play", links: [{ href: "/tournaments", label: "Tournament Calendar" }, { href: "/rules", label: "Rules of Pickleball" }, { href: "/clubs", label: "Find a Club" }] },
  { title: "Updates", links: [{ href: "/news", label: "News & Media" }, { href: "/news", label: "Announcements" }, { href: "/news", label: "Photo Gallery" }] },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A1F5C] text-white">
      {/* Red CTA band */}
      <div className="bg-[#CC1B1B] py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white font-black text-lg text-center sm:text-left" style={{ fontFamily: F, letterSpacing: "0.05em" }}>
            READY TO PLAY PICKLEBALL IN THE WESTERN CAPE?
          </p>
          <Link href="/clubs" className="bg-white text-[#CC1B1B] px-6 py-2 rounded-lg font-black text-sm hover:bg-gray-100 transition-colors whitespace-nowrap shadow-md" style={{ fontFamily: F, letterSpacing: "0.08em" }}>
            FIND A CLUB NEAR YOU →
          </Link>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#F5C800] shadow-md flex-shrink-0">
                <Image src="/logo.jpg" alt="WCPF Logo" width={56} height={56} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-white font-black text-base leading-none" style={{ fontFamily: F }}>WESTERN CAPE</p>
                <p className="text-[#F5C800] font-bold text-xs leading-none mt-1" style={{ fontFamily: F, letterSpacing: "0.1em" }}>PICKLEBALL FEDERATION</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-5 max-w-xs">
              The official governing body for pickleball in the Western Cape, South Africa. Growing the game, one rally at a time.
            </p>
            <div className="space-y-2 mb-5">
              <a href="mailto:info@wcpf.co.za" className="flex items-center gap-2 text-sm text-white/70 hover:text-[#F5C800] transition-colors">
                <Mail size={14} /> info@wcpf.co.za
              </a>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <MapPin size={14} /> Cape Town, Western Cape, South Africa
              </div>
            </div>
            <div className="flex gap-3">
              <a href="https://instagram.com/wcpickleball" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#CC1B1B] transition-all text-sm font-bold" aria-label="Instagram">IG</a>
              <a href="https://facebook.com/wcpickleball" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#CC1B1B] transition-all text-sm font-bold" aria-label="Facebook">FB</a>
              <a href="mailto:info@wcpf.co.za" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#CC1B1B] transition-all" aria-label="Email"><Mail size={16} /></a>
            </div>
          </div>

          {navGroups.map((group) => (
            <div key={group.title}>
              <h4 className="text-[#CC1B1B] font-black text-sm mb-4" style={{ fontFamily: F, letterSpacing: "0.15em" }}>{group.title.toUpperCase()}</h4>
              <ul className="space-y-2.5">
                {group.links.map((link, i) => (
                  <li key={i}><Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">{link.label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Red divider bottom */}
      <div className="h-1 bg-[#CC1B1B]" />
      <div className="bg-[#060F2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/40 text-xs text-center sm:text-left">© {new Date().getFullYear()} Western Cape Pickleball Federation. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/contact" className="text-white/40 text-xs hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="text-white/40 text-xs hover:text-white/70 transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
