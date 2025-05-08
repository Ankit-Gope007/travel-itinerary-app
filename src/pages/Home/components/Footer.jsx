import React from 'react'
import { useState } from 'react';
import { CiHome } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { Link } from 'react-router-dom';

const Footer = () => {
  // return (
  //     <div className="fixed bottom-0  left-0 w-full h-[70px] z-50 bg-[#1D1F24]">
  //         <div className='flex w-ful h-full items-center justify-around  border border-white'>
  //             <div className=''><CiHome className='h-[40px] w-[50px]' /></div>
  //             <div className=''><CiSearch className='h-[40px] w-[50px]' /></div>
  //             <div className=''><IoMdAdd className='h-[40px] w-[50px] text-[#D3F462]' /></div>
  //             <div className=''><CiHeart className='h-[40px] w-[50px]' /></div>
  //             <div className=''><GoPerson className='h-[40px] w-[50px]' /></div>
  //         </div>

  //     </div>
  // )
  const [activeIcon, setActiveIcon] = useState('home') // default is 'home'

  const iconClasses = (name) =>
    `h-[50px] w-[50px] p-2 rounded-full transition duration-300 flex items-center justify-center
         ${activeIcon === name
      ? 'bg-[#D1F46233] text-[#D3F462] '
      : 'text-white'}`;

  return (
    <div className="fixed bottom-0 left-0 w-full h-[70px] overflow-hidden z-50 bg-[#1D1F24]">
      <div className="flex w-full h-full items-center justify-around">
        <div onClick={() => setActiveIcon('home')}>
          <CiHome className={iconClasses('home')} />
        </div>
        <div onClick={() => setActiveIcon('search')}>
          <CiSearch className={iconClasses('search')} />
        </div>
        <div onClick={() => setActiveIcon('add')}>
          <Link to="/add" onClick={() => setActiveIcon('add')}>
            <IoMdAdd className={`h-[40px] w-[50px] text-[#D3F462] ${iconClasses('add')}`} />
          </Link>
        </div>
        <div onClick={() => setActiveIcon('heart')}>
          <CiHeart className={iconClasses('heart')} />
        </div>
        <div onClick={() => setActiveIcon('person')}>
          <GoPerson className={iconClasses('person')} />
        </div>
      </div>
    </div>
  )
}

export default Footer