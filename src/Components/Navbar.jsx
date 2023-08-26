import React from "react";

export const Navbar = () => {
  return (
    <div className="font-bold text-xl h-14 flex justify-between p-3 bg-black text-white">
      <div className="cursor-pointer">Punit</div>
      <div className="hover:text-2xl transition-all hover:underline underline-offset-1 cursor-pointer">
        Team Page
      </div>
    </div>
  );
};
