"use client";

import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  Briefcase,
  MessageSquare,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

/* ---------------------------------------------------------------------------
   CONTACT FORM

   WHAT CHANGED AND WHY
   The previous version wrapped the server action and called setIsSubmitted(true)
   in a try block that ran whether or not the action succeeded — and the catch
   only did console.error. So a failed submission showed "Thank You!" and the
   enquiry was lost silently. For a business where one enquiry is a ₹7,000+ job,
   that is the most expensive bug on the site.

   Now the form renders straight from the action state: success shows only when
   the server says success, and a failure shows an error the visitor can act on.
   The success screen also stays put instead of flipping back to a blank form
   after five seconds, which read as the submission being undone.

   defaultLocation was being passed in from ContactModal and never used. It now
   preselects the city, so "Get a quote" buttons on a city page arrive
   pre-filled.
--------------------------------------------------------------------------- */

const services = [
  "Deep Cleaning Solutions",
  "Residential Cleaning",
  "Industrial Cleaning",
  "Corporate Office Cleaning",
  "Facade & Glass Cleaning",
  "Carpet Cleaning",
  "Hotel & Kitchen Cleaning",
  "Construction Site Cleaning",
];

const locations = ["Pune", "Mumbai", "Bangalore", "Hyderabad"];

export type ContactState = {
  success?: boolean;
  error?: string;
} | null;

interface ContactFormProps {
  action: (formData: FormData) => void;
  pending: boolean;
  state: ContactState;
  defaultLocation?: string;
}

const field =
  "w-full bg-neutral-50 border border-neutral-200 text-neutral-900 rounded-xl pl-11 pr-4 py-3 text-sm outline-none transition-colors duration-200 focus:border-[#006fe3] focus:bg-white focus:ring-4 focus:ring-[#006fe3]/10 placeholder:text-neutral-400 font-body";
const icon = "absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none";
const label = "block font-body text-[10px] font-bold uppercase tracking-widest text-neutral-500 mb-1.5";

export default function ContactForm({
  action,
  pending,
  state,
  defaultLocation = "",
}: ContactFormProps) {
  if (state?.success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="bg-white rounded-2xl border border-neutral-200/70 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.12)] p-10 md:p-14 text-center font-body"
      >
        <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#006fe3]/10 text-[#006fe3] mb-5">
          <CheckCircle2 size={26} />
        </span>
        <h2 className="font-heading text-2xl font-bold text-neutral-900">Request received</h2>
        <p className="mt-2.5 text-sm text-neutral-500 leading-relaxed max-w-sm mx-auto">
          Someone from the team will call you on the number you gave us, usually
          within one working hour.
        </p>
        <a
          href="tel:+919595000022"
          className="inline-flex items-center gap-2 mt-7 text-[11px] font-bold uppercase tracking-widest text-neutral-900 border-b border-neutral-300 pb-1 hover:border-[#006fe3] hover:text-[#006fe3] transition-colors"
        >
          <Phone size={13} />
          Need it sooner? Call +91 95950 00022
        </a>
      </motion.div>
    );
  }

  return (
    <form
      action={action}
      className="bg-white rounded-2xl border border-neutral-200/70 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.12)] overflow-hidden font-body"
    >
      {/* Brand rule — blue into orange, the two CorpX colours, nothing else. */}
      <div className="h-1 w-full bg-gradient-to-r from-[#006fe3] to-[#fe4d01]" />

      <div className="p-7 md:p-9">
        <h2 className="font-heading text-2xl md:text-[1.75rem] font-bold text-neutral-900 tracking-tight">
          Request a quote
        </h2>
        <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
          Tell us the space and the city. We'll come back with a fixed price, and
          arrange a site visit if the job needs one.
        </p>

        {state?.error && (
          <div
            role="alert"
            className="mt-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3"
          >
            <AlertCircle size={16} className="text-red-500 shrink-0 mt-0.5" />
            <p className="text-[13px] text-red-700 leading-relaxed">
              {state.error} You can also reach us on{" "}
              <a href="tel:+919595000022" className="font-bold underline underline-offset-2">
                +91 95950 00022
              </a>
              .
            </p>
          </div>
        )}

        <div className="mt-7 space-y-5">
          <div>
            <label htmlFor="full_name" className={label}>
              Full name
            </label>
            <div className="relative">
              <User className={icon} size={17} />
              <input
                id="full_name"
                name="full_name"
                required
                autoComplete="name"
                placeholder="Your name"
                className={field}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="phone" className={label}>
                Phone
              </label>
              <div className="relative">
                <Phone className={icon} size={17} />
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  inputMode="tel"
                  autoComplete="tel"
                  pattern="[0-9+\s-]{10,15}"
                  title="10-digit mobile number, with or without +91"
                  placeholder="10-digit mobile"
                  className={field}
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className={label}>
                Email
              </label>
              <div className="relative">
                <Mail className={icon} size={17} />
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className={field}
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="service" className={label}>
                Service
              </label>
              <div className="relative">
                <Briefcase className={icon} size={17} />
                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                  className={`${field} appearance-none cursor-pointer`}
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="location" className={label}>
                City
              </label>
              <div className="relative">
                <MapPin className={icon} size={17} />
                <select
                  id="location"
                  name="location"
                  required
                  defaultValue={defaultLocation}
                  className={`${field} appearance-none cursor-pointer`}
                >
                  <option value="" disabled>
                    Select a city
                  </option>
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="message" className={label}>
              Requirements <span className="text-neutral-300">— optional</span>
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-4 top-3.5 text-neutral-400 pointer-events-none" size={17} />
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Flat size, carpet area, how many bathrooms, anything specific"
                className={`${field} resize-none`}
              />
            </div>
          </div>

          {/* Honeypot — real people never fill a hidden field. Bots do, and this
              costs nothing compared to a captcha. Reject any submission on the
              server where this arrives non-empty. */}
          <div className="absolute -left-[9999px]" aria-hidden="true">
            <label htmlFor="company_website">Leave this empty</label>
            <input id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
          </div>

          <button
            type="submit"
            disabled={pending}
            className="w-full bg-[#fe4d01] text-white py-4 rounded-xl font-body font-bold text-[11px] uppercase tracking-[0.16em] hover:bg-[#e04400] active:scale-[0.99] transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
          >
            {pending ? (
              "Sending…"
            ) : (
              <>
                Send request
                <Send size={15} />
              </>
            )}
          </button>

          <p className="text-[11px] text-neutral-400 text-center leading-relaxed">
            No spam. Your number is used to quote this job and nothing else.
          </p>
        </div>
      </div>
    </form>
  );
}