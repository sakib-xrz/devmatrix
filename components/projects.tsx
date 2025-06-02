"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "FinTech Dashboard",
    description:
      "A comprehensive financial analytics dashboard for enterprise clients.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Node.js", "D3.js"],
    link: "#",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Health Tracker App",
    description:
      "Mobile application for tracking health metrics and fitness goals.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React Native", "Firebase", "Redux"],
    link: "#",
    gradient: "from-emerald-500 to-green-500",
  },
  {
    title: "E-commerce Platform",
    description:
      "Scalable e-commerce solution with advanced product management.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "MongoDB", "Stripe"],
    link: "#",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    title: "Smart Home System",
    description:
      "IoT platform for controlling and monitoring smart home devices.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Python", "MQTT", "React"],
    link: "#",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    title: "Learning Management System",
    description:
      "Educational platform for online courses and student management.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Vue.js", "Express", "PostgreSQL"],
    link: "#",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    title: "Supply Chain Solution",
    description:
      "Blockchain-based supply chain tracking and management system.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Solidity", "React", "Node.js"],
    link: "#",
    gradient: "from-sky-500 to-blue-500",
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
            <div key={index} className="group">
              <Card className="bg-black/30 backdrop-blur-xl border border-white/10 group-hover:border-white/20 overflow-hidden rounded-xl transition-all duration-300 h-full">
                {/* Top gradient line */}
                <div
                  className={`h-1 w-full bg-gradient-to-r ${project.gradient}`}
                ></div>

                {/* Image container */}
                <div className="relative aspect-video overflow-hidden">
                  {/* Image */}
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80`}
                  ></div>

                  {/* Tags overlay */}
                  <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        className="bg-black/50 backdrop-blur-md text-white border-0"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Content area */}
                <div className="p-6 flex flex-col h-[calc(100%-56.25%)]">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-white to-purple-300 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-white/80 mb-6 flex-grow">
                    {project.description}
                  </p>

                  <div className="mt-auto flex justify-between items-center">
                    <Button
                      asChild
                      variant="ghost"
                      className="p-0 h-auto hover:bg-transparent group-hover:translate-x-1 transition-transform duration-300"
                    >
                      <Link
                        href={project.link}
                        className="flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300"
                      >
                        View Project <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      size="icon"
                      className="rounded-full border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10"
                    >
                      <Link href={project.link}>
                        <ExternalLink className="h-4 w-4 text-white" />
                        <span className="sr-only">External Link</span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* View all projects button */}
        <div className="mt-16 text-center">
          <Button className="bg-white/5 hover:bg-white/10 backdrop-blur-md text-white border border-white/10 hover:border-white/30 px-8 py-6 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
            View All Projects <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
