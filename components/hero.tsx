"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const glowRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return;
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });

      glowRef.current.style.background = `radial-gradient(800px circle at ${clientX}px ${clientY}px, rgba(139, 92, 246, 0.15), transparent 40%)`;
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <Navbar />

      {/* Enhanced Mouse Glow */}
      <div
        ref={glowRef}
        className="absolute inset-0 pointer-events-none z-0 transition-all duration-300"
        aria-hidden="true"
      />

      {/* Floating Orbs with Enhanced Animation */}
      <div className="absolute top-1/4 left-1/4 w-48 xs:w-64 md:w-72 h-48 xs:h-64 md:h-72 bg-purple-600/30 rounded-full filter blur-3xl animate-float opacity-70 mix-blend-multiply"></div>
      <div
        className="absolute top-1/3 right-1/4 w-56 xs:w-72 md:w-80 h-56 xs:h-72 md:h-80 bg-pink-600/30 rounded-full filter blur-3xl animate-float opacity-70 mix-blend-multiply"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-1/4 right-1/3 w-64 xs:w-80 md:w-96 h-64 xs:h-80 md:h-96 bg-cyan-600/30 rounded-full filter blur-3xl animate-float opacity-70 mix-blend-multiply"
        style={{ animationDelay: "4s" }}
      ></div>

      {/* Sparkle Effects */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <Sparkles className="w-4 xs:w-6 h-4 xs:h-6 text-purple-400 animate-pulse absolute -top-16 xs:-top-20 -left-16 xs:-left-20" />
        <Sparkles
          className="w-3 xs:w-4 h-3 xs:h-4 text-pink-400 animate-pulse absolute -bottom-12 xs:-bottom-16 -right-20 xs:-right-24"
          style={{ animationDelay: "1s" }}
        />
        <Sparkles
          className="w-4 xs:w-5 h-4 xs:h-5 text-cyan-400 animate-pulse absolute top-20 xs:top-24 right-16 xs:right-20"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="flex-1 container-mobile mx-auto flex flex-col justify-center items-center text-center xs:pt-20 md:pt-24 relative z-10">
        <div className="max-w-5xl mx-auto glass-card hover:glass-card-hover transition-all duration-500 p-6 xs:p-8 md:p-12 rounded-2xl xs:rounded-3xl border border-white/10 hover:border-white/20">
          {/* Enhanced Badge */}
          <div className="inline-flex items-center gap-2 mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 border border-white/20 rounded-full glass-card text-xs sm:text-sm font-medium text-white/90 animate-slide-blur hover:animate-glow-pulse cursor-default">
            <Sparkles className="w-3 xs:w-4 h-3 xs:h-4 text-purple-400" />
            <span>Innovative Software Solutions</span>
          </div>

          {/* Enhanced Typography */}
          <h1
            className="text-responsive-xl font-bold mb-6 xs:mb-8 leading-tight animate-slide-blur"
            style={{ animationDelay: "0.2s" }}
          >
            We Build Amazing{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 animate-text">
              Digital Experiences
            </span>{" "}
            That Matter
          </h1>

          <p
            className="text-responsive-sm text-white/80 mb-8 xs:mb-10 max-w-3xl mx-auto leading-relaxed animate-slide-blur"
            style={{ animationDelay: "0.4s" }}
          >
            A forward-thinking software development agency crafting innovative
            solutions for businesses worldwide with cutting-edge technology.
          </p>

          {/* Enhanced CTA Buttons */}
          <div
            className="flex flex-wrap gap-4 sm:gap-6 justify-center animate-slide-blur"
            style={{ animationDelay: "0.6s" }}
          >
            <Button
              asChild
              size="lg"
              className="glass-card hover:glass-card-hover bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 hover:from-purple-700 hover:via-pink-700 hover:to-cyan-700 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/50 transition-all duration-300 hover-lift border-0 text-base xs:text-lg px-6 xs:px-8 py-3 xs:py-4 group"
            >
              <Link href="#projects" className="flex items-center gap-2">
                <span>View Our Work</span>
                <ArrowRight className="w-4 h-4 xs:w-5 xs:h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="glass-card hover:glass-card-hover text-white hover-lift border border-white/20 hover:border-white/30 text-base xs:text-lg px-6 xs:px-8 py-3 xs:py-4"
            >
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <Link
        href="#services"
        className="absolute bottom-6 xs:bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 flex-col items-center animate-bounce hidden lg:flex z-50 group"
      >
        <div className="glass-card w-8 h-12 rounded-full border border-white/30 flex justify-center p-1 group-hover:border-white/50 transition-all duration-300">
          <div className="w-1.5 h-3 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full animate-bounce"></div>
        </div>
        <span className="text-white/50 text-xs mt-2 group-hover:text-white/70 transition-colors">
          Scroll Down
        </span>
      </Link>

      {/* Enhanced Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 xs:h-32 md:h-40 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
    </section>
  );
}
