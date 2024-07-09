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
      link: "",
    },
    {
      isButton: false,
      icon: <Insta height="40px" width="40px" />,
      link: "",
    },
    {
      isButton: false,
      icon: <Git height="40px" width="40px" />,
      link: "",
    },
    {
      isButton: false,
      icon: <Email height="40px" width="48px" />,
      link: "",
    },
  ];
  return (
    <>
      <div className="hidden md:block">
        <div className="px-[80px]">
          <div className=" h-[2px] w-full bg-[#9A9B9C]"></div>
          <div className="mt-10 text-center">
            <div className="text-[#ffffff] text-[18px] mb-[24px]">
              Follow me on
            </div>
            <div className="flex gap-10 justify-center">
              {navItems.map((item, i) => (
                <a
                  className="color-[#fff] text-md  duration-100 hover:scale-[1.09]"
                  key={i}
                  href={`#${item.link}`}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden px-5 mt-10">
        <div className=" h-[2px] w-full bg-[#D117B8]"></div>
        <div className="flex justify-between mt-5 ">
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
        <div className="flex justify-center mt-8">
          <img src="/images/logo.svg" alt="" height="40" width="40" />
        </div>
      </div>
    </>
  );
}
