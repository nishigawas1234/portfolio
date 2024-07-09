import React from "react";
import LinkedIn from "../Icons/LinkedIn";
import Insta from "../Icons/Insta";
import Git from "../Icons/Git";
import Email from "../Icons/Email";

export default function Footer() {
  const navItems = [
    {
      isButton: false,
      icon: <LinkedIn height="40px" width="40px" />,
      link: "https://www.linkedin.com/in/nishigandha-gawas-868935203/",
    },
    {
      isButton: false,
      icon: <Insta height="40px" width="40px" />,
      link: "https://www.instagram.com/nishi.gawas/",
    },
    {
      isButton: false,
      icon: <Git height="40px" width="40px" />,
      link: "https://github.com/nishigawas1234",
    },
    {
      isButton: false,
      icon: <Email height="40px" width="48px" />,
      link: "mailto:gawasnishigandha@gmail.com",
    },
  ];
  return (
    <>
      <div className="hidden md:block pb-10 mt-[100px] bg-[url('/Images/bg.png')]">
        <div className="">
          <div className="h-[1px] w-full bg-[#9A9B9C]"></div>
          <div className="mt-10 text-center">
            <div className="text-[#ffffff] text-[18px] mb-[24px]">
              Follow me on
            </div>
            <div className="flex gap-10 justify-center">
              {navItems.map((item, i) => (
                <a
                  className="color-[#fff] text-md  duration-100 hover:scale-[1.09]"
                  key={i}
                  href={item.link}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className="block md:hidden mt-10 pb-5 bg-[url('/Images/bg.png')]"
        style={{ backgroundPosition: "left" }}
      >
        <div className="h-[1px] w-full bg-[#9A9B9C]"></div>
        <div className="flex justify-between mt-5 px-10">
          {navItems.map((item, i) => (
            <a
              className="color-[#fff] text-sm  duration-100 hover:scale-[1.09]"
              key={i}
              href={`#${item.link}`}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
