import type { Metadata } from "next";
import { MapPin, Users, Globe, Mail } from "lucide-react";
import { clubs } from "@/lib/data";
import { Badge } from "@/components/ui";

export const metadata: Metadata = { title: "Affiliated Clubs", description: "Find a WCPF affiliated pickleball club near you in the Western Cape." };
const F = "'Barlow Condensed', 'Arial Narrow', Arial, sans-serif";

export default function ClubsPage() {
  return (
    <>
      <section className="pt-32 pb-20 relative" style={{ background: "linear-gradient(160deg,#0A1F5C 0%,#1A3A8F 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#F5C800] font-black text-sm mb-3 tracking-widest" style={{ fontFamily: F, letterSpacing: "0.2em" }}>FIND YOUR COMMUNITY</p>
          <h1 className="text-white font-black text-5xl md:text-7xl mb-6" style={{ fontFamily: F }}>AFFILIATED<br />CLUBS</h1>
          <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">Join one of our {clubs.length} affiliated clubs across the Western Cape and start playing today.</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0"><svg viewBox="0 0 1440 40" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M0 40L1440 40L1440 10C1200 40 960 0 720 0C480 0 240 40 0 10L0 40Z" /></svg></div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clubs.map((club) => (
              <div key={club.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden card-hover">
                <div className="p-6 flex items-center gap-4" style={{ backgroundColor: `${club.bg}15` }}>
                  <div className="w-16 h-16 rounded-full flex-shrink-0 flex items-center justify-center text-white font-black text-lg shadow-md" style={{ backgroundColor: club.bg, fontFamily: F }}>
                    {club.initials}
                  </div>
                  <div className="min-w-0">
                    <h2 className="font-black text-gray-900 text-lg leading-tight" style={{ fontFamily: F }}>{club.name}</h2>
                    <p className="text-gray-500 text-sm flex items-center gap-1 mt-0.5"><MapPin size={12} />{club.location}</p>
                    {club.members && <p className="text-gray-400 text-xs flex items-center gap-1 mt-0.5"><Users size={11} />{club.members} members</p>}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{club.description}</p>
                  {club.established && <div className="mb-4"><Badge color="blue">Est. {club.established}</Badge></div>}
                  <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
                    {club.contactEmail && <a href={`mailto:${club.contactEmail}`} className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-[#0A1F5C] transition-colors"><Mail size={12} />Email</a>}
                    {club.website && <a href={club.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-[#0A1F5C] transition-colors"><Globe size={12} />Website</a>}
                    {club.instagram && <a href={`https://instagram.com/${club.instagram}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-[#0A1F5C] transition-colors">📸 @{club.instagram}</a>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: "linear-gradient(135deg,#0A1F5C 0%,#1A3A8F 100%)" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-white font-black text-4xl mb-4" style={{ fontFamily: F }}>WANT TO AFFILIATE YOUR CLUB?</h2>
          <p className="text-white/70 mb-8">Join the WCPF network and access sanctioned tournaments, coaching resources, and official federation support.</p>
          <a href="mailto:info@wcpf.co.za" className="inline-flex items-center gap-2 bg-[#F5C800] text-[#0A1F5C] px-8 py-3 rounded-lg font-black text-sm hover:bg-yellow-300 transition-colors" style={{ fontFamily: F, letterSpacing: "0.08em" }}>
            <Mail size={16} />CONTACT US TO AFFILIATE
          </a>
        </div>
      </section>
    </>
  );
}
