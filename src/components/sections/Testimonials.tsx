"use client";

import { motion } from "framer-motion";
import { Star, Quote, Sparkles } from "lucide-react";
import { Container } from "../ui/Container";
import "./Testimonials.css";

const reviews = [
  {
    id: 1,
    quote: "The team was incredibly thorough. My kitchen looks better than it did when I first moved in. Highly recommended for anyone looking for deep cleaning in Pune.",
    author: "Priya S.",
    location: "Baner, Pune",
    type: "Residential Deep Clean"
  },
  {
    id: 2,
    quote: "Professional, on time, and the results were outstanding. Our office gets compliments from clients now. We have booked them on a monthly contract.",
    author: "Rajan M.",
    location: "Hinjewadi, Pune",
    type: "Corporate Workspace"
  },
  {
    id: 3,
    quote: "Finally found a cleaning service I can actually trust. They took care of my newborn's room with extra care. Worth every rupee.",
    author: "Sunita K.",
    location: "Kothrud, Pune",
    type: "Premium Home Care"
  }
];

export default function Testimonials() {
  return (
    <section className="w-full py-16 sm:py-20 md:py-32 testimonials-luxury-canvas relative overflow-hidden">
      <Container>
        
        {/* ==========================================
            1. ELEGANT EDITORIAL TITLE ROW
            ========================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20">
          <div className="space-y-3 sm:space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 md:gap-2 bg-white border border-sky-200/60 text-sky-950 rounded-full px-3.5 py-1.5 text-[10px] sm:text-[11px] font-bold tracking-wider uppercase font-body shadow-2xs">
              <Sparkles size={12} className="fill-current text-[#006fe3]" />
              Verified Client Ledger
            </div>
            
            <h2 className="font-heading font-extrabold text-neutral-900 text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight">
              What Our Clients Say — Testimonials
            </h2>
          </div>

          <div className="flex items-center gap-3 border-l-2 border-[#006fe3]/30 pl-4 md:pl-6 shrink-0 lg:mb-2">
            <div>
              <div className="flex items-center gap-0.5 text-[#006fe3]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-current" />
                ))}
              </div>
              <span className="text-[10px] font-bold tracking-widest text-neutral-500 font-body uppercase mt-1 block">
                Average 5/5 Real-Time Rating
              </span>
            </div>
          </div>
        </div>

        {/* ==========================================
            2. HIGH-END CONFIGURATION DECK GRID
            ========================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {reviews.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ 
                type: "spring", 
                stiffness: 140, 
                damping: 24, 
                delay: idx * 0.06 
              }}
              /* Reduced mobile padding and min-height */
              className="testimonial-spatial-card border border-sky-100/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[260px] sm:min-h-[300px] testimonial-gpu-layer select-none"
            >
              {/* Graphic Structural Quote Identifier */}
              <div className="absolute right-6 sm:right-8 top-6 sm:top-8 text-sky-50/50 transition-colors duration-500 pointer-events-none">
                <Quote size={32} className="sm:w-[40px] sm:h-[40px] transform rotate-180 text-sky-100" strokeWidth={1} />
              </div>

              {/* Upper Section: Quality Rating Matrix & Text */}
              <div className="space-y-4 sm:space-y-6 relative z-10">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} className="fill-[#006fe3] text-[#006fe3]" />
                  ))}
                </div>

                <p className="font-body text-xs sm:text-sm md:text-base text-neutral-700 font-medium leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Lower Section: User Typographic Signature Row */}
              <div className="pt-5 sm:pt-6 mt-6 sm:mt-8 border-t border-neutral-100 flex items-center justify-between gap-3">
                <div>
                  <h3 className="font-heading font-bold text-neutral-900 text-sm sm:text-base tracking-tight">
                    {item.author}
                  </h3>
                  <p className="text-[10px] sm:text-[11px] font-semibold text-neutral-400 tracking-normal font-body">
                    {item.location}
                  </p>
                </div>

                <div className="bg-sky-50 border border-sky-100/60 rounded-sm px-2.5 py-1 text-[8.5px] sm:text-[9px] font-bold uppercase text-[#006fe3] tracking-wider font-body shrink-0">
                  {item.type}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  );
}