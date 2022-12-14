import React, { useEffect, useState } from 'react';
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineMenuFold,
} from 'react-icons/ai';

const Navbar = () => {
  const [navOps, setNavOps] = useState(false);

  const handleNav = (e) => {
    e.preventDefault();

    setNavOps(!navOps);
  };
  useEffect(() => {
    // console.log('navOps->', navOps);
    setNavOps(navOps);
  }, []);
  // console.log('navOps->', navOps);

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">
        React Tailwind
      </h1>
      {/* <ul className="flex hidden"> */}
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!navOps ? (
          <AiOutlineMenuFold size={20} />
        ) : (
          <AiOutlineClose size={20} />
        )}
      </div>
      {/* <div className="fixed left-0 top-0 w-[60%] h-full border-r border-r-grey-900
       bg-gray-600 
       bg-[#000300]"> */}
      <div
        className={
          navOps
            ? `fixed left-0 top-0 w-[60%] h-full border-r border-r-grey-900
        bg-[#000300] ease-in-out duration-500`
            : `fixed left-[-100%]`
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          React Tailwind
        </h1>
        <ul className="pt-4 pr-4 uppercase">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Resources</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
