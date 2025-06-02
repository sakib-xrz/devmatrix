"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "Working with DevMatrix was a game-changer for our business. Their team delivered a custom solution that exceeded our expectations and helped us streamline our operations.",
    author: "Jennifer Smith",
    position: "CEO, TechInnovate",
    rating: 5,
    company: "TechInnovate",
    logo: "/placeholder.svg?height=60&width=120",
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    quote:
      "The mobile app developed by DevMatrix has received outstanding feedback from our users. Their attention to detail and focus on user experience is exceptional.",
    author: "David Chen",
    position: "Product Manager, HealthPlus",
    rating: 5,
    company: "HealthPlus",
    logo: "/placeholder.svg?height=60&width=120",
    gradient: "from-emerald-600 to-green-600",
  },
  {
    quote:
      "DevMatrix helped us transform our outdated systems into a modern, efficient platform. Their expertise and professionalism made the process smooth and stress-free.",
    author: "Michael Brown",
    position: "CTO, FinanceFlow",
    rating: 4,
    company: "FinanceFlow",
    logo: "/placeholder.svg?height=60&width=120",
    gradient: "from-amber-600 to-orange-600",
  },
  {
    quote:
      "We've worked with several development agencies in the past, but none have matched the quality and reliability of DevMatrix. They're now our go-to partner for all our software needs.",
    author: "Sarah Johnson",
    position: "Director of Operations, RetailPro",
    rating: 5,
    company: "RetailPro",
    logo: "/placeholder.svg?height=60&width=120",
    gradient: "from-pink-600 to-rose-600",
  },
  {
    quote:
      "The team at DevMatrix truly understands our business needs and consistently delivers solutions that drive real results. Their technical expertise is matched by their commitment to client success.",
    author: "Robert Williams",
    position: "VP of Technology, EduTech",
    rating: 5,
    company: "EduTech",
    logo: "/placeholder.svg?height=60&width=120",
    gradient: "from-violet-600 to-purple-600",
  },
  {
    quote:
      "DevMatrix's approach to project management and communication made the development process transparent and efficient. We always knew where we stood and what to expect next.",
    author: "Lisa Rodriguez",
    position: "Marketing Director, GrowthCorp",
    rating: 5,
    company: "GrowthCorp",
    logo: "/placeholder.svg?height=60&width=120",
    gradient: "from-sky-600 to-blue-600",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-purple-900/10 to-black/0 pointer-events-none"></div>
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

      {/* Animated orbs */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl animate-blob opacity-60 mix-blend-multiply"></div>
      <div className="absolute bottom-1/3 -left-20 w-96 h-96 bg-pink-600/20 rounded-full filter blur-3xl animate-blob animation-delay-2000 opacity-60 mix-blend-multiply"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-block mb-6 px-6 py-2 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm text-sm font-medium text-white animate-in slide-in-from-bottom duration-700">
            <span className="text-purple-400 mr-2">★</span>
            Client Success Stories
            <span className="text-purple-400 ml-2">★</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 animate-text">
            Client Testimonials
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say
            about working with us.
          </p>
        </div>

        {/* Featured testimonial */}
        <div className="mb-24">
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-12 -left-12 text-purple-500/20 transform rotate-12">
              <Quote size={120} />
            </div>
            <div className="absolute -bottom-12 -right-12 text-pink-500/20 transform -rotate-12">
              <Quote size={120} />
            </div>

            {/* Testimonial card */}
            <Card className="relative bg-black/30 backdrop-blur-xl border-0 rounded-3xl overflow-hidden">
              {/* Gradient border */}
              <div className="absolute inset-0 p-[1px] rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 animate-gradient-xy opacity-70"></div>
              </div>

              <div className="relative p-1 rounded-3xl overflow-hidden z-10">
                <div className="bg-black/60 backdrop-blur-md rounded-3xl p-8 md:p-12">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/3 flex flex-col items-center">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center p-1 mb-6">
                        <div className="bg-black/50 backdrop-blur-md rounded-full w-full h-full flex items-center justify-center">
                          <span className="text-4xl font-bold text-white">
                            {testimonials[activeIndex].author.charAt(0)}
                          </span>
                        </div>
                      </div>

                      <div className="text-center mb-6">
                        <h3 className="text-xl font-bold text-white mb-1">
                          {testimonials[activeIndex].author}
                        </h3>
                        <p className="text-white/80">
                          {testimonials[activeIndex].position}
                        </p>
                      </div>

                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={cn(
                              "h-5 w-5 mr-1",
                              i < testimonials[activeIndex].rating
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-400"
                            )}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="md:w-2/3 flex flex-col">
                      <div className="text-purple-400 mb-6">
                        <Quote size={40} />
                      </div>

                      <blockquote className="text-xl md:text-2xl text-white/90 italic mb-8 leading-relaxed">
                        {testimonials[activeIndex].quote}
                      </blockquote>

                      <div className="mt-auto flex justify-between items-center">
                        <div className="text-white/60 text-sm">
                          Client since 2021
                        </div>

                        <div className="flex space-x-2">
                          <Button
                            onClick={handlePrev}
                            variant="outline"
                            size="icon"
                            className="rounded-full border-white/20 bg-white/5 hover:bg-white/10 text-white"
                            disabled={isAnimating}
                          >
                            <ChevronLeft className="h-5 w-5" />
                            <span className="sr-only">Previous</span>
                          </Button>
                          <Button
                            onClick={handleNext}
                            variant="outline"
                            size="icon"
                            className="rounded-full border-white/20 bg-white/5 hover:bg-white/10 text-white"
                            disabled={isAnimating}
                          >
                            <ChevronRight className="h-5 w-5" />
                            <span className="sr-only">Next</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
