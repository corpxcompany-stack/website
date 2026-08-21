"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Layers, ArrowRight } from "lucide-react";
import "./GalleryView.css";

interface GalleryItem {
  name: string;
  category: "Deep Cleaning" | "Corporate" | "Facade" | "Specialized";
  url: string;
}

const galleryItems: GalleryItem[] = [
  { name: "Luxury Estate Deep Cleaning", category: "Deep Cleaning", url: "https://res.cloudinary.com/doht6hdhs/video/upload/v1782331723/1_nia5il.mp4" },
  { name: "Structural Glass & Facade Care", category: "Facade", url: "https://res.cloudinary.com/doht6hdhs/video/upload/v1782331718/2_cduqtm.mp4" },
  { name: "Corporate Workspace Maintenance", category: "Corporate", url: "https://res.cloudinary.com/doht6hdhs/video/upload/v1782331702/3_xqd2ct.mp4" },
  { name: "Executive Suite Sanitization", category: "Corporate", url: "https://res.cloudinary.com/doht6hdhs/video/upload/v1782331705/4_ngs3cg.mp4" },
  { name: "Industrial Roof Infrastructure", category: "Specialized", url: "https://res.cloudinary.com/doht6hdhs/video/upload/v1782331708/5_qbi9op.mp4" },
  { name: "Architectural Exterior Wash", category: "Facade", url: "https://res.cloudinary.com/doht6hdhs/video/upload/v1782331710/6_msjifu.mp4" },
  { name: "Heavy Commercial Floor Scrubbing", category: "Specialized", url: "https://res.cloudinary.com/doht6hdhs/video/upload/v1782331716/7_ehuden.mp4" },
  { name: "High-Traffic Office Reset", category: "Corporate", url: "https://res.cloudinary.com/doht6hdhs/video/upload/v1782331715/8_dksxfo.mp4" },
  { name: "Top-Tier Residential Restoration", category: "Deep Cleaning", url: "https://res.cloudinary.com/doht6hdhs/video/upload/v1782331721/9_bh97t1.mp4" },
  { name: "Corporate Headquarters Cleaning", category: "Corporate", url: "https://res.cloudinary.com/doht6hdhs/video/upload/v1782331719/10_waqnqg.mp4" },
  { name: "Industrial Warehouse Clearance", category: "Specialized", url: "https://res.cloudinary.com/doht6hdhs/video/upload/v1782331726/11_oelhc3.mp4" },
  { name: "Tech Park Commercial Hygiene", category: "Corporate", url: "https://res.cloudinary.com/doht6hdhs/video/upload/v1782331729/12_gt9jhd.mp4" },
  { name: "Widescreen Facade Optimization", category: "Facade", url: "https://res.cloudinary.com/doht6hdhs/video/upload/v1782331726/13_udg2jq.mp4" },
  { name: "Rooftop Concrete Descaling", category: "Specialized", url: "https://res.cloudinary.com/doht6hdhs/video/upload/v1782331731/14_snsw0v.mp4" },
  { name: "High-Rise Window Detailed Clean", category: "Facade", url: "https://res.cloudinary.com/doht6hdhs/video/upload/v1782331730/15_e7dusj.mp4" },
  { name: "Premium Washroom Disinfection", category: "Specialized", url: "https://res.cloudinary.com/doht6hdhs/video/upload/v1782331700/16_my4ut1.mp4" },
  { name: "Commercial Fixture Sanitization", category: "Specialized", url: "https://res.cloudinary.com/doht6hdhs/video/upload/v1782331702/17_ftscat.mp4" },
  { name: "Modern Office Spatial Overhaul", category: "Corporate", url: "https://res.cloudinary.com/doht6hdhs/video/upload/v1782331711/18_d6mm9y.mp4" },
  { name: "Luxury Fabric Sofa Refresh", category: "Deep Cleaning", url: "https://res.cloudinary.com/doht6hdhs/video/upload/v1782331731/20_cc1ukc.mp4" }
];

const filterCategories = [
  { label: "All Works", value: "All" },
  { label: "Deep Cleaning", value: "Deep Cleaning" },
  { label: "Corporate Workspaces", value: "Corporate" },
  { label: "Structural Facades", value: "Facade" },
  { label: "Specialized Solutions", value: "Specialized" }
];

const VideoCard = ({ item }: { item: GalleryItem }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Desktop Hover Controls
  const handleHoverStart = () => {
    // Only trigger on hover if the device supports it (not a touch screen)
    if (window.matchMedia("(hover: hover)").matches) {
      playVideo();
    }
  };

  const handleHoverEnd = () => {
    if (window.matchMedia("(hover: hover)").matches) {
      pauseVideo();
    }
  };

  // Mobile Tap Controls
  const handleClick = () => {
    if (isPlaying) {
      pauseVideo();
    } else {
      playVideo();
    }
  };

  const playVideo = () => {
    setIsPlaying(true);
    const playPromise = videoRef.current?.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }
  };

  const pauseVideo = () => {
    setIsPlaying(false);
    videoRef.current?.pause();
    if (videoRef.current) videoRef.current.currentTime = 0;
  };

  return (
    <motion.div
      className="relative mb-4 sm:mb-6 break-inside-avoid rounded-xl overflow-hidden bg-white border border-black/[0.04] shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] portfolio-media-container origin-center select-none cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      whileHover={{ 
        scale: 1.05, 
        zIndex: 30,
        boxShadow: "0 30px 60px -20px rgba(0, 111, 227, 0.18), 0 20px 40px -30px rgba(0, 0, 0, 0.15)"
      }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 25 
      }}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
      onClick={handleClick}
    >
      <div className="relative w-full h-full overflow-hidden bg-neutral-100 aspect-video sm:aspect-auto">
        <video
          ref={videoRef}
          src={item.url}
          className="w-full h-full object-cover scale-[1.005] transition-transform duration-700 md:group-hover:scale-[1.03]"
          muted
          loop
          playsInline
          preload="none"
        />
        {/* Scrim fades out when playing to show clear video */}
        <div className={`absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-neutral-950/10 transition-opacity duration-500 ${isPlaying ? 'opacity-20' : 'opacity-70'}`} />
      </div>

      <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 z-10 flex flex-col justify-end pointer-events-none">
        <div className="backdrop-blur-xl bg-white/80 border border-white/40 p-2.5 sm:p-3.5 rounded-lg shadow-sm flex items-center justify-between">
          <div className="space-y-0.5 pr-2">
            <span className="text-[8px] sm:text-[9px] font-bold tracking-widest font-body text-[#006fe3] uppercase block">
              {item.category === "Corporate" ? "Corporate Space" : item.category}
            </span>
            <h3 className="text-neutral-900 font-heading font-bold text-[11px] sm:text-xs md:text-sm tracking-tight leading-tight line-clamp-1">
              {item.name}
            </h3>
          </div>
          <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full text-white flex items-center justify-center shrink-0 shadow-sm transition-colors duration-300 ${isPlaying ? 'bg-emerald-500' : 'bg-[#006fe3]'}`}>
            <Eye size={12} className="sm:w-[14px] sm:h-[14px]" />
          </div>
        </div>
      </div>

      {/* Top Left Status Badge */}
      <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-neutral-900/80 backdrop-blur-md px-2 py-1 sm:px-2.5 rounded-sm flex items-center gap-1.5 z-10 pointer-events-none">
        <span className={`w-1.5 h-1.5 rounded-full ${isPlaying ? "bg-emerald-400 animate-pulse" : "bg-white/60"}`} />
        <span className="text-[8px] sm:text-[9px] font-bold text-white uppercase tracking-widest font-body">
          {isPlaying ? "Playing" : "Tap to Play"}
        </span>
      </div>
    </motion.div>
  );
};

export default function GalleryView() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems = galleryItems.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
  );

  return (
    <section className="w-full py-16 sm:py-20 md:py-28 bg-neutral-50/70 relative border-b border-black/[0.02]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Asymmetric Header Structure */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 mb-10 sm:mb-16">
          <div className="space-y-3 sm:space-y-4 max-w-2xl">
            <h2 className="font-heading font-extrabold text-neutral-900 text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight">
              Real Transformations, <br className="hidden sm:block" />
              Captured In Motion
            </h2>
          </div>

          <div className="text-left md:text-right shrink-0 flex items-baseline md:flex-col md:items-end gap-2 md:gap-0 border-l-[3px] border-[#006fe3]/30 pl-3 md:border-none md:pl-0">
            <span className="font-heading font-bold text-3xl sm:text-5xl md:text-6xl text-neutral-300/70 block leading-none">
              100%
            </span>
            <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-neutral-500 font-body uppercase md:mt-1 block">
              Transparent Operations
            </span>
          </div>
        </div>

        {/* High-End Editorial Filter Grid Panel */}
        <div className="-mx-5 px-5 sm:mx-0 sm:px-0 mb-8 sm:mb-12">
          <div className="flex flex-nowrap sm:flex-wrap items-center gap-2 sm:gap-3 border-b border-black/[0.05] pb-4 sm:pb-6 overflow-x-auto scrollbar-none w-full">
            <div className="flex items-center gap-2 text-neutral-400 text-[10px] sm:text-xs font-bold font-body uppercase tracking-wider pr-3 sm:pr-4 border-r border-black/[0.08] hidden sm:flex shrink-0">
              <Layers size={14} />
              Filter Matrix
            </div>
            
            {filterCategories.map((cat) => {
              const isTarget = selectedCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`filter-pill-transition px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold font-body uppercase tracking-wider rounded-sm cursor-pointer whitespace-nowrap shrink-0 ${
                    isTarget
                      ? "bg-[#006fe3] text-white shadow-sm shadow-blue-600/10"
                      : "bg-white text-neutral-600 border border-black/[0.05] hover:bg-neutral-100 hover:text-neutral-900"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Motion Masonry Display Grid */}
        <motion.div 
          layout
          className="masonry-luxury-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={`${item.name}-${index}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <VideoCard item={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Funnel Callout Banner */}
        <div className="mt-12 sm:mt-16 bg-white p-5 sm:p-6 md:p-8 rounded-xl border border-black/[0.04] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.02)] flex flex-col md:flex-row items-center justify-between gap-5 md:gap-6">
          <div className="space-y-1.5 sm:space-y-1 text-center md:text-left">
            <h4 className="font-heading font-bold text-neutral-900 text-base sm:text-lg">
              Ready to experience this elite spatial result on your property?
            </h4>
            <p className="font-body text-[11px] sm:text-xs text-neutral-500 font-medium">
              Our trained and verified professionals deliver thorough, high-end cleaning services across Pune, Mumbai, Bangalore & Hyderabad.
            </p>
          </div>
          <a 
            href="/contact"
            className="btn-urgent-orange w-full md:w-auto justify-center text-[11px] sm:text-xs tracking-wider uppercase py-3.5 sm:py-3.5 px-6 shrink-0 inline-flex items-center gap-2 group shadow-sm"
          >
            Request Site Survey
            <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </div>

      </div>
    </section>
  );
}