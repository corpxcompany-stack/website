"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import "./Preloader.css";

/* ✅ CAPPED TUPLE FOR TYPESCRIPT TYPE CHECKER SAFETY */
const luxuryEase = [0.76, 0, 0.24, 1] as const; 

const curtainVariants: Variants = {
  hidden: { opacity: 1 },
  exit: {
    y: "-100%",
    transition: {
      duration: 0.95,
      ease: luxuryEase,
      when: "afterChildren"
    }
  }
};

const logoVariants: Variants = {
  hidden: { y: "100%" },
  show: {
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.15
    }
  }
};

const taglineVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.45
    }
  }
};

const doodleVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  show: {
    pathLength: 1,
    opacity: 0.12,
    transition: {
      duration: 1.4,
      ease: "easeInOut"
    }
  }
};

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const intervalTime = 16; 
    const totalDuration = 1300; 
    const increment = 100 / (totalDuration / intervalTime);

    const counter = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(counter);
          setTimeout(() => setLoading(false), 200);
          return 100;
        }
        return Math.min(prev + increment, 100);
      });
    }, intervalTime);

    return () => clearInterval(counter);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          variants={curtainVariants}
          initial="hidden"
          animate="show"
          exit="exit"
          className="preloader-luxury-curtain preloader-gpu-layer select-none"
        >
          {/* 1. LAYER ONE: TECHNICAL GRID MESH BACKDROP */}
          <div className="preloader-mesh-matrix" />

          {/* 2. LAYER TWO: VECTOR ADVANCED DOODLE SCHEMATIC */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-2 overflow-hidden">
            <svg 
              width="600" 
              height="600" 
              viewBox="0 0 600 600" 
              fill="none" 
              className="w-[85vw] h-[85vw] max-w-[600px] max-h-[600px] opacity-100"
            >
              <motion.circle 
                cx="300" 
                cy="300" 
                r="180" 
                stroke="#ffa500" 
                strokeWidth="1" 
                strokeDasharray="4 8"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, ease: "linear", repeat: Infinity }}
              />
              <motion.path 
                variants={doodleVariants}
                initial="hidden"
                animate="show"
                d="M300 40 L300 560 M40 300 L560 300" 
                stroke="rgba(0,111,227,0.3)" 
                strokeWidth="0.75" 
              />
              <motion.path
                variants={doodleVariants}
                initial="hidden"
                animate="show"
                d="M180 180 L420 420 M420 180 L180 420"
                stroke="rgba(0,111,227,0.15)"
                strokeWidth="0.5"
              />
              <motion.path
                variants={doodleVariants}
                initial="hidden"
                animate="show"
                d="M300 220 L305 235 L320 240 L305 245 L300 260 L295 245 L280 240 L295 235 Z"
                fill="none"
                stroke="#006fe3"
                strokeWidth="1"
              />
            </svg>
          </div>

          {/* 3. LAYER THREE: CENTER ALIGNED SHUTTER MASTER LOGO & TEXT DECK */}
          <div className="preloader-content-core flex flex-col items-center text-center space-y-6">
            
            {/* Logo Shutter Frame Wrapper */}
            <div className="logo-mask-shutter py-1 px-4">
              <motion.div
                variants={logoVariants}
                initial="hidden"
                animate="show"
                className="relative flex items-center justify-center"
              >
                <Image
                  src="/logo.avif"
                  alt="CorpX Luxury Institutional Identity"
                  width={250}
                  height={100}
                  priority
                  className="object-contain h-auto filter drop-shadow-[0_2px_10px_rgba(0,0,0,0.01)] translate-y-[-6px]"
                />
              </motion.div>
            </div>

            {/* Premium New Staggered Signature Tagline Display */}
            <motion.p
              variants={taglineVariants}
              initial="hidden"
              animate="show"
              className="font-body text-[9px] sm:text-[10px] font-bold tracking-[0.26em] uppercase text-neutral-400 max-w-xs leading-relaxed"
            >
              Most Trusted <br />
              <span className="text-[#006fe3] mt-1 inline-block">Deep Cleaning Service</span>
            </motion.p>

            {/* Structural Fluid Progress Tracker Panel */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col items-center space-y-4 w-44 pt-4"
            >
              {/* Connected Explicit Target Animation Layout Line */}
              <div className="w-full h-[1.5px] bg-neutral-100 rounded-full overflow-hidden relative">
                <motion.div 
                  className="h-full bg-[#006fe3] absolute left-0 top-0"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut", duration: 0.1 }}
                />
              </div>

              {/* Monospace Fractional Counter Parameter Matrix */}
              <div className="font-mono text-[9px] font-bold tracking-widest text-neutral-400 uppercase flex items-center gap-1">
                <span>SYS_LOAD</span>
                <span className="text-neutral-800 font-extrabold ml-1 min-w-[24px] text-right">
                  {Math.floor(progress).toString().padStart(2, "0")}
                </span>
                <span>%</span>
              </div>
            </motion.div>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}