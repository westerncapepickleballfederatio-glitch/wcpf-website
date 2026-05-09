import { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  external?: boolean;
}

export function Button({ children, href, onClick, variant = "primary", size = "md", className = "", external = false }: ButtonProps) {
  const base = "inline-flex items-center justify-center gap-2 font-black tracking-wide transition-all duration-200 rounded-lg cursor-pointer";
  const variants = {
    primary: "bg-[#F5C800] text-[#0A1F5C] hover:bg-yellow-300",
    secondary: "bg-[#0A1F5C] text-white hover:bg-[#1A3A8F]",
    outline: "border-2 border-[#0A1F5C] text-[#0A1F5C] hover:bg-[#0A1F5C] hover:text-white",
    ghost: "text-[#0A1F5C] hover:bg-[#0A1F5C]/10",
  };
  const sizes = { sm: "px-3 py-1.5 text-xs", md: "px-5 py-2.5 text-sm", lg: "px-7 py-3.5 text-base" };
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  const style = { fontFamily: "'Barlow Condensed', 'Arial Narrow', Arial, sans-serif", letterSpacing: "0.08em" };
  if (href) {
    if (external) return <a href={href} target="_blank" rel="noopener noreferrer" className={cls} style={style}>{children}</a>;
    return <Link href={href} className={cls} style={style}>{children}</Link>;
  }
  return <button onClick={onClick} className={cls} style={style}>{children}</button>;
}

interface BadgeProps { children: ReactNode; color?: "blue" | "red" | "yellow" | "green" | "purple" | "cyan"; }
export function Badge({ children, color = "blue" }: BadgeProps) {
  const colors = {
    blue: "bg-[#0A1F5C]/10 text-[#0A1F5C]",
    red: "bg-[#CC1B1B]/10 text-[#CC1B1B]",
    yellow: "bg-[#F5C800]/20 text-yellow-800",
    green: "bg-emerald-100 text-emerald-700",
    purple: "bg-purple-100 text-purple-700",
    cyan: "bg-cyan-100 text-cyan-700",
  };
  return (
    <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-bold tracking-wide ${colors[color]}`} style={{ fontFamily: "'Barlow Condensed', 'Arial Narrow', Arial, sans-serif", letterSpacing: "0.08em" }}>
      {String(children).toUpperCase()}
    </span>
  );
}

interface SectionHeaderProps { eyebrow?: string; title: string; subtitle?: string; center?: boolean; light?: boolean; }
export function SectionHeader({ eyebrow, title, subtitle, center = false, light = false }: SectionHeaderProps) {
  return (
    <div className={`mb-10 ${center ? "text-center" : ""}`}>
      {eyebrow && <p className="text-[#F5C800] font-black text-sm mb-2 tracking-widest" style={{ fontFamily: "'Barlow Condensed', 'Arial Narrow', Arial, sans-serif", letterSpacing: "0.2em" }}>{eyebrow.toUpperCase()}</p>}
      <h2 className={`text-4xl md:text-5xl font-black ${light ? "text-white" : "text-[#0A1F5C]"}`} style={{ fontFamily: "'Barlow Condensed', 'Arial Narrow', Arial, sans-serif" }}>{title}</h2>
      {subtitle && <p className={`mt-3 text-base leading-relaxed max-w-2xl ${center ? "mx-auto" : ""} ${light ? "text-white/70" : "text-gray-500"}`}>{subtitle}</p>}
    </div>
  );
}

interface CardProps { children: ReactNode; className?: string; hover?: boolean; }
export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div className={`bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden ${hover ? "card-hover" : ""} ${className}`}>
      {children}
    </div>
  );
}
