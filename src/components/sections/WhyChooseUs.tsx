"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  UserCheck, 
  Sparkles, 
  Award, 
  ShieldCheck, 
  Layers, 
  DollarSign, 
  Calendar, 
  ArrowRight 
} from "lucide-react";
import "./WhyChooseUs.css";

const pillars = [
  {
    id: 1,
    title: "Trained & Verified Professionals",
    description: "Every member of our team is thoroughly trained, background-verified, and equipped to deliver consistent, high-quality cleaning — every single visit.",
    icon: UserCheck,
    tag: "Security Matrix",
    gridClass: "col-span-1",
    bgClass: "bg-sky-50 border-sky-200/80 shadow-[0_4px_12px_-6px_rgba(14,165,233,0.08)]",
    iconClass: "bg-sky-100 text-sky-700 border-sky-200 group-hover:bg-sky-600 group-hover:text-white group-hover:border-sky-600"
  },
  {
    id: 2,
    title: "Deep Cleaning, Not Just Surface Cleaning",
    description: "We go where regular cleaning cannot. Stubborn grease, hidden dust, bathroom grime, kitchen oil — we deal with it all, corner to corner.",
    icon: Sparkles,
    tag: "Core Performance",
    gridClass: "col-span-1",
    bgClass: "bg-emerald-50 border-emerald-200/80 shadow-[0_4px_12px_-6px_rgba(16,185,129,0.08)]",
    iconClass: "bg-emerald-100 text-emerald-700 border-emerald-200 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600"
  },
  {
    id: 3,
    title: "ISO 9001:2015 Certified Quality",
    description: "Our processes meet internationally recognised quality standards. That means structured, reliable service — not just good intentions.",
    icon: Award,
    tag: "Audited System",
    gridClass: "col-span-1",
    bgClass: "bg-indigo-50 border-indigo-200/80 shadow-[0_4px_12px_-6px_rgba(79,70,229,0.08)]",
    iconClass: "bg-indigo-100 text-indigo-700 border-indigo-200 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600"
  },
  {
    id: 4,
    title: "Safe Products for Your Family & Pets",
    description: "We use professional-grade, tested cleaning solutions that are tough on dirt but safe for people, children, and pets.",
    icon: ShieldCheck,
    tag: "Ecology Standard",
    gridClass: "col-span-1",
    bgClass: "bg-rose-50 border-rose-200/80 shadow-[0_4px_12px_-6px_rgba(244,63,94,0.08)]",
    iconClass: "bg-rose-100 text-rose-700 border-rose-200 group-hover:bg-rose-600 group-hover:text-white group-hover:border-rose-600"
  },
  {
    id: 5,
    title: "Tailored to Your Space",
    description: "No two spaces are alike. We create a cleaning plan that fits your property, your schedule, and your specific requirements.",
    icon: Layers,
    tag: "Custom Layout",
    gridClass: "col-span-1",
    bgClass: "bg-purple-50 border-purple-200/80 shadow-[0_4px_12px_-6px_rgba(168,85,247,0.08)]",
    iconClass: "bg-purple-100 text-purple-700 border-purple-200 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600"
  },
  {
    id: 6,
    title: "Transparent Pricing — No Surprises",
    description: "You will always know what you are paying for before we start. No hidden charges. No last-minute additions.",
    icon: DollarSign,
    tag: "Commercial Trust",
    gridClass: "col-span-1",
    bgClass: "bg-amber-50 border-amber-200/80 shadow-[0_4px_12px_-6px_rgba(245,158,11,0.08)]",
    iconClass: "bg-amber-100 text-amber-700 border-amber-200 group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-600"
  },
  {
    id: 7,
    title: "Trusted Since 2016",
    description: "Over eight years of consistent service, countless happy clients, and a reputation built entirely on results.",
    icon: Calendar,
    tag: "Operational Authority",
    gridClass: "col-span-1 sm:col-span-2",
    bgClass: "bg-teal-50 border-teal-200 shadow-[0_8px_24px_-10px_rgba(13,148,136,0.12)]",
    iconClass: "bg-teal-600 text-white border-teal-600 group-hover:bg-teal-700 group-hover:border-teal-700"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="w-full py-16 sm:py-20 md:py-32 bg-gradient-to-b from-white via-neutral-50/20 to-white border-b border-neutral-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        <div className="why-split-container">
          
          {/* ==========================================
             LEFT COLUMN: EDITORIAL STICKY SHOWCASE
             ========================================== */}
          <div className="w-full lg:w-[35%] why-editorial-sticky space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#006fe3]/5 border border-[#006fe3]/10 text-[#006fe3] rounded-full px-3 py-1.5 sm:px-4 text-[10px] sm:text-[11px] font-bold tracking-wider uppercase font-body">
                <Award size={12} className="fill-current" />
                Value Propositions
              </div>
              <h2 className="font-heading font-extrabold text-neutral-900 text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight">
                Why Choose Us
              </h2>
            </div>

            <p className="font-body text-[13px] sm:text-base text-neutral-600 font-medium leading-relaxed pr-2 sm:pr-0">
              When you let someone into your home or workplace, you are placing real trust in them. We take that seriously. Here is why thousands of homes and businesses across Pune, Mumbai, Bangalore & Hyderabad have chosen us over the years:
            </p>

            <div className="pt-1 sm:pt-2">
              <Link 
                href="/contact"
                className="btn-urgent-orange group w-full sm:w-fit inline-flex items-center justify-center gap-2 text-xs font-bold font-body uppercase tracking-widest py-3.5 sm:py-4 px-8 shadow-sm rounded-sm"
              >
                Book Your Cleaning
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          {/* ==========================================
             RIGHT COLUMN: VARIABLE ARCHITECTURAL GRID
             ========================================== */}
          <div className="w-full lg:w-[65%] mt-4 sm:mt-0">
            {/* Reduced gap on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                const isSpecial = pillar.id === 7;
                
                return (
                  <motion.div
                    key={pillar.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 150, 
                      damping: 22, 
                      delay: idx * 0.04 
                    }}
                    /* Reduced padding and min-height for mobile */
                    className={`premium-feature-tile ${pillar.gridClass} ${pillar.bgClass} p-5 sm:p-8 rounded-xl border flex flex-col justify-between min-h-[200px] sm:min-h-[260px] group`}
                  >
                    {/* Upper Core */}
                    <div className="space-y-4 sm:space-y-5">
                      <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center border transition-transform duration-500 sm:group-hover:scale-105 shadow-xs ${pillar.iconClass}`}>
                        <IconComponent size={16} strokeWidth={1.5} className="sm:w-[18px] sm:h-[18px]" />
                      </div>
                      
                      <div className="space-y-1 sm:space-y-1.5">
                        <span className={`text-[8.5px] sm:text-[9px] font-bold tracking-widest font-body uppercase block
                          ${isSpecial ? "text-teal-600" : "text-neutral-400"}
                        `}>
                          {pillar.tag}
                        </span>
                        <h3 className="font-heading font-bold text-neutral-900 text-[15px] sm:text-lg tracking-tight leading-snug">
                          {pillar.title}
                        </h3>
                      </div>
                    </div>

                    {/* Lower Description */}
                    <div className="pt-4 sm:pt-5 mt-4 sm:mt-0 border-t border-black/[0.03] sm:group-hover:border-black/[0.06] transition-colors duration-500">
                      <p className="font-body text-[11px] sm:text-sm text-neutral-500 font-medium leading-relaxed sm:group-hover:text-neutral-700 transition-colors duration-300">
                        {pillar.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}