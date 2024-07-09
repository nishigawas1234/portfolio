import React from "react";
import { CardBody, CardContainer, CardItem } from "./Effects/3d-card";

export default function SkillBox({
  img,
  label,
}: {
  img: string;
  label: string;
}) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="w-full h-auto">
        <div className="rounded-lg border border-[#9A9B9C] w-[170px] bg-[#06132F]">
          <CardItem translateZ="100" className="p-[40px]">
            <img height="76" src={img} style={{ height: "76px" }} />
          </CardItem>

          <div className="rounded-lg p-[8px] bg-[#000000] text-center">
            {label}
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
}
