import Hero from "@/components/hero";
import Services from "@/components/services";
import Team from "@/components/team";
import Projects from "@/components/projects";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import AnimatedBackground from "@/components/animated-background";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <AnimatedBackground />
      <div className="relative z-10">
        <Hero />
        <div className="bg-gradient-to-b from-transparent via-black/30 to-transparent">
          <Services />
        </div>
        <Team />
        <div className="bg-gradient-to-b from-transparent via-black/30 to-transparent">
          <Projects />
        </div>
        <Testimonials />
        <div className="bg-gradient-to-b from-transparent via-black/30 to-transparent">
          <Contact />
        </div>
        <Footer />
      </div>
    </main>
  );
}
