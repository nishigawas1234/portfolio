import React from "react";
import dynamic from "next/dynamic";
const MenuIcon = dynamic(() => import("../Icons/MenuIcon"));
export default function Header(props: any) {
  const navItems = [
    {
      isButton: false,
      title: "Home",
      action: "home",
    },
    {
      isButton: false,
      title: "About",
      action: "about",
    },
    {
      isButton: false,
      title: "Skills",
      action: "skills",
    },
    {
      isButton: false,
      title: "Projects",
      action: "projects",
    },

    {
      isButton: true,
      title: "Contact me",
      action: "contact",
    },
  ];

  return (
    <>
      <div className="hidden md:block">
        <div className="px-20">
          <div
            className={`flex items-center justify-between w-full px-4	bg-black bg-opacity-60 shadow-lg rounded-full border border-opacity-50 border-[#dfdef71c] backdrop-filter hover:scale-[1.05] ease-out duration-100	`}
          >
            <img
              src="/Images/logo.png"
              alt=""
              height="fit-content"
              style={{ height: "28px" }}
            />
            <div className="flex justify-between items-center gap-10  text-[14px]">
              {navItems.map((item, i) => (
                <div
                  key={i}
                  className={`py-2 cursor-pointer border-b-2 ${
                    !item.isButton &&
                    item.title !== props.viewSection &&
                    "hover-underline-animation"
                  }  transition linear  ${
                    !item.isButton && item.title === props.viewSection
                      ? "  border-[#D117B8]"
                      : "border-transparent"
                  }`}
                  onClick={() => props.setviewSection(item.title)}
                >
                  {item.isButton ? (
                    <div className="bg-gradient-to-r from-blue-600 to-blue-900 rounded-full py-1.5  px-4 ">
                      <a href="#contact"> Contact me</a>
                    </div>
                  ) : (
                    <a href={`#${item.action}`}> {item.title}</a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="block md:hidden relative">
        <div className="flex justify-between w-full px-4 ">
          <img src="/Images/logo.png" alt="" height="40" width="40" />
          <MenuIcon
            height="34px"
            width="34px"
            color="#fff"
            onClick={() => {
              props.setNavOpen(true);
            }}
          />
        </div>
      </div>
    </>
  );
}
