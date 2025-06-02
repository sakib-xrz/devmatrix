"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import { useEffect, useRef } from "react";

export default function Hero() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return;

      const { clientX, clientY } = e;
      const x = clientX;
      const y = clientY;

      glowRef.current.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(139, 92, 246, 0.15), transparent 40%)`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <section className="relative min-h-screen flex flex-col">
      <Navbar />

      {/* Mouse follow glow effect */}
      <div
        ref={glowRef}
        className="absolute inset-0 pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/30 rounded-full filter blur-3xl animate-blob opacity-70 mix-blend-multiply"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-pink-600/30 rounded-full filter blur-3xl animate-blob animation-delay-2000 opacity-70 mix-blend-multiply"></div>
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-cyan-600/30 rounded-full filter blur-3xl animate-blob animation-delay-4000 opacity-70 mix-blend-multiply"></div>

      <div className="flex-1 container mx-auto px-4 flex flex-col justify-center items-center text-center pt-20 relative z-10">
        <div className="max-w-4xl mx-auto backdrop-blur-sm p-8 rounded-2xl">
          <div className="inline-block mb-4 px-6 py-2 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm text-sm font-medium text-white/80 animate-in slide-in-from-bottom duration-700">
            Innovative Software Solutions
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-in slide-in-from-bottom duration-700 delay-150">
            We Build Amazing{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 animate-text">
              Digital Experiences
            </span>{" "}
            That Matter
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto animate-in slide-in-from-bottom duration-700 delay-300">
            A forward-thinking software development agency crafting innovative
            solutions for businesses worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in slide-in-from-bottom duration-700 delay-500">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 hover:from-purple-700 hover:via-pink-700 hover:to-cyan-700 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/50 transition-all duration-300"
            >
              <Link href="#projects">
                View Our Work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-purple-500/40"
            >
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <Link
        href="#services"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2  flex-col items-center animate-bounce hidden lg:flex z-50"
      >
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center p-1">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-bounce"></div>
        </div>
        <span className="text-white/50 text-sm mt-2">Scroll Down</span>
      </Link>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
    </section>
  );
}
