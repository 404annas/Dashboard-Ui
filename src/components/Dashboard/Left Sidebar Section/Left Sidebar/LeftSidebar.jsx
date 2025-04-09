import React from "react";
import { LeftSidebarBox } from "../../../Dashboard";
import { LeftSidebarMenus } from "../../../Dashboard";

const LeftSidebar = () => {
  return (
    <>
      {/* Logo */}
      <div className="flex justify-between flex-col lg:w-[25%] hidden lg:flex">
        <div className="flex flex-row items-center gap-3">
          <img
            className="w-12 h-12 object-cover rounded-full"
            src="https://plus.unsplash.com/premium_photo-1670044020152-197fa5a8cab5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Logo"
          />
          <h1 className="text-white text-3xl font-extrabold">Wefha</h1>
        </div>
        <LeftSidebarMenus />
        <LeftSidebarBox />
      </div>
    </>
  );
};

export default LeftSidebar;
