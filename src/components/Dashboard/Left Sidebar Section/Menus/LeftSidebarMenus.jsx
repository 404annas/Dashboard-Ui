import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { menuData } from "./menuData";

const LeftSidebarMenus = () => {
  return (
    <div className="my-4 text-yellow-500 text-lg pl-2">
      <div className="flex flex-row items-center gap-3">
        <img
          className="w-12 h-12 object-cover rounded-full"
          src="https://plus.unsplash.com/premium_photo-1670044020152-197fa5a8cab5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d3xlbnwwfHwwfHx8MA%3D%3D"
          alt="Logo"
        />
        <h1 className="text-white text-3xl font-extrabold">Wefha</h1>
      </div>
      <div className="flex items-center border-l-2 border-yellow-500 px-2 my-4 cursor-pointer">
        <IoHomeOutline />
        <p className="ml-4 font-semibold">Home</p>
      </div>
      {menuData.map((data, idx) => (
        <div key={idx} className="flex items-center px-2 my-4 cursor-pointer">
          {data?.icon}
          <p className="ml-4 font-semibold text-white">{data.content}</p>
        </div>
      ))}
    </div>
  );
};

export default LeftSidebarMenus;
