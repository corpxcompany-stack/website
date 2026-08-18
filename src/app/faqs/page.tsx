"use client";

import { motion, Variants } from "framer-motion";
import {
  HelpCircle,
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  UserCheck,
  Calendar,
} from "lucide-react";
import "./FAQs.css";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.03, delayChildren: 0.05 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  id: string;
  name: string;
  icon: React.ElementType;
  items: FAQItem[];
}

const categories: FAQCategory[] = [
  {
    id: "general",
    name: "General Questions",
    icon: ShieldCheck,
    items: [
      {
        question: "What is deep cleaning, and how is it different from regular cleaning?",
        answer:
          "Regular cleaning maintains the appearance of your space — sweeping, mopping, and wiping down surfaces. Deep cleaning goes much further: it targets the hidden dirt, grease, dust, and grime that accumulates over time in areas regular cleaning misses — grout lines, behind appliances, inside vents, and in corners and crevices. The result is a space that is not just tidy, but genuinely clean.",
      },
      {
        question: "How often should I get a deep cleaning done?",
        answer:
          "For most homes, we recommend a full deep clean every 3 to 6 months. Offices, restaurants, and high-traffic commercial spaces often benefit from monthly or quarterly deep cleans. We will advise you based on your specific space and usage.",
      },
      {
        question: "What areas do you serve?",
        answer:
          "We provide cleaning services across Pune, Mumbai, Bangalore and Hyderabad. In Pune that includes Hinjewadi, Baner, Wakad, Kothrud, Viman Nagar, Koregaon Park, Hadapsar, Wagholi, Aundh, Pimple Saudagar and surrounding localities.",
      },
      {
        question: "Do I need to prepare anything before the team arrives?",
        answer:
          "We recommend removing personal valuables, fragile items, and small objects from surfaces so our team can clean efficiently and safely. For kitchen cleaning, it helps to empty countertops beforehand.",
      },
    ],
  },
  {
    id: "team-products",
    name: "Our Team & Products",
    icon: UserCheck,
    items: [
      {
        question: "Are your cleaning professionals trained and verified?",
        answer:
          "Yes. Every member of our cleaning team is trained in professional cleaning techniques and has gone through a background verification process. We take the trust you place in us seriously.",
      },
      {
        question: "Are the cleaning products safe for children and pets?",
        answer:
          "Yes. We use professional-grade cleaning products that are effective on dirt and germs while being safe for residential use. If you have specific concerns or sensitivities, let us know when you book.",
      },
      {
        question: "Can you remove tough stains?",
        answer:
          "We make every effort to remove stubborn stains, and most improve significantly with our treatment. However, some stains that have fully set into a surface or material may not be completely removable. We will be honest with you about what is achievable.",
      },
    ],
  },
  {
    id: "booking-logistics",
    name: "Booking, Pricing & Logistics",
    icon: Calendar,
    items: [
      {
        question: "How is the price decided?",
        answer:
          "Flat cleaning is priced by flat size — 1BHK, 2BHK or 3BHK — against an agreed scope of work that we confirm with you before starting. Optional services like sofa, chair, mattress or carpet cleaning are charged separately. Additional services or heavily soiled areas may incur extra charges, and we will always tell you before we begin, not after.",
      },
      {
        question: "Do I need to be present during the cleaning?",
        answer:
          "You only need to be available at the start to provide access and at the end for the inspection walkthrough. You do not need to stay throughout.",
      },
      {
        question: "How long does a typical service take?",
        answer:
          "Home deep cleans generally take 3 to 8 hours depending on size and condition. Kitchen cleaning: 2 to 4 hours. Bathroom cleaning: 1 to 2 hours per bathroom. We will give you a more specific estimate when you book.",
      },
      {
        question: "What if I am not satisfied with the result?",
        answer:
          "We do a walkthrough with you at the end of every job. If anything does not meet your expectations, we will address it before we leave.",
      },
      {
        question: "How do I book a service?",
        answer:
          "Call us, send a WhatsApp message, or fill in our contact form. We will confirm your requirements and schedule a time that works for you — usually within 24 to 48 hours.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <motion.main
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="w-full min-h-screen faqs-luxury-canvas text-neutral-950 font-body overflow-x-hidden pt-28 pb-20"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* ==========================================
           HEADER
           ========================================== */}
        <motion.div
          variants={fadeUp}
          className="max-w-3xl mb-16 space-y-4 pb-10 border-b border-neutral-200/60"
        >
          <div className="inline-flex items-center gap-2 bg-[#006fe3]/5 border border-[#006fe3]/10 text-[#006fe3] rounded-full px-4 py-1.5 text-[11px] font-bold tracking-wider uppercase">
            <HelpCircle size={12} />
            Frequently asked
          </div>

          <h1 className="font-heading font-bold text-neutral-900 text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight">
            Your questions about our cleaning services — answered
          </h1>

          <p className="font-body text-neutral-500 text-sm sm:text-base font-medium max-w-xl leading-relaxed">
            New to professional deep cleaning, or want to know more about how we
            work? Here are the questions we hear most often.
          </p>
        </motion.div>

        {/* ==========================================
           CONTENT — CHANGE #14: every answer is visible.
           The sidebar is now a jump-link index, not a filter.
           ========================================== */}
        <div className="faq-split-workspace">

          <div className="faq-sticky-sidebar">
            <nav
              aria-label="Jump to a section"
              className="space-y-1 bg-neutral-100/40 p-3 rounded-2xl border border-neutral-200/50"
            >
              <span className="text-[9px] font-bold tracking-widest text-neutral-400 uppercase block px-3 pt-2 pb-2 font-body">
                On this page
              </span>
              {categories.map((cat) => {
                const CatIcon = cat.icon;
                return (
                  <a key={cat.id} href={`#${cat.id}`} className="category-nav-button">
                    <CatIcon size={14} className="text-neutral-400 shrink-0" />
                    <span>{cat.name}</span>
                    <span className="ml-auto text-[10px] text-neutral-400 font-bold">
                      {cat.items.length}
                    </span>
                  </a>
                );
              })}
            </nav>
          </div>

          <div className="faq-content-stack space-y-16">
            {categories.map((cat) => {
              const CatIcon = cat.icon;
              return (
                <section key={cat.id} id={cat.id} className="scroll-mt-32 space-y-5">
                  <div className="flex items-center gap-2.5 pb-3 border-b border-neutral-200/60">
                    <CatIcon size={16} className="text-[#006fe3] shrink-0" />
                    <h2 className="font-heading font-bold text-neutral-900 text-lg sm:text-xl tracking-tight">
                      {cat.name}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {cat.items.map((item, idx) => (
                      <motion.article
                        key={idx}
                        variants={fadeUp}
                        className="accordion-matrix-box p-6 sm:p-7 space-y-3"
                      >
                        <h3 className="font-heading font-bold text-sm sm:text-base text-neutral-900 leading-snug">
                          {item.question}
                        </h3>
                        <p className="font-body text-xs sm:text-sm text-neutral-500 font-medium leading-relaxed">
                          {item.answer}
                        </p>
                      </motion.article>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>

        {/* ==========================================
           CLOSING CTA
           ========================================== */}
        <motion.div
          variants={fadeUp}
          className="mt-24 bg-neutral-950 rounded-2xl border border-white/[0.06] p-8 md:p-12 text-center relative overflow-hidden shadow-[0_24px_60px_-15px_rgba(0,0,0,0.35)]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(0,111,227,0.06),transparent_60%)] pointer-events-none" />

          <div className="max-w-xl mx-auto space-y-4 relative z-10">
            <span className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase block">
              Still have a question?
            </span>
            <h2 className="font-heading font-bold text-white text-2xl sm:text-3xl tracking-tight leading-tight">
              Talk to us directly
            </h2>
            <p className="font-body text-xs sm:text-sm text-neutral-400 font-medium leading-relaxed">
              Tell us about your space and we&apos;ll give you a clear quote —
              usually within the hour.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 max-w-md mx-auto relative z-10">
            <a
              href="https://wa.me/919595000022?text=Hi%20CorpX%2C%20I%20have%20a%20question%20about%20your%20cleaning%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:flex-1 text-center font-body font-bold text-xs uppercase tracking-widest py-4 px-6 rounded-sm bg-white border border-white text-neutral-900 shadow-2xs transition-all duration-300 hover:bg-neutral-50 active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <MessageCircle size={14} className="fill-current text-[#25d366]" />
              WhatsApp us
            </a>

            <a
              href="tel:+919595000022"
              className="w-full sm:flex-1 text-center font-body font-bold text-xs uppercase tracking-widest py-4 px-6 rounded-sm bg-[#fe4d01] border border-[#fe4d01] text-white shadow-2xs transition-all duration-300 hover:bg-[#e04400] active:scale-[0.98] flex items-center justify-center gap-2 group"
            >
              Call us
              <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </motion.main>
  );
}