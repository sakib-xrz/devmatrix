"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Flexpoint",
    description:
      "A scalable, high-performance web application with a seamless UI/UX, ensuring an optimal user experience.",
    image: "/projects/project-1.svg",
    link: "https://flexpoint.store/",
  },
  {
    title: "ProHR",
    description:
      "An advanced HR management system with candidate matching, video interviews, and streamlined onboarding.",
    image: "/projects/project-2.svg",
    link: "https://www.prohr.io/",
  },
  {
    title: "Medi Mart",
    description:
      "A comprehensive online pharmacy platform designed to provide a seamless experience for purchasing healthcare products. ",
    image: "/placeholder.svg?height=600&width=800",
    link: "https://medimart-self.vercel.app/",
  },
  {
    title: "EventCraft",
    description:
      "All-in-one platform for planning events, managing participants with a modern and seamless UI/UX.",
    image: "/placeholder.svg?height=600&width=800",
    link: "https://eventcraft-frontend.vercel.app/",
  },
];

export default function Projects() {
  const projectsRef = useRef<HTMLDivElement>(null);

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-purple-900/10 to-black/0 pointer-events-none"></div>
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

      {/* Subtle animated orbs */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl animate-blob opacity-40 mix-blend-multiply"></div>
      <div className="absolute bottom-1/3 -left-20 w-96 h-96 bg-pink-600/10 rounded-full filter blur-3xl animate-blob animation-delay-2000 opacity-40 mix-blend-multiply"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-6 py-2 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm text-sm font-medium text-white animate-in slide-in-from-bottom duration-700">
            <span className="text-purple-400 mr-2">✦</span>
            Our Portfolio
            <span className="text-purple-400 ml-2">✦</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 animate-text">
            Featured Projects
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of successful projects delivered for clients
            across various industries.
          </p>
        </div>

        {/* Project grid */}
        <div
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <div key={index} className="group relative">
              <Card className="bg-transparent backdrop-blur-xl border border-white/10 group-hover:border-purple-500/30 overflow-hidden rounded-xl transition-all duration-500 h-full">
                {/* Image container with improved hover effects */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                    loading="lazy"
                  />
                </div>

                {/* Content area with improved spacing and animations */}
                <div className="p-8 flex flex-col h-[calc(100%-56.25%)]">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {project.title}
                  </h3>

                  <p className="text-white/70 group-hover:text-white/90 mb-6 flex-grow transition-colors duration-300 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-auto flex justify-between items-center">
                    <Button
                      asChild
                      variant="ghost"
                      className="relative p-0 h-auto hover:bg-transparent group/btn"
                    >
                      <Link
                        href={project.link}
                        className="flex items-center text-purple-400 hover:text-purple-300 transition-all duration-300"
                      >
                        <span className="relative">
                          View Project
                          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-purple-400 group-hover/btn:w-full transition-all duration-300"></span>
                        </span>
                        <ArrowRight className="ml-2 h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* View all projects button */}
        {/* <div className="mt-16 text-center">
          <Button className="bg-white/5 hover:bg-white/10 backdrop-blur-md text-white border border-white/10 hover:border-white/30 px-8 py-6 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
            View All Projects <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div> */}
      </div>
    </section>
  );
}
