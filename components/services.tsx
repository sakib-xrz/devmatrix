"use client";

import { Code, Layers, Smartphone, Globe, Cpu, LineChart } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: <Code className="h-12 w-12 text-purple-300" />,
    title: "Custom Software Development",
    description:
      "Tailored software solutions designed to meet your specific business needs and challenges.",
    gradient: "from-purple-500 via-fuchsia-400 to-pink-500",
  },
  {
    icon: <Layers className="h-12 w-12 text-cyan-300" />,
    title: "UI/UX Design",
    description:
      "User-centered design that creates intuitive, engaging, and accessible digital experiences.",
    gradient: "from-cyan-500 via-blue-400 to-purple-500",
  },
  {
    icon: <Globe className="h-12 w-12 text-pink-300" />,
    title: "Web Development",
    description:
      "Responsive, high-performance websites and web applications built with cutting-edge technologies.",
    gradient: "from-pink-500 via-rose-400 to-orange-500",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-purple-900/10 to-black/0 pointer-events-none"></div>
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

      {/* Animated orbs */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-purple-600/30 rounded-full filter blur-3xl animate-blob opacity-70 mix-blend-multiply"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-pink-600/30 rounded-full filter blur-3xl animate-blob animation-delay-2000 opacity-70 mix-blend-multiply"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-6 py-2 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm text-sm font-medium text-white animate-in slide-in-from-bottom duration-700">
            What We Do Best
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 animate-text">
            Our Services
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            We offer a comprehensive range of software development services to
            help your business succeed in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={cn(
                "bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-500",
                "hover:shadow-2xl hover:scale-105 group",
                "border border-white/10 hover:border-white/30",
                "overflow-hidden"
              )}
            >
              {/* Gradient top border */}
              <div
                className={`h-1 w-full bg-gradient-to-r ${service.gradient}`}
              ></div>

              <CardHeader className="pt-8">
                <div className="mb-6 relative">
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-full opacity-30 group-hover:opacity-100 blur-md transition-all duration-500`}
                  ></div>
                  <div className="relative bg-black/30 backdrop-blur-md p-4 rounded-full border border-white/10 group-hover:border-white/30 transition-all duration-500">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-300 transition-all duration-500">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/80 text-lg group-hover:text-white transition-colors duration-300">
                  {service.description}
                </CardDescription>

                {/* Animated corner accent */}
                <div className="absolute bottom-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div
                    className={`absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl ${service.gradient} opacity-30 blur-md`}
                  ></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional services teaser */}
        <div className="mt-16 text-center">
          <p className="text-white/70 text-lg mb-4">
            We also offer specialized services in:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white/90 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:text-white hover:shadow-lg hover:shadow-purple-500/20">
              <Smartphone className="inline-block h-4 w-4 mr-2 text-purple-400" />
              Mobile Development
            </span>
            <span className="px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white/90 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:text-white hover:shadow-lg hover:shadow-purple-500/20">
              <Cpu className="inline-block h-4 w-4 mr-2 text-cyan-400" />
              AI & Machine Learning
            </span>
            <span className="px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white/90 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:text-white hover:shadow-lg hover:shadow-purple-500/20">
              <LineChart className="inline-block h-4 w-4 mr-2 text-pink-400" />
              Digital Transformation
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
