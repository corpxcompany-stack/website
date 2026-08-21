"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { 
  MessageSquare, 
  FileText, 
  Sparkles, 
  CheckCircle2, 
  Calendar, 
  ArrowRight 
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import "./Process.css";

const steps = [
  {
    step: "01",
    title: "Get in Touch",
    desc: "Call us, WhatsApp us, or fill in our contact form. Tell us what you need and when — and we'll take it from there.",
    icon: MessageSquare,
    tag: "Step 1 — Initiation"
  },
  {
    step: "02",
    title: "Free Assessment & Quote",
    desc: "We understand your requirements, assess the space, and provide a clear, honest quote. No obligations.",
    icon: FileText,
    tag: "Step 2 — Valuation"
  },
  {
    step: "03",
    title: "We Clean, You Relax",
    desc: "Our trained team arrives on time, brings all equipment and products, and gets to work. You don't need to be present throughout.",
    icon: Sparkles,
    tag: "Step 3 — Operations"
  },
  {
    step: "04",
    title: "Inspect & Approve",
    desc: "Once done, we do a walkthrough with you to make sure everything meets your expectations. If anything needs touching up, we do it on the spot.",
    icon: CheckCircle2,
    tag: "Step 4 — Handover"
  }
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function Process() {
  return (
    <section className="w-full py-16 sm:py-20 md:py-32 process-luxury-canvas relative border-b border-neutral-200/60 overflow-hidden">
      <Container>
        
        {/* ==========================================
            1. PREMIUM EDITORIAL TITLE HEADER
            ========================================== */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-1.5 md:gap-2 bg-[#006fe3]/5 border border-[#006fe3]/10 text-[#006fe3] rounded-full px-3.5 py-1.5 text-[10px] sm:text-[11px] font-bold tracking-wider uppercase font-body">
            <Calendar size={12} className="text-[#006fe3]" />
            Systemic Roadmap Matrix
          </div>
          <h2 className="font-heading font-extrabold text-neutral-900 text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight">
            How It Works — 4 Simple Steps
          </h2>
          <div className="w-12 h-[2px] bg-[#006fe3] my-1 sm:my-2" />
          <p className="font-body text-xs sm:text-sm md:text-base text-neutral-500 font-medium max-w-xl leading-relaxed">
            A simple, smooth, and highly disciplined process structurally engineered for your absolute peace of mind.
          </p>
        </div>

        {/* ==========================================
            2. ARCHITECTURAL PERFORMANCE GRID (ONE ROW ON MOBILE)
            ========================================== */}
        <div className="process-flex-container select-none">
          {steps.map((s, i) => {
            const IconComponent = s.icon;
            
            return (
              <motion.div
                key={s.step}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
                variants={cardVariants}
                className="process-flex-item architectural-step-tile step-gpu-accelerate group p-5 sm:p-8 rounded-xl border border-neutral-200/70 flex flex-col justify-between min-h-[240px] sm:min-h-[320px] shrink-0"
              >
                {/* Massive Architectural Backdrop Index String */}
                <span className="font-heading font-extrabold text-5xl sm:text-6xl md:text-7xl text-neutral-100 absolute right-5 top-5 sm:right-6 sm:top-6 select-none pointer-events-none group-hover:text-blue-50/40 transition-colors duration-500">
                  {s.step}
                </span>

                {/* Top Module Layout */}
                <div className="space-y-4 sm:space-y-6 relative z-10">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-neutral-50 text-neutral-800 border border-neutral-200/50 flex items-center justify-center transition-transform duration-500 sm:group-hover:scale-105 shadow-xs">
                    <IconComponent size={15} strokeWidth={1.5} className="sm:w-[16px] sm:h-[16px]" />
                  </div>
                  
                  <div className="space-y-1">
                    <span className="text-[8.5px] sm:text-[9px] font-bold tracking-widest text-[#006fe3] font-body uppercase block">
                      {s.tag}
                    </span>
                    <h3 className="font-heading font-bold text-neutral-900 text-sm sm:text-lg tracking-tight leading-snug pr-6 sm:pr-8">
                      {s.title}
                    </h3>
                  </div>
                </div>

                {/* Bottom Module Layout Description */}
                <div className="pt-4 sm:pt-6 relative z-10 border-t border-neutral-100 sm:group-hover:border-neutral-200/50 transition-colors duration-500 mt-4 sm:mt-0">
                  <p className="font-body text-[11px] sm:text-sm text-neutral-500 font-medium leading-relaxed sm:group-hover:text-neutral-700 transition-colors duration-300">
                    {s.desc}
                  </p>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* ==========================================
            3. PIPELINE ACTION CONTROL DECK LINK
            ========================================== */}
        <div className="mt-12 sm:mt-16 flex justify-center">
          <Link
            href="/contact"
            className="btn-urgent-orange group w-full sm:w-fit inline-flex items-center justify-center gap-2.5 text-xs font-bold font-body uppercase tracking-widest py-3.5 sm:py-4 px-10 shadow-sm rounded-sm"
          >
            Schedule Your Visit
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </div>

      </Container>
    </section>
  );
}