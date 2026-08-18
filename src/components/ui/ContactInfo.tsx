"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

/* ---------------------------------------------------------------------------
   CHANGE #15 — Contact page details, structured the way the client specified:
   contact methods first, service locations as a separate block.

   The previous version invented four office street addresses (Andheri West,
   Indiranagar, HITEC City). Those are removed — the client asked for service
   LOCATIONS, not offices. If real branch addresses exist, add them back.
--------------------------------------------------------------------------- */

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    value: "+91 95950 00022",
    caption: "Mon–Sat, 9:00 AM – 8:00 PM",
    href: "tel:+919595000022",
    accent: "text-[#006fe3]",
    ring: "group-hover:border-[#006fe3]/30",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@mycorpx.com",
    caption: "We reply within one working hour",
    href: "mailto:info@mycorpx.com",
    accent: "text-[#006fe3]",
    ring: "group-hover:border-[#006fe3]/30",
  },
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    value: "+91 95950 00022",
    caption: "Fastest way to get a quote",
    href: "https://wa.me/919595000022?text=Hi%20CorpX%2C%20I%27d%20like%20a%20quote%20for%20cleaning%20services.",
    accent: "text-[#25d366]",
    ring: "group-hover:border-[#25d366]/40",
    external: true,
  },
];

const serviceLocations = ["Pune", "Mumbai", "Hyderabad", "Bangalore"];

export default function ContactInfo() {
  return (
    <div className="space-y-6">

      {/* ==========================================
         CONTACT METHODS
         ========================================== */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {contactMethods.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.a
              key={item.title}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className={`group bg-white p-6 rounded-2xl border border-neutral-200/70 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_-16px_rgba(0,111,227,0.16)] transition-all duration-300 block ${item.ring}`}
            >
              <div className={`w-10 h-10 rounded-lg bg-neutral-50 border border-neutral-200/60 flex items-center justify-center mb-4 ${item.accent}`}>
                <Icon size={18} />
              </div>

              <h3 className="font-heading font-bold text-neutral-900 text-xs uppercase tracking-widest mb-1.5">
                {item.title}
              </h3>
              <p className="font-body font-bold text-neutral-900 text-sm break-all leading-snug">
                {item.value}
              </p>
              <p className="font-body text-[11px] text-neutral-400 font-medium mt-1.5 leading-relaxed">
                {item.caption}
              </p>
            </motion.a>
          );
        })}
      </div>

      {/* ==========================================
         SERVICE LOCATIONS
         ========================================== */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="bg-white p-6 sm:p-7 rounded-2xl border border-neutral-200/70 shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
      >
        <div className="flex items-center gap-3 mb-5 pb-4 border-b border-neutral-100">
          <div className="w-10 h-10 rounded-lg bg-neutral-50 border border-neutral-200/60 flex items-center justify-center text-[#006fe3] shrink-0">
            <MapPin size={18} />
          </div>
          <div>
            <h3 className="font-heading font-bold text-neutral-900 text-xs uppercase tracking-widest">
              Service locations
            </h3>
            <p className="font-body text-[11px] text-neutral-400 font-medium mt-0.5">
              Where our teams operate
            </p>
          </div>
        </div>

        <ul className="grid grid-cols-2 gap-3">
          {serviceLocations.map((city) => (
            <li
              key={city}
              className="flex items-center gap-2.5 bg-neutral-50/70 border border-neutral-200/60 rounded-xl px-4 py-3 font-body font-bold text-neutral-800 text-sm transition-colors duration-300 hover:border-[#006fe3]/30 hover:bg-[#006fe3]/[0.03]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#006fe3] shrink-0" />
              {city}
            </li>
          ))}
        </ul>

        <p className="font-body text-[11px] text-neutral-400 font-medium mt-4 flex items-center gap-2">
          <Clock size={12} className="shrink-0" />
          Site visits and quotes are usually scheduled within 24–48 hours.
        </p>
      </motion.div>
    </div>
  );
}