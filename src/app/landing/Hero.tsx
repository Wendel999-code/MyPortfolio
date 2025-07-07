"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [showContent, setShowContent] = useState(false);
  const [showVideo, setShowVideo] = useState(true);
  const [videoFadeOut, setVideoFadeOut] = useState(false);

  const { ref: inViewRef, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  // Play on first mount, muted, show content after 4.3s
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.play().catch(() => {});

    const timer = setTimeout(() => setShowContent(true), 4300);
    return () => clearTimeout(timer);
  }, []);

  // Play/Pause & restart when in view
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !showVideo) return;

    if (inView) {
      if (video.ended) {
        video.currentTime = 0;
      }
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [inView, showVideo]);

  // Allow unmuting on user interaction
  useEffect(() => {
    const unmuteOnInteraction = () => {
      if (videoRef.current) {
        videoRef.current.muted = false;
      }
      window.removeEventListener("click", unmuteOnInteraction);
      window.removeEventListener("touchstart", unmuteOnInteraction);
    };

    window.addEventListener("click", unmuteOnInteraction);
    window.addEventListener("touchstart", unmuteOnInteraction);

    return () => {
      window.removeEventListener("click", unmuteOnInteraction);
      window.removeEventListener("touchstart", unmuteOnInteraction);
    };
  }, []);

  // Fade out & scroll after video ends
  const handleVideoEnded = () => {
    setVideoFadeOut(true);
    setTimeout(() => {
      setShowVideo(false);
      // Auto-scroll to Completed Missions
      const missionsElement = document.getElementById("completed-missions");
      missionsElement?.scrollIntoView({ behavior: "smooth" });
    }, 1000);
  };

  return (
    <div
      id="home"
      ref={inViewRef}
      className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-red-900 via-black to-black overflow-hidden"
    >
      {/* Background MP4 Overlay with fade-out */}
      <AnimatePresence>
        {showVideo && (
          <motion.video
            ref={videoRef}
            playsInline
            preload="metadata"
            onEnded={handleVideoEnded}
            className="absolute inset-0 w-full h-full object-cover z-0"
            initial={{ opacity: 0.2 }}
            animate={{ opacity: videoFadeOut ? 0 : 0.2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <source src="/itch2.mp4" type="video/mp4" />
          </motion.video>
        )}
      </AnimatePresence>

      {/* Content */}
      {showContent && (
        <motion.div
          className="relative z-10 flex flex-col items-center text-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Header */}
          <motion.div
            className="flex flex-col gap-4 max-w-2xl"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="md:text-5xl text-3xl font-bold text-red-500 tracking-tight">
              Hey, Wendel here!
            </h1>
            <p className="text-gray-300 text-base md:text-lg">
              Crafting digital experiences with the precision of a shinobi.
              <br />
              Full-stack developer specializing in modern web technologies.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {[
              {
                href: "/Wendel_Sabayo_CV.pdf",
                label: "Resume",
                download: true,
              },
              {
                href: "https://github.com/Wendel999-code",
                label: "GitHub",
              },
              {
                href: "https://www.linkedin.com/in/wendel-sabayo-9098b9293/",
                label: "LinkedIn",
              },
            ].map(({ href, label, download }) => (
              <Link
                key={label}
                href={href}
                {...(download ? { download: true } : {})}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  className="text-red-500 transition-colors border cursor-pointer hover:border-red-500 font-semibold"
                >
                  {label} <ArrowUpRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="mt-12 cursor-pointer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
            }}
            onClick={() => {
              const missionsElement =
                document.getElementById("completed-missions");
              missionsElement?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <ArrowDown className="h-8 w-8 text-red-500 animate-bounce" />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
