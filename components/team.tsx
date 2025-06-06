"use client";

import Image from "next/image";
import {
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  Globe,
  Dribbble,
  Facebook,
  Instagram,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import SakibFormal from "@/public/sakib-formal.jpg";
import NusratFormal from "@/public/nusrat-formal.jpg";
import Link from "next/link";

const teamMembers = [
  {
    name: "Mb Rubel",
    role: "Full Stack Developer",
    image: "/images/team/rubel.jpeg",
    bio: "Building robust web applications with a focus on user experience.",
    gradient: "from-purple-600 to-indigo-600",
    socials: [
      {
        icon: <Github className="h-5 w-5" />,
        label: "GitHub",
        color: "hover:text-violet-400",
        link: "https://github.com/mohammodrubel",
      },
      {
        icon: <Linkedin className="h-5 w-5" />,
        label: "LinkedIn",
        color: "hover:text-blue-400",
        link: "https://www.linkedin.com/in/mohammodrubel00/",
      },
      {
        icon: <Globe className="h-5 w-5" />,
        label: "Portfolio",
        color: "hover:text-sky-400",
        link: "https://md-rubel.vercel.app/",
      },
    ],
  },
  {
    name: "Redwan Hasan",
    role: "Senior Frontend Developer",
    image: "/images/team/redwan.jpeg",
    bio: "Frontend developer with a focus on clean, responsive design.",
    gradient: "from-cyan-600 to-blue-600",
    socials: [
      {
        icon: <Github className="h-5 w-5" />,
        label: "GitHub",
        color: "hover:text-violet-400",
        link: "https://github.com/redwanhasan07208212",
      },
      {
        icon: <Linkedin className="h-5 w-5" />,
        label: "LinkedIn",
        color: "hover:text-blue-400",
        link: "https://www.linkedin.com/in/redwan-hasan/",
      },
    ],
  },
  {
    name: "Efat Ara Supti",
    role: "Digital Marketing Specialist",
    image: "/images/team/supty.png",
    bio: "Expert in digital marketing strategies and social media.",
    gradient: "from-pink-500 to-rose-500",
    socials: [
      {
        icon: <Linkedin className="h-5 w-5" />,
        label: "LinkedIn",
        color: "hover:text-blue-400",
        link: "https://www.linkedin.com/in/efat-ara-supti/",
      },
      {
        icon: <Facebook className="h-5 w-5" />,
        label: "Facebook",
        color: "hover:text-blue-600",
        link: "https://www.facebook.com/Efat.supty",
      },
    ],
  },
  {
    name: "Md Sakibul Islam",
    role: "Senior Software Developer",
    image: SakibFormal,
    bio: "Full-stack developer with a passion for clean, efficient code.",
    gradient: "from-amber-600 to-orange-600",
    socials: [
      {
        icon: <Github className="h-5 w-5" />,
        label: "GitHub",
        color: "hover:text-violet-400",
        link: "https://github.com/sakib-xrz",
      },
      {
        icon: <Linkedin className="h-5 w-5" />,
        label: "LinkedIn",
        color: "hover:text-blue-400",
        link: "https://www.linkedin.com/in/sakib0808/",
      },
      {
        icon: <Globe className="h-5 w-5" />,
        label: "Portfolio",
        color: "hover:text-sky-400",
        link: "https://sakib-dev.xyz/",
      },
    ],
  },
  {
    name: "Nusrat Jahan",
    role: "UX/UI Designer",
    image: NusratFormal,
    bio: "Creating beautiful, intuitive interfaces that users love.",
    gradient: "from-pink-600 to-rose-600",
    socials: [
      {
        icon: <Linkedin className="h-5 w-5" />,
        label: "LinkedIn",
        color: "hover:text-blue-400",
        link: "https://www.linkedin.com/in/nusratjahan24/",
      },
      {
        icon: <Dribbble className="h-5 w-5" />,
        label: "Dribbble",
        color: "hover:text-pink-400",
        link: "https://dribbble.com/Nusrat3060",
      },
      {
        icon: <ExternalLink className="h-5 w-5" />,
        label: "Behance",
        color: "hover:text-blue-500",
        link: "https://www.behance.net/nusratjahan0",
      },
    ],
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-purple-900/10 to-black/0 pointer-events-none"></div>
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

      {/* Animated orbs */}
      <div className="absolute top-1/3 -right-20 w-72 h-72 bg-purple-600/20 rounded-full filter blur-3xl animate-blob opacity-60 mix-blend-multiply"></div>
      <div className="absolute bottom-1/3 -left-20 w-80 h-80 bg-pink-600/20 rounded-full filter blur-3xl animate-blob animation-delay-2000 opacity-60 mix-blend-multiply"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-6 py-2 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm text-sm font-medium text-white animate-in slide-in-from-bottom duration-700">
            The Talent Behind Our Success
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 animate-text">
            Meet Our Team
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Talented professionals dedicated to delivering exceptional results
            for our clients.
          </p>
        </div>

        {/* First team member centered */}
        <div className="flex justify-center mb-8">
          <Card
            className={cn(
              "group w-full max-w-sm",
              "bg-white/5 border-white/10 backdrop-blur-xl overflow-hidden",
              "hover:bg-white/10 transition-all duration-500 hover:-translate-y-3",
              "hover:shadow-2xl hover:shadow-purple-500/30",
              "border border-white/10 hover:border-white/30",
              "relative"
            )}
          >
            {/* Top gradient line */}
            <div
              className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${teamMembers[0].gradient}`}
            ></div>

            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
              <div
                className={`absolute top-0 right-0 w-10 h-10 bg-gradient-to-bl ${teamMembers[0].gradient} rotate-45 transform origin-bottom-left opacity-70`}
              ></div>
            </div>

            <div className="aspect-square relative overflow-hidden">
              <Image
                src={teamMembers[0].image || "/placeholder.svg"}
                alt={teamMembers[0].name}
                fill
                className="object-cover transition-transform duration-700"
              />
            </div>

            <CardContent className="p-6 relative">
              <div
                className={`absolute -inset-px bg-gradient-to-t ${teamMembers[0].gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`}
              ></div>

              <div className="flex items-center mb-3">
                <div
                  className={`w-1 h-8 bg-gradient-to-b ${teamMembers[0].gradient} mr-3 rounded-full`}
                ></div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-300 transition-colors duration-300">
                    {teamMembers[0].name}
                  </h3>
                  <p
                    className={`text-transparent bg-clip-text bg-gradient-to-r ${teamMembers[0].gradient}`}
                  >
                    {teamMembers[0].role}
                  </p>
                </div>
              </div>

              <p className="text-white/80 mb-5 group-hover:text-white transition-colors duration-300">
                {teamMembers[0].bio}
              </p>

              <div className="flex space-x-3 pt-4 border-t border-white/10 group-hover:border-white/20 transition-colors duration-300">
                {teamMembers[0].socials.map((social, socialIndex) => (
                  <Link
                    key={socialIndex}
                    href={social.link}
                    className={cn(
                      "block text-white/70 transition-all duration-300",
                      social.color
                    )}
                    target="_blank"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Remaining 4 members in 4-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.slice(1).map((member, index) => (
            <Card
              key={index}
              className={cn(
                "group",
                "bg-white/5 border-white/10 backdrop-blur-xl overflow-hidden",
                "hover:bg-white/10 transition-all duration-500 hover:-translate-y-3",
                "hover:shadow-2xl hover:shadow-purple-500/30",
                "border border-white/10 hover:border-white/30",
                "relative"
              )}
            >
              {/* Top gradient line */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${member.gradient}`}
              ></div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                <div
                  className={`absolute top-0 right-0 w-10 h-10 bg-gradient-to-bl ${member.gradient} rotate-45 transform origin-bottom-left opacity-70`}
                ></div>
              </div>

              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 "
                />
              </div>

              <CardContent className="p-6 relative">
                <div
                  className={`absolute -inset-px bg-gradient-to-t ${member.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`}
                ></div>

                <div className="flex items-center mb-3">
                  <div
                    className={`w-1 h-8 bg-gradient-to-b ${member.gradient} mr-3 rounded-full`}
                  ></div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-300 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p
                      className={`text-transparent bg-clip-text bg-gradient-to-r ${member.gradient}`}
                    >
                      {member.role}
                    </p>
                  </div>
                </div>

                <p className="text-white/80 mb-5 group-hover:text-white transition-colors duration-300">
                  {member.bio}
                </p>

                <div className="flex space-x-3 pt-4 border-t border-white/10 group-hover:border-white/20 transition-colors duration-300">
                  {member.socials.map((social, socialIndex) => (
                    <Link
                      key={socialIndex}
                      href={social.link}
                      className={cn(
                        "block text-white/70 transition-all duration-300",
                        social.color
                      )}
                      target="_blank"
                    >
                      {social.icon}
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-2">
              10+
            </div>
            <div className="text-white/80">Years Experience</div>
          </div>
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
              50+
            </div>
            <div className="text-white/80">Projects Completed</div>
          </div>
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mb-2">
              30+
            </div>
            <div className="text-white/80">Happy Clients</div>
          </div>
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-500 mb-2">
              5
            </div>
            <div className="text-white/80">Industry Awards</div>
          </div>
        </div>
      </div>
    </section>
  );
}
