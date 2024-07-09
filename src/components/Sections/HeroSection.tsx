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
      className: "text-[#ffffff]  text-[40px] ",
    },
  ];
  const mobWords = [
    {
      text: "Hey,",
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
      <div className="hidden md:block">
        <div
          className=" px-20 pt-[100px] overflow-y-hidden text-center"
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
                strings={["Frontend Developer"]}
                typeSpeed={100}
                loop
              />

              <div className="m-[auto] text-[#9B9A9A] text-md w-[410px] pl-4 mt-[50px] text-center">
                a passionate frontend developer with a keen eye for design and a
                love for creating intuitive user experiences
              </div>
            </div>
          </div>

          <div className="flex w-full mt-[60px] justify-center">
            <div className="bg-[#003B93] rounded-full py-1.5  px-4 mr-[24px]">
              <a href="/nishi-resume.pdf" download>
                Download CV
              </a>
            </div>
            <div className="bg-[trasparent] rounded-full py-1.5  px-4 border">
              <a href="#contact">Contact me</a>
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden" id="mobHome">
        <div className="mt-14 px-5 relative">
          <ReactTyped
            style={{
              fontSize: "18px",
              fontWeight: "regular",
              color: "#9B9A9A",
            }}
            strings={["Full Stack Developer", "UI/UX Designer"]}
            typeSpeed={100}
            loop
          />
          <TypewriterEffect
            words={mobWords}
            className="text-[32px] mt-1 text-start"
          />

          <div className="border-l border-[#9B9A9A] text-[#9B9A9A] text-xs w-[200px] pl-2 mt-[40px]">
            i’M A UX DESIGNER AND A FULL STACK DEVELOPER. AND I WORK REMOTELY
            FROM ANYWHERE
          </div>
          <div>
            <img
              src="/images/profileImg2.png"
              alt=""
              className="h-[280px] mt-20 w-auto"
            />
            <div className="absolute top-[100px] right-5">
              {socialMedia.map((item, i) => (
                <a href={`${item.href}`} target="_blank" key={i}>
                  <Image
                    alt="socials"
                    className={`ease-in duration-100 hover:scale-[1.09]`}
                    src={item.img}
                    width={32}
                    height={32}
                    style={{
                      width: `32px`,
                      height: `32px `,
                    }}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
