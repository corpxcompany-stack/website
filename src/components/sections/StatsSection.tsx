"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Sparkles, ShieldCheck, Building2, Users2, Star } from "lucide-react";
import "./StatsSection.css";

const metrics = [
  {
    id: 1,
    targetNumber: 8500,
    suffix: "+",
    label: "Luxury Estates",
    subLabel: "Homes & Private Villas",
    description: "Premium deep cleaning executed across high-end apartments, penthouses, and private estates.",
    icon: Star,
  },
  {
    id: 2,
    targetNumber: 420,
    suffix: "+",
    label: "Corporate Hubs",
    subLabel: "Commercial Complexes",
    description: "Consistent facility maintenance delivered across commercial tech parks and corporate offices.",
    icon: Building2,
  },
  {
    id: 3,
    targetNumber: 98,
    suffix: ".4%",
    label: "Client Retention",
    subLabel: "Recurring Care Accounts",
    description: "Quarterly recurring cleaning agreements built entirely on quality outcomes and clear trust.",
    icon: ShieldCheck,
  },
  {
    id: 4,
    targetNumber: 120,
    suffix: "+",
    label: "Verified Staff",
    subLabel: "Background Cleared",
    description: "In-house cleaning professionals who have passed extensive background checks and safety screenings.",
    icon: Users2,
  },
];

const RollingCounter = ({ target, duration = 2 }: { target: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const isInView = useInView(elementRef, { once: false, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * target));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [isInView, target, duration]);

  return <span ref={elementRef}>{count.toLocaleString()}</span>;
};

export default function StatsSection() {
  return (
    <section className="w-full bg-neutral-50/40 stats-luxury-viewport overflow-hidden relative border-b border-neutral-200/50">
      
      <div className="absolute inset-x-0 top-0 h-[1px] bg-neutral-200/60" />
      
      <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-12">
        {/* FORCE 4 COLUMNS ON ALL SCREENS */}
        <div className="grid grid-cols-4 divide-x divide-neutral-200/50">
          
          {metrics.map((metric, idx) => {
            const IconComponent = metric.icon;
            
            return (
              <motion.div
                key={metric.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 140, 
                  damping: 24, 
                  delay: idx * 0.08 
                }}
                /* Centered on mobile, Left-aligned on tablet/desktop */
                className="architectural-cell metric-gpu-accelerate p-2 sm:p-8 md:p-10 lg:p-14 flex flex-col justify-start sm:justify-between items-center text-center sm:items-start sm:text-left min-h-[140px] sm:min-h-[320px] md:min-h-[380px] group select-none"
              >
                <div className="space-y-2 sm:space-y-8 relative z-10 w-full flex flex-col items-center sm:items-start">
                  
                  {/* Micro Icon for Mobile, Standard for Desktop */}
                  <div className="w-6 h-6 sm:w-12 sm:h-12 rounded-md sm:rounded-xl bg-white border border-neutral-200/60 text-neutral-800 flex items-center justify-center shadow-xs transition-all duration-500 group-hover:bg-[#006fe3] group-hover:text-white group-hover:border-[#006fe3] sm:group-hover:scale-110 shrink-0">
                    <IconComponent strokeWidth={1.5} className="w-3 h-3 sm:w-5 sm:h-5" />
                  </div>
                  
                  <div className="space-y-1 w-full">
                    {/* Numbers: text-xl on mobile, huge on desktop */}
                    <div className="flex flex-row items-baseline justify-center sm:justify-start font-heading font-extrabold text-neutral-900 tracking-tighter text-[17px] sm:text-5xl lg:text-7xl leading-none">
                      <RollingCounter target={metric.targetNumber} />
                      <span className="text-[#006fe3] ml-[1px] sm:ml-0.5">{metric.suffix}</span>
                    </div>
                    
                    <div className="pt-1 sm:pt-3">
                      {/* Labels: Tiny on mobile, standard on desktop */}
                      <h4 className="text-[7.5px] sm:text-xs font-bold tracking-wider sm:tracking-widest text-neutral-900 font-body uppercase leading-tight sm:leading-normal">
                        {metric.label}
                      </h4>
                      {/* Sub-label: Hidden on mobile to save space */}
                      <p className="hidden sm:block text-[10px] font-semibold text-[#006fe3] tracking-wider uppercase font-body opacity-80 mt-0.5">
                        {metric.subLabel}
                      </p>
                    </div>
                  </div>

                </div>

                {/* Description: Hidden entirely on mobile, visible on sm and up */}
                <div className="hidden sm:block pt-10 relative z-10 border-t border-neutral-100 group-hover:border-neutral-200/60 transition-colors duration-500 mt-auto">
                  <p className="font-body text-xs md:text-sm text-neutral-500 font-medium leading-relaxed max-w-[260px] group-hover:text-neutral-700 transition-colors duration-400">
                    {metric.description}
                  </p>
                </div>

              </motion.div>
            );
          })}

        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-neutral-200/60" />
      
    </section>
  );
}