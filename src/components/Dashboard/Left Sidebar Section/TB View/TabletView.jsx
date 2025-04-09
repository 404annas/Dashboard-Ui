import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { IoCubeOutline } from "react-icons/io5";
import { BsCalendar2Date } from "react-icons/bs";
import { BsChatSquareDots } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { PhoneCallIcon } from "lucide-react";

const TabletView = () => {
  return (
    <>
      <div className="flex flex-col mt-16">
        <img
          className="w-10 h-10 object-cover rounded-full"
          src="https://plus.unsplash.com/premium_photo-1670044020152-197fa5a8cab5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d3xlbnwwfHwwfHx8MA%3D%3D"
          alt="Logo"
        />
      </div>

      <div className="my-10 text-yellow-500 text-xl">
        <div className="flex items-center border-l-2 border-yellow-500 px-2 my-6 cursor-pointer">
          <IoHomeOutline />
        </div>
        <div className="flex items-center px-2 my-6 cursor-pointer">
          <IoCubeOutline />
        </div>
        <div className="flex items-center px-2 my-6 cursor-pointer">
          <BsCalendar2Date />
        </div>
        <div className="flex items-center px-2 my-6 cursor-pointer">
          <BsChatSquareDots />
        </div>
        <div className="flex items-center px-2 my-6 cursor-pointer">
          <IoSettingsOutline />
        </div>
      </div>

      <div className="flex items-center mt-auto px-2 my-4 cursor-pointer text-yellow-500 text-xl">
        <PhoneCallIcon />
      </div>
    </>
  );
};

export default TabletView;
