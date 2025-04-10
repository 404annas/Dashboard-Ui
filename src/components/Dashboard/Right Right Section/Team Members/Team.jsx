import React from "react";
import { CgProfile } from "react-icons/cg";
import { teamMemData } from "./teamMemData";

const Team = () => {
  return (
    <>
      <div className="flex items-center">
        <h1 className="lg:text-xl md:text-lg font-bold mr-2">Team Chat</h1>
        {teamMemData.map((team, idx) => (
          <img className="rounded-full md:w-10 md:h-10 w-8 h-8 object-cover mr-2" key={idx} src={team.image} alt="Team Members" />
        ))}
      </div>
      <div>
        <button className="relative group flex items-center justify-end gap-2 bg-purple-950 lg:px-2 lg:py-1 md:p-3 text-white lg:rounded-lg md:rounded-full sm:p-2 p-2 rounded-full sm:rounded-lg text-sm">
          <p className="text-lg">
            <CgProfile />
          </p>
          <p className="xl:flex md:hidden hidden">Invite People</p>
          <p className="lg:flex md:hidden xl:hidden sm:hidden hidden">Invite</p>
        </button>
      </div>
    </>
  );
};

export default Team;
