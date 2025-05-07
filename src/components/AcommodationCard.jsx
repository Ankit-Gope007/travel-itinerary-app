import React from 'react'
import acommodationImage from "../assets/images/image.svg"
import { GiConfirmed } from "react-icons/gi";

const AcommodationCard = () => {
  return (
    <div className="min-w-[250px] mt-5 ml-5 rounded-xl bg-[#4D4D4D]  text-white ">
      <img src={acommodationImage} className="rounded-lg mx-0 mt-0 w-full" />
      <div className='flex flex-col items-start justify-items-start ml-4 mt-5'>
      <h2 className="font-Poppins font-semibold text-[14px]">Shinagawa Prince Hotel</h2>
      <p className='font-extralight text-[12px]'><span className="font-Poppins font-semibold text-[14px]">Check in:</span> 26.01.2025, 11:15 pm</p>
      <p className='font-extralight text-[12px]'><span className="font-Poppins font-semibold text-[14px]">Check out:</span> 28.01.2025, 11:15 am</p>

      </div>
      <div className='mt-3 pb-2 flex justify-between items-center mx-3'>
        <p className='font-Poppins text-[12px]'> 2 Nights</p>
      <p className="font-medium text-[12px] flex items-center text-[#90EB61] gap-1"><GiConfirmed />Confirmed</p>
      </div>
    </div>
  )
}

export default AcommodationCard