"use client";

import { motion } from "framer-motion";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

/* ---------------------------------------------------------------------------
   PANEL 1 — HOW TO REACH US

   Three cramped cards side by side forced "+91 95950 00022" to break mid-number
   with break-all. Rows instead: the number stays on one line, each method gets
   its own response-time line, and the whole panel scans top to bottom like a
   list of options rather than a grid of tiles.
--------------------------------------------------------------------------- */

const methods = [
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    value: "+91 95950 00022",
    caption: "Fastest way to a quote",
    href: "https://wa.me/919595000022?text=Hi%20CorpX%2C%20I%27d%20like%20a%20quote%20for%20cleaning%20services.",
    tone: "text-[#25d366]",
    external: true,
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 95950 00022",
    caption: "Mon–Sat, 9:00 AM – 8:00 PM",
    href: "tel:+919595000022",
    tone: "text-[#006fe3]",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@mycorpx.com",
    caption: "Reply within one working hour",
    href: "mailto:info@mycorpx.com",
    tone: "text-[#006fe3]",
  },
];

export default function ContactInfo() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white rounded-2xl border border-neutral-200/70 shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden"
      aria-labelledby="reach-us"
    >
      <header className="px-6 pt-6 pb-4">
        <h2
          id="reach-us"
          className="font-heading text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-900"
        >
          Talk to us
        </h2>
        <p className="font-body text-[11px] text-neutral-400 mt-1">
          Three ways in. All of them reach the same desk.
        </p>
      </header>

      <ul className="divide-y divide-neutral-100 border-t border-neutral-100">
        {methods.map((m) => {
          const Icon = m.icon;
          return (
            <li key={m.title}>
              <a
                href={m.href}
                target={m.external ? "_blank" : undefined}
                rel={m.external ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 px-6 py-4 transition-colors duration-200 hover:bg-neutral-50/80 focus-visible:outline-none focus-visible:bg-neutral-50"
              >
                <span
                  className={`w-9 h-9 shrink-0 rounded-lg bg-neutral-50 border border-neutral-200/60 flex items-center justify-center ${m.tone}`}
                >
                  <Icon size={16} />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block font-body font-bold text-neutral-900 text-sm whitespace-nowrap">
                    {m.value}
                  </span>
                  <span className="block font-body text-[11px] text-neutral-400 mt-0.5">
                    {m.title} · {m.caption}
                  </span>
                </span>

                <ArrowUpRight
                  size={15}
                  className="shrink-0 text-neutral-300 transition-all duration-200 group-hover:text-[#006fe3] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </li>
          );
        })}
      </ul>
    </motion.section>
  );
}