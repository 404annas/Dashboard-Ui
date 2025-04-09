import React from "react";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineCheckBox } from "react-icons/md";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

const AllTasks = () => {
  return (
    <div className="gap-4 md:h-64 sm:h-56 h-52 overflow-y-auto taskbox">
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
        <div className="flex items-center sm:justify-between my-2 overflow-y-auto">
          <p className="cursor-pointer">
            <MdOutlineCheckBox />
          </p>
          <p className="text-start lg:text-base md:text-sm ml-10">
            Working on Project
          </p>
          <p className="text-purple-950 lg:text-base md:text-sm sm:block hidden">
            04/04/2025 | Fri
          </p>
        </div>
        <div className="flex items-center sm:justify-between my-2">
          <p className="cursor-pointer">
            <MdOutlineCheckBoxOutlineBlank />
          </p>
          <p className="text-start lg:text-base md:text-sm ml-10">
            Team Meeting
          </p>
          <p className="text-purple-950 lg:text-base md:text-sm sm:block hidden">
            15/05/2025 | Wed
          </p>
        </div>
        <div className="flex items-center sm:justify-between my-2">
          <p className="cursor-pointer">
            <MdOutlineCheckBoxOutlineBlank />
          </p>
          <p className="text-start lg:text-base md:text-sm ml-10">
            Doing Research
          </p>
          <p className="text-purple-950 lg:text-base md:text-sm sm:block hidden">
            25/07/2024 | Mon
          </p>
        </div>
        <div className="flex items-center sm:justify-between my-2">
          <p className="cursor-pointer">
            <MdOutlineCheckBoxOutlineBlank />
          </p>
          <p className="text-start lg:text-base md:text-sm ml-10">
            Researching Projects
          </p>
          <p className="text-purple-950 lg:text-base md:text-sm sm:block hidden">
            15/05/2024 | Tue
          </p>
        </div>
      </div>
    </div>
  );
};

export default AllTasks;
