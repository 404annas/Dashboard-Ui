import React from "react";
import { IoMdAdd } from "react-icons/io";
import { tasks } from "./tasks";

const AllTasks = () => {
  return (
    <div className="gap-4 lg:h-64 md:h-64 sm:h-56 h-52 mb-4 overflow-y-auto taskbox">
      <div className="flex justify-between items-center">
        <h1 className="lg:text-xl md:text-lg font-bold">Today Task</h1>
        <p className="font-bold text-sm bg-gray-300 px-2 py-1 rounded text-gray-700">
          4
        </p>
        <p className="bg-gray-300 p-2 rounded-full cursor-pointer">
          <IoMdAdd />
        </p>
      </div>

      <div className="mt-4 bg-gray-200 px-4 py-2 rounded-xl">
        {tasks.map((task, idx) => (
          <div key={idx} className="flex items-center sm:justify-between my-2">
            <p className="cursor-pointer">{task.icon}</p>
            <p className="text-start lg:text-base md:text-sm ml-10">
              {task.content}
            </p>
            <p className="text-purple-950 lg:text-base md:text-sm sm:block hidden">
              {task.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTasks;
