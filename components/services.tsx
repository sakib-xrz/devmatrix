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
    icon: <Code className="h-10 w-10 xs:h-12 xs:w-12 text-purple-300" />,
    title: "Custom Software Development",
    description:
      "Tailored software solutions designed to meet your specific business needs and challenges.",
    gradient: "from-purple-500 via-fuchsia-400 to-pink-500",
  },
  {
    icon: <Layers className="h-10 w-10 xs:h-12 xs:w-12 text-cyan-300" />,
    title: "UI/UX Design",
    description:
      "User-centered design that creates intuitive, engaging, and accessible digital experiences.",
    gradient: "from-cyan-500 via-blue-400 to-purple-500",
  },
  {
    icon: <Globe className="h-10 w-10 xs:h-12 xs:w-12 text-pink-300" />,
    title: "Web Development",
    description:
      "Responsive, high-performance websites and web applications built with cutting-edge technologies.",
    gradient: "from-pink-500 via-rose-400 to-orange-500",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-16 xs:py-20 md:py-24 relative overflow-hidden"
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-purple-900/10 to-black/0 pointer-events-none"></div>
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

      {/* Animated orbs */}
      <div className="absolute top-1/4 -left-10 xs:-left-20 w-48 xs:w-64 h-48 xs:h-64 bg-purple-600/30 rounded-full filter blur-3xl animate-float opacity-70 mix-blend-multiply"></div>
      <div className="absolute bottom-1/4 -right-10 xs:-right-20 w-64 xs:w-80 h-64 xs:h-80 bg-pink-600/30 rounded-full filter blur-3xl animate-float animation-delay-2000 opacity-70 mix-blend-multiply"></div>

      <div className="container-mobile mx-auto relative z-10">
        <div className="text-center mb-12 xs:mb-16 md:mb-20">
          <div className="inline-block mb-4 xs:mb-6 px-4 xs:px-6 py-2 xs:py-3 border border-white/20 rounded-full glass-card text-xs xs:text-sm font-medium text-white animate-slide-blur">
            What We Do Best
          </div>
          <h2 className="text-responsive-lg font-bold mb-4 xs:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 animate-text">
            Our Services
          </h2>
          <p className="text-responsive-sm text-white/90 max-w-3xl mx-auto leading-relaxed">
            We offer a comprehensive range of software development services to
            help your business succeed in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xs:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={cn(
                "glass-card hover:glass-card-hover transition-all duration-500 group hover-lift",
                "border border-white/10 hover:border-white/30",
                "overflow-hidden relative"
              )}
            >
              {/* Enhanced gradient border */}
              <div className="absolute inset-0 rounded-lg p-[1px] bg-gradient-to-r from-purple-500/50 via-pink-500/50 to-cyan-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-full h-full bg-black/50 rounded-lg"></div>
              </div>

              {/* Floating icon effect */}
              <CardHeader className="pt-6 xs:pt-8 relative z-10">
                <div className="mb-4 xs:mb-6 relative">
                  <div
                    className={`absolute -inset-2 bg-gradient-to-r ${service.gradient} rounded-full opacity-20 group-hover:opacity-60 blur-lg transition-all duration-500 animate-glow-pulse`}
                  ></div>
                  <div className="relative glass-card p-3 xs:p-4 rounded-full border border-white/10 group-hover:border-white/30 transition-all duration-500 hover:animate-float">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-lg xs:text-xl md:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-300 transition-all duration-500">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 pb-6 xs:pb-8">
                <CardDescription className="text-white/80 text-sm xs:text-base lg:text-lg group-hover:text-white transition-colors duration-300 leading-relaxed">
                  {service.description}
                </CardDescription>

                {/* Enhanced corner accent */}
                <div className="absolute bottom-0 right-0 w-12 xs:w-16 h-12 xs:h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div
                    className={`absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl ${service.gradient} opacity-40 blur-md rounded-tl-full`}
                  ></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced additional services teaser */}
        <div className="mt-12 xs:mt-16 text-center">
          <p className="text-white/70 text-sm xs:text-base lg:text-lg mb-6 xs:mb-8">
            We also offer specialized services in:
          </p>
          <div className="flex flex-wrap justify-center gap-3 xs:gap-4">
            {[
              {
                icon: Smartphone,
                label: "Mobile Development",
                color: "text-purple-400",
              },
              {
                icon: Cpu,
                label: "AI & Machine Learning",
                color: "text-cyan-400",
              },
              {
                icon: LineChart,
                label: "Digital Transformation",
                color: "text-pink-400",
              },
            ].map((item, index) => (
              <span
                key={index}
                className="glass-card hover:glass-card-hover px-3 xs:px-4 py-2 xs:py-3 border border-white/10 rounded-full text-white/90 hover:border-white/20 transition-all duration-300 hover:text-white hover:shadow-lg hover:shadow-purple-500/20 hover-lift text-sm xs:text-base cursor-default"
              >
                <item.icon
                  className={`inline-block h-3 w-3 xs:h-4 xs:w-4 mr-2 ${item.color}`}
                />
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
