"use client";
import About from "@/components/Sections/About";
import Footer from "@/components/Sections/Footer";
import Header from "@/components/Sections/Header";
import HeroSection from "@/components/Sections/HeroSection";
import Skill from "@/components/Sections/Skill";
import Image from "next/image";
import { SetStateAction, useEffect, useRef, useState } from "react";

export default function Home() {
  const [viewSection, setviewSection] = useState("Home");
  return (
    <main
      style={{
        height: "100vh",
        overflowY: "auto",
        width: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="bg-[url('/Images/bg.svg')] py-10"
    >
      <Header
        setviewSection={(section: SetStateAction<string>) =>
          setviewSection(section)
        }
        viewSection={viewSection}
      />
      <HeroSection />
      <About />
      <Skill />
      <Footer />
    </main>
  );
}
