import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { newsItems } from "@/lib/data";
import { Badge } from "@/components/ui";

export const metadata: Metadata = { title: "News & Media", description: "Latest news and announcements from the Western Cape Pickleball Federation." };
const F = "'Barlow Condensed', 'Arial Narrow', Arial, sans-serif";
const catColor: Record<string, "blue" | "red" | "yellow" | "green"> = { announcement: "blue", tournament: "red", community: "green", media: "yellow" };
const catAccent: Record<string, string> = { announcement: "#0A1F5C", tournament: "#CC1B1B", community: "#059669", media: "#D97706" };
function fmtDate(d: string) { return new Date(d).toLocaleDateString("en-ZA", { day: "numeric", month: "long", year: "numeric" }); }

export default function NewsPage() {
  return (
    <>
      <section className="pt-32 pb-20 relative" style={{ background: "linear-gradient(160deg,#0A1F5C 0%,#1A3A8F 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#F5C800] font-black text-sm mb-3 tracking-widest" style={{ fontFamily: F, letterSpacing: "0.2em" }}>STAY IN THE LOOP</p>
          <h1 className="text-white font-black text-5xl md:text-7xl mb-6" style={{ fontFamily: F }}>NEWS &<br />MEDIA</h1>
          <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">Tournament updates, community highlights, and federation announcements.</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0"><svg viewBox="0 0 1440 40" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M0 40L1440 40L1440 10C1200 40 960 0 720 0C480 0 240 40 0 10L0 40Z" /></svg></div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#0A1F5C] font-black text-2xl mb-6" style={{ fontFamily: F }}>LATEST</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            {newsItems.slice(0, 2).map((item) => (
              <div key={item.id} className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm card-hover" style={{ borderTop: `4px solid ${catAccent[item.category]}` }}>
                <div className="p-7">
                  <div className="flex items-center justify-between mb-4">
                    <Badge color={catColor[item.category]}>{item.category}</Badge>
                    <span className="text-gray-400 text-xs">{item.readTime}</span>
                  </div>
                  <h3 className="font-black text-gray-900 text-2xl leading-tight mb-3" style={{ fontFamily: F }}>{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{item.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <p className="text-gray-400 text-xs">{fmtDate(item.date)}</p>
                    <Link href={`/news/${item.slug}`} className="inline-flex items-center gap-1 text-sm font-black text-[#0A1F5C] hover:text-[#CC1B1B] transition-colors" style={{ fontFamily: F, letterSpacing: "0.06em" }}>READ MORE <ArrowRight size={14} /></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-[#0A1F5C] font-black text-2xl mb-6" style={{ fontFamily: F }}>ALL ARTICLES</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {newsItems.slice(2).map((item) => (
              <div key={item.id} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm card-hover">
                <div className="h-1" style={{ backgroundColor: catAccent[item.category] }} />
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <Badge color={catColor[item.category]}>{item.category}</Badge>
                    <span className="text-gray-400 text-xs">{item.readTime}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 leading-tight mb-2" style={{ fontFamily: F, fontSize: "1.05rem" }}>{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{item.excerpt}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <p className="text-gray-400 text-xs">{fmtDate(item.date)}</p>
                    <Link href={`/news/${item.slug}`} className="text-xs font-black text-[#0A1F5C] hover:text-[#CC1B1B] transition-colors" style={{ fontFamily: F, letterSpacing: "0.06em" }}>READ →</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-2xl p-8 text-center text-white" style={{ background: "linear-gradient(135deg,#833ab4,#e1306c)" }}>
            <h3 className="font-black text-2xl mb-3" style={{ fontFamily: F }}>FOLLOW US ON INSTAGRAM</h3>
            <p className="text-white/80 text-sm mb-5">For real-time updates, event photos, and community highlights — follow @wcpickleball on Instagram.</p>
            <a href="https://instagram.com/wcpickleball" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-2.5 rounded-full font-black text-sm hover:bg-white/90 transition-colors" style={{ fontFamily: F, letterSpacing: "0.08em" }}>
              @WCPICKLEBALL
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
