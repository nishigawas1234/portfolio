"use client";
import React, { useEffect, useState } from "react";

import { PinContainer } from "../Effects/3d-pin";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { CardBody, CardContainer, CardItem } from "../Effects/3d-card";
import Link from "next/link";
import dynamic from "next/dynamic";
const Arrow = dynamic(() => import("../Icons/Arrow"));

export default function Projects({ isAll }: { isAll?: boolean }) {
  const projects = [
    {
      title: "EMS",
      href: "https://ems-ivory.vercel.app/",
      imageUrl: "/Images/Projects/EMS.png",
      detail:
        "An employee management system named EMS is designed to track employees in an organization. With EMS, you can view detailed information about each employee, including their profiles, roles, project ,team and chapters",
    },
    {
      title: "Checkify",
      href: "https://checkify-seven.vercel.app/login",
      imageUrl: "/Images/Projects/checkify.png",
      detail:
        "Checkify is a user-friendly task management and note-taking application that allows users to store their tasks as checklist items and keep notes. The application aims to provide a simple, intuitive interface for users to manage their daily activities and enhance productivity.",
    },
    // {
    //   title: "My portfolio",
    //   href: "https://nishiiiii.vercel.app/n",
    //   imageUrl: "/Images/Projects/portfolio.png",
    //   detail:
    //     "Built a highly  interactive dashboard with React and Chart.js,  Features both dark and light themes, allowing users to switch based on preference or environment, enhancing usability and accessibility. ",
    // },
  ];
  const [projectData, setProjectData] = useState(projects);

  useEffect(() => {
    if (isAll) {
      setProjectData(projects);
    } else {
      setProjectData(projects.slice(0, 3));
    }
  }, []);
  const { push } = useRouter();
  return (
    <>
      <div className="hidden md:block">
        <div className="relative py-[100px] px-20" id="projects">
          <h1
            className={`text-[65px] font-semibold text-[#fff] ${
              isAll ? "text-center" : "text-right"
            }  space-x-3 mr-20 leading-[80px]`}
          >
            My projects
          </h1>
          <div className="mt-24 w-[80%]">
            <div className="grid grid-cols-3 gap-4">
              {projects.map((item, i) => (
                <CardContainer
                  className="inter-var h=[420px] py-0 mt-5"
                  key={i}
                >
                  <CardBody className="bg-black-50 relative group/card   dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 border  ">
                    <CardItem translateZ="100" className="w-full ">
                      <img
                        src={`${item.imageUrl}`}
                        style={{
                          height: "250px",
                          width: "inherit",
                        }}
                        className="h-[150px] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                      />
                    </CardItem>
                    <CardItem
                      translateZ="50"
                      className="text-md font-bold text-neutral-600 dark:text-white mt-5"
                    >
                      {item.title}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-[#A5A0A0] text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                      {item.detail}
                    </CardItem>

                    <div className="flex items-center mt-5">
                      <CardItem
                        translateZ={20}
                        as={Link}
                        e
                        href={`${item.href}`}
                        target="__blank"
                        className=" py-2 rounded-xl text-sm font-normal me-2  text-[#4E94FD]"
                      >
                        Check Out{" "}
                      </CardItem>
                      <Arrow height="20px" width="14px" color="#4E94FD" />
                    </div>
                  </CardBody>
                </CardContainer>
              ))}
            </div>
          </div>
          <div>
            <img
              src="/Images/circleLeft.png"
              height={"700px"}
              width={"700px"}
              className="absolute	left-[-8%] top-[70%]"
            />
          </div>
        </div>
      </div>
      <div className="block md:hidden px-5 mt-20 relative" id="mobProjects">
        <h1 className={`text-[40px] text-center  font-semibold text-[#fff]`}>
          My projects
        </h1>
        {projects.map((item, i) => (
          <CardContainer className="inter-var py-0 mt-5" key={i}>
            <CardBody className="bg-black-50 relative group/card   dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 border  ">
              <CardItem translateZ="100" className="w-full ">
              <img
                        src={`${item.imageUrl}`}
                        style={{
                          height: "150px",
                          width: "inherit",
                        }}
                        className="h-[150px] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                      />
              </CardItem>
              <CardItem
                translateZ="50"
                className="text-md font-bold text-neutral-600 dark:text-white mt-5"
              >
                {item.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {item.detail}
              </CardItem>

              <div className="flex justify-between items-center mt-5">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href={`${item.href}`}
                  target="__blank"
                  className=" py-2 rounded-xl text-sm font-normal  text-blue-500"
                >
                  Visit now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
        {/* <button
          type="button"
          onClick={() => push("/projects")}
          className="bg-gradient-to-r from-blue-600 to-blue-900 rounded-full py-1 px-6 text-[16px] w-auto mt-6 hover:translate-x-[10px] ease-out duration-100 flex items-center gap-4 mx-auto "
        >
          View All <Arrow height="30px" width="24px" color="#fff" />
        </button> */}
      </div>
    </>
  );
}
