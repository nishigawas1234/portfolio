import React from "react";
import SkillBox from "../SkillBox";

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
  return (
    <div
      className="px-20 w-full pt-[100px] hidden md:block relative"
      id="skills"
    >
      <div className="text-[65px] text-center font-semibold">Skills</div>
      <div className="mt-[60px] w-[80%] m-[auto]">
        <div className="grid grid-cols-6 gap-4">
          {skills.map(({ img, label }, i) => {
            return (
              <div className="" key={i}>
                <SkillBox img={img} label={label} />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <img
          src="/Images/circleRight.png"
          height={"700px"}
          width={"700px"}
          className="absolute	right-[-9%] top-[60%]"
        />
      </div>
    </div>
  );
}
