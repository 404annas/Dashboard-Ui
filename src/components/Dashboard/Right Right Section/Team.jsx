import React from "react";
import { CgProfile } from "react-icons/cg";

const Team = () => {
  return (
    <>
      <div className="flex items-center">
        <h1 className="lg:text-xl md:text-lg font-bold mr-2">Team Chat</h1>
        <img
          className="rounded-full md:w-10 md:h-10 w-8 h-8 object-cover mr-1"
          src="https://plus.unsplash.com/premium_vector-1683141132250-12daa3bd85cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8fHww"
          alt="Man"
        />
        <img
          className="rounded-full md:w-10 md:h-10 w-8 h-8 object-cover mr-2"
          src="https://plus.unsplash.com/premium_vector-1716911552521-a930db016416?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvbWFufGVufDB8fDB8fHww"
          alt="Woman"
        />
        <img
          className="rounded-full md:w-10 md:h-10 w-8 h-8 object-cover"
          src="https://plus.unsplash.com/premium_vector-1722167430275-348e8d11d82e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFufGVufDB8fDB8fHww"
          alt="Man"
        />
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
