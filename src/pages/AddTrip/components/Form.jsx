import React from 'react'
import { useState } from "react";
import { CiLocationOn, CiCalendar } from "react-icons/ci";
import { FaPerson, FaPeopleGroup } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import { useEffect } from 'react';

const Form = (theme) => {
    const [selectedGroup, setSelectedGroup] = useState("");
    
    useEffect(() => {
        console.log("Theme changed:", theme);
    }, [theme]);

    const groupOptions = [
        { label: "Solo", icon: <FaPerson /> },
        { label: "Couple", icon: <FaPeopleGroup /> },
        { label: "Family", icon: <FaUserFriends /> },
        { label: "Friends", icon: <FaUserFriends /> },
    ];

    return (
        // <div className="space-y-6 text-white font-Montserrat mx-5 mt-[50px]">
        //   {/* Destination */}
        //   <div>
        //     <label className="block mb-2 text-sm">Where would you like to go?</label>
        //     <div className="flex items-center bg-[#2D2D2D] px-4 py-3 rounded-lg gap-2">
        //       <CiLocationOn className="text-lg" />
        //       <input
        //         type="text"
        //         placeholder="Enter Destination"
        //         className="bg-transparent outline-none w-full text-sm placeholder-gray-400"
        //       />
        //     </div>
        //   </div>

        //   {/* Duration */}
        //   <div>
        //     <label className="block mb-2 text-sm">How long will you stay?</label>
        //     <div className="flex items-center bg-[#2D2D2D] px-4 py-3 rounded-lg gap-2">
        //       <CiCalendar className="text-lg" />
        //       <select className="bg-transparent outline-none w-full text-sm placeholder-gray-400 appearance-none">
        //         <option value="">Select Duration</option>
        //         <option value="3">3 Days</option>
        //         <option value="5">5 Days</option>
        //         <option value="7">7 Days</option>
        //       </select>
        //     </div>
        //   </div>

        //   {/* Group Type */}
        //   <div>
        //     <label className="block mb-4 text-sm">Who are you traveling with?</label>
        //     <div className="grid grid-cols-2 gap-3">
        //       {groupOptions.map((option) => (
        //         <button
        //           key={option.label}
        //           onClick={() => setSelectedGroup(option.label)}
        //           className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium text-sm
        //             ${
        //               selectedGroup === option.label
        //                 ? "bg-[#D3F462] text-black"
        //                 : "bg-[#2D2D2D] text-white"
        //             }`}
        //         >
        //           {option.icon}
        //           {option.label}
        //         </button>
        //       ))}
        //     </div>
        //   </div>
        //   {/* Continue Button */}
        //   <div className='mt-[50px] '>
        //     <button className='w-full active:bg-[#343cae] cursor-pointer h-[50px] font-Montserrat text-[16px] rounded-[8px]  bg-[#3643FB] '>Continue</button>
        //   </div>
        // </div>
            <div className={`space-y-6 font-Montserrat mx-5 mt-[50px] ${theme === 'dark' ? 'text-white ' : 'text-black'}`}>
          {/* Destination */}
          <div className={`${theme ==="dark" ? 'text-white' : 'text-black'}`}>
            <label className={`block mb-2 text-sm font-Poppins text-[18px] font-medium  ${theme ==="dark" ? 'text-white' : 'text-black'}`}>Where would you like to go?</label>
            <div className={`flex items-center px-4 py-3 rounded-lg gap-2 ${theme === 'dark' ? 'bg-[#2D2D2D]' : 'bg-[#F1F2F4]'}`}>
              <CiLocationOn className="text-lg" />
              <input
                type="text"
                placeholder="Enter Destination"
                className={`outline-none w-full text-sm placeholder-gray-400 ${theme === 'dark' ? 'bg-transparent text-white' : 'bg-transparent text-black'}`}
              />
            </div>
          </div>

          {/* Duration */}
          <div>
            <label className="block mb-2 text-sm font-Poppins text-[18px] font-medium">How long will you stay?</label>
            <div className={`flex items-center px-4 py-3 rounded-lg gap-2 ${theme === 'dark' ? 'bg-[#2D2D2D]' : 'bg-[#F1F2F4]'}`}>
              <CiCalendar className="text-lg" />
              <select
                className={`outline-none w-full text-sm appearance-none ${theme === 'dark' ? 'bg-transparent text-white' : 'bg-transparent text-black'}`}
              >
                <option value="">Select Duration</option>
                <option value="3">3 Days</option>
                <option value="5">5 Days</option>
                <option value="7">7 Days</option>
              </select>
            </div>
          </div>

          {/* Group Type */}
          <div>
            <label className="block mb-4 text-sm font-Poppins text-[18px] font-medium">Who are you traveling with?</label>
            <div className="grid grid-cols-2 gap-3">
              {groupOptions.map((option) => (
                <button
                  key={option.label}
                  onClick={() => setSelectedGroup(option.label)}
                  className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium text-sm transition ${
                    selectedGroup === option.label
                      ? 'bg-[#D3F462] text-black'
                      : theme === 'dark'
                      ? 'bg-[#2D2D2D] text-white'
                      : 'bg-[#F1F2F4] text-black'
                  }`}
                >
                  {option.icon}
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Continue Button */}
          <div className="mt-[50px]">
            <button
              className="w-full h-[50px] cursor-pointer rounded-[8px] text-[16px] font-Montserrat active:opacity-90 bg-[#3643FB] text-white">
              Continue
            </button>
          </div>
        </div>
        
    );
};

export default Form