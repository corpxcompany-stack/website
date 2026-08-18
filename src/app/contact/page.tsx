"use client";

import { useActionState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { submitContactForm } from "@/app/actions/contact";
import ContactForm from "@/components/ui/ContactForm";
import ContactInfo from "@/components/ui/ContactInfo";
import ServiceAreas from "@/components/ui/ServiceAreas";
import MapEmbed from "@/components/ui/MapEmbed";

/* ---------------------------------------------------------------------------
   CONTACT PAGE

   DIVISIONS
   Four panels, one question each:
     form        — start the job
     ContactInfo — how to reach a human
     ServiceAreas— which cities are covered
     MapEmbed    — where the office is
   Previously ContactInfo carried both the methods and the coverage, so the
   right side read as one long undivided stack.

   The form gets 7 of 12 columns because it is the conversion path. The three
   support panels share 5. Equal halves gave the map the same visual weight as
   the quote request, which is not the priority order for this page.

   viewport once:false made every block re-animate on each scroll past. Fixed
   to once:true throughout — replaying an entrance animation reads as a glitch.
--------------------------------------------------------------------------- */

export default function ContactPage() {
  const [state, action, pending] = useActionState(submitContactForm, null);

  return (
    <main className="min-h-screen bg-neutral-50">
      {/* ---------- HEADER ---------- */}
      <section className="relative overflow-hidden bg-white border-b border-neutral-200/70">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 -right-24 w-[34rem] h-[34rem] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0,111,227,0.10) 0%, transparent 68%)",
          }}
        />
        <Container className="relative py-14 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-12"
          >
            {/* Left side: Heading and Text */}
            <div className="max-w-2xl">
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight leading-[1.02]">
                Tell us about the space.
                <span className="block text-[#006fe3]">We'll quote it.</span>
              </h1>

              <p className="mt-4 font-body text-neutral-500 text-base leading-relaxed max-w-lg">
                Deep cleaning for homes, offices and commercial sites across Pune,
                Mumbai, Bangalore and Hyderabad. Fixed prices, ISO 9001:2015
                certified since 2016.
              </p>
            </div>

            {/* Right side: Large Logo */}
            <div className="flex-shrink-0">
              <Image
                src="/logo.avif"
                alt="CorpX"
                width={400}
                height={120}
                priority
                className="w-56 md:w-72 lg:w-96 h-auto object-contain object-left md:object-right"
              />
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ---------- PANELS ---------- */}
      <Container className="py-12 md:py-16">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Conversion path gets the weight */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <ContactForm action={action} pending={pending} state={state} />
          </motion.div>

          {/* Support panels, each self-contained */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <ContactInfo />
            <ServiceAreas />
            <MapEmbed />
          </div>
        </div>
      </Container>
    </main>
  );
}