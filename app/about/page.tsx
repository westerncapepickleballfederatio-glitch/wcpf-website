import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui";

export const metadata: Metadata = { title: "About", description: "Learn about the Western Cape Pickleball Federation." };
const F = "'Barlow Condensed', 'Arial Narrow', Arial, sans-serif";

const values = [
  { icon: "🏅", title: "Excellence", desc: "We uphold the highest standards in tournament administration, officiating, and player development." },
  { icon: "🤝", title: "Inclusivity", desc: "Pickleball is for everyone. We actively welcome players of all ages, backgrounds, and skill levels." },
  { icon: "🌱", title: "Growth", desc: "We are committed to expanding the sport across schools, communities, and regions throughout the Western Cape." },
  { icon: "🧭", title: "Integrity", desc: "We operate with transparency, fairness, and accountability in all federation affairs." },
  { icon: "🤗", title: "Community", desc: "We foster a welcoming, supportive culture where the social aspect of the game is celebrated." },
  { icon: "🏆", title: "Competition", desc: "We create pathways for competitive players to develop, rank, and represent the Western Cape nationally." },
];

const timeline = [
  { year: "2020", event: "First informal pickleball sessions begin in Cape Town parks." },
  { year: "2021", event: "Cape Town Picklers founded — the Western Cape's first dedicated club." },
  { year: "2021", event: "Western Cape Pickleball Federation formally established." },
  { year: "2022", event: "Three new clubs affiliate. First sanctioned WCPF tournament held." },
  { year: "2023", event: "Federation grows to six affiliated clubs. Coaching programme launched." },
  { year: "2024", event: "Junior Development Programme introduced in Cape Town schools." },
  { year: "2025", event: "WCPF achieves full affiliation with Pickleball South Africa." },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-20 relative" style={{ background: "linear-gradient(160deg,#0A1F5C 0%,#1A3A8F 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#F5C800] font-black text-sm mb-3 tracking-widest" style={{ fontFamily: F, letterSpacing: "0.2em" }}>ABOUT</p>
          <h1 className="text-white font-black text-5xl md:text-7xl mb-6" style={{ fontFamily: F }}>THE WCPF</h1>
          <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">The official governing body for pickleball in the Western Cape, South Africa.</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0"><svg viewBox="0 0 1440 40" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M0 40L1440 40L1440 10C1200 40 960 0 720 0C480 0 240 40 0 10L0 40Z" /></svg></div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#0A1F5C] rounded-2xl p-8 text-white">
              <p className="text-[#F5C800] font-black text-xs tracking-widest mb-3" style={{ fontFamily: F, letterSpacing: "0.2em" }}>OUR MISSION</p>
              <h2 className="text-white font-black text-3xl md:text-4xl mb-4" style={{ fontFamily: F }}>Why We Exist</h2>
              <p className="text-white/75 text-base leading-relaxed">To govern, grow, and promote pickleball throughout the Western Cape by affiliating clubs, sanctioning tournaments, developing players and coaches, and making the game accessible to all communities across our province.</p>
            </div>
            <div className="bg-[#CC1B1B] rounded-2xl p-8 text-white">
              <p className="text-[#F5C800] font-black text-xs tracking-widest mb-3" style={{ fontFamily: F, letterSpacing: "0.2em" }}>OUR VISION</p>
              <h2 className="text-white font-black text-3xl md:text-4xl mb-4" style={{ fontFamily: F }}>Where We're Going</h2>
              <p className="text-white/85 text-base leading-relaxed">To establish the Western Cape as South Africa's leading pickleball region — recognised nationally and internationally — with a thriving network of clubs, world-class events, and players competing at every level.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F8F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="What We Stand For" title="Federation Values" center />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm card-hover">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-black text-[#0A1F5C] text-xl mb-2" style={{ fontFamily: F }}>{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Our Journey" title="Federation Timeline" center />
          <div className="mt-10 relative">
            <div className="absolute left-[60px] top-0 bottom-0 w-0.5 bg-gray-200" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="min-w-[52px] text-right"><span className="font-black text-[#0A1F5C] text-sm" style={{ fontFamily: F }}>{item.year}</span></div>
                  <div className="relative pl-2">
                    <div className="absolute -left-[22px] top-1.5 w-3 h-3 rounded-full bg-[#F5C800] border-2 border-[#0A1F5C]" />
                    <p className="text-gray-700 text-sm leading-relaxed">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
