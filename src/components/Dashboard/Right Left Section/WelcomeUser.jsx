import React, { useState, useRef } from "react";
import { IoIosRadio } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MenuIcon } from "lucide-react";
import SideDrawer from "../Left Sidebar Section/SideDrawer";

const WelcomeUser = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const menuButtonRef = useRef(null);

  const handleMenuClick = () => {
    if (menuButtonRef.current) {
      const rect = menuButtonRef.current.getBoundingClientRect();
      setMenuPosition({ top: rect.top, left: rect.left });
    }
    setIsDrawerOpen(true);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="items-center bg-gray-100 inline-flex gap-2 px-4 py-2 rounded-lg">
            <IoIosRadio />
            <p className="text-gray-500 font-medium">Welcome, Dominica!</p>
          </div>

          <div className="flex flex-row items-center gap-2 font-medium justify-end xl:flex sm:flex hidden">
            <IoMdNotificationsOutline />
            <img
              className="rounded-full w-10 object-fill"
              src="https://images.unsplash.com/vector-1740737650825-1ce4f5377085?w=500&auto=format&fit=crop&q=60"
              alt="Man"
            />
            <p className="lg:text-base md:text-sm">dominica@gmail.com</p>
          </div>

          <div
            className="2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden cursor-pointer"
            ref={menuButtonRef}
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </div>

          <SideDrawer
            isOpen={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
            origin={menuPosition}
          />
        </div>
      </div>
    </>
  );
};

export default WelcomeUser;
