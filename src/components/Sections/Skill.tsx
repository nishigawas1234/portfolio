import React from "react";
import SkillBox from "../SkillBox";
import { AnimatedTooltip } from "../Effects/animated-tooltip";

export default function Skill() {
  const skills = [
    { label: "HTML", img: "Images/Skills/icons8-html-logo-144.png" },
    { label: "CSS", img: "Images/Skills/icons8-css-logo-144.png" },
    { label: "REACT", img: "Images/Skills/icons8-react-200.png" },
    { label: "JAVASCRIPT", img: "Images/Skills/icons8-javascript-144.png" },
    { label: "BOOTSTRAP", img: "Images/Skills/icons8-bootstrap-logo-144.png" },
    { label: "CHAKRA UI", img: "Images/Skills/icons8-chakra-ui-144.png" },
    { label: "TYPESCRIPT", img: "Images/Skills/Ts.png" },
    { label: "NEXTJS", img: "Images/Skills/Nextjs.png" },
    { label: "GITHUB", img: "Images/Skills/Git.png" },
    { label: "ANGULAR", img: "Images/Skills/icons8-angularjs-144.png" },
    { label: "WORDPRESS", img: "Images/Skills/wordpress.png" },
  ];

  const people = [
    {
      id: 1,
      name: "HTML",
      designation: "Software Engineer",
      image: "/Images/Skills/icons8-html-logo-144.png",
    },
    {
      id: 2,
      name: "CSS",
      designation: "Product Manager",
      image: "/Images/Skills/icons8-css-logo-144.png",
    },
    {
      id: 3,
      name: "REACT",
      designation: "Product Manager",
      image: "/Images/Skills/icons8-react-200.png",
    },
    {
      id: 4,
      name: "JAVASCRIPT",
      designation: "Product Manager",
      image: "/Images/Skills/icons8-javascript-144.png",
    },
    {
      id: 5,
      name: "BOOTSTRAP",
      designation: "Product Manager",
      image: "/Images/Skills/icons8-bootstrap-logo-144.png",
    },
    {
      id: 6,
      name: "CHAKRA UI",
      designation: "Product Manager",
      image: "/Images/Skills/icons8-chakra-ui-144.png",
    },
    {
      id: 7,
      name: "TYPESCRIPT",
      designation: "Product Manager",
      image: "/Images/Skills/Ts.png",
    },
    {
      id: 8,
      name: "NEXTJS",
      designation: "Product Manager",
      image: "/Images/Skills/Nextjs.png",
    },
    {
      id: 9,
      name: "GITHUB",
      designation: "Product Manager",
      image: "/Images/Skills/Git.png",
    },
    {
      id: 10,
      name: "ANGULAR",
      designation: "Product Manager",
      image: "/Images/Skills/icons8-angularjs-144.png",
    },
    {
      id: 11,
      name: "WORDPRESS",
      designation: "Product Manager",
      image: "/Images/Skills/wordpress.png",
    },
  ];

  return (
    <>
      <div
        className="hidden md:block px-4 sm:px-8 md:px-12 lg:px-20 w-full pt-16 md:pt-24 lg:pt-[100px] relative"
        id="skills"
      >
        <div className="text-3xl sm:text-4xl text-[#fff] md:text-5xl lg:text-6xl font-semibold text-center">
          Skills
        </div>
        <div className="mt-8 md:mt-12 lg:mt-[60px] flex flex-wrap justify-center gap-12 w-[80%] m-[auto]">
          {skills.map(({ img, label }, i) => (
            <div className="flex-shrink-0" key={i}>
              <SkillBox img={img} label={label} />
            </div>
          ))}
        </div>
        <div>
          <img
            src="/Images/circleRight.png"
            alt="Decorative Circle"
            className="absolute right-[-10%] md:right-[-5%] lg:right-[-9%] top-1/2 transform -translate-y-1/2 hidden md:block"
            style={{ height: "auto", width: "50%" }}
          />
        </div>
      </div>
      <div className="block md:hidden mt-[60px]" id="mobSkills">
        <div className="text-[40px] mb-5 text-center font-semibold text-center">
          Skills
        </div>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={people.slice(0 ,5)} />
        </div>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={people.slice(5)} />
        </div>
      </div>
    </>
  );
}
