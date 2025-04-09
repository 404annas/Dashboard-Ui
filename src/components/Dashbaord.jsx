import React from "react";
import { Calender } from "./Dashboard";
import { LeftSidebar } from "./Dashboard";
import { WelcomeUser } from "./Dashboard";
import { AllTasks } from "./Dashboard";
import { TeamChat } from "./Dashboard";
import { Team } from "./Dashboard";
import { Notifications } from "./Dashboard";
import { TabletView } from "./Dashboard";
import { NotiMobileView } from "./Dashboard";

const Dashbaord = () => {
  return (
    // Full Dashboard
    <section className="bg-purple-950 px-4 sm:flex gap-6">
      {/* Left Section Sidebar */}
      <LeftSidebar />

      {/* Tablet View */}
      <div className="flex items-center flex-col py-4 w-[8%] hidden sm:flex lg:hidden">
        <TabletView />
      </div>

      {/* Right Section */}
      <div className="py-4 lg:w-[75%] md:w-[92%] w-[100%] gap-4 rightsec mt-16 overflow-y-auto">
        <div className="bg-white rounded-3xl p-4">
          <WelcomeUser />
          {/* Right - Left Section */}

          <div className="flex md:flex-row flex-col gap-4">
            <div className="flex flex-col md:w-1/2">
              {/* User */}

              <NotiMobileView />

              {/* Calender Component */}
              <div className="md:my-4 sm:my-8 my-6">
                <Calender />
              </div>

              {/* Tasks Component */}
              <AllTasks />
              {/* <AllTasks /> */}
            </div>

            {/* Right - Right Section */}
            <div className="md:w-1/2 flex flex-col">
              {/* User Details */}

              {/* Notifications Box */}
              <div className="md:block hidden">
                <Notifications />
              </div>

              {/* Our Team*/}
              <div className="sm:my-4 my-4 flex items-center justify-between">
                <Team />
              </div>

              {/* Team Chat Box */}
              <div className="lg:h-72 md:h-[350px] sm:h-72 h-72 overflow-y-auto bg-gray-200 rounded-lg p-4 chatbox">
                <TeamChat />
              </div>
              {/* <div className="lg:h-72 md:h-[350px] sm:h-72 h-72 mt-4 overflow-y-auto bg-gray-200 rounded-lg p-4 chatbox">
                <TeamChat />
              </div>
              <div className="lg:h-72 md:h-[350px] sm:h-72 h-72 mt-4 overflow-y-auto bg-gray-200 rounded-lg p-4 chatbox">
                <TeamChat />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashbaord;
