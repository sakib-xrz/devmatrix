import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-black/50 backdrop-blur-xl border-t border-white/10 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link
              href="/"
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 animate-text mb-4 inline-block"
            >
              DevMatrix
            </Link>
            <p className="text-white/70 mb-6 max-w-md">
              We are a team of passionate developers and designers dedicated to
              creating exceptional digital experiences that drive business
              growth.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-white/10 hover:text-purple-400 transition-colors duration-300"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-white/10 hover:text-purple-400 transition-colors duration-300"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-white/10 hover:text-purple-400 transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-white/10 hover:text-purple-400 transition-colors duration-300"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-white/10 hover:text-purple-400 transition-colors duration-300"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#services"
                  className="text-white/70 hover:text-white transition-colors duration-300 hover:pl-2 flex items-center"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-purple-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-white/70 hover:text-white transition-colors duration-300 hover:pl-2 flex items-center"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-purple-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#team"
                  className="text-white/70 hover:text-white transition-colors duration-300 hover:pl-2 flex items-center"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-purple-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="text-white/70 hover:text-white transition-colors duration-300 hover:pl-2 flex items-center"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-purple-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-white/70 hover:text-white transition-colors duration-300 hover:pl-2 flex items-center"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-purple-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-white transition-colors duration-300 hover:pl-2 flex items-center"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-purple-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-white transition-colors duration-300 hover:pl-2 flex items-center"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-purple-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-white transition-colors duration-300 hover:pl-2 flex items-center"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-purple-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/50">
          <p>
            &copy; {new Date().getFullYear()} DevMatrix. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
