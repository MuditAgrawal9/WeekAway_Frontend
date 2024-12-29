import React from "react";

const Activities = () => {
  return (
    <div className="max-w-[1140px] m-auto w-full md:flex mt-[-75px]">
      <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">
          Resorts
        </h3>
        <img
          src="https://images.unsplash.com/photo-1561501878-aabd62634533?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlc29ydHN8ZW58MHx8MHx8fDA%3D"
          alt="/"
          className="w-full h-full object-cover border-4 border-white shadow-lg"
        />
      </div>
      <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">
          Cruises
        </h3>
        <img
          src="https://images.unsplash.com/photo-1579118331050-daf16e8e6879?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNydWlzZXN8ZW58MHx8MHx8fDA%3D"
          alt="/"
          className="w-full h-full object-cover border-4 border-white shadow-lg"
        />
      </div>
      <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">
          Excursions
        </h3>
        <img
          src="https://images.unsplash.com/photo-1561501878-aabd62634533?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlc29ydHN8ZW58MHx8MHx8fDA%3D"
          alt="/"
          className="w-full h-full object-cover border-4 border-white shadow-lg"
        />
      </div>
    </div>
  );
};

export default Activities;
