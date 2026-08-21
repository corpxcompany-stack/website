"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Building2 } from "lucide-react";
import Image from "next/image";
import "./Clients.css";

/* ==========================================
   CLIENT DATA MAPPING WITH LOGOS
   ========================================== */
const companiesRow1 = [
  { name: "Anj: Giving Life to Ideas", logo: "/clients/anj.avif" },
  { name: "Atur India", logo: "/clients/atur.avif" },
  { name: "Battrixx: Future Energy", logo: "/clients/battrixx.avif" },
  { name: "Bobst", logo: "/clients/bobst.avif" },
  { name: "Colliers", logo: "/clients/colliers.avif" },
  { name: "Cowrks", logo: "/clients/cowrks.avif" },
  { name: "Electromech Infraprojects Ltd", logo: "/clients/electromech.avif" },
  { name: "Eleganz Interiors Ltd", logo: "/clients/eleganz.avif" },
];

const companiesRow2 = [
  { name: "Elementis: A Global Speciality Chemicals Company", logo: "/clients/elementis.avif" },
  { name: "Holcim", logo: "/clients/holcim.avif" },
  { name: "Hindustani Petroleum", logo: "/clients/hp.avif" },
  { name: "Kamdhenu", logo: "/clients/kamdhenugroup.avif" },
  { name: "MIPPL: Your Turnkey Interior Partner", logo: "/clients/mippl.avif" },
  { name: "PETER/Lacke: The Coating Experts", logo: "/clients/peter.avif" },
  { name: "Space Interrioz: Ventures Pvt ltd", logo: "/clients/space.avif" },
  { name: "Webber Electro Corp", logo: "/clients/webber.avif" },
];

function MarqueeRow({ items, reverse = false }: { items: { name: string; logo: string }[]; reverse?: boolean }) {
  return (
    <div className="relative overflow-hidden w-full py-3">
      <motion.div
        className="flex gap-4 md:gap-6 whitespace-nowrap items-center marquee-gpu-layer"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{
          duration: 45, 
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        {/* Quadrupled arrays maintain structural flow continuity across wide displays */}
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <div
            key={i}
            title={item.name}
            className="flex items-center justify-center shrink-0 bg-white border border-sky-100/70 rounded-2xl w-[180px] md:w-[220px] h-[90px] md:h-[110px] px-6 shadow-[0_4px_12px_-6px_rgba(14,165,233,0.03)] transition-all duration-500 hover:border-[#006fe3]/40 hover:shadow-[0_12px_24px_-10px_rgba(0,111,227,0.08)] hover:-translate-y-1 group cursor-pointer"
          >
            <Image
              src={item.logo}
              alt={item.name}
              width={160}
              height={80}
              className="w-auto h-12 md:h-16 object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Clients() {
  return (
    <section className="clients-section-canvas py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* ==========================================
            1. PREMIUM ASYMMETRIC TRUST HEADER
            ========================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-20">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 bg-white border border-sky-200/60 text-sky-950 rounded-full px-4 py-1.5 text-[11px] font-bold tracking-wider uppercase font-body shadow-2xs">
              <Building2 size={13} className="text-[#006fe3]" />
              Institutional-Grade Operations
            </div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-heading font-extrabold text-neutral-900 text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight"
            >
              Trusted by Corporate &amp; <br />
              Industrial Leaders
            </motion.h2>
          </div>

          <div className="lg:col-span-5 lg:pt-8">
            <p className="font-body text-neutral-600 text-sm sm:text-base font-medium leading-relaxed border-l-2 border-[#006fe3]/40 pl-6">
              Providing enterprise-level deployment, modern equipment architectures, and rigorous facility maintenance across corporate environments and production zones.
            </p>
          </div>

        </div>

        {/* ==========================================
            2. SEAMLESS INFINITE LOGO MARQUEE DECK
            ========================================== */}
        <div className="space-y-4 md:space-y-6 marquee-luxury-mask relative z-10 select-none">
          <MarqueeRow items={companiesRow1} />
          <MarqueeRow items={companiesRow2} reverse />
        </div>

        {/* ==========================================
            3. FLOATING VERIFICATION SIGNPOST
            ========================================== */}
        <div className="flex justify-center items-center gap-2.5 mt-16 text-neutral-500 font-body text-xs font-bold uppercase tracking-widest">
          <ShieldCheck size={15} className="text-[#006fe3]" />
          Corporate Compliance &amp; Insurance Verified
        </div>

      </div>
    </section>
  );
}