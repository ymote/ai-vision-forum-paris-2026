"use client";

import { ChevronDown, MapPin, Handshake, Target, Users, Lock } from "lucide-react";
import { CountdownTimer } from "./CountdownTimer";
import { TypewriterText } from "./TypewriterText";
import { EVENT_CONFIG } from "@/lib/constants";

/**
 * Enhanced hero section with Three.js particles, countdown, and typewriter effect
 */
export function HeroSection() {
  const handleScrollDown = () => {
    const tracksSection = document.querySelector("#tracks");
    if (tracksSection) {
      tracksSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-24">
      {/* Impressionist SVG background — painterly washes of light */}
      <div className="absolute inset-0 z-0">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <filter id="hero-impressionist" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence type="fractalNoise" baseFrequency="0.012 0.008" numOctaves="4" seed="3" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="120" xChannelSelector="R" yChannelSelector="G" result="displaced" />
              <feGaussianBlur in="displaced" stdDeviation="28" result="soft" />
              <feColorMatrix in="soft" type="saturate" values="1.3" />
            </filter>
            <filter id="hero-dappled" x="-10%" y="-10%" width="120%" height="120%">
              <feTurbulence type="fractalNoise" baseFrequency="0.025 0.02" numOctaves="3" seed="7" result="lightNoise" />
              <feGaussianBlur in="lightNoise" stdDeviation="18" result="softLight" />
              <feColorMatrix in="softLight" type="luminanceToAlpha" result="lightMap" />
              <feComponentTransfer in="lightMap" result="lightMask">
                <feFuncA type="linear" slope="0.35" intercept="0.05" />
              </feComponentTransfer>
            </filter>
            <filter id="hero-brushstroke" x="0%" y="0%" width="100%" height="100%">
              <feTurbulence type="turbulence" baseFrequency="0.04 0.008" numOctaves="2" seed="12" result="strokes" />
              <feGaussianBlur in="strokes" stdDeviation="3" result="softStrokes" />
              <feColorMatrix in="softStrokes" type="luminanceToAlpha" result="strokeAlpha" />
              <feComponentTransfer in="strokeAlpha" result="strokeMask">
                <feFuncA type="linear" slope="0.06" intercept="0" />
              </feComponentTransfer>
            </filter>
          </defs>

          {/* Warm light base — morning in a Parisian garden */}
          <rect width="100%" height="100%" fill="#f5f0e4" />

          <g filter="url(#hero-impressionist)">
            {/* Soft blues — sky and water reflections */}
            <ellipse cx="20%" cy="25%" rx="340" ry="280" fill="rgba(130, 170, 210, 0.5)" />
            <ellipse cx="80%" cy="20%" rx="300" ry="260" fill="rgba(150, 185, 220, 0.42)" />
            {/* Rose and peach — morning light on stone */}
            <ellipse cx="65%" cy="40%" rx="320" ry="240" fill="rgba(215, 155, 150, 0.42)" />
            <ellipse cx="15%" cy="55%" rx="280" ry="220" fill="rgba(225, 180, 170, 0.32)" />
            {/* Golden ochre — warm sunlight */}
            <ellipse cx="50%" cy="35%" rx="300" ry="200" fill="rgba(225, 200, 140, 0.4)" />
            <ellipse cx="35%" cy="65%" rx="260" ry="200" fill="rgba(215, 190, 130, 0.3)" />
            {/* Sage green — garden foliage */}
            <ellipse cx="45%" cy="75%" rx="380" ry="240" fill="rgba(145, 185, 140, 0.35)" />
            <ellipse cx="75%" cy="70%" rx="240" ry="180" fill="rgba(160, 195, 155, 0.25)" />
            {/* Lavender accents */}
            <ellipse cx="30%" cy="80%" rx="200" ry="160" fill="rgba(175, 155, 200, 0.25)" />
            <ellipse cx="85%" cy="55%" rx="180" ry="150" fill="rgba(165, 145, 190, 0.2)" />
          </g>

          {/* Dappled light — sunlight through leaves */}
          <rect width="100%" height="100%" fill="rgba(255, 250, 235, 0.5)" filter="url(#hero-dappled)" />

          {/* Subtle brushstroke texture */}
          <rect width="100%" height="100%" fill="rgba(160, 140, 110, 0.25)" filter="url(#hero-brushstroke)" />
        </svg>

        {/* Soft center glow for text readability */}
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 65% 50% at 50% 45%, rgba(255, 252, 245, 0.55) 0%, transparent 70%)",
        }} />
      </div>

      {/* Light gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/15 z-[1]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl text-center">
        {/* Main heading */}
        <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
          <span className="text-gradient-primary">
            AI Vision Forum
          </span>
          <br />
          <span className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground/85">
            Paris 2026
          </span>
        </h1>

        {/* Animated tagline */}
        <p className="mb-8 text-xl font-medium text-foreground/70 md:text-2xl lg:text-3xl">
          <TypewriterText text={EVENT_CONFIG.tagline} delay={80} />
        </p>

        {/* Event details */}
        <div className="mb-12 flex flex-col items-center gap-2 text-base text-foreground/60 md:text-lg">
          <p className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-accent" />
            <span>
              {EVENT_CONFIG.location.venue}, {EVENT_CONFIG.location.city}
            </span>
          </p>
          <p className="flex items-center gap-2">
            <Handshake className="h-5 w-5 text-accent" />
            <span>Co-located with {EVENT_CONFIG.location.colocated}</span>
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="mb-12">
          <CountdownTimer />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href="/register"
            className="group relative overflow-hidden rounded-full bg-accent px-8 py-4 text-lg font-semibold text-accent-foreground transition-all hover:scale-105 hover:shadow-xl hover:shadow-accent/30"
          >
            <span className="relative z-10">Request Invitation</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-accent opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              const aboutSection = document.querySelector("#about");
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="rounded-full border-2 border-foreground/20 bg-white/40 backdrop-blur px-8 py-4 text-lg font-semibold text-foreground transition-all hover:border-foreground/35 hover:bg-white/60 hover:shadow-lg"
          >
            Learn More
          </a>
        </div>

        {/* Event badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-foreground/50 md:text-sm">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-foreground/15 bg-white/40 backdrop-blur px-4 py-2">
            <Target className="h-3.5 w-3.5" /> {EVENT_CONFIG.format}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-foreground/15 bg-white/40 backdrop-blur px-4 py-2">
            <Users className="h-3.5 w-3.5" /> {EVENT_CONFIG.scale}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-foreground/15 bg-white/40 backdrop-blur px-4 py-2">
            <Lock className="h-3.5 w-3.5" /> {EVENT_CONFIG.rule}
          </span>
        </div>
      </div>

      {/* Scroll down indicator */}
      <button
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-foreground/40 transition-colors hover:text-foreground/70"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
}
