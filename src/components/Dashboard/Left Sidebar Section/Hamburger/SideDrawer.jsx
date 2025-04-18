import React, { useEffect } from "react";
import { X } from "lucide-react";
import {
  IoHomeOutline,
  IoCubeOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { BsChatSquareDots } from "react-icons/bs";

const SideDrawer = ({ isOpen, onClose }) => {
  // Prevent background scrolling when the SideDrawer is open.
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Cleanup when unmounting:
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-screen bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Flex container to separate header, scrollable content, and footer */}
      <div className="flex flex-col h-full">
        {/* Header */}
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

        {/* Scrollable Main Content */}
        <div className="flex-1 px-6 py-6 bg-gray-700">
          <div className="flex flex-col gap-5 text-yellow-500">
            <div className="flex items-center border-l-2 border-yellow-500 px-2 cursor-pointer">
              <IoHomeOutline />
              <p className="ml-4 font-semibold">Home</p>
            </div>
            <div className="flex items-center px-2 cursor-pointer">
              <IoCubeOutline />
              <p className="ml-4 font-semibold text-white">Project</p>
            </div>
            <div className="flex items-center px-2 cursor-pointer">
              <BsChatSquareDots />
              <p className="ml-4 font-semibold text-white">Chat</p>
            </div>
            <div className="flex items-center px-2 cursor-pointer">
              <IoSettingsOutline />
              <p className="ml-4 font-semibold text-white">Settings</p>
            </div>
          </div>

          {/* Go PRO Section */}
          <div className="mt-6">
            <div className="bg-gray-300 p-4 rounded-3xl w-full overflow-hidden">
              <h1 className="font-bold text-lg text-gray-600">Go PRO</h1>
              <button className="bg-yellow-500 my-2 px-4 py-1 text-black rounded-xl">
                Subscribe Now
              </button>
              <img
                className="w-40 h-40 rounded-xl"
                src="https://plus.unsplash.com/premium_vector-1682303071823-921c93af6aa2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybCUyMHNpdHRpbmclMjB3aXRoJTIwbGFwdG9wfGVufDB8fDB8fHww"
                alt="Go PRO"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t">
          <div className="flex items-center gap-2 font-medium">
            <img
              className="rounded-full w-10 object-fill"
              src="https://images.unsplash.com/vector-1740737650825-1ce4f5377085?w=500"
              alt="User"
            />
            <p className="text-sm text-gray-500">dominica@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideDrawer;
