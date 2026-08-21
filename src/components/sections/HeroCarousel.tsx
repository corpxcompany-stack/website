"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  MessageCircle,
  Phone,
  ShieldCheck,
  Pause,
  Play,
} from "lucide-react";
import "./HeroCarousel.css";

const AUTOPLAY_MS = 4000;
const RESUME_AFTER_MS = 5000;

const slides = [
  {
    src: "/gallery/1.avif",
    alt: "CorpX deep cleaning crew on site in Pune",
    city: "Pune",
    focal: "50% 45%",
  },
  {
    src: "/gallery/2.avif",
    alt: "CorpX deep cleaning crew on site in Mumbai",
    city: "Mumbai",
    focal: "50% 45%",
  },
  {
    src: "/gallery/3.avif",
    alt: "CorpX deep cleaning crew on site in Bangalore",
    city: "Bangalore",
    focal: "50% 45%",
  },
  {
    src: "/gallery/4.avif",
    alt: "CorpX deep cleaning crew on site in Hyderabad",
    city: "Hyderabad",
    focal: "50% 45%",
  },
];

const COUNT = slides.length;

export default function HeroCarousel() {
  const rootRef = useRef<HTMLElement>(null);
  const resumeRef = useRef<number | null>(null);
  const swipeRef = useRef<{ x: number; y: number } | null>(null);
  const reduced = useReducedMotion() ?? false;

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [stopped, setStopped] = useState(false);
  const [nudged, setNudged] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [focused, setFocused] = useState(false);
  const [onScreen, setOnScreen] = useState(true);
  const [tabActive, setTabActive] = useState(true);

  const playing =
    !reduced && !stopped && !nudged && !focused && onScreen && tabActive && COUNT > 1;

  const goTo = useCallback((next: number, dir: number) => {
    setDirection(dir);
    setIndex(((next % COUNT) + COUNT) % COUNT);
  }, []);

  const nudge = useCallback(
    (next: number, dir: number) => {
      goTo(next, dir);
      setNudged(true);
      if (resumeRef.current) window.clearTimeout(resumeRef.current);
      resumeRef.current = window.setTimeout(() => setNudged(false), RESUME_AFTER_MS);
    },
    [goTo]
  );

  const next = useCallback(() => nudge(index + 1, 1), [index, nudge]);
  const prev = useCallback(() => nudge(index - 1, -1), [index, nudge]);

  useEffect(
    () => () => {
      if (resumeRef.current) window.clearTimeout(resumeRef.current);
    },
    []
  );

  useEffect(() => {
    if (!playing) return;
    const id = window.setTimeout(() => goTo(index + 1, 1), AUTOPLAY_MS);
    return () => window.clearTimeout(id);
  }, [playing, index, goTo]);

  useEffect(() => {
    const onVis = () => setTabActive(!document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([e]) => setOnScreen(e.isIntersecting), { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      }
    },
    [next, prev]
  );

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    if (e.pointerType === "mouse") return;
    swipeRef.current = { x: e.clientX, y: e.clientY };
  }, []);

  const onPointerUp = useCallback(
    (e: React.PointerEvent) => {
      const start = swipeRef.current;
      swipeRef.current = null;
      if (!start) return;
      const dx = e.clientX - start.x;
      const dy = e.clientY - start.y;
      if (Math.abs(dx) < 45 || Math.abs(dx) < Math.abs(dy)) return;
      if (dx < 0) next();
      else prev();
    },
    [next, prev]
  );

  return (
    <section
      ref={rootRef}
      className="hero"
      aria-roledescription="carousel"
      aria-label="CorpX cleaning work across four cities"
      onKeyDown={onKeyDown}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onFocus={() => setFocused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setFocused(false);
      }}
    >
      {/* ============ STAGE ============ */}
      <div className="hero-stage" onPointerDown={onPointerDown} onPointerUp={onPointerUp}>
        {slides.map((s, i) => {
          const isActive = i === index;
          return (
            <motion.div
              key={s.src}
              className="hero-slide"
              aria-hidden={!isActive}
              initial={false}
              animate={{
                opacity: isActive ? 1 : 0,
                scale: isActive ? 1 : 1.04,
                x: isActive ? 0 : direction > 0 ? "3%" : "-3%",
              }}
              transition={
                reduced
                  ? { duration: 0 }
                  : {
                      opacity: { duration: 0.9, ease: [0.4, 0, 0.2, 1] },
                      default: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
                    }
              }
            >
              <Image
                src={s.src}
                alt={s.alt}
                fill
                sizes="100vw"
                quality={82}
                priority={i === 0}
                className="hero-img"
                style={{ objectPosition: s.focal }}
              />
            </motion.div>
          );
        })}

        <span className="hero-scrim" aria-hidden="true" />

        <span className="hero-cue" aria-hidden="true">
          <span className="hero-cue-line" />
        </span>

        <p className="sr-only" aria-live="polite">
          Slide {index + 1} of {COUNT}
        </p>
      </div>

      {/* ============ COPY ============ */}
      <div className="hero-copy-wrap">
        <div className="hero-copy">
          <div className="hero-brand">
            <span className="hero-brand-mark">
              <Image
                src="/logo.avif"
                alt="CorpX"
                width={320}
                height={96}
                priority
                className="hero-brand-img"
              />
            </span>
            <span className="hero-brand-rule" aria-hidden="true" />
            <span className="hero-brand-note">
              ISO 9001:2015
              <span>Trusted since 2016</span>
            </span>
          </div>

          <h1 className="hero-title">
            Deep cleaning
            <span className="hero-title-line">
              you can <em>feel</em>.
            </span>
          </h1>

          <p className="hero-sub">
            Trained crews and machine-led cleaning for homes, offices and
            commercial spaces across Pune, Mumbai, Bangalore &amp; Hyderabad.
          </p>

          <div className="hero-price">
            <span className="hero-price-label">Full home deep clean</span>
            <span className="hero-price-value">
              from ₹7,000<span className="hero-price-unit">/ 1BHK</span>
            </span>
          </div>

          <div className="hero-actions">
            <Link href="/contact" className="hero-btn hero-btn--primary group">
              Get a free quote
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <a
              href="https://wa.me/919595000022?text=Hi%20CorpX%2C%20I%27d%20like%20a%20quote%20for%20deep%20cleaning."
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn hero-btn--ghost"
            >
              <MessageCircle size={14} className="fill-current text-[#25d366]" />
              WhatsApp
            </a>
          </div>

          <div className="hero-meta">
            <a href="tel:+919595000022" className="hero-meta-item">
              <Phone size={13} />
              +91 95950 00022
            </a>
            <a href="/iso.pdf" target="_blank" rel="noopener noreferrer" className="hero-meta-item">
              <ShieldCheck size={13} />
              ISO certified
            </a>
          </div>
        </div>
      </div>

      {/* ============ CONTROLS ============ */}
      <div className="hero-controls">
        <div className="hero-buttons">
          <button type="button" onClick={prev} aria-label="Previous slide" className="hero-arrow">
            <ArrowLeft size={16} />
          </button>

          <div className="hero-bars" role="group" aria-label="Choose a slide">
            {slides.map((s, i) => (
              <button
                key={s.src}
                type="button"
                onClick={() => nudge(i, i > index ? 1 : -1)}
                aria-label={`Show ${s.city}`}
                aria-current={i === index}
                className={`hero-bar ${i === index ? "is-active" : ""}`}
              >
                <span className="hero-bar-track">
                  {i === index && playing && (
                    <span
                      key={`fill-${index}`}
                      className="hero-bar-fill"
                      style={{ animationDuration: `${AUTOPLAY_MS}ms` }}
                    />
                  )}
                </span>
              </button>
            ))}
          </div>

          <button type="button" onClick={next} aria-label="Next slide" className="hero-arrow">
            <ArrowRight size={16} />
          </button>

          {!reduced && (
            <button
              type="button"
              onClick={() => setStopped((s) => !s)}
              aria-label={stopped ? "Start automatic slideshow" : "Stop automatic slideshow"}
              className="hero-arrow hero-arrow--toggle"
            >
              {stopped ? <Play size={14} /> : <Pause size={14} />}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}