import React from 'react'
import { useState } from 'react';
import { CiHome } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { Link } from 'react-router-dom';
import useUserStore from '../../../store/User.Store';

const Footer = () => {
  const [activeIcon, setActiveIcon] = useState('home') // default is 'home'
  const { theme } = useUserStore()

  // const iconClasses = (name) =>
  //   `h-[50px] w-[50px] p-2 rounded-full transition duration-300 flex items-center justify-center
  //        ${activeIcon === name
  //     ? 'bg-[#D1F46233] text-[#D3F462] '
  //     : 'text-white'} `;
  const iconClasses = (name) =>
    `h-[50px] w-[50px] p-2 rounded-full transition duration-300 flex items-center justify-center
    ${activeIcon === name
      ? theme === "dark"
        ? 'bg-[#D1F46233] text-[#D3F462]'
        : 'bg-[#3643FB4D] text-[#3643FB]'
      : theme === "dark"
        ? 'text-white'
        : 'text-[#676D75]'
    }`;


  return (
    <div className={`fixed bottom-0 left-0 w-full h-[70px] overflow-hidden z-50  ${theme == "dark"
      ? "bg-[#1D1F24]" : "bg-white"}`}>
      <div className="flex w-full h-full items-center justify-around">
        <div onClick={() => setActiveIcon('home')} className="cursor-pointer">
          <CiHome className={iconClasses('home')} />
        </div>

        <div onClick={() => setActiveIcon('search')} className="cursor-pointer">
          <CiSearch className={iconClasses('search')} />
        </div>

        <div onClick={() => setActiveIcon('add')} className="cursor-pointer">
          <Link to="/add" onClick={() => setActiveIcon('add')}>
            <IoMdAdd
              className={`h-[40px] w-[50px] ${theme === "dark" ? "text-[#D3F462]" : "text-[#313DDF]"} }`}
            />
          </Link>
        </div>

        <div onClick={() => setActiveIcon('heart')} className="cursor-pointer">
          <CiHeart className={iconClasses('heart')} />
        </div>

        <div onClick={() => setActiveIcon('person')} className="cursor-pointer">
          <GoPerson className={iconClasses('person')} />
        </div>
      </div>
    </div>
  )
}

export default Footer