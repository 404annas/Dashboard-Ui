import React from "react";
import { X } from "lucide-react";
import { IoHomeOutline, IoCubeOutline, IoSettingsOutline } from "react-icons/io5";
import { BsCalendar2Date, BsChatSquareDots } from "react-icons/bs";

const SideDrawer = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-screen bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center px-6 py-4 border-b">
        <div className="flex items-center gap-3">
          <img
            className="w-12 h-12 object-cover rounded-full"
            src="https://plus.unsplash.com/premium_photo-1670044020152-197fa5a8cab5?w=500&auto=format&fit=crop&q=60"
            alt="Logo"
          />
          <h1 className="text-black text-2xl font-extrabold">Wefha</h1>
        </div>
        <X className="cursor-pointer" onClick={onClose} />
      </div>

      <div className="px-6 py-6 flex flex-col gap-5 text-yellow-500">
        <div className="flex items-center border-l-2 border-yellow-500 px-2 cursor-pointer">
          <IoHomeOutline />
          <p className="ml-4 font-semibold">Home</p>
        </div>
        <div className="flex items-center px-2 cursor-pointer">
          <IoCubeOutline />
          <p className="ml-4 font-semibold text-black">Project</p>
        </div>
        <div className="flex items-center px-2 cursor-pointer">
          <BsCalendar2Date />
          <p className="ml-4 font-semibold text-black">Calendar</p>
        </div>
        <div className="flex items-center px-2 cursor-pointer">
          <BsChatSquareDots />
          <p className="ml-4 font-semibold text-black">Chat</p>
        </div>
        <div className="flex items-center px-2 cursor-pointer">
          <IoSettingsOutline />
          <p className="ml-4 font-semibold text-black">Settings</p>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 text-sm text-gray-500">
        <div className="flex items-center gap-2 font-medium">
          <img
            className="rounded-full w-10 object-fill"
            src="https://images.unsplash.com/vector-1740737650825-1ce4f5377085?w=500"
            alt="Man"
          />
          <p className="text-sm">dominica@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default SideDrawer;
