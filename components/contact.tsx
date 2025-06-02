"use client";

import type React from "react";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-purple-900/10 to-black/0 pointer-events-none"></div>
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Get In Touch
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you. Reach out to us
            and let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div ref={formRef} className="lg:col-span-2">
            <Card className="bg-white/10 border-white/20 backdrop-blur-lg overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600"></div>
              <CardHeader>
                <CardTitle className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                  Send Us a Message
                </CardTitle>
                <CardDescription className="text-white/90">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-6 text-center">
                    <p className="text-white font-medium text-lg">
                      Thank you for your message! We'll be in touch soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                          className="bg-white/10 border-white/20 focus:border-purple-400 transition-colors duration-300"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          placeholder="Your email"
                          required
                          className="bg-white/10 border-white/20 focus:border-purple-400 transition-colors duration-300"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        placeholder="Subject"
                        required
                        className="bg-white/10 border-white/20 focus:border-purple-400 transition-colors duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Your message"
                        required
                        className="min-h-[50px] bg-white/10 border-white/20 focus:border-purple-400 transition-colors duration-300"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className={cn(
                        "w-full bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600",
                        "hover:from-purple-700 hover:via-pink-700 hover:to-cyan-700",
                        "shadow-lg shadow-purple-500/25 hover:shadow-purple-500/50 transition-all duration-300"
                      )}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Send Message <Send className="ml-2 h-4 w-4" />
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          <div ref={infoRef}>
            <Card className="bg-white/10 border-white/20 backdrop-blur-lg h-full overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600"></div>
              <CardHeader>
                <CardTitle className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                  Contact Information
                </CardTitle>
                <CardDescription className="text-white/90">
                  Reach out to us directly using the information below.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start group">
                  <div className="mr-4 mt-1 p-2 bg-white/10 rounded-full group-hover:bg-purple-500/20 transition-colors duration-300">
                    <MapPin className="h-6 w-6 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 group-hover:text-purple-300 transition-colors duration-300 text-white/70">
                      Address
                    </h4>
                    <p className="text-white/90 group-hover:text-white transition-colors duration-300">
                      123 Innovation Street
                      <br />
                      Tech District
                      <br />
                      San Francisco, CA 94103
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="mr-4 mt-1 p-2 bg-white/10 rounded-full group-hover:bg-purple-500/20 transition-colors duration-300">
                    <Mail className="h-6 w-6 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 group-hover:text-purple-300 transition-colors duration-300 text-white/70">
                      Email
                    </h4>
                    <p className="text-white/90 group-hover:text-white transition-colors duration-300">
                      info@devmatrix.com
                      <br />
                      support@devmatrix.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="mr-4 mt-1 p-2 bg-white/10 rounded-full group-hover:bg-purple-500/20 transition-colors duration-300">
                    <Phone className="h-6 w-6 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 group-hover:text-purple-300 transition-colors duration-300 text-white/70">
                      Phone
                    </h4>
                    <p className="text-white/90 group-hover:text-white transition-colors duration-300">
                      +1 (555) 123-4567
                      <br />
                      +1 (555) 987-6543
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
