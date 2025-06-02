"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-black/10 backdrop-blur-xl shadow-lg shadow-purple-500/10"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 animate-text"
          >
            DevMatrix
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#services"
              className="text-white/80 hover:text-white transition-colors relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#team"
              className="text-white/80 hover:text-white transition-colors relative group"
            >
              Team
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#projects"
              className="text-white/80 hover:text-white transition-colors relative group"
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#testimonials"
              className="text-white/80 hover:text-white transition-colors relative group"
            >
              Testimonials
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Button
              asChild
              className="bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-purple-500/40"
            >
              <Link href="#contact">Contact Us</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white bg-white/10 backdrop-blur-lg p-2 rounded-full border border-white/20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/60 backdrop-blur-xl border-t border-white/10 animate-in slide-in-from-top">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="#services"
              className="text-white/80 hover:text-white transition-colors py-2 pl-2 border-l-2 border-transparent hover:border-purple-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#team"
              className="text-white/80 hover:text-white transition-colors py-2 pl-2 border-l-2 border-transparent hover:border-purple-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </Link>
            <Link
              href="#projects"
              className="text-white/80 hover:text-white transition-colors py-2 pl-2 border-l-2 border-transparent hover:border-purple-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#testimonials"
              className="text-white/80 hover:text-white transition-colors py-2 pl-2 border-l-2 border-transparent hover:border-purple-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Button
              asChild
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              <Link href="#contact">Contact Us</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
