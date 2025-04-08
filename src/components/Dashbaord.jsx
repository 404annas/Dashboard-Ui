import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { IoCubeOutline } from "react-icons/io5";
import { BsCalendar2Date } from "react-icons/bs";
import { BsChatSquareDots } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { PhoneCallIcon } from "lucide-react";
import Calendar from "./Dashboard/Right Left Section/Calender";
import LeftSidebar from "./Dashboard/Left Sidebar Section/LeftSidebar";
import WelcomeUser from "./Dashboard/Right Left Section/WelcomeUser";
import AllTasks from "./Dashboard/Right Left Section/AllTasks";
import TeamChat from "./Dashboard/Right Right Section/TeamChat";
import Team from "./Dashboard/Right Right Section/Team";
import Notifications from "./Dashboard/Right Right Section/Notifications";
// import Calendar from "react-calendar";

const Dashbaord = () => {
  return (
    // Full Dashboard
    <section className="bg-purple-950 md:h-screen md:max-h-screen p-4 sm:flex gap-6">
      {/* Left Section Sidebar */}
      <LeftSidebar />

      {/* Tablet View */}
      <div className="flex items-center flex-col w-[8%] hidden sm:flex lg:hidden">
        <div className="flex flex-row items-center">
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
      </div>

      {/* Right Section */}
      <div className="bg-white rounded-3xl p-4 lg:w-[75%] md:w-[92%] w-[100%] md:flex gap-4">
        {/* Right - Left Section */}
        <div className="flex flex-col md:w-1/2">
          {/* User */}
          <WelcomeUser />

          <div className="mt-8 sm:hidden block">
            <div className="flex justify-between items-center">
              <h1 className="font-bold lg:text-xl md:text-lg mb-2">
                Notifications
              </h1>
              <p className="lg:text-sm md:text-xs text-xs text-yellow-500 cursor-pointer">
                View All
              </p>
            </div>
            <div className="lg:px-4 lg:py-4 md:p-2 p-4 bg-purple-950 rounded-2xl flex gap-6">
              <p className="text-xl text-white cursor-pointer px-2">
                <FaRegEdit />
              </p>
              <div className="text-white">
                <h1 className="font-medium lg:text-base md:text-sm text-base">
                  Emily just sent you a task
                </h1>
                <p className="lg:text-xs md:text-[10px] text-xs mb-2">
                  Lorem ipsum dolor sit amet.
                </p>
                <button className="bg-yellow-500 lg:text-sm md:text-xs text-xs py-1 px-2 rounded-lg">
                  Reply Now
                </button>
              </div>
            </div>
          </div>

          {/* Calender Component */}
          <div className="md:my-4 sm:my-8 my-6">
            <Calendar />
          </div>

          {/* Tasks Component */}
          <AllTasks />
        </div>

        {/* Right - Right Section */}
        <div className="md:w-1/2 flex flex-col">
          {/* User Details */}

          {/* Notifications Box */}
          <div className="mt-4 md:block hidden">
            <Notifications />
          </div>

          {/* Our Team*/}
          <div className="sm:my-4 my-6 flex items-center justify-between">
            <Team />
          </div>

          {/* Team Chat Box */}
          <div className="h-full overflow-y-auto bg-gray-200 rounded-lg p-4 chatbox">
            <TeamChat />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashbaord;
