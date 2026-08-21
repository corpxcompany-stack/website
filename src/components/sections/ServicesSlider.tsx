"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles, ArrowUpRight, MapPin, Pause, Play } from "lucide-react";
import { getServicesByLocation, ServiceItem } from "@/data/servicesData";
import "./ServicesSlider.css";

/* CHANGE #11 — cities are called out explicitly, in the heading and as chips. */
const CITIES = ["Pune", "Mumbai", "Bangalore", "Hyderabad"];

/* CHANGE #12 — auto-advance interval, in ms. */
const AUTOPLAY_MS = 1500; 

export default function ServicesSlider() {
  const services: ServiceItem[] = getServicesByLocation("Pune");

  const [activeIndex, setActiveIndex] = useState(2);
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  /* Responsive breakpoint — matchMedia is cheaper than a resize listener
     because it only fires when the query result actually flips. */
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const apply = () => setIsMobile(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % services.length);
  }, [services.length]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
  }, [services.length]);

  /* 
    FIXED: Manual navigation temporarily stops the current interval, 
    but we do NOT set isPaused to true permanently so autoplay continues. 
  */
  const goNext = () => handleNext();
  const goPrev = () => handlePrev();

  /* ---------------------------------------------------------------------
     CHANGE #12 — AUTOPLAY
     Stops when: explicitly paused via play/pause button or hover.
     --------------------------------------------------------------------- */
  useEffect(() => {
    if (isPaused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let inView = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
      },
      { threshold: 0.25 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);

    const timer = window.setInterval(() => {
      if (inView && !document.hidden) handleNext();
    }, AUTOPLAY_MS);

    return () => {
      window.clearInterval(timer);
      observer.disconnect();
    };
  }, [isPaused, handleNext]);

  const navBtnClass =
    "rounded-full border border-neutral-200 bg-white text-neutral-800 flex items-center justify-center transition-all duration-300 shadow-sm hover:bg-[#006fe3] hover:text-white hover:border-[#006fe3] active:scale-95 cursor-pointer disabled:opacity-30";

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 sm:py-20 md:py-28 bg-gradient-to-b from-neutral-50 via-white to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* ==========================================
            HEADER — cities highlighted (CHANGE #11)
            ========================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 md:gap-6 mb-8 md:mb-10">
          <div className="space-y-4 md:space-y-5 max-w-3xl">
            <div className="inline-flex items-center gap-1.5 md:gap-2 bg-[#006fe3]/5 border border-[#006fe3]/10 text-[#006fe3] rounded-full px-3 md:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-bold tracking-wider uppercase font-body">
              <Sparkles size={12} className="sm:w-3 sm:h-3" />
              What we clean
            </div>

            <h2 className="font-heading font-bold text-neutral-900 text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight">
              Professional cleaning services in{" "}
              <span className="text-[#006fe3]">Pune</span>,{" "}
              <span className="text-[#006fe3]">Mumbai</span>,{" "}
              <span className="text-[#006fe3]">Bangalore</span> &amp;{" "}
              <span className="text-[#006fe3]">Hyderabad</span>
            </h2>

            {/* City chips — reinforces coverage for local search and scanning */}
            <ul className="flex flex-wrap items-center gap-2">
              {CITIES.map((city) => (
                <li
                  key={city}
                  className="inline-flex items-center gap-1.5 bg-white border border-[#006fe3]/20 text-neutral-800 rounded-full pl-2 pr-3 py-1 sm:pl-2.5 sm:pr-3.5 sm:py-1.5 text-[10px] sm:text-[11px] font-bold tracking-wide font-body shadow-2xs"
                >
                  <MapPin size={10} className="text-[#006fe3] shrink-0 sm:w-3 sm:h-3" />
                  {city}
                </li>
              ))}
            </ul>

            <p className="font-body text-xs sm:text-sm md:text-base text-neutral-600 font-medium max-w-xl leading-relaxed">
              Browse the full range below. Tap any card to bring it into focus,
              or use the arrows.
            </p>
          </div>

          {/* Desktop controls */}
          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsPaused((p) => !p)}
              className={`${navBtnClass} w-12 h-12`}
              aria-label={isPaused ? "Resume auto-scroll" : "Pause auto-scroll"}
            >
              {isPaused ? <Play size={18} /> : <Pause size={18} />}
            </button>
            <button type="button" onClick={goPrev} className={`${navBtnClass} w-12 h-12`} aria-label="Previous service">
              <ChevronLeft size={22} strokeWidth={2.5} />
            </button>
            <button type="button" onClick={goNext} className={`${navBtnClass} w-12 h-12`} aria-label="Next service">
              <ChevronRight size={22} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* ==========================================
            3D COVERFLOW
            ========================================== */}
        <div
          className="coverflow-3d-viewport w-full min-h-[380px] sm:min-h-[420px] md:min-h-[460px] flex items-center justify-center relative py-6 sm:py-10 md:py-12 select-none"
          role="region"
          aria-roledescription="carousel"
          aria-label="Our cleaning services"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
        >
          {/* ADJUSTED: max-w bounds and heights dynamically scale for mobile -> tablet -> desktop */}
          <div className="coverflow-3d-track w-full max-w-[240px] sm:max-w-[320px] md:max-w-xl h-[300px] sm:h-[340px] md:h-[400px] relative flex items-center justify-center">
            {services.map((service, index) => {
              const offset = index - activeIndex;
              const absOffset = Math.abs(offset);

              if (absOffset > 2 && absOffset < services.length - 2) return null;

              const isActive = index === activeIndex;
              const cleanTitle = service.title.split(" — ")[0];

              // ADJUSTED 3D MATH FOR MOBILE
              // Brings adjacent cards closer and tucks them deeper backward on small screens
              const horizontalStep = isMobile ? 120 : 310;
              const stackingStep = isMobile ? 25 : 55;

              const rotateY = offset === 0 ? 0 : offset > 0 ? -45 : 45;
              const translateZ = offset === 0 ? (isMobile ? 100 : 140) : -120 * absOffset;
              const translateX =
                offset === 0
                  ? 0
                  : offset > 0
                  ? horizontalStep + offset * stackingStep
                  : -horizontalStep + offset * stackingStep;

              const opacity = offset === 0 ? 1 : absOffset === 1 ? 0.7 : 0.25;
              const zIndex = 10 - absOffset;

              return (
                <motion.div
                  key={service.id}
                  className="spatial-card-container absolute w-full h-full cursor-pointer rounded-2xl bg-white border border-neutral-100 p-1.5 sm:p-2 shadow-md"
                  style={{ originX: 0.5, originY: 0.5 }}
                  animate={{
                    x: translateX,
                    scale: isActive ? 1 : 0.82,
                    rotateY,
                    z: translateZ,
                    opacity,
                    zIndex,
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 24 }}
                  onClick={() => setActiveIndex(index)}
                  aria-hidden={!isActive}
                >
                  <div className="relative w-full h-full rounded-xl overflow-hidden group">
                    <Image
                      src={service.img}
                      alt={cleanTitle}
                      fill
                      sizes="(max-width: 768px) 80vw, 576px"
                      className="object-cover select-none"
                      priority={index < 3}
                    />

                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-300 ${
                        isActive ? "opacity-90" : "opacity-70"
                      }`}
                    />

                    {/* Adjusted text padding and scaling for mobile */}
                    <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 flex flex-col justify-end space-y-3 sm:space-y-4 z-10">
                      <h3 className="font-heading font-bold text-base sm:text-xl md:text-2xl tracking-tight leading-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                        {cleanTitle}
                      </h3>

                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.12 }}
                        >
                          <Link
                            href={`/services/${service.id}`}
                            className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold font-body uppercase tracking-widest text-[#006fe3] bg-white px-4 py-2.5 sm:px-5 sm:py-3 rounded-xs w-fit shadow-md transition-all duration-300 hover:bg-[#006fe3] hover:text-white"
                          >
                            Explore service
                            <ArrowUpRight size={14} className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                          </Link>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ==========================================
            PROGRESS DOTS + MOBILE CONTROLS
            ========================================== */}
        <div className="flex flex-col items-center gap-5 mt-4 sm:mt-6">
          <div className="flex items-center justify-center gap-1.5" role="tablist" aria-label="Select service">
            {services.map((service, i) => (
              <button
                key={service.id}
                type="button"
                role="tab"
                aria-selected={i === activeIndex}
                aria-label={service.title}
                onClick={() => setActiveIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-400 cursor-pointer ${
                  i === activeIndex ? "w-6 sm:w-7 bg-[#006fe3]" : "w-1.5 bg-neutral-300 hover:bg-neutral-400"
                }`}
              />
            ))}
          </div>

          <div className="flex md:hidden justify-center gap-4">
            <button type="button" onClick={goPrev} className={`${navBtnClass} w-11 h-11`} aria-label="Previous service">
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => setIsPaused((p) => !p)}
              className={`${navBtnClass} w-11 h-11`}
              aria-label={isPaused ? "Resume auto-scroll" : "Pause auto-scroll"}
            >
              {isPaused ? <Play size={16} /> : <Pause size={16} />}
            </button>
            <button type="button" onClick={goNext} className={`${navBtnClass} w-11 h-11`} aria-label="Next service">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}