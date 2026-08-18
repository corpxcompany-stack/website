"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  Award,
  Target,
  Compass,
  Heart,
  Zap,
  UserCheck,
  History,
  ArrowRight,
  ShieldCheck,
  ReceiptText,
  ExternalLink,
  Check,
} from "lucide-react";
import "./About.css";

const differences = [
  {
    id: 1,
    title: "We Clean the Way We Would Want Our Own Home Cleaned",
    description:
      "That is not a slogan — it is the standard our team works to every day. When we step into your space, we bring the same attention to detail, care, and respect we would give our own property.",
    icon: Heart,
    tag: "Core Value",
    bgClass: "bg-sky-50 border-sky-200/80 shadow-[0_4px_12px_-6px_rgba(14,165,233,0.06)]",
    iconClass:
      "bg-sky-100 text-sky-700 border-sky-200 group-hover:bg-sky-600 group-hover:text-white group-hover:border-sky-600",
  },
  {
    id: 2,
    title: "Real Deep Cleaning — Not a Shortcut",
    description:
      "We understand that 'cleaning' can mean different things. For us, it means going behind the refrigerator, inside the cabinets, under the furniture, and into the corners most people skip. Real deep cleaning takes time, skill, and the right equipment — and that is what we bring.",
    icon: Zap,
    tag: "Operational Standard",
    bgClass: "bg-amber-50 border-amber-200/80 shadow-[0_4px_12px_-6px_rgba(245,158,11,0.06)]",
    iconClass:
      "bg-amber-100 text-amber-700 border-amber-200 group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-600",
  },
  {
    id: 3,
    title: "A Team You Can Trust",
    description:
      "Every professional on our team is trained, verified, and held to a clear quality standard. We do not send strangers — we send accountable, professional people who take pride in their work.",
    icon: UserCheck,
    tag: "Security Baseline",
    bgClass: "bg-emerald-50 border-emerald-200/80 shadow-[0_4px_12px_-6px_rgba(16,185,129,0.06)]",
    iconClass:
      "bg-emerald-100 text-emerald-700 border-emerald-200 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600",
  },
  {
    id: 4,
    title: "Proven by Eight Years of Results",
    description:
      "Since 2016, we have served hundreds of homes, offices, restaurants, clinics, and commercial spaces across Pune, Mumbai, Bangalore and Hyderabad. Our reputation is not built on marketing — it is built on repeat clients and referrals.",
    icon: History,
    tag: "Track Record",
    bgClass: "bg-rose-50 border-rose-200/80 shadow-[0_4px_12px_-6px_rgba(244,63,94,0.06)]",
    iconClass:
      "bg-rose-100 text-rose-700 border-rose-200 group-hover:bg-rose-600 group-hover:text-white group-hover:border-rose-600",
  },
];

/* CHANGE #13 — proof points sitting under Mission & Vision.
   These are commitments the client can actually be held to, rather than
   adjectives. Remove any line the client will not stand behind. */
const proofPoints = [
  "Quote confirmed in writing before work begins",
  "Final walkthrough on every job, no exceptions",
  "Same team standard across all four cities",
  "ISO 9001:2015 process audits, not just a certificate",
];

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen about-luxury-canvas text-neutral-950 font-body overflow-x-hidden pt-24 pb-20">

      {/* ==========================================
         1. HERO
         ========================================== */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-24 border-b border-neutral-200/50">
        <div className="max-w-5xl space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#006fe3]/5 border border-[#006fe3]/10 text-[#006fe3] rounded-full px-4 py-1.5 text-[11px] font-bold tracking-wider uppercase"
          >
            <Sparkles size={12} />
            About CorpX
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
            className="font-heading font-bold text-neutral-900 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight"
          >
            Trusted cleaning experts <br />
            <span className="text-[#006fe3] bg-gradient-to-r from-[#006fe3] to-[#005bc4] bg-clip-text text-transparent">
              — cleaning with care since 2016
            </span>
          </motion.h1>
        </div>
      </section>

      {/* ==========================================
         2. OUR STORY
         ========================================== */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 border-b border-neutral-200/50">
        <div className="about-split-matrix">

          {/* Left: sticky identity */}
          <div className="w-full lg:w-[35%] about-sticky-aside space-y-4">
            <span className="text-[10px] font-bold tracking-widest text-[#006fe3] uppercase block">
              How we started
            </span>
            <h2 className="font-heading font-bold text-neutral-900 text-3xl sm:text-4xl tracking-tight leading-none">
              Our Story
            </h2>

            <div className="pt-6 hidden lg:block">
              <div className="bg-indigo-50/70 border border-indigo-200/80 rounded-xl p-6 space-y-3 shadow-2xs max-w-xs">
                <ShieldCheck size={24} className="text-indigo-600" strokeWidth={1.5} />
                <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-neutral-900">
                  ISO 9001:2015 Registered
                </h4>
                <p className="text-[11px] font-medium text-indigo-900/70 leading-relaxed">
                  A documented quality system: defined processes, trained staff,
                  and audits that check we are actually following them.
                </p>
                {/* CHANGE #5 — opens public/iso.pdf */}
                <a
                  href="/iso.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold text-indigo-700 hover:text-indigo-900 transition-colors pt-1"
                >
                  View certificate
                  <ExternalLink size={11} className="shrink-0" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: narrative */}
          <div className="w-full lg:w-[65%] space-y-8 text-neutral-600 font-medium text-sm sm:text-base leading-relaxed max-w-3xl">

            {/* ==========================================
               CHANGE #4 — About Us image.
               Replace /about/team.avif with the real photo. A genuine shot of
               the team on site will outperform stock here by a wide margin.
               Recommended: 1600x1000 or wider, exported as .avif or .webp.
               ========================================== */}
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200/70 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.25)]">
              <Image
                src="/about/team.avif"
                alt="The CorpX cleaning team on site"
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/25 via-transparent to-transparent pointer-events-none" />
            </div>

            <p className="text-neutral-900 font-semibold text-lg sm:text-xl leading-relaxed">
              It started with a straightforward belief: that every person deserves
              to live and work in a space that is genuinely clean — not just
              looked over, but deeply, properly clean.
            </p>

            <p>
              Since 2016, we have been turning that belief into reality for homes,
              offices, restaurants, clinics, and commercial properties across
              Pune, Mumbai, Bangalore and Hyderabad. What began as a small,
              determined team has grown into one of the region&apos;s most trusted
              professional cleaning services — built not on advertising promises,
              but on the results we deliver and the trust we earn, one clean space
              at a time.
            </p>

            <div className="bg-sky-50 border border-sky-200/80 rounded-xl p-6 md:p-8 text-neutral-700 space-y-4 shadow-2xs">
              <div className="flex items-center gap-2.5 text-neutral-900">
                <Award size={18} className="text-sky-700" />
                <h3 className="font-heading font-bold text-base tracking-tight text-sky-950">
                  ISO 9001:2015 Quality Management System Certified
                </h3>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-sky-900/80">
                That certification is not a plaque on the wall — it reflects the
                way we operate every day: structured processes, trained
                professionals, consistent quality, and a commitment to getting it
                right.
              </p>

              {/* CHANGE #5 — both certificates, straight from /public */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="/iso.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white border border-sky-200 text-sky-900 font-body font-bold text-[11px] uppercase tracking-widest px-4 py-2.5 rounded-sm shadow-2xs hover:border-sky-400 hover:bg-sky-50 transition-all duration-300"
                >
                  <ShieldCheck size={13} className="text-[#006fe3] shrink-0" />
                  View ISO certificate
                </a>
                <a
                  href="/gst.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white border border-sky-200 text-sky-900 font-body font-bold text-[11px] uppercase tracking-widest px-4 py-2.5 rounded-sm shadow-2xs hover:border-emerald-400 hover:bg-emerald-50 transition-all duration-300"
                >
                  <ReceiptText size={13} className="text-emerald-600 shrink-0" />
                  View GST certificate
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
         3. MISSION & VISION  — CHANGE #13
         ========================================== */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 border-b border-neutral-200/50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="border border-emerald-200/80 rounded-xl p-8 md:p-12 space-y-6 bg-emerald-50/60 shadow-2xs relative overflow-hidden group"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 border border-emerald-200 flex items-center justify-center shadow-2xs group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-all duration-500">
              <Target size={20} strokeWidth={1.5} />
            </div>

            <div className="space-y-3">
              <span className="text-[9px] font-bold tracking-widest text-emerald-700 uppercase block">
                What we are here to do
              </span>
              <h2 className="font-heading font-bold text-neutral-900 text-2xl tracking-tight">
                Our Mission
              </h2>

              <div className="space-y-4 pt-3 border-t border-emerald-200/40">
                <p className="font-body text-sm sm:text-base text-neutral-800 font-semibold leading-relaxed">
                  To raise what &ldquo;clean&rdquo; actually means for homes and
                  businesses across Pune, Mumbai, Bangalore and Hyderabad.
                </p>
                <p className="font-body text-xs sm:text-sm text-neutral-600 font-medium leading-relaxed">
                  That means going past the surface every time — behind the
                  appliances, into the grout, above the cabinets — using trained,
                  background-verified teams and products that are safe around
                  children and pets. We quote the price before we start, we walk
                  the space with you when we finish, and we fix anything that
                  falls short before we leave.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="border border-purple-200/80 rounded-xl p-8 md:p-12 space-y-6 bg-purple-50/60 shadow-2xs relative overflow-hidden group"
          >
            <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 border border-purple-200 flex items-center justify-center shadow-2xs group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition-all duration-500">
              <Compass size={20} strokeWidth={1.5} />
            </div>

            <div className="space-y-3">
              <span className="text-[9px] font-bold tracking-widest text-purple-700 uppercase block">
                Where we are heading
              </span>
              <h2 className="font-heading font-bold text-neutral-900 text-2xl tracking-tight">
                Our Vision
              </h2>

              <div className="space-y-4 pt-3 border-t border-purple-200/40">
                <p className="font-body text-sm sm:text-base text-neutral-800 font-semibold leading-relaxed">
                  To be the cleaning company people recommend without being asked.
                </p>
                <p className="font-body text-xs sm:text-sm text-neutral-600 font-medium leading-relaxed">
                  Not the largest, and not the cheapest — the one a client calls
                  back six months later, and the one they pass on to a neighbour
                  or a colleague. We are building that through consistency: the
                  same standard on the tenth visit as on the first, whether it is
                  a one-bedroom flat or a manufacturing floor.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Proof points — balances the two boxes above */}
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
        >
          {proofPoints.map((point) => (
            <li
              key={point}
              className="flex items-start gap-2.5 bg-white border border-neutral-200/70 rounded-xl px-5 py-4 shadow-2xs"
            >
              <Check size={14} className="text-[#006fe3] shrink-0 mt-0.5" strokeWidth={2.5} />
              <span className="font-body text-xs text-neutral-700 font-semibold leading-snug">
                {point}
              </span>
            </li>
          ))}
        </motion.ul>
      </section>

      {/* ==========================================
         4. WHAT MAKES US DIFFERENT
         ========================================== */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 border-b border-neutral-200/50 select-none">

        <div className="max-w-3xl mb-20 space-y-4">
          <span className="text-[10px] font-bold tracking-widest text-[#006fe3] uppercase block">
            Why clients stay
          </span>
          <h2 className="font-heading font-bold text-neutral-900 text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight">
            What Makes Us Different
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {differences.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ type: "spring", stiffness: 140, damping: 22, delay: idx * 0.05 }}
                className={`difference-cell-tile about-gpu-accelerate rounded-xl p-6 sm:p-10 flex flex-col justify-between min-h-[260px] border group ${item.bgClass}`}
              >
                <div className="space-y-5">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center border transition-all duration-500 shadow-2xs ${item.iconClass}`}
                  >
                    <IconComponent size={18} strokeWidth={1.5} />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[9px] font-bold tracking-widest uppercase block font-body text-neutral-400 group-hover:text-neutral-950 transition-colors duration-300">
                      {item.tag}
                    </span>
                    <h3 className="font-heading font-bold text-neutral-900 text-base sm:text-lg tracking-tight leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="pt-5 border-t border-black/[0.03] group-hover:border-black/[0.06] transition-colors duration-500">
                  <p className="font-body text-xs sm:text-sm text-neutral-500 font-medium leading-relaxed group-hover:text-neutral-800 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ==========================================
         5. CLOSING CTA
         ========================================== */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: "spring", stiffness: 120, damping: 22 }}
          className="bg-neutral-950 rounded-2xl border border-white/[0.06] p-8 md:p-14 text-center space-y-8 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.35)] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,111,227,0.08),transparent_60%)] pointer-events-none" />

          <div className="space-y-3 relative z-10 max-w-xl mx-auto">
            <span className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase block font-body">
              Ready when you are
            </span>
            <h2 className="font-heading font-bold text-white text-xl sm:text-2xl md:text-3xl tracking-tight leading-normal">
              Clean spaces. Happy people. <br />
              <span className="text-[#006fe3]">Trusted service since 2016.</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10 max-w-md mx-auto">
            <Link
              href="/services"
              className="w-full sm:flex-1 text-center font-body font-bold text-xs uppercase tracking-widest py-4 px-6 rounded-sm bg-white border border-white text-neutral-900 shadow-2xs transition-all duration-300 hover:bg-neutral-50 active:scale-[0.98]"
            >
              Book a service &rarr;
            </Link>

            <Link
              href="/contact"
              className="w-full sm:flex-1 text-center font-body font-bold text-xs uppercase tracking-widest py-4 px-6 rounded-sm bg-[#fe4d01] border border-[#fe4d01] text-white shadow-2xs transition-all duration-300 hover:bg-[#e04400] active:scale-[0.98] flex items-center justify-center gap-2 group"
            >
              Get a free quote
              <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}