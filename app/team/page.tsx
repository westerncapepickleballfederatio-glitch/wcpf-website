import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { teamMembers } from "@/lib/data";

export const metadata: Metadata = { title: "Meet the Federation", description: "Meet the executive committee of the Western Cape Pickleball Federation." };
const F = "'Barlow Condensed', 'Arial Narrow', Arial, sans-serif";

export default function TeamPage() {
  return (
    <>
      <section className="pt-32 pb-20 relative" style={{ background: "linear-gradient(160deg,#0A1F5C 0%,#1A3A8F 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#F5C800] font-black text-sm mb-3 tracking-widest" style={{ fontFamily: F, letterSpacing: "0.2em" }}>THE PEOPLE BEHIND THE PADDLE</p>
          <h1 className="text-white font-black text-5xl md:text-7xl mb-6" style={{ fontFamily: F }}>MEET THE<br />FEDERATION</h1>
          <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">Our executive committee is a passionate group dedicated to growing pickleball across the Western Cape.</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0"><svg viewBox="0 0 1440 40" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M0 40L1440 40L1440 10C1200 40 960 0 720 0C480 0 240 40 0 10L0 40Z" /></svg></div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden card-hover">
                <div className="p-8 flex flex-col items-center justify-center" style={{ backgroundColor: member.bg }}>
                  <div className="w-24 h-24 rounded-full flex items-center justify-center mb-3 border-4 border-white/30" style={{ backgroundColor: "rgba(255,255,255,0.15)" }}>
                    <span className="text-white font-black text-xl" style={{ fontFamily: F }}>{member.initials}</span>
                  </div>
                  <h3 className="text-white font-black text-xl text-center" style={{ fontFamily: F }}>{member.name}</h3>
                  <p className="text-white/70 text-xs font-bold tracking-widest mt-1 text-center" style={{ fontFamily: F, letterSpacing: "0.12em" }}>{member.role.toUpperCase()}</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                  {member.email && (
                    <div className="pt-3 border-t border-gray-100">
                      <a href={`mailto:${member.email}`} className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-[#0A1F5C] transition-colors font-medium">
                        <Mail size={13} />{member.email}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8F9FC]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-[#0A1F5C] font-black text-4xl mb-4" style={{ fontFamily: F }}>INTERESTED IN GETTING INVOLVED?</h2>
          <p className="text-gray-500 mb-8">The WCPF welcomes volunteers, committee members, and passionate individuals who want to help grow pickleball in the Western Cape.</p>
          <a href="mailto:info@wcpf.co.za" className="inline-flex items-center gap-2 bg-[#0A1F5C] text-white px-8 py-3 rounded-lg font-black text-sm hover:bg-[#1A3A8F] transition-colors" style={{ fontFamily: F, letterSpacing: "0.08em" }}>
            <Mail size={16} /> GET IN TOUCH
          </a>
        </div>
      </section>
    </>
  );
}
