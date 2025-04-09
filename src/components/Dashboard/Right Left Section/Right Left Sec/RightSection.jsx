import React from "react";
import WelcomeUser from "../Logged User/WelcomeUser";
import Calendar from "../Calender/Calender";
import AllTasks from "../Tasks/AllTasks";

const RightSection = () => {
  return (
    <div className="bg-white rounded-3xl p-4 lg:w-[75%] md:w-[92%] w-[100%] md:flex gap-4">
      {/* Right - Left Section */}
      <div className="flex flex-col md:w-1/2">
        <WelcomeUser />
        <div className="my-2">
          <Calendar />
        </div>
        <AllTasks />
      </div>
    </div>
  );
};

export default RightSection;
