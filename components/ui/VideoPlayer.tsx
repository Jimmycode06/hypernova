"use client";

import { useEffect, useRef } from "react";

interface VideoPlayerProps {
  hlsUrl?: string;
  fallbackUrl?: string;
  className?: string;
}

export default function VideoPlayer({
  hlsUrl,
  fallbackUrl,
  className = "",
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hlsInstance: any = null;

    // Try HLS first if available
    if (hlsUrl && typeof window !== "undefined") {
      // Dynamic import for hls.js (only load if needed)
      import("hls.js").then((Hls) => {
        if (Hls.default.isSupported()) {
          hlsInstance = new Hls.default({
            enableWorker: true,
            lowLatencyMode: true,
          });
          hlsInstance.loadSource(hlsUrl);
          hlsInstance.attachMedia(video);
          hlsInstance.on(Hls.default.Events.MANIFEST_PARSED, () => {
            video.play().catch(() => {
              // Auto-play failed, user interaction required
            });
          });
        } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
          // Native HLS support (Safari)
          video.src = hlsUrl;
          video.play().catch(() => {});
        } else if (fallbackUrl) {
          // Fallback to MP4
          video.src = fallbackUrl;
          video.play().catch(() => {});
        }
      });
    } else if (fallbackUrl) {
      // Use fallback directly
      video.src = fallbackUrl;
      video.play().catch(() => {});
    }

    // Cleanup
    return () => {
      if (hlsInstance) {
        hlsInstance.destroy();
      }
      if (video) {
        video.pause();
        video.src = "";
      }
    };
  }, [hlsUrl, fallbackUrl]);

  return (
    <div className={`relative w-full ${className}`}>
      <video
        ref={videoRef}
        className="w-full h-auto mix-blend-screen"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#010101] via-transparent to-[#010101] pointer-events-none" />
    </div>
  );
}
