import * as FaIcons from "react-icons/fa";
import * as GrIcons from "react-icons/gr";
import * as SiIcons from "react-icons/si";
import * as VscIcons from "react-icons/vsc";
import React from "react";

export default function Chip({ title, icon }) {
  let iconElm;

  if (FaIcons[icon]) {
    iconElm = React.createElement(FaIcons[icon]);
  } else if (GrIcons[icon]) {
    iconElm = React.createElement(GrIcons[icon]);
  } else if (SiIcons[icon]) {
    iconElm = React.createElement(SiIcons[icon]);
  } else if (VscIcons[icon]) {
    iconElm = React.createElement(VscIcons[icon]);
  } else {
    iconElm = undefined;
  }

  return (
    <div className="flex flex-row gap-2 justify-start items-center shadow-down-sm px-4 py-2 rounded-full cursor-default">
      {iconElm}
      <div className="hidden md:block text-lg">{title}</div>
    </div>
  );
}
