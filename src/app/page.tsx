import HeroCarousel from "@/components/sections/HeroCarousel";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import ServicesSlider from "@/components/sections/ServicesSlider";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import GalleryView from "@/components/sections/GalleryView";
import Testimonials from "@/components/sections/Testimonials";
import Clients from "@/components/sections/Clients";
import Process from "@/components/sections/Process";
import Pricing from "@/components/sections/Pricing";
import Certifications from "@/components/ui/Certifications";
import VideoSection from "@/components/sections/Videosection";

/* ---------------------------------------------------------------------------
   HOMEPAGE ORDER

   The page follows one argument, in order:
     what we do -> why us -> proof -> how it works -> what it costs -> trust

   NOTE: <Services /> has been removed. It rendered the same 13 items as
   <ServicesSlider /> from the same getServicesByLocation() call, and
   app/services/page.tsx renders that grid a third time. One showing per page.
--------------------------------------------------------------------------- */

export default function HomePage() {
  return (
    <div className="relative w-full overflow-hidden bg-white">

      {/* 1. Opening: value proposition */}
      <section id="hero-flow" className="relative">
        <HeroCarousel />
        <HeroSection />
        <VideoSection />
      </section>

      {/* 2. Quick authority */}
      <StatsSection />

      {/* 3. What we actually do */}
      <ServicesSlider />

      {/* 4. Why pick us over the alternative */}
      <WhyChooseUs />

      {/* 5. Proof — our work, then our clients' words, then their logos */}
      <div className="bg-neutral-50/50">
        <GalleryView />
      </div>
      <Testimonials />
      <Clients />

      {/* 6. How the job runs */}
      <Process />

      {/* 7. What it costs */}
      <Pricing />

      {/* 8. Final de-risk before the footer CTA */}
      <Certifications />
    </div>
  );
}