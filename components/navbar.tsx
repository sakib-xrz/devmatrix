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
        isScrolled ? "glass-navbar shadow-lg " : "bg-transparent"
      )}
    >
      <div className="container-mobile mx-auto py-3 xs:py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xl xs:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 animate-text hover:scale-105 transition-transform duration-300"
          >
            DevMatrix
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {[
              { href: "#services", label: "Services" },
              { href: "#team", label: "Team" },
              { href: "#projects", label: "Projects" },
              { href: "#testimonials", label: "Testimonials" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/80 hover:text-white transition-all duration-300 relative group text-sm lg:text-base"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Button
              asChild
              className="glass-card hover:glass-card-hover text-white hover-lift border border-white/20 hover:border-white/30 text-sm lg:text-base px-4 lg:px-6"
            >
              <Link href="#contact">Contact Us</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden glass-card p-2 xs:p-3 rounded-full border border-white/20 hover:border-white/30 transition-all duration-300 hover-lift"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={20} className="text-white" />
            ) : (
              <Menu size={20} className="text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden glass-navbar border-t border-white/10 animate-slide-blur">
          <nav className="container-mobile mx-auto py-4 flex flex-col space-y-4">
            {[
              { href: "#services", label: "Services" },
              { href: "#team", label: "Team" },
              { href: "#projects", label: "Projects" },
              { href: "#testimonials", label: "Testimonials" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/80 hover:text-white transition-all duration-300 py-2 pl-4 border-l-2 border-transparent hover:border-purple-500 hover:bg-white/5 rounded-r-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button
              asChild
              className="glass-card hover:glass-card-hover bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white w-full mt-4 hover-lift border-0"
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
