"use client";

import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle } from "lucide-react";

const F = "'Barlow Condensed', 'Arial Narrow', Arial, sans-serif";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="pt-32 pb-20 relative" style={{ background: "linear-gradient(160deg,#0A1F5C 0%,#1A3A8F 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#F5C800] font-black text-sm mb-3 tracking-widest" style={{ fontFamily: F, letterSpacing: "0.2em" }}>GET IN TOUCH</p>
          <h1 className="text-white font-black text-5xl md:text-7xl mb-6" style={{ fontFamily: F }}>CONTACT<br />WCPF</h1>
          <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">Questions about tournaments, clubs, or affiliation? We'd love to hear from you.</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0"><svg viewBox="0 0 1440 40" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M0 40L1440 40L1440 10C1200 40 960 0 720 0C480 0 240 40 0 10L0 40Z" /></svg></div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-[#0A1F5C] font-black text-3xl mb-6" style={{ fontFamily: F }}>HOW TO REACH US</h2>
              <div className="space-y-4 mb-8">
                {[
                  { icon: "📧", bg: "#0A1F5C", label: "General Enquiries", value: "info@wcpf.co.za", href: "mailto:info@wcpf.co.za" },
                  { icon: "🏆", bg: "#CC1B1B", label: "Tournaments", value: "tournaments@wcpf.co.za", href: "mailto:tournaments@wcpf.co.za" },
                  { icon: "📍", bg: "#1A3A8F", label: "Location", value: "Cape Town, Western Cape, South Africa", href: undefined },
                ].map((c) => (
                  <div key={c.label} className="flex items-start gap-4 p-4 bg-[#F8F9FC] rounded-xl">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-lg" style={{ backgroundColor: c.bg }}>{c.icon}</div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">{c.label}</p>
                      {c.href ? <a href={c.href} className="text-[#0A1F5C] hover:text-[#CC1B1B] transition-colors text-sm">{c.value}</a> : <p className="text-gray-600 text-sm">{c.value}</p>}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3 mb-8">
                <a href="https://instagram.com/wcpickleball" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 text-white py-3 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity" style={{ background: "linear-gradient(135deg,#833ab4,#e1306c)" }}>📸 Instagram</a>
                <a href="https://facebook.com/wcpickleball" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-[#1877F2] text-white py-3 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity">👥 Facebook</a>
              </div>

              <div className="p-6 bg-[#0A1F5C] rounded-2xl text-white">
                <h3 className="font-black text-lg mb-4" style={{ fontFamily: F }}>DEPARTMENT CONTACTS</h3>
                <div className="space-y-3">
                  {[
                    { dept: "Chairperson", email: "chair@wcpf.co.za" },
                    { dept: "Secretary", email: "secretary@wcpf.co.za" },
                    { dept: "Tournaments", email: "tournaments@wcpf.co.za" },
                    { dept: "Development", email: "development@wcpf.co.za" },
                    { dept: "Finance", email: "finance@wcpf.co.za" },
                  ].map((c) => (
                    <div key={c.dept} className="flex items-center justify-between text-sm border-b border-white/10 pb-3 last:border-0 last:pb-0">
                      <span className="text-white/70">{c.dept}</span>
                      <a href={`mailto:${c.email}`} className="text-[#F5C800] hover:text-white transition-colors font-medium">{c.email}</a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-[#0A1F5C] font-black text-3xl mb-6" style={{ fontFamily: F }}>SEND US A MESSAGE</h2>
              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-10 text-center">
                  <CheckCircle className="w-14 h-14 text-emerald-500 mx-auto mb-4" />
                  <h3 className="font-black text-2xl text-emerald-800 mb-2" style={{ fontFamily: F }}>MESSAGE SENT!</h3>
                  <p className="text-emerald-700 text-sm">Thank you for reaching out. We'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
                      <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#0A1F5C] focus:ring-2 focus:ring-[#0A1F5C]/10 transition-all" placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address *</label>
                      <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#0A1F5C] focus:ring-2 focus:ring-[#0A1F5C]/10 transition-all" placeholder="you@example.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Subject *</label>
                    <select required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#0A1F5C] focus:ring-2 focus:ring-[#0A1F5C]/10 transition-all bg-white">
                      <option value="">Select a subject...</option>
                      <option>General Enquiry</option>
                      <option>Tournament Information</option>
                      <option>Club Affiliation</option>
                      <option>Coaching & Development</option>
                      <option>Media / Sponsorship</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message *</label>
                    <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#0A1F5C] focus:ring-2 focus:ring-[#0A1F5C]/10 transition-all resize-none" placeholder="Tell us how we can help..." />
                  </div>
                  <button type="submit" className="w-full flex items-center justify-center gap-2 bg-[#0A1F5C] text-white py-4 rounded-lg font-black text-sm hover:bg-[#1A3A8F] transition-colors" style={{ fontFamily: F, letterSpacing: "0.1em" }}>
                    <Send size={16} />SEND MESSAGE
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
