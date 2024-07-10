import { motion } from "framer-motion";
import React from "react";
import { TextGenerateEffect } from "../Effects/text-generate-effect";

export default function About() {
  const words =
    "A frontend developer who is passionate about crafting beautiful and user-friendly websites. With 2+ years of experience in the field, I specialize in using a variety of frontend frameworks such as React.js and Next.js to bring designs to life. Whether it is building interactive components, optimizing performance, or  ensuring cross-browser compatibility, I love diving into the world of frontend development. I am always on the lookout for new  challenges and opportunities to expand my skills. Let s collaborate and create something awesome together!";
  return (
    <>
      <div className="px-20 w-full pt-[100px] hidden md:block relative">
        <div className="flex w-[70%] m-[auto]" id="about">
          <div className="w-[60%] m-[auto] p-10">
            <div className="text-[65px] font-semibold">About Me</div>
            {/* <TextGenerateEffect words={words} /> */}
            <div className="text-[16px] text-[#A5A0A0] font-normal">
              A frontend developer who is passionate about crafting beautiful
              and user-friendly websites. With 2+ years of experience in the
              field, I specialize in using a variety of frontend frameworks such
              as React.js and Next.js to bring designs to life. Whether it is
              building interactive components, optimizing performance, or
              ensuring cross-browser compatibility, I love diving into the world
              of frontend development. I am always on the lookout for new
              challenges and opportunities to expand my skills. Let s
              collaborate and create something awesome together!
            </div>
          </div>
          <div className="w-[40%] hover:translate-x-[10px] ease-out duration-100">
            <img src="/Images/about.png" alt="about image" />
          </div>
        </div>
        <div>
          <img
            src="/Images/circleLeft.png"
            height={"700px"}
            width={"700px"}
            className="absolute	left-[-8%] top-[20%]"
          />
        </div>
      </div>
      <div className="block md:hidden">
        <div className="w-[100%] m-[auto] p-10">
          <div className="text-[32px] text-center font-semibold">About Me</div>
          <div className="w-[100%] flex justify-center">
            <img
              src="/Images/about_mob2.png"
              alt="about image"
              style={{ height: "400px" }}
            />
          </div>
          <div className="text-[16px] text-[#A5A0A0] font-normal text-center">
            A frontend developer who is passionate about crafting beautiful and
            user-friendly websites. With 2+ years of experience in the field, I
            specialize in using a variety of frontend frameworks such as
            React.js and Next.js to bring designs to life. Whether it is
            building interactive components, optimizing performance, or ensuring
            cross-browser compatibility, I love diving into the world of
            frontend development. I am always on the lookout for new challenges
            and opportunities to expand my skills. Let s collaborate and create
            something awesome together!
          </div>
        </div>
      </div>
    </>
  );
}
