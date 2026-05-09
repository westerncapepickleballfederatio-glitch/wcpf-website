import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, ChevronRight } from "lucide-react";
import { tournaments, clubs, newsItems, stats } from "@/lib/data";
import { Badge, SectionHeader, Card } from "@/components/ui";

const F = "'Barlow Condensed', 'Arial Narrow', Arial, sans-serif";

function getMonth(d: string) { return new Date(d).toLocaleDateString("en-ZA", { month: "short" }).toUpperCase(); }
function getDay(d: string) { return new Date(d).getDate(); }
function fmtDate(d: string) { return new Date(d).toLocaleDateString("en-ZA", { day: "numeric", month: "long", year: "numeric" }); }

const catColor: Record<string, "blue" | "red" | "green" | "yellow"> = { announcement: "blue", tournament: "red", community: "green", media: "yellow" };
const catAccent: Record<string, string> = { announcement: "#0A1F5C", tournament: "#CC1B1B", community: "#059669", media: "#D97706" };

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: "linear-gradient(160deg,#0A1F5C 0%,#1A1A2E 40%,#8B0000 80%,#CC1B1B 100%)" }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 40px,white 40px,white 41px),repeating-linear-gradient(90deg,transparent,transparent 40px,white 40px,white 41px)" }} />
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-[#CC1B1B]/30 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-56 h-56 rounded-full bg-[#F5C800]/10 blur-3xl" />
        <div className="absolute top-40 left-1/3 w-40 h-40 rounded-full bg-[#CC1B1B]/20 blur-2xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
              <Image src="/logo.jpg" alt="Western Cape Pickleball Federation" width={144} height={144} className="w-full h-full object-cover" priority />
            </div>
          </div>

          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#CC1B1B] animate-pulse" />
            <span className="text-white/80 text-xs font-black tracking-widest" style={{ fontFamily: F, letterSpacing: "0.15em" }}>OFFICIAL GOVERNING BODY · WESTERN CAPE</span>
          </div>

          <h1 className="text-white font-black leading-none mb-6" style={{ fontFamily: F, fontSize: "clamp(3rem,9vw,7rem)", letterSpacing: "-0.02em" }}>
            THE HOME OF<br /><span style={{ color: "#F5C800" }}>PICKLEBALL</span><br />IN THE CAPE
          </h1>
          <p className="text-white/70 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            The Western Cape Pickleball Federation — connecting players, clubs, and tournaments across South Africa's most beautiful province.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link href="/tournaments" className="inline-flex items-center gap-2 bg-[#CC1B1B] text-white px-8 py-4 rounded-lg font-black text-base hover:bg-[#E82222] transition-all hover:scale-105 shadow-lg shadow-red-900/40" style={{ fontFamily: F, letterSpacing: "0.08em" }}>
              VIEW TOURNAMENTS <ArrowRight size={18} />
            </Link>
            <Link href="/clubs" className="inline-flex items-center gap-2 bg-[#F5C800] text-[#0A1F5C] px-8 py-4 rounded-lg font-black text-base hover:bg-yellow-300 transition-all hover:scale-105 shadow-lg" style={{ fontFamily: F, letterSpacing: "0.08em" }}>
              FIND A CLUB
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-white font-black text-3xl md:text-4xl leading-none" style={{ fontFamily: F }}>{s.value}</p>
                <p className="text-white/50 text-xs mt-1 tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 0C480 0 240 60 0 20L0 60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* TOURNAMENTS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <SectionHeader eyebrow="Calendar" title="Upcoming Tournaments" subtitle="Register for official WCPF sanctioned events across the Western Cape." />
            <Link href="/tournaments" className="inline-flex items-center gap-1 text-sm font-black text-[#CC1B1B] hover:text-[#0A1F5C] transition-colors whitespace-nowrap mb-10" style={{ fontFamily: F, letterSpacing: "0.08em" }}>VIEW ALL <ChevronRight size={16} /></Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tournaments.filter(t => t.status === "upcoming").slice(0, 3).map((t) => (
              <Card key={t.id}>
                <div className="flex items-center gap-4 p-5 text-white" style={{ background: "linear-gradient(135deg,#0A1F5C,#CC1B1B)" }}>
                  <div className="text-center min-w-[52px]">
                    <p className="text-[#F5C800] font-black text-xs tracking-widest" style={{ fontFamily: F }}>{getMonth(t.date)}</p>
                    <p className="text-white font-black text-3xl leading-none" style={{ fontFamily: F }}>{getDay(t.date)}</p>
                  </div>
                  <div className="border-l border-white/20 pl-4 flex-1 min-w-0">
                    <h3 className="font-black text-base leading-tight text-white" style={{ fontFamily: F }}>{t.title}</h3>
                    <p className="text-white/60 text-xs mt-0.5 flex items-center gap-1"><MapPin size={10} />{t.location}</p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{t.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {t.categories.slice(0, 3).map((c) => <Badge key={c} color="blue">{c}</Badge>)}
                    {t.categories.length > 3 && <Badge color="blue">+{t.categories.length - 3}</Badge>}
                  </div>
                  {t.registrationUrl && (
                    <a href={t.registrationUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-black text-[#CC1B1B] hover:text-red-700 transition-colors" style={{ fontFamily: F, letterSpacing: "0.06em" }}>
                      REGISTER NOW <ArrowRight size={14} />
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="py-20 bg-[#F8F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <SectionHeader eyebrow="Latest" title="News & Updates" subtitle="Stay up to date with the Western Cape pickleball community." />
            <Link href="/news" className="inline-flex items-center gap-1 text-sm font-black text-[#CC1B1B] hover:text-[#0A1F5C] transition-colors whitespace-nowrap mb-10" style={{ fontFamily: F, letterSpacing: "0.08em" }}>ALL NEWS <ChevronRight size={16} /></Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsItems.slice(0, 3).map((item) => (
              <Card key={item.id}>
                <div className="h-1.5" style={{ backgroundColor: catAccent[item.category] }} />
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <Badge color={catColor[item.category]}>{item.category}</Badge>
                    <span className="text-gray-400 text-xs">{item.readTime}</span>
                  </div>
                  <h3 className="font-black text-gray-900 leading-tight mb-2" style={{ fontFamily: F, fontSize: "1.1rem" }}>{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{item.excerpt}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <p className="text-gray-400 text-xs">{fmtDate(item.date)}</p>
                    <Link href={`/news/${item.slug}`} className="text-xs font-black text-[#CC1B1B] hover:text-[#0A1F5C] transition-colors" style={{ fontFamily: F, letterSpacing: "0.06em" }}>READ MORE →</Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CLUBS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <SectionHeader eyebrow="Community" title="Affiliated Clubs" subtitle="Join one of our growing network of clubs across the Western Cape." />
            <Link href="/clubs" className="inline-flex items-center gap-1 text-sm font-black text-[#CC1B1B] hover:text-[#0A1F5C] transition-colors whitespace-nowrap mb-10" style={{ fontFamily: F, letterSpacing: "0.08em" }}>ALL CLUBS <ChevronRight size={16} /></Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {clubs.slice(0, 4).map((club) => (
              <Link href="/clubs" key={club.id}>
                <Card className="p-5 text-center group cursor-pointer">
                  <div className="w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-black text-lg transition-transform group-hover:scale-110 shadow-md" style={{ backgroundColor: club.bg, fontFamily: F }}>
                    {club.initials}
                  </div>
                  <h3 className="font-black text-sm text-gray-800 leading-tight mb-1 group-hover:text-[#CC1B1B] transition-colors" style={{ fontFamily: F }}>{club.name}</h3>
                  <p className="text-gray-400 text-xs flex items-center justify-center gap-1"><MapPin size={9} />{club.location}</p>
                  {club.members && <p className="text-gray-400 text-xs mt-1">{club.members} members</p>}
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT BAND */}
      <section className="py-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#0A1F5C 0%,#1A1A2E 50%,#8B0000 100%)" }}>
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(45deg,white 0,white 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#CC1B1B]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[#CC1B1B] font-black text-sm mb-3 tracking-widest" style={{ fontFamily: F, letterSpacing: "0.2em" }}>ABOUT THE WCPF</p>
            <h2 className="text-white font-black text-4xl md:text-6xl leading-none mb-6" style={{ fontFamily: F }}>GROWING PICKLEBALL<br />ACROSS THE CAPE</h2>
            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              The Western Cape Pickleball Federation is the official governing body for pickleball in the Western Cape. We affiliate clubs, sanction tournaments, promote the rules of the game, and champion the growth of a sport loved by all ages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/about" className="inline-flex items-center gap-2 bg-[#CC1B1B] text-white px-6 py-3 rounded-lg font-black text-sm hover:bg-[#E82222] transition-all shadow-lg" style={{ fontFamily: F, letterSpacing: "0.08em" }}>OUR STORY <ArrowRight size={16} /></Link>
              <Link href="/team" className="inline-flex items-center gap-2 bg-[#F5C800] text-[#0A1F5C] px-6 py-3 rounded-lg font-black text-sm hover:bg-yellow-300 transition-all shadow-lg" style={{ fontFamily: F, letterSpacing: "0.08em" }}>MEET THE TEAM</Link>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="py-16 bg-[#F8F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { href: "/rules", icon: "📋", label: "Rules of Pickleball", desc: "Learn the official rules" },
              { href: "/clubs", icon: "🏟️", label: "Find a Club", desc: "Join a club near you" },
              { href: "/tournaments", icon: "🏆", label: "Tournament Calendar", desc: "Upcoming WCPF events" },
              { href: "/contact", icon: "✉️", label: "Contact the WCPF", desc: "Get in touch with us" },
            ].map((l) => (
              <Link key={l.href} href={l.href}>
                <div className="bg-white rounded-xl p-6 text-center border border-gray-100 card-hover shadow-sm group">
                  <div className="text-3xl mb-3">{l.icon}</div>
                  <h3 className="font-black text-[#0A1F5C] leading-tight mb-1 group-hover:text-[#CC1B1B] transition-colors" style={{ fontFamily: F, letterSpacing: "0.04em", fontSize: "1rem" }}>{l.label}</h3>
                  <p className="text-gray-400 text-xs">{l.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#CC1B1B] font-black text-sm mb-2 tracking-widest" style={{ fontFamily: F, letterSpacing: "0.2em" }}>FOLLOW US</p>
          <h2 className="text-[#0A1F5C] font-black text-4xl md:text-5xl mb-4" style={{ fontFamily: F }}>JOIN THE CONVERSATION</h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">Follow WCPF on social media for tournament updates, community highlights, and pickleball news.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://instagram.com/wcpickleball" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 text-white px-6 py-3 rounded-full font-bold text-sm hover:opacity-90 transition-opacity shadow-md" style={{ background: "linear-gradient(135deg,#833ab4,#e1306c)" }}>
              📸 @wcpickleball on Instagram
            </a>
            <a href="https://facebook.com/wcpickleball" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#1877F2] text-white px-6 py-3 rounded-full font-bold text-sm hover:opacity-90 transition-opacity shadow-md">
              👥 WC Pickleball on Facebook
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
