"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MessageCircle,
  ArrowUpRight,
  ArrowRight,
  MapPin,
  ShieldCheck,
  ReceiptText,
  Star,
  Award,
} from "lucide-react";
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa6";
import "./Footer.css";

const capabilities = [
  { label: "Home Deep Cleaning", id: "home-deep-cleaning" },
  { label: "Office Cleaning", id: "office-cleaning-services" },
  { label: "Kitchen Cleaning", id: "kitchen-deep-cleaning" },
  { label: "Bathroom Cleaning", id: "bathroom-cleaning" },
  { label: "Sofa & Upholstery Cleaning", id: "sofa-upholstery-cleaning" },
  { label: "Facade & Glass Cleaning", id: "facade-glass-cleaning" },
];

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/corpxtensions?igsh=b3ByaDJqZXVwaHpi",
    Icon: FaInstagram,
    colorClass: "text-[#E1306C]",
    hoverClass: "hover:bg-[#E1306C]/10 hover:border-[#E1306C]/30",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61591152821093",
    Icon: FaFacebook,
    colorClass: "text-[#1877F2]",
    hoverClass: "hover:bg-[#1877F2]/10 hover:border-[#1877F2]/30",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/corp-xtensions-llp/",
    Icon: FaLinkedin,
    colorClass: "text-[#0A66C2]",
    hoverClass: "hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]/30",
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@corpxtensionsllp?si=qsNvYXAGXRewbsLr",
    Icon: FaYoutube,
    colorClass: "text-[#FF0000]",
    hoverClass: "hover:bg-[#FF0000]/10 hover:border-[#FF0000]/30",
  },
];

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-luxury-canvas border-t border-neutral-200/60 font-body relative z-10 pb-24 md:pb-0 footer-gpu-accelerate">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-10 sm:pt-12 pb-8 sm:pb-12">

        {/* ==========================================
            CLOSING CTA
            ========================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ type: "spring", stiffness: 120, damping: 22 }}
          className="terminal-cta-box rounded-2xl border border-white/[0.06] p-6 sm:p-8 md:p-12 mb-16 sm:mb-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-10 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.3)]"
        >
          <div className="space-y-4 max-w-2xl relative z-10 w-full">
            <p className="text-[11px] sm:text-xs font-semibold text-neutral-400 tracking-wide font-body">
              Home, office or commercial property — we&apos;ll get it properly clean.
            </p>
            <h2 className="font-heading font-bold text-white text-3xl sm:text-4xl tracking-tight leading-tight">
              Book your cleaning today
            </h2>
            <p className="text-[11px] sm:text-xs text-neutral-500 font-medium font-body">
              Call, WhatsApp, or send us the form. We reply within the hour.
            </p>

            {/* Badges - Stacks nicely on mobile, rows on larger screens */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2.5 sm:gap-x-4 pt-3 text-[10px] font-bold uppercase tracking-wider text-neutral-400 font-body">
              <div className="flex items-center gap-2 bg-white/[0.03] border border-white/[0.05] px-3 py-1.5 rounded-sm w-fit">
                <Star size={12} className="text-amber-400 fill-amber-400 shrink-0" />
                <span>500+ clients served</span>
              </div>
              <div className="flex items-center gap-2 bg-white/[0.03] border border-white/[0.05] px-3 py-1.5 rounded-sm w-fit">
                <ShieldCheck size={12} className="text-[#006fe3] shrink-0" />
                <span>ISO 9001:2015 certified</span>
              </div>
              <div className="flex items-center gap-2 bg-white/[0.03] border border-white/[0.05] px-3 py-1.5 rounded-sm w-fit">
                <MapPin size={12} className="text-[#006fe3] shrink-0" />
                <span>Pune &middot; Mumbai &middot; Bangalore &middot; Hyderabad</span>
              </div>
              <div className="flex items-center gap-2 bg-white/[0.03] border border-white/[0.05] px-3 py-1.5 rounded-sm w-fit hidden sm:flex">
                <Award size={12} className="text-amber-400 shrink-0" />
                <span>Operating since 2016</span>
              </div>
            </div>
          </div>

          <div className="shrink-0 w-full lg:w-fit relative z-10">
            <Link
              href="/contact"
              className="btn-urgent-orange w-full sm:w-fit inline-flex items-center justify-center gap-2.5 text-xs font-bold font-body uppercase tracking-widest py-4 px-8 sm:px-10 shadow-md group rounded-sm"
            >
              Get your free quote
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </motion.div>

        {/* ==========================================
            NAVIGATION GRID
            ========================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16 sm:mb-20">

          {/* Brand */}
          <div className="lg:col-span-4 flex flex-col space-y-5 sm:space-y-6">
            <Link href="/" className="inline-block w-fit">
              <div className="h-8 sm:h-9 overflow-hidden flex items-center relative">
                <Image
                  src="/logo.avif"
                  alt="CorpX"
                  width={105}
                  height={42}
                  className="object-cover translate-y-[-4px] sm:translate-y-[-6px] select-none"
                />
              </div>
            </Link>

            <p className="font-body text-xs sm:text-sm text-neutral-500 font-medium leading-relaxed max-w-sm pr-4">
              Deep cleaning and facility care for homes, offices and commercial
              properties. Trained, background-verified teams. Clear pricing, no
              surprises.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2 flex flex-col space-y-4 sm:space-y-5">
            <h4 className="text-[10px] font-bold text-neutral-900 tracking-widest uppercase border-b border-neutral-100 pb-2 font-heading">
              Navigation
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm font-semibold text-neutral-600">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="architectural-footer-link group">
                    {label}
                    <ArrowUpRight
                      size={12}
                      className="text-neutral-300 opacity-0 -translate-y-0.5 -translate-x-0.5 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ml-1"
                    />
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/privacy-policy"
                  className="text-neutral-400 hover:text-[#006fe3] text-xs font-medium transition-colors duration-300 inline-flex py-1"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Capabilities */}
          <div className="lg:col-span-3 flex flex-col space-y-4 sm:space-y-5">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
              <h4 className="text-[10px] font-bold text-neutral-900 tracking-widest uppercase font-heading">
                Services
              </h4>
              <Link
                href="/services"
                className="text-[9px] font-bold uppercase tracking-widest text-[#006fe3] hover:underline"
              >
                View all
              </Link>
            </div>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm font-medium text-neutral-500">
              {capabilities.map(({ label, id }) => (
                <li key={id}>
                  <Link
                    href={`/services/${id}`}
                    className="architectural-footer-link group flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-neutral-300 group-hover:bg-[#006fe3] transition-colors shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 flex flex-col space-y-5 sm:space-y-6">
            <h4 className="text-[10px] font-bold text-neutral-900 tracking-widest uppercase border-b border-neutral-100 pb-2 font-heading">
              Get in touch
            </h4>

            <div className="space-y-4 sm:space-y-3.5">
              <a
                href="tel:+919595000022"
                className="flex items-center gap-3 text-neutral-700 hover:text-[#006fe3] text-[13px] sm:text-sm font-bold transition-colors duration-300 group"
              >
                <div className="w-9 h-9 sm:w-8 sm:h-8 rounded-lg bg-white border border-neutral-200/70 flex items-center justify-center text-neutral-600 shadow-2xs group-hover:bg-[#006fe3]/5 group-hover:text-[#006fe3] group-hover:border-[#006fe3]/20 transition-all duration-300 shrink-0">
                  <Phone size={14} strokeWidth={2} className="sm:w-[13px] sm:h-[13px]" />
                </div>
                +91 95950 00022
              </a>

              <a
                href="mailto:info@mycorpx.com"
                className="flex items-center gap-3 text-neutral-700 hover:text-[#006fe3] text-[13px] sm:text-sm font-semibold transition-colors duration-300 group break-all"
              >
                <div className="w-9 h-9 sm:w-8 sm:h-8 rounded-lg bg-white border border-neutral-200/70 flex items-center justify-center text-neutral-600 shadow-2xs group-hover:bg-[#006fe3]/5 group-hover:text-[#006fe3] group-hover:border-[#006fe3]/20 transition-all duration-300 shrink-0">
                  <Mail size={14} strokeWidth={2} className="sm:w-[13px] sm:h-[13px]" />
                </div>
                info@mycorpx.com
              </a>
            </div>

            <div className="pt-1">
              <a
                href="https://wa.me/919595000022?text=Hi%20CorpX%2C%20I%27d%20like%20a%20free%20quote%20for%20deep%20cleaning."
                target="_blank"
                rel="noopener noreferrer"
                className="footer-action-trigger w-full text-center inline-flex items-center justify-center gap-2.5 border border-neutral-200 bg-white text-neutral-800 font-body font-bold text-[11px] sm:text-xs uppercase tracking-widest py-3.5 px-6 rounded-sm shadow-2xs active:scale-[0.98] cursor-pointer"
              >
                <MessageCircle size={15} className="fill-current text-[#25d366]" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Social Links - Larger touch targets for mobile */}
            <div className="pt-2 border-t border-neutral-100 flex items-center justify-between">
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest font-heading">
                Follow us
              </span>
              <div className="flex items-center gap-2.5 sm:gap-2">
                {socials.map(({ label, href, Icon, colorClass, hoverClass }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`w-9 h-9 sm:w-8 sm:h-8 rounded-lg bg-white border border-neutral-200/70 flex items-center justify-center shadow-2xs transition-all duration-300 ${colorClass} ${hoverClass}`}
                  >
                    <Icon size={16} className="sm:w-[14px] sm:h-[14px]" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ==========================================
            BOTTOM BAR
            ========================================== */}
        <div className="border-t border-neutral-200/50 pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
          <div className="space-y-1.5 sm:space-y-1">
            <p className="text-[11px] sm:text-xs text-neutral-400 font-medium">
              &copy; {currentYear} Corp Xtensions LLP. All rights reserved.
            </p>
            <p className="text-[9px] sm:text-[10px] text-neutral-400 font-medium tracking-wide">
              Website by{" "}
              <a
                href="https://lupaentertainment.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-[#006fe3] font-bold transition-colors duration-300"
              >
                Lupa Entertainment
              </a>
            </p>
          </div>

          <div className="flex flex-row items-center justify-center gap-2 shrink-0 flex-wrap w-full md:w-auto">
            <a
              href="/iso.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[9px] sm:text-[10px] text-neutral-500 tracking-wider font-bold uppercase flex items-center gap-1.5 sm:gap-2 bg-white border border-neutral-200/70 shadow-2xs px-3 py-1.5 rounded-sm hover:border-[#006fe3]/40 hover:text-neutral-800 transition-all duration-300 flex-1 md:flex-none justify-center"
            >
              <ShieldCheck size={13} className="text-[#006fe3] shrink-0 sm:w-[14px] sm:h-[14px]" strokeWidth={2.5} />
              <span>ISO 9001 Certified</span>
            </a>

            <a
              href="/gst.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[9px] sm:text-[10px] text-neutral-500 tracking-wider font-bold uppercase flex items-center gap-1.5 sm:gap-2 bg-white border border-neutral-200/70 shadow-2xs px-3 py-1.5 rounded-sm hover:border-emerald-500/40 hover:text-neutral-800 transition-all duration-300 flex-1 md:flex-none justify-center"
            >
              <ReceiptText size={13} className="text-emerald-600 shrink-0 sm:w-[14px] sm:h-[14px]" strokeWidth={2.5} />
              <span>GST Registered</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}