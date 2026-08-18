"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import "./Videosection.css";

/* ---------------------------------------------------------------------------
   VIDEO SECTION — sits directly under the difference band

   FACADE PATTERN
   Nothing from YouTube loads until someone presses play. Until then the
   visitor sees a local poster image and a play button — about 40KB instead of
   ~900KB of third-party script. This is the single biggest performance win
   available on a page that embeds video, and it is why the old background
   loop had to go.

   IT IS A PLAYER, NOT A BACKDROP
   Muted, autoplaying, half-hidden video says "we needed something moving
   here". A framed 16:9 player with a caption says "watch this, it is worth
   your time". The second one is what a visitor deciding on a ₹8,900 job
   actually needs.

   SOUND
   Because playback is user-initiated, autoplay with sound is allowed by
   every browser. No mute parameter — a muted video the visitor asked to
   watch is a broken video.

   PALETTE
   Same #060c14 as the section above, so the two read as one dark chapter,
   and the fade to white at the bottom hands off to the light sections.

   REPLACE THE POSTER
   /gallery/2.avif is a stand-in. Use a still from the video itself, 1600px+
   wide, or the frame will not match what plays.
--------------------------------------------------------------------------- */

const VIDEO = {
  desktop: "77CuKfbUc2k",
  mobile: "fz1YLkCfIYs",
};

const POSTER = "/gallery/2.avif";

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);
  const idRef = useRef<string>(VIDEO.desktop);

  /* Resolved at click time, not render time — no resize listener, no state,
     and no server/client mismatch. */
  const play = useCallback(() => {
    idRef.current =
      typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches
        ? VIDEO.mobile
        : VIDEO.desktop;
    setPlaying(true);
  }, []);

  return (
    <section className="vid" aria-labelledby="vid-title">
      <div className="vid-inner">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="vid-head"
        >
          <p className="vid-eyebrow">On the job</p>
          <h2 id="vid-title" className="vid-title">
            Two minutes of what a deep clean actually looks like.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="vid-frame"
        >
          {playing ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${idRef.current}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
              title="CorpX deep cleaning — on the job"
              className="vid-player"
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
            />
          ) : (
            <button type="button" onClick={play} className="vid-facade" aria-label="Play video">
              <Image
                src={POSTER}
                alt=""
                fill
                sizes="(max-width: 1024px) 92vw, 1100px"
                quality={80}
                className="vid-poster"
              />
              <span className="vid-poster-scrim" aria-hidden="true" />
              <span className="vid-play" aria-hidden="true">
                <Play size={22} className="fill-current" />
              </span>
              <span className="vid-hint" aria-hidden="true">
                Watch the process
              </span>
            </button>
          )}
        </motion.div>

        <p className="vid-note">
          Filmed on site. No staging, no stock footage.
        </p>
      </div>

      {/* Hand-off to the light sections below. */}
      <div className="vid-fade" aria-hidden="true" />
    </section>
  );
}