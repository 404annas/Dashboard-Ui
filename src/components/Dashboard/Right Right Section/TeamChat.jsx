import React from "react";
import { FaFile } from "react-icons/fa6";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { IoSendSharp } from "react-icons/io5";

const TeamChat = () => {
  return (
    <>
      <div className="flex gap-2 items-center">
        <img
          className="rounded-full lg:w-10 lg:h-10 md:w-8 md:h-8 w-7 h-7 object-cover mr-1"
          src="https://plus.unsplash.com/premium_vector-1683141132250-12daa3bd85cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8fHww"
          alt="Man"
        />
        <h1 className="lg:text-sm md:text-xs text-xs font-medium bg-white px-4 py-2 rounded-lg">
          Hey, Eve, how's the project going?
        </h1>
      </div>
      <div className="flex flex-row-reverse gap-2 items-center justify-start my-4">
        <img
          className="rounded-full lg:w-10 lg:h-10 md:w-8 md:h-8 w-7 h-7 object-cover mr-2"
          src="https://plus.unsplash.com/premium_vector-1716911552521-a930db016416?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvbWFufGVufDB8fDB8fHww"
          alt="Woman"
        />
        <h1 className="lg:text-sm md:text-xs text-xs font-medium bg-white px-4 py-2 rounded-lg">
          I'm preparing for user reasearch.
        </h1>
      </div>
      <div className="flex gap-2 items-center my-4">
        <img
          className="rounded-full lg:w-10 lg:h-10 md:w-8 md:h-8 w-7 h-7 object-cover"
          src="https://plus.unsplash.com/premium_vector-1722167430275-348e8d11d82e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFufGVufDB8fDB8fHww"
          alt="Man"
        />
        <h1 className="lg:text-sm md:text-xs text-xs font-medium bg-white px-4 py-2 rounded-lg">
          Let me know if you guys need any help.
        </h1>
      </div>

      <div className="flex items-center gap-2 xl:mt-28 lg:mt-28 md:mt-40 bg-white px-4 py-4">
        <p className="cursor-pointer lg:text-base md:text-sm text-xs">
          <FaFile />
        </p>
        <input
          className="w-full outline-none lg:text-base md:text-sm text-xs"
          type="text"
          placeholder="Type a message"
        />
        <p className="cursor-pointer mr-2 lg:text-base md:text-sm text-xs">
          <MdOutlineEmojiEmotions />
        </p>
        <p className="cursor-pointer lg:text-base md:text-sm text-xs">
          <IoSendSharp />
        </p>
      </div>
    </>
  );
};

export default TeamChat;
