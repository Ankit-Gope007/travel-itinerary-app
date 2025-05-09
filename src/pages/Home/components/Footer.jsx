import React from 'react'
import { useState,useEffect } from 'react';
import { CiHome } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { Link } from 'react-router-dom';
import useUserStore from '../../../store/User.Store';

const Footer = () => {
  // const [activeIcon, setActiveIcons] = useState('home') // default is 'home'
  const { theme , activeIcons, setActiveIcons } = useUserStore()

  useEffect(() => {
    console.log("activeIcon", activeIcons)
  }, [setActiveIcons]);
  const iconClasses = (name) =>
    `h-[50px] w-[50px] p-2 rounded-full transition duration-300 flex items-center justify-center
    ${activeIcons === name
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
        <div onClick={() => setActiveIcons('home')} className="cursor-pointer">
        <Link to="/" onClick={() => setActiveIcons('add')}>
          <CiHome className={iconClasses('home')} />
        </Link>
        </div>

        <div onClick={() => setActiveIcons('search')} className="cursor-pointer">
        <Link to="/search" onClick={() => setActiveIcons('search')}>
          <CiSearch className={iconClasses('search')} />
        </Link>
        </div>

        <div onClick={() => setActiveIcons('add')} className="cursor-pointer">
          <Link to="/add" onClick={() => setActiveIcons('add')}>
            <IoMdAdd
              className={`h-[40px] w-[50px] ${iconClasses('add')} ${theme === "dark" ? "text-[#D3F462]" : "text-[#313DDF]"} }`}
            />
          </Link>
        </div>

        <div onClick={() => setActiveIcons('heart')} className="cursor-pointer">
        <Link to="/like" onClick={() => setActiveIcons('add')}>
          <CiHeart className={iconClasses('heart')} />
        </Link>
        </div>

        <div onClick={() => setActiveIcons('person')} className="cursor-pointer">
        <Link to="/profile" onClick={() => setActiveIcons('person')}>
          <GoPerson className={iconClasses('person')} />
        </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer