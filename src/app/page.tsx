"use client";
import CrossSolid from "@/components/Icons/CrossSolid";
import About from "@/components/Sections/About";
import ContactForm from "@/components/Sections/Contact";
import Footer from "@/components/Sections/Footer";
import Header from "@/components/Sections/Header";
import HeroSection from "@/components/Sections/HeroSection";
import Projects from "@/components/Sections/Projects";
import Skill from "@/components/Sections/Skill";
import Image from "next/image";
import { TracingBeam } from "../components/Effects/tracing-beam";
import { SetStateAction, useEffect, useRef, useState } from "react";

export default function Home() {
  const [viewSection, setviewSection] = useState("Home");

  const [navOpen, setNavOpen] = useState(false);
  const navItems = [
    {
      isButton: false,
      title: "Home",
      action: "mobHome",
    },
    {
      isButton: false,
      title: "About",
      action: "mobAbout",
    },
    {
      isButton: false,
      title: "Skills",
      action: "mobSkills",
    },
    {
      isButton: false,
      title: "Projects",
      action: "mobProjects",
    },

    {
      isButton: false,
      title: "Contact",
      action: "mobContact",
    },
  ];
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
      className="bg-[#0A0A0A] pt-10"
    >
      {/* <TracingBeam className="px-6"> */}
      <div
        style={{
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className={`${
          navOpen
            ? "w-full h-full  rounded-none duration-100"
            : "h-0 w-0 rounded-bl-full duration-100"
        }  absolute  ease-linear top-[0px] right-0 z-50 bg-[url('/Images/bg.png')]`}
      >
        <div
          className={`${
            navOpen ? "block delay-800" : "hidden w-0 h-0 "
          } duration-300 ease-linear delay-0`}
        >
          <div className="flex justify-between w-full px-5 mt-10">
            <a href="/"> 
            <img src="/Images/logo.png" alt="" height="40" width="40" />
            </a>
           
            <CrossSolid
              height="18px"
              width="18px"
              color="#fff"
              onClick={() => {
                setNavOpen(false);
              }}
            />
          </div>
          <div className="mt-10 pl-[58px]">
            {navItems.map((item, i) => (
              <div
                key={i}
                className={`${
                  item.title.toLowerCase() === viewSection.toLowerCase()
                    ? "text-[60px] text-[#3D8AFF] font-semibold"
                    : "text-[40px] text-[#fff] font-medium"
                } mt-2`}
                onClick={() => {
                  setNavOpen(!navOpen);
                  setviewSection(item.title);
                }}
              >
                <a href={`#${item.action}`}> {item.title}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={`${navOpen ? "hidden" : "block"}`}>
        <Header
          setviewSection={(section: SetStateAction<string>) =>
            setviewSection(section)
          }
          setNavOpen={(view: SetStateAction<boolean>) => setNavOpen(view)}
          viewSection={viewSection}
          navOpen={navOpen}
        />
        <HeroSection />
        <About />
        <Skill />
        <Projects />
        <ContactForm />
        <Footer />
      </div>
      {/* </TracingBeam> */}
    </main>
  );
}
