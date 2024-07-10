import React from "react";
import { TypewriterEffect } from "../Effects/typewriter-effect";
import { ReactTyped } from "react-typed";
import Image from "next/image";

export default function HeroSection() {
  const socialMedia = [
    {
      img: "/images/socials/GITHUB.svg",
      href: "https://github.com/mohamadazaruddin",
    },
    {
      img: "/images/socials/WHATSAPP.svg",
      href: "https://wa.me/9702914246",
    },
    {
      img: "/images/socials/INSTAGRAM.svg",
      href: "https://www.instagram.com/axharrr.ig",
    },
    {
      img: "/images/socials/GMAIL.svg",
      href: "mailto:azaruddin1307@gmail.com",
    },
    {
      img: "/images/socials/FACEBOOK.svg",
      href: "https://www.facebook.com/profile.php?id=100014282557454",
    },
    {
      img: "/images/socials/LINKEDIN.svg",
      href: "https://www.linkedin.com/in/mohamad-azaruddin-b8b880269",
    },
  ];
  const words = [
    {
      text: "Hey,",
      className: "text-[40px]",
    },
    {
      text: "I'm",
      className: "text-[40px]",
    },
    {
      text: "Nishi",
      className: "text-[#ffffff] dark:text-[#ffffff]  text-[40px] ",
    },
  ];
  const mobWords = [
    {
      text: "Hello,",
      className: "text-[32px]",
    },
    {
      text: "I'm",
      className: "text-[32px]",
    },
    {
      text: "Nishi",
      className: "text-[#ffffff] text-[32px] ",
    },
  ];
  return (
    <>
      <div className="relative hidden md:block">
        <div
          className=" px-20 pt-[250px] overflow-y-hidden text-center"
          id="home"
        >
          <div className="flex w-full">
            <div className="w-[100%] text-center">
              <TypewriterEffect
                words={words}
                className="text-[40px] text-[#ffffff] mb-3 text-center"
              />

              <ReactTyped
                style={{
                  fontSize: "40px",
                  fontWeight: "bold",
                  color: "#3D8AFF",
                }}
                strings={["A passionate Frontend Developer"]}
                typeSpeed={100}
                loop
              />

              <div className="m-[auto] text-[#9B9A9A] text-md w-[410px] pl-4 mt-[50px] text-center">
                ...with a keen eye for design and a love for creating intuitive
                user experiences
              </div>
            </div>
          </div>

          <div className="flex w-full mt-[60px] justify-center">
            <div className="bg-gradient-to-r from-blue-600 to-blue-900 hover:translate-x-[10px] ease-out duration-100 rounded-full py-1.5  px-4 mr-[24px]">
              <a href="/nishi-resume.pdf" download>
                Download CV
              </a>
            </div>
            <div className="bg-[trasparent] rounded-full py-1.5 hover:translate-x-[10px] ease-out duration-100 px-4 border">
              <a href="#contact">Contact me</a>
            </div>
          </div>
          <div>
            <img
              src="/Images/circleRight.png"
              height={"700px"}
              width={"700px"}
              className="absolute	right-[0] top-[10%]"
            />
          </div>
        </div>
      </div>
      <div className="block md:hidden text-center" id="mobHome">
        <div className="mt-14 px-5 relative text-center">
          <TypewriterEffect
            words={mobWords}
            className="text-[32px] mb-1 text-center"
          />

          <ReactTyped
            style={{
              fontSize: "18px",
              fontWeight: "regular",
              color: "#3D8AFF",
            }}
            strings={["A passionate Frontend Developer"]}
            typeSpeed={100}
            loop
          />

          <div className="text-[#9B9A9A] text-xs w-[200px] m-[auto] pl-2 mt-[40px] w-[100%]">
            ...with a keen eye for design and a love for creating intuitive user
            experiences
          </div>
        </div>
      </div>
    </>
  );
}
