import React, { useState } from "react";
import {
  IoHomeOutline,
  IoCubeOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { BsCalendar2Date, BsChatSquareDots } from "react-icons/bs";
import { PhoneCallIcon } from "lucide-react";
import clsx from "clsx";

const TabletView = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative h-full mt-16">
      {/* Sidebar */}
      <div
        className={clsx(
          "absolute top-0 left-0 h-full flex flex-col z-50 rounded-xl bg-black text-yellow-500 transition-all duration-300 ease-in-out",
          isExpanded ? "w-64" : "w-16"
        )}
      >
        {/* Logo */}
        <div className="flex justify-center mt-4">
          <img
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-10 h-10 object-cover rounded-full cursor-pointer"
            src="https://plus.unsplash.com/premium_photo-1670044020152-197fa5a8cab5?w=500&auto=format&fit=crop&q=60"
            alt="Logo"
          />
        </div>

        {/* Menu Items */}
        <div className="mt-10 text-xl space-y-6 px-2">
          <MenuItem
            icon={<IoHomeOutline />}
            label="Home"
            expanded={isExpanded}
            active
          />
          <MenuItem
            icon={<IoCubeOutline />}
            label="Projects"
            expanded={isExpanded}
          />
          <MenuItem
            icon={<BsCalendar2Date />}
            label="Calendar"
            expanded={isExpanded}
          />
          <MenuItem
            icon={<BsChatSquareDots />}
            label="Messages"
            expanded={isExpanded}
          />
          <MenuItem
            icon={<IoSettingsOutline />}
            label="Settings"
            expanded={isExpanded}
          />
        </div>

        {/* Bottom Icon */}
        <div className="mt-auto mb-6 px-2">
          <MenuItem
            icon={<PhoneCallIcon />}
            label="Contact"
            expanded={isExpanded}
          />
        </div>
      </div>

      {/* Right Content */}
      <div className="ml-16">{/* This is where your main content goes */}</div>
    </div>
  );
};

const MenuItem = ({ icon, label, expanded, active }) => {
  return (
    <div
      className={clsx(
        "flex items-center gap-4 py-2 px-3 rounded-md cursor-pointer hover:bg-yellow-500/10",
        active && "border-l-2 border-yellow-500"
      )}
    >
      <span className="text-xl">{icon}</span>
      {expanded && <span className="text-sm whitespace-nowrap">{label}</span>}
    </div>
  );
};

export default TabletView;
