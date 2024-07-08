import React from "react";

export default function About() {
  return (
    <div className="px-20 w-full pt-[100px]">
      <div className="flex">
        <div className="w-[60%] p-10">
          <div className="text-[65px] font-semibold">About Me</div>
          <div className="text-[16px] font-normal">
            A frontend developer who's passionate about crafting beautiful and
            user-friendly websites. With 2+ years of experience in the field, I
            specialize in using a variety of frontend frameworks such as
            React.js and Next.js to bring designs to life. Whether it's building
            interactive components, optimizing performance, or ensuring
            cross-browser compatibility, I love diving into the world of
            frontend development. I'm always on the lookout for new challenges
            and opportunities to expand my skills. Let's collaborate and create
            something awesome together!
          </div>
        </div>
        <div className="w-[40%]">
          <img src="/Images/about.png" alt="about image" />
        </div>
      </div>
    </div>
  );
}
