"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Home,
  Sofa,
  Armchair,
  BedDouble,
  Layers,
  PaintRoller,
  Info,
  ArrowRight,
  MessageCircle,
  Check,
} from "lucide-react";
import "./Pricing.css";

/* ---------------------------------------------------------------------------
   FLAT DEEP CLEANING — headline rate card
   Prices as supplied by the client. Edit here only.
--------------------------------------------------------------------------- */
const flatPlans = [
  {
    size: "1 BHK",
    price: "7,000",
    blurb: "Full deep clean — every room, kitchen, bathroom and balcony.",
    inclusions: ["Kitchen degreasing", "Bathroom descaling", "Fans, walls & switches", "Floors & hard-to-reach corners"],
  },
  {
    size: "2 BHK",
    price: "8,900",
    blurb: "Full deep clean — every room, kitchen, bathrooms and balconies.",
    inclusions: ["Kitchen degreasing", "Bathroom descaling", "Fans, walls & switches", "Floors & hard-to-reach corners"],
  },
  {
    size: "3 BHK",
    price: "10,200",
    blurb: "Full deep clean across the whole flat, including all bathrooms.",
    inclusions: ["Kitchen degreasing", "Bathroom descaling", "Fans, walls & switches", "Floors & hard-to-reach corners"],
  },
];

/* ---------------------------------------------------------------------------
   OPTIONAL ADD-ONS
   NOTE FOR REVIEW: the client's list labelled the ₹950 / ₹1,500 line
   "Carpet Shampoo Cleaning" but priced it per single-bed / double-bed
   MATTRESS. It is entered below as Mattress Shampoo Cleaning, with carpet
   kept as a separate size-based line. Confirm with the client before launch.
--------------------------------------------------------------------------- */
const addOns = [
  {
    icon: Sofa,
    name: "Sofa shampoo cleaning",
    price: "₹250",
    unit: "per seat",
  },
  {
    icon: Armchair,
    name: "Chair shampoo cleaning",
    price: "₹150",
    unit: "per seat",
  },
  {
    icon: BedDouble,
    name: "Mattress shampoo cleaning",
    price: "₹950 / ₹1,500",
    unit: "single bed / double bed",
  },
  {
    icon: Layers,
    name: "Carpet cleaning",
    price: "On request",
    unit: "priced by carpet size",
  },
  {
    icon: PaintRoller,
    name: "Wet wall cleaning",
    price: "On request",
    unit: "washable paints only",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="pricing-canvas w-full py-24 md:py-32 border-y border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* ==========================================
           HEADER
           ========================================== */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#006fe3]/5 border border-[#006fe3]/10 text-[#006fe3] rounded-full px-4 py-1.5 text-[11px] font-bold tracking-wider uppercase font-body">
            <Home size={12} />
            Transparent pricing
          </div>
          <h2 className="font-heading font-bold text-neutral-900 text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight">
            Flat deep cleaning rates
          </h2>
          <div className="w-12 h-[2px] bg-[#006fe3] my-1" />
          <p className="font-body text-sm sm:text-base text-neutral-600 font-medium max-w-xl leading-relaxed">
            Clear prices by flat size, agreed before we start. No hidden charges
            and nothing added after the job.
          </p>
        </div>

        {/* ==========================================
           FLAT RATE CARDS
           ========================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {flatPlans.map((plan, i) => (
            <motion.div
              key={plan.size}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ type: "spring", stiffness: 150, damping: 22, delay: i * 0.07 }}
              className="pricing-tile bg-white border border-neutral-200/70 rounded-2xl p-7 sm:p-8 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-widest text-[#006fe3] font-body uppercase">
                    {plan.size}
                  </span>
                  <Home size={15} className="text-neutral-300" />
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="font-heading font-bold text-neutral-900 text-4xl sm:text-5xl tracking-tight leading-none">
                    &#8377;{plan.price}
                  </span>
                </div>

                <p className="font-body text-xs sm:text-sm text-neutral-500 font-medium leading-relaxed">
                  {plan.blurb}
                </p>

                <ul className="space-y-2.5 pt-5 border-t border-neutral-100">
                  {plan.inclusions.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 font-body text-xs text-neutral-600 font-medium"
                    >
                      <Check size={13} className="text-[#006fe3] shrink-0 mt-0.5" strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact"
                className="mt-8 w-full text-center font-body font-bold text-[11px] uppercase tracking-widest py-3.5 px-4 rounded-sm bg-neutral-900 text-white flex items-center justify-center gap-2 hover:bg-[#006fe3] transition-colors duration-300 group"
              >
                Book {plan.size}
                <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ==========================================
           OPTIONAL ADD-ONS
           ========================================== */}
        <div className="mt-16 bg-white border border-neutral-200/70 rounded-2xl overflow-hidden shadow-[0_10px_30px_-20px_rgba(0,0,0,0.06)]">
          <div className="px-7 sm:px-8 py-5 border-b border-neutral-100 flex items-center justify-between gap-4">
            <h3 className="font-heading font-bold text-neutral-900 text-base sm:text-lg tracking-tight">
              Optional add-on services
            </h3>
            <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-400 font-body hidden sm:block">
              Charged separately
            </span>
          </div>

          <ul className="divide-y divide-neutral-100">
            {addOns.map(({ icon: Icon, name, price, unit }) => (
              <li
                key={name}
                className="px-7 sm:px-8 py-5 flex items-center justify-between gap-5 hover:bg-neutral-50/60 transition-colors duration-300"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-neutral-50 border border-neutral-200/60 text-neutral-700 flex items-center justify-center shrink-0">
                    <Icon size={16} strokeWidth={1.6} />
                  </div>
                  <span className="font-body font-semibold text-neutral-800 text-xs sm:text-sm truncate">
                    {name}
                  </span>
                </div>

                <div className="text-right shrink-0">
                  <span className="font-heading font-bold text-neutral-900 text-sm sm:text-base block leading-tight">
                    {price}
                  </span>
                  <span className="font-body text-[10px] text-neutral-400 font-medium tracking-wide">
                    {unit}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* ==========================================
           TERMS & CONDITIONS
           ========================================== */}
        <div className="mt-8 flex items-start gap-3.5 bg-amber-50/70 border border-amber-200/70 rounded-xl p-5 sm:p-6">
          <Info size={16} className="text-amber-700 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="font-heading font-bold text-neutral-900 text-xs uppercase tracking-wider">
              Terms &amp; conditions
            </h4>
            <p className="font-body text-xs sm:text-sm text-neutral-600 font-medium leading-relaxed">
              Prices are based on the flat size and the agreed scope of work.
              Additional services or heavily soiled areas may incur extra
              charges. Wet wall cleaning is available on washable paints only.
              Any change to the quoted price is confirmed with you before work
              begins.
            </p>
          </div>
        </div>

        {/* ==========================================
           CTA
           ========================================== */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <a
            href="https://wa.me/919595000022?text=Hi%20CorpX%2C%20I%27d%20like%20a%20quote%20for%20flat%20deep%20cleaning."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:flex-1 text-center font-body font-bold text-xs uppercase tracking-widest py-4 px-6 rounded-sm bg-white border border-neutral-200 text-neutral-800 shadow-2xs hover:bg-neutral-50 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <MessageCircle size={14} className="fill-current text-[#25d366]" />
            Ask on WhatsApp
          </a>
          <Link
            href="/contact"
            className="btn-urgent-orange w-full sm:flex-1 text-center text-xs uppercase tracking-widest py-4 px-6 rounded-sm flex items-center justify-center gap-2 group"
          >
            Get a free quote
            <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}