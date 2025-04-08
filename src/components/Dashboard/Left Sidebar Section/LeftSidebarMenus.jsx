import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { IoCubeOutline } from "react-icons/io5";
import { BsCalendar2Date } from "react-icons/bs";
import { BsChatSquareDots } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";

const LeftSidebarMenus = () => {
  return (
    <div className="my-4 text-yellow-500 text-lg pl-2">
      <div className="flex items-center border-l-2 border-yellow-500 px-2 my-4 cursor-pointer">
        <IoHomeOutline />
        <p className="ml-4 font-semibold">Home</p>
      </div>
      <div className="flex items-center px-2 my-4 cursor-pointer">
        <IoCubeOutline />
        <p className="ml-4 font-semibold text-white">Project</p>
      </div>
      <div className="flex items-center px-2 my-4 cursor-pointer">
        <BsCalendar2Date />
        <p className="ml-4 font-semibold text-white">Calendar</p>
      </div>
      <div className="flex items-center px-2 my-4 cursor-pointer">
        <BsChatSquareDots />
        <p className="ml-4 font-semibold text-white">Chat</p>
      </div>
      <div className="flex items-center px-2 my-4 cursor-pointer">
        <IoSettingsOutline />
        <p className="ml-4 font-semibold text-white">Settings</p>
      </div>
    </div>
  );
};

export default LeftSidebarMenus;
