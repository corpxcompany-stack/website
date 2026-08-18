"use client";

import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";

/* ---------------------------------------------------------------------------
   PANEL 2 — WHERE WE WORK

   Split out of ContactInfo so the page has one panel per question:
   how to reach us / where we work / where we are. Mixing service coverage into
   the contact-methods card was why the right column read as one long
   undifferentiated stack.

   These are service areas, not branch offices. The wording says so, because
   the earlier version of the page invented street addresses in Andheri West,
   Indiranagar and HITEC City — a visitor who turns up at one of those has a
   bad day and CorpX loses the job.
--------------------------------------------------------------------------- */

const cities = ["Pune", "Mumbai", "Bangalore", "Hyderabad"];

export default function ServiceAreas() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white rounded-2xl border border-neutral-200/70 shadow-[0_4px_20px_rgba(0,0,0,0.04)] p-6"
      aria-labelledby="where-we-work"
    >
      <header className="flex items-start gap-3 pb-5 mb-5 border-b border-neutral-100">
        <span className="w-9 h-9 shrink-0 rounded-lg bg-neutral-50 border border-neutral-200/60 flex items-center justify-center text-[#006fe3]">
          <MapPin size={16} />
        </span>
        <div>
          <h2
            id="where-we-work"
            className="font-heading text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-900"
          >
            Where we work
          </h2>
          <p className="font-body text-[11px] text-neutral-400 mt-1">
            Service areas, not branch offices
          </p>
        </div>
      </header>

      <ul className="grid grid-cols-2 gap-2.5">
        {cities.map((city) => (
          <li
            key={city}
            className="flex items-center gap-2.5 rounded-xl border border-neutral-200/60 bg-neutral-50/70 px-4 py-3 font-body font-bold text-neutral-800 text-sm transition-colors duration-200 hover:border-[#006fe3]/30 hover:bg-[#006fe3]/[0.03]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#006fe3] shrink-0" />
            {city}
          </li>
        ))}
      </ul>

      <p className="font-body text-[11px] text-neutral-400 mt-5 flex items-start gap-2 leading-relaxed">
        <Clock size={12} className="shrink-0 mt-0.5" />
        Site visits and quotes are usually scheduled within 24–48 hours.
      </p>
    </motion.section>
  );
}