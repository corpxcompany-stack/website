"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";

/* ---------------------------------------------------------------------------
   PANEL 3 — FIND US

   THE OLD VERSION WAS A FAKE MAP
   It loaded an Unsplash photograph, labelled it "Office Location", and put a
   hover overlay on top. Anyone who has seen a map knows it isn't one, and a
   visitor deciding whether to trust a cleaning company with their keys is
   exactly the person who notices. It also hotlinked a third-party image on a
   commercial page.

   This loads the real Google Maps embed, and only when asked — the iframe is
   about 300KB, and a contact page should not pay that for every visitor who
   just wants the phone number.

   SET THIS BEFORE SHIPPING
   MAP_QUERY must match the business's actual Google Business Profile name and
   address, or the pin lands somewhere unhelpful. Copy the exact name from the
   listing.
--------------------------------------------------------------------------- */

const MAP_QUERY = "Corp Xtensions LLP, Pune";
const MAPS_LINK = "https://share.google/oykbjDU0TDGfB0eTX";

export default function MapEmbed() {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white rounded-2xl border border-neutral-200/70 shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden"
      aria-labelledby="find-us"
    >
      <header className="flex items-center justify-between gap-4 px-6 py-5">
        <div className="flex items-start gap-3">
          <span className="w-9 h-9 shrink-0 rounded-lg bg-neutral-50 border border-neutral-200/60 flex items-center justify-center text-[#006fe3]">
            <MapPin size={16} />
          </span>
          <div>
            <h2
              id="find-us"
              className="font-heading text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-900"
            >
              Find us
            </h2>
            <p className="font-body text-[11px] text-neutral-400 mt-1">Head office, Pune</p>
          </div>
        </div>

        <a
          href={MAPS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="group shrink-0 inline-flex items-center gap-1.5 font-body text-[10px] font-bold uppercase tracking-widest text-neutral-500 hover:text-[#006fe3] transition-colors"
        >
          Directions
          <ArrowUpRight
            size={13}
            className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>
      </header>

      <div className="relative h-[260px] border-t border-neutral-100 bg-neutral-100">
        {loaded ? (
          <iframe
            title="CorpX office location on Google Maps"
            src={`https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&output=embed`}
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : (
          <button
            type="button"
            onClick={() => setLoaded(true)}
            className="group absolute inset-0 flex flex-col items-center justify-center gap-3 cursor-pointer focus-visible:outline-none"
            aria-label="Load the map"
          >
            {/* Abstract grid — reads as a map placeholder, doesn't pretend to
                be a real one. No stock photography standing in for data. */}
            <span
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.5]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(0,111,227,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,111,227,0.10) 1px, transparent 1px)",
                backgroundSize: "34px 34px",
              }}
            />
            <span className="relative flex items-center justify-center w-11 h-11 rounded-full bg-[#006fe3] text-white shadow-[0_12px_28px_-10px_rgba(0,111,227,0.8)] transition-transform duration-300 group-hover:scale-105">
              <MapPin size={18} />
            </span>
            <span className="relative font-body text-[10px] font-bold uppercase tracking-widest text-neutral-600 group-hover:text-[#006fe3] transition-colors">
              Load map
            </span>
          </button>
        )}
      </div>
    </motion.section>
  );
}