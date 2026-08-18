"use client";

import { motion } from "framer-motion";
import { ShieldCheck, ReceiptText, ExternalLink, Download, FileCheck2 } from "lucide-react";
import "./Certifications.css";

/* ---------------------------------------------------------------------------
   CHANGE #5 — ISO & GST certificates

   Files live in /public, so they are served from the site root:
     public/iso.pdf  ->  /iso.pdf
     public/gst.pdf  ->  /gst.pdf

   Two actions per certificate: "View" opens the PDF in a new tab (browser's
   built-in viewer), "Download" saves it. The `download` attribute only works
   for same-origin files, which these are.

   TO FILL IN: `registrationLine` on the GST card needs the actual GSTIN.
   In India the GSTIN is expected to be displayed on business communications,
   and a visible number is far more persuasive than the word "registered".
--------------------------------------------------------------------------- */

const certificates = [
  {
    id: "iso",
    icon: ShieldCheck,
    eyebrow: "Quality management",
    title: "ISO 9001:2015 Certified",
    body:
      "Our cleaning processes, staff training and quality checks are documented and audited against ISO 9001:2015 by an external certifying body — not self-declared.",
    registrationLine: "Certificate available to view in full",
    file: "/iso.pdf",
    fileName: "CorpX-ISO-9001-2015-Certificate.pdf",
    accent: "text-[#006fe3]",
    tint: "bg-[#006fe3]/[0.04] border-[#006fe3]/15",
    iconTint: "bg-[#006fe3]/10 text-[#006fe3] border-[#006fe3]/20",
  },
  {
    id: "gst",
    icon: ReceiptText,
    eyebrow: "Tax registration",
    title: "GST Registered",
    body:
      "Corp Xtensions LLP is GST registered. Every job is invoiced properly, which matters if you are claiming input credit on commercial or office cleaning.",
    // Replace the placeholder below with the real GSTIN.
    registrationLine: "GSTIN: 27XXXXXXXXXXXZX",
    file: "/gst.pdf",
    fileName: "CorpX-GST-Registration-Certificate.pdf",
    accent: "text-emerald-700",
    tint: "bg-emerald-50/70 border-emerald-200/80",
    iconTint: "bg-emerald-100 text-emerald-700 border-emerald-200",
  },
];

interface CertificationsProps {
  /** Hide the section heading when embedding inside a page that already has one. */
  compact?: boolean;
}

export default function Certifications({ compact = false }: CertificationsProps) {
  return (
    <section
      id="certifications"
      className={`certifications-canvas w-full ${compact ? "py-4" : "py-24 md:py-28 border-y border-neutral-200/60"}`}
    >
      <div className={compact ? "" : "max-w-7xl mx-auto px-6 sm:px-8 lg:px-12"}>

        {!compact && (
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14 space-y-4">
            <div className="inline-flex items-center gap-2 bg-white border border-neutral-200/70 text-neutral-700 rounded-full px-4 py-1.5 text-[11px] font-bold tracking-wider uppercase font-body shadow-2xs">
              <FileCheck2 size={12} className="text-[#006fe3]" />
              Verified credentials
            </div>
            <h2 className="font-heading font-bold text-neutral-900 text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight">
              Certified, registered, on record
            </h2>
            <p className="font-body text-sm sm:text-base text-neutral-600 font-medium leading-relaxed">
              You do not have to take our word for it. Both certificates are
              published here in full.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {certificates.map((cert, i) => {
            const Icon = cert.icon;
            return (
              <motion.article
                key={cert.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ type: "spring", stiffness: 150, damping: 22, delay: i * 0.08 }}
                className={`certificate-tile rounded-2xl border p-7 sm:p-8 flex flex-col justify-between ${cert.tint}`}
              >
                <div className="space-y-5">
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 ${cert.iconTint}`}>
                    <Icon size={21} strokeWidth={1.6} />
                  </div>

                  <div className="space-y-1.5">
                    <span className={`text-[9px] font-bold tracking-widest uppercase block font-body ${cert.accent}`}>
                      {cert.eyebrow}
                    </span>
                    <h3 className="font-heading font-bold text-neutral-900 text-lg sm:text-xl tracking-tight leading-snug">
                      {cert.title}
                    </h3>
                  </div>

                  <p className="font-body text-xs sm:text-sm text-neutral-600 font-medium leading-relaxed">
                    {cert.body}
                  </p>

                  <p className="font-body text-[11px] font-bold text-neutral-500 tracking-wide bg-white/70 border border-black/[0.04] rounded-sm px-3 py-2 w-fit">
                    {cert.registrationLine}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-7 mt-7 border-t border-black/[0.06]">
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center font-body font-bold text-[11px] uppercase tracking-widest py-3.5 px-4 rounded-sm bg-neutral-900 text-white flex items-center justify-center gap-2 hover:bg-[#006fe3] transition-colors duration-300"
                  >
                    <ExternalLink size={13} className="shrink-0" />
                    View certificate
                  </a>

                  <a
                    href={cert.file}
                    download={cert.fileName}
                    aria-label={`Download ${cert.title} certificate`}
                    className="w-12 h-[46px] rounded-sm bg-white border border-neutral-200/80 text-neutral-600 flex items-center justify-center shrink-0 hover:bg-neutral-50 hover:text-neutral-900 hover:border-neutral-300 transition-all duration-300"
                  >
                    <Download size={15} />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}