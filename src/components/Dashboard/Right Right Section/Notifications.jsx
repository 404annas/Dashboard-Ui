import React from "react";
import { FaRegEdit } from "react-icons/fa";

const Notifications = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="font-bold lg:text-xl md:text-lg mb-2">Notifications</h1>
        <p className="lg:text-sm md:text-xs text-yellow-500 cursor-pointer">
          View All
        </p>
      </div>
      <div className="lg:px-4 lg:py-4 md:p-2 bg-purple-950 rounded-2xl flex gap-6">
        <p className="text-xl text-white cursor-pointer px-2">
          <FaRegEdit />
        </p>
        <div className="text-white">
          <h1 className="font-medium lg:text-base md:text-sm">
            Emily just sent you a task
          </h1>
          <p className="lg:text-xs md:text-[10px] mb-2">
            Lorem ipsum dolor sit amet.
          </p>
          <button className="bg-yellow-500 lg:text-sm md:text-xs py-1 px-2 rounded-lg">
            Reply Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Notifications;
