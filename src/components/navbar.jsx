import React from "react";
import { SiNike } from "react-icons/si";
import { IoIosSearch } from "react-icons/io";
export default function Navbar() {
  return (
    <nav>
      <ul className="absolute  w-full p-8 flex text-white">
        <span className="flex justify-between w-[47%] ">
          <li><SiNike className="text-white text-8xl -translate-y-7"/></li>
          <li className="cursor-pointer uppercase hover:border-[#e0701a] hover:border-b-2 h-fit">new release</li>
          <li className="cursor-pointer uppercase hover:border-[#e0701a] hover:border-b-2 h-fit">men</li>
          <li className="cursor-pointer uppercase hover:border-[#e0701a] hover:border-b-2 h-fit">women</li>
          <li className="cursor-pointer uppercase hover:border-[#e0701a] hover:border-b-2 h-fit">kid</li>
          <li className="cursor-pointer uppercase hover:border-[#e0701a] hover:border-b-2 h-fit">costumize</li>
        </span>
        <li className="translate-x-44 relative">
          <IoIosSearch className="absolute top-2 text-[#c6c6c6] text-2xl left-4"/>
          <input type="text" placeholder="search" className="h-[2.4rem] w-[19.6rem] placeholder:text-center placeholder:uppercase text-gray-400 border-[#c6c6c6] border-2 rounded-2xl outline-none pl-10" />
        </li>
      </ul>
    </nav>
  );
}
