"use client";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CostCalculator from "@/components/CostCalculator";
import Projects from "@/components/Projects";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect } from "react";

function ScrollAnimations() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("fade-in-visible");
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-in-hidden").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return null;
}

export default function Home() {
  return (
    <LanguageProvider>
      <ScrollAnimations />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <CostCalculator />
        <Stats />
        <About />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
