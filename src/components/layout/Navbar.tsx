"use client";

import { useState, useActionState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home, Briefcase, Mail, Calendar, Info, CircleHelp, ArrowRight, Tag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { submitContactForm } from "@/app/actions/contact";
import ContactModal from "@/components/ui/ContactModal";
import "./Navbar.css";

const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "About Us", href: "/about", icon: Info },
  { name: "Services", href: "/services", icon: Briefcase },
  { name: "Pricing", href: "/#pricing", icon: Tag }, // Added Pricing Link
  { name: "FAQs", href: "/faqs", icon: CircleHelp },
  { name: "Contact", href: "/contact", icon: Mail },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [state, action, pending] = useActionState(submitContactForm, null);

  if (state?.success && isModalOpen) {
    setTimeout(() => setIsModalOpen(false), 2500);
  }

  return (
    <>
      {/* ==========================================
         1. DESKTOP NAVBAR — ELITE LUXURY UI DOCK
         ========================================== */}
      <header className="hidden lg:flex fixed top-0 w-full z-50 bg-white/75 backdrop-blur-xl border-b border-neutral-200/40 nav-desktop-canvas nav-gpu-accelerate">
        <div className="max-w-7xl mx-auto px-8 py-3.5 flex justify-between items-center w-full">
          
          {/* Logo Frame Assembly */}
          <Link href="/" className="flex items-center group transition-transform duration-300 hover:scale-[1.01]">
            <div className="h-8 overflow-hidden flex items-center">
              <Image 
                src="/logo.avif" alt="CorpX Luxury Cleaning Services Logo" width={102} height={42}
                className="object-cover translate-y-[-6px]" priority
              />
            </div>
          </Link>

          {/* Premium Floating Track Matrix Menu */}
          <nav className="flex items-center gap-2 bg-neutral-100/60 p-1.5 rounded-full border border-neutral-200/30 font-body text-xs sm:text-sm text-neutral-600">
            {navLinks.map((link) => {
              // Note: active state for hash links (/#pricing) relies on standard anchor behavior
              const isActive = pathname === link.href;
              
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "nav-link-premium-wrapper relative rounded-full z-1",
                    isActive ? "text-[#006fe3]" : "text-neutral-500 hover:text-neutral-900"
                  )}
                >
                  {/* Sliding Capsule Highlight Layer */}
                  {isActive && (
                    <motion.span
                      layoutId="desktopActiveNavPill"
                      className="absolute inset-0 bg-white border border-neutral-200/40 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.02)] z-0"
                      transition={{ type: "spring", stiffness: 160, damping: 20 }}
                    />
                  )}
                  <span className="nav-link-premium-text relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* High-Intent Architectural Action Target CTA */}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="btn-urgent-orange text-[11px] font-bold uppercase tracking-widest py-3.5 px-7 rounded-sm shadow-xs cursor-pointer transition-transform duration-300 active:scale-97 flex items-center gap-2 group"
          >
            Get Free Quote
            <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </div>
      </header>

      {/* ==========================================
         2. MID-SCREEN HEADER (STANDARD PRESERVED)
         ========================================== */}
      <header className="hidden md:flex lg:hidden fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-black/[0.04] px-8 py-4 justify-between items-center">
        <Link href="/">
          <div className="h-8 overflow-hidden flex items-center">
            <Image src="/logo.avif" alt="CorpX Logo" width={100} height={40} className="object-cover translate-y-[-6px]" priority />
          </div>
        </Link>
        <div className="flex items-center gap-6">
          <nav className="flex gap-6 text-sm font-medium font-body">
            {/* Added Pricing to Tablet Nav */}
            {navLinks.filter(l => ["Home", "Services", "Pricing", "Contact"].includes(l.name)).map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className={cn(
                  "transition-colors",
                  pathname === link.href ? "text-[#006fe3] font-bold" : "text-neutral-700 hover:text-[#006fe3]"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <button onClick={() => setIsModalOpen(true)} className="bg-[#fe4d01] text-white px-4 py-2 rounded-xs text-xs font-bold uppercase tracking-wider">
            Get Quote
          </button>
        </div>
      </header>

      {/* ==========================================
         3. MOBILE TOP HEADER (STANDARD PRESERVED)
         ========================================== */}
      <header className="md:hidden fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-black/[0.03] px-6 py-4 flex justify-between items-center">
        <Link href="/">
          <div className="h-8 overflow-hidden flex items-center">
            <Image 
              src="/logo.avif" alt="CorpX Logo" width={100} height={40}
              className="object-cover translate-y-[-6px]" priority
            />
          </div>
        </Link>

        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-[#fe4d01] text-white px-5 py-2 rounded-xs text-xs font-bold uppercase tracking-wider shadow-sm active:scale-95 transition-all cursor-pointer"
        >
          Get Quote
        </button>
      </header>

      {/* ==========================================
         4. MOBILE BOTTOM DOCK (STANDARD PRESERVED)
         ========================================== */}
      <motion.nav 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 30 }}
        className="md:hidden fixed bottom-0 w-full z-50 bottom-dock-blur border-t border-black/[0.04] rounded-t-3xl shadow-[0_-12px_40px_-20px_rgba(0,111,227,0.12)] px-4 py-3 pb-5"
      >
        <div className="flex justify-between items-center relative">
          {/* Excluded "About Us" and "FAQs" to fit "Pricing" beautifully on Mobile */}
          {navLinks.filter(link => !["About Us", "FAQs"].includes(link.name)).map((link) => {
            const isSelected = pathname === link.href;
            
            return (
              <Link 
                key={link.name} 
                href={link.href} 
                className="flex flex-col items-center gap-1 py-1 px-2.5 relative min-w-[64px]"
              >
                <div className="relative p-1">
                  <link.icon 
                    size={18} 
                    className={cn(
                      "transition-all duration-300 relative z-10", 
                      isSelected ? "text-[#006fe3] scale-110" : "text-neutral-400"
                    )} 
                  />
                  {isSelected && (
                    <motion.span 
                      layoutId="mobileActiveGlow"
                      className="absolute inset-0 bg-[#006fe3]/10 rounded-full -m-1 z-0"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </div>
                <span 
                  className={cn(
                    "text-[9px] tracking-wide font-body font-medium transition-colors duration-300", 
                    isSelected ? "text-neutral-900 font-bold" : "text-neutral-400"
                  )}
                >
                  {link.name}
                </span>
              </Link>
            );
          })}

          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-[#fe4d01] p-3.5 rounded-full text-white shadow-md shadow-orange-600/20 active:scale-90 hover:scale-105 transition-all cursor-pointer -translate-y-2.5 mx-1"
            aria-label="Open Schedule Form"
          >
            <Calendar size={18} strokeWidth={2.5} />
          </button>
        </div>
      </motion.nav>

      {/* SYSTEM REGISTRY MODAL ENTRY */}
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        action={action}
        pending={pending}
        state={state}
      />
    </>
  );
}