import React from "react";

const LeftSidebarBox = () => {
  return (
    <div className="bg-gray-300/20 p-4 rounded-3xl h-full overflow-hidden object-fit">
      <h1 className="font-bold text-lg text-white">Go PRO</h1>
      <p className="text-sm text-white">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora,
        praesentium?
      </p>
      <button className="bg-yellow-500 my-2 px-4 py-1 text-white rounded-xl">
        Subscribe Now
      </button>
      <img
        className="w-full rounded-xl"
        src="https://plus.unsplash.com/premium_vector-1682303071823-921c93af6aa2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybCUyMHNpdHRpbmclMjB3aXRoJTIwbGFwdG9wfGVufDB8fDB8fHww"
      />
    </div>
  );
};

export default LeftSidebarBox;
