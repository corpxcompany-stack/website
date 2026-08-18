"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import "./HeroSection.css";

/* ---------------------------------------------------------------------------
   THE DIFFERENCE BAND — sits directly under the hero carousel

   WHY IT LOOKS PLANNED NOW
   It opens on the exact dark the hero closes on (#060c14) so there is no seam,
   and it ends by fading to white, which is the hand-off into StatsSection. The
   section is a bridge between two palettes — that is its structural job, and
   the gradient is doing real work instead of decoration.

   WHAT IT SAYS
   The hero already made the claim. Repeating "deep cleaning since 2016" one
   screen later is why it read as filler. This section proves the claim
   instead: a depth scale running from Surface to Deep, with the four places
   ordinary cleaning stops and CorpX does not.

   THE SIGNATURE
   The vertical rail. It is not decoration — it is the argument. It starts
   thin and pale at "Surface" and thickens into brand orange at "Deep", so the
   page states the point before anyone reads a word. Order carries meaning
   here, which is why the rows are ranked rather than numbered.

   NO VIDEO
   The previous version streamed two YouTube embeds. Removed: ~900KB of
   third-party script, unreliable mobile autoplay, YouTube's own branding on
   the page, and footage of interiors that are not CorpX's work.

   Height is content-driven, not 100vh. Two full-screen sections back to back
   is what made this feel bolted on.
--------------------------------------------------------------------------- */

const layers = [
  {
    title: "Behind and under what doesn't move",
    note: "Fridges, wardrobes, beds, washing machines — pulled out, cleaned behind, put back.",
  },
  {
    title: "Kitchen chimney, hob and platform",
    note: "Degreasing the surfaces that hold months of cooking oil, not just wiping them.",
  },
  {
    title: "Sofa and mattress cores",
    note: "Wet extraction pulls dust and residue out of the foam instead of moving it around.",
  },
  {
    title: "Grout, hard water scaling, wall surfaces",
    note: "Bathroom joints and tap fittings descaled. Wall cleaning on washable paints only.",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function HeroSection() {
  return (
    <section className="diff" aria-labelledby="diff-title">
      <div className="diff-inner">

        {/* ---------- STATEMENT ---------- */}
        <div className="diff-head">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5 }}
            className="diff-eyebrow"
          >
            The difference
          </motion.p>

          <motion.h2
            id="diff-title"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="diff-title"
          >
            Surface cleaning
            <span>ends where ours starts.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="diff-sub"
          >
            A regular clean handles what you can see. A deep clean handles what
            you can smell six months later. Four places the difference shows up.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.24 }}
          >
            <Link href="/services" className="diff-link">
              See everything included
              <ArrowUpRight size={15} />
            </Link>
          </motion.div>
        </div>

        {/* ---------- DEPTH SCALE ---------- */}
        <div className="diff-scale">
          <div className="diff-rail" aria-hidden="true">
            <span className="diff-rail-cap">Surface</span>
            <motion.span
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="diff-rail-line"
            />
            <span className="diff-rail-cap diff-rail-cap--deep">Deep</span>
          </div>

          <ul className="diff-list">
            {layers.map((layer, i) => (
              <motion.li
                key={layer.title}
                custom={i}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                className="diff-row"
              >
                <span className="diff-node" aria-hidden="true" />
                <div className="diff-row-body">
                  <h3 className="diff-row-title">{layer.title}</h3>
                  <p className="diff-row-note">{layer.note}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}