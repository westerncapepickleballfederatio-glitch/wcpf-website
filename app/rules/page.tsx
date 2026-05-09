import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { SectionHeader } from "@/components/ui";

export const metadata: Metadata = { title: "Rules of Pickleball", description: "Learn the official rules of pickleball — beginner-friendly explanations, court diagrams, scoring basics, and more." };
const F = "'Barlow Condensed', 'Arial Narrow', Arial, sans-serif";

const basics = [
  { number: "01", title: "The Court", content: "A pickleball court is 20 feet wide and 44 feet long — the same for both singles and doubles. It is divided by a net and includes a 7-foot non-volley zone (the 'Kitchen') on each side." },
  { number: "02", title: "The Serve", content: "The serve is made underhand, with the paddle contacting the ball below the waist. The serve must land in the diagonally opposite service box. Only one serve attempt is allowed." },
  { number: "03", title: "The Two-Bounce Rule", content: "After the serve, each team must let the ball bounce once before hitting it. After the two-bounce requirement has been met, players may either volley or play it off the bounce." },
  { number: "04", title: "The Kitchen (NVZ)", content: "The non-volley zone (the 'Kitchen') is the 7-foot area adjacent to the net. Players may not volley the ball while standing in this zone. Players may enter the Kitchen to play a ball that has bounced." },
  { number: "05", title: "Scoring", content: "Only the serving team can score. Games are typically played to 11 points, win by 2. In doubles, both players serve before the ball switches sides — except at the start of each game." },
  { number: "06", title: "Faults", content: "A fault occurs when the ball is hit out of bounds, doesn't clear the net, is volleyed from the non-volley zone, or bounces twice before being returned." },
];

const resources = [
  { title: "Official IFP Rulebook 2024", description: "The complete official rules published by the International Federation of Pickleball.", url: "https://pickleball.com/rules", type: "PDF" },
  { title: "Pickleball SA Official Rules", description: "South Africa adopted rules aligned with the IFP standards.", url: "https://pickleballsa.co.za", type: "Link" },
  { title: "Beginner's Guide to Pickleball", description: "A visual introduction to pickleball for new players.", url: "https://usapickleball.org/what-is-pickleball/", type: "Link" },
];

export default function RulesPage() {
  return (
    <>
      <section className="pt-32 pb-20 relative" style={{ background: "linear-gradient(160deg,#0A1F5C 0%,#1A3A8F 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#F5C800] font-black text-sm mb-3 tracking-widest" style={{ fontFamily: F, letterSpacing: "0.2em" }}>LEARN THE GAME</p>
          <h1 className="text-white font-black text-5xl md:text-7xl mb-6" style={{ fontFamily: F }}>RULES OF<br />PICKLEBALL</h1>
          <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">New to pickleball? Here's everything you need to know to get on the court with confidence.</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0"><svg viewBox="0 0 1440 40" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M0 40L1440 40L1440 10C1200 40 960 0 720 0C480 0 240 40 0 10L0 40Z" /></svg></div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="The Court" title="Court Dimensions" center />
          <div className="bg-[#1a7a1a] rounded-2xl p-6 shadow-xl mt-8">
            <div className="relative w-full max-w-xl mx-auto" style={{ aspectRatio: "44/20" }}>
              <div className="absolute inset-0 border-4 border-white rounded-sm">
                <div className="absolute top-0 bottom-0 left-1/2 border-l-4 border-dashed border-white/50" />
                <div className="absolute top-0 bottom-0" style={{ left: "calc(50% - 31.8%)", borderLeft: "2px solid white" }} />
                <div className="absolute top-0 bottom-0" style={{ left: "calc(50% + 31.8%)", borderLeft: "2px solid white" }} />
                <div className="absolute top-1/2 left-0 right-0 border-t-2 border-white" />
                <div className="absolute top-1/2 -translate-y-1/2 text-white font-black text-xs text-center" style={{ left: "14%", transform: "translate(-50%,-50%)" }}>
                  <span className="bg-black/30 px-1 py-0.5 rounded text-[9px]">KITCHEN</span>
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 text-white font-black text-xs" style={{ right: "14%", transform: "translate(50%,-50%)" }}>
                  <span className="bg-black/30 px-1 py-0.5 rounded text-[9px]">KITCHEN</span>
                </div>
              </div>
            </div>
            <div className="flex justify-around mt-4 text-white/80 text-xs flex-wrap gap-2">
              <span>← 44 ft (13.4m) →</span>
              <span>↕ 20 ft (6.1m)</span>
              <span>Kitchen: 7 ft (2.1m)</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F8F9FC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Fundamentals" title="Basic Rules Explained" center />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {basics.map((rule) => (
              <div key={rule.number} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm card-hover">
                <div className="flex items-start gap-4">
                  <span className="text-[#F5C800] font-black text-3xl leading-none flex-shrink-0" style={{ fontFamily: F }}>{rule.number}</span>
                  <div>
                    <h3 className="font-black text-[#0A1F5C] text-xl mb-2" style={{ fontFamily: F }}>{rule.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{rule.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="How to Win" title="Scoring at a Glance" center />
          <div className="bg-[#0A1F5C] rounded-2xl p-8 text-white mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-white/10 rounded-xl"><p className="text-[#F5C800] font-black text-4xl mb-2" style={{ fontFamily: F }}>11</p><p className="text-white/80 text-sm">Points to win<br />(win by 2)</p></div>
              <div className="p-4 bg-white/10 rounded-xl"><p className="text-[#F5C800] font-black text-4xl mb-2" style={{ fontFamily: F }}>15 or 21</p><p className="text-white/80 text-sm">Tournament<br />variations</p></div>
              <div className="p-4 bg-white/10 rounded-xl"><p className="text-[#F5C800] font-black text-2xl mb-2" style={{ fontFamily: F }}>Serve only</p><p className="text-white/80 text-sm">Points scored<br />by serving team</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8F9FC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Go Deeper" title="Official Resources" center />
          <div className="space-y-4 mt-8">
            {resources.map((r) => (
              <a key={r.title} href={r.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#0A1F5C]/20 transition-all group">
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-gray-900 group-hover:text-[#0A1F5C] transition-colors" style={{ fontFamily: F, fontSize: "1.05rem" }}>{r.title}</p>
                  <p className="text-gray-500 text-sm mt-0.5">{r.description}</p>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <span className="text-xs font-bold text-gray-400 bg-gray-100 px-2 py-1 rounded">{r.type}</span>
                  <ExternalLink size={16} className="text-gray-400 group-hover:text-[#0A1F5C] transition-colors" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
