import type { Metadata } from "next";
import { MapPin, Calendar, ExternalLink } from "lucide-react";
import { tournaments } from "@/lib/data";
import { Badge } from "@/components/ui";

export const metadata: Metadata = { title: "Tournament Calendar", description: "WCPF sanctioned pickleball tournaments across the Western Cape." };
const F = "'Barlow Condensed', 'Arial Narrow', Arial, sans-serif";

function fmtDate(d: string) { return new Date(d).toLocaleDateString("en-ZA", { weekday: "long", day: "numeric", month: "long", year: "numeric" }); }
function getMonth(d: string) { return new Date(d).toLocaleDateString("en-ZA", { month: "short" }).toUpperCase(); }
function getDay(d: string) { return new Date(d).getDate(); }

export default function TournamentsPage() {
  return (
    <>
      <section className="pt-32 pb-20 relative" style={{ background: "linear-gradient(160deg,#0A1F5C 0%,#CC1B1B 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#F5C800] font-black text-sm mb-3 tracking-widest" style={{ fontFamily: F, letterSpacing: "0.2em" }}>2025 SEASON</p>
          <h1 className="text-white font-black text-5xl md:text-7xl mb-6" style={{ fontFamily: F }}>TOURNAMENT<br />CALENDAR</h1>
          <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">Official WCPF sanctioned events — all skill levels welcome.</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0"><svg viewBox="0 0 1440 40" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M0 40L1440 40L1440 10C1200 40 960 0 720 0C480 0 240 40 0 10L0 40Z" /></svg></div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {tournaments.map((t) => (
              <div key={t.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden card-hover">
                <div className="flex flex-col sm:flex-row">
                  <div className="bg-[#0A1F5C] text-white sm:w-32 flex-shrink-0 flex sm:flex-col items-center justify-center p-4 gap-4 sm:gap-0">
                    <div className="text-center">
                      <p className="text-[#F5C800] font-black text-sm tracking-widest" style={{ fontFamily: F }}>{getMonth(t.date)}</p>
                      <p className="text-white font-black text-5xl leading-none" style={{ fontFamily: F }}>{getDay(t.date)}</p>
                    </div>
                    <div className="sm:mt-3 text-center">
                      <span className="inline-block px-2 py-1 rounded-full text-xs font-bold tracking-wide bg-[#F5C800]/20 text-[#F5C800]" style={{ fontFamily: F }}>{t.status.toUpperCase()}</span>
                    </div>
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <h2 className="font-black text-gray-900 text-2xl leading-tight mb-2" style={{ fontFamily: F }}>{t.title}</h2>
                        <div className="flex flex-wrap gap-4 mb-3">
                          <span className="text-sm text-gray-500 flex items-center gap-1.5"><Calendar size={14} />{fmtDate(t.date)}</span>
                          <span className="text-sm text-gray-500 flex items-center gap-1.5"><MapPin size={14} />{t.venue}, {t.location}</span>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">{t.description}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {t.categories.map((c) => <Badge key={c} color="blue">{c}</Badge>)}
                        </div>
                      </div>
                      {t.registrationUrl && t.status === "upcoming" && (
                        <a href={t.registrationUrl} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 inline-flex items-center gap-2 bg-[#CC1B1B] text-white px-5 py-2.5 rounded-lg font-black text-sm hover:bg-red-700 transition-colors" style={{ fontFamily: F, letterSpacing: "0.08em" }}>
                          REGISTER <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-[#F8F9FC] rounded-2xl p-6 border border-gray-200 text-center">
            <p className="text-gray-500 text-sm mb-3">Registrations for WCPF events are managed via Raqt — South Africa's sports event platform.</p>
            <a href="https://raqt.com/en/tour/46" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-black text-[#0A1F5C] hover:text-[#CC1B1B] transition-colors" style={{ fontFamily: F, letterSpacing: "0.06em" }}>
              VIEW ALL EVENTS ON RAQT <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
