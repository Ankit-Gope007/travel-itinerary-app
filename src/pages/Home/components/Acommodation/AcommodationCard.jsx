import React from 'react'
import { GiConfirmed } from "react-icons/gi";
import { RxCountdownTimer } from "react-icons/rx";
import { useEffect,useRef} from 'react';


const AcommodationCard = ({image,heading,checkIn,checkOut,confirm,theme}) => {
  

  return (
    <div className={`min-w-[250px]  mt-5 ml-5 rounded-xl  ${theme=="dark"?"bg-[#4D4D4D] text-white":"border border-slate-400"}   `}>
      <img src={image} className="rounded-lg mx-0 mt-0 w-full max-h-[150px] object-cover" />
      <div className='flex flex-col items-start justify-items-start ml-4 mt-5'>
      <h2 className="font-Poppins font-semibold text-[14px]">{heading}</h2>
      <p className='font-extralight text-[12px]'><span className="font-Poppins font-semibold text-[14px]">Check in:</span> {checkIn}</p>
      <p className='font-extralight text-[12px]'><span className="font-Poppins font-semibold text-[14px]">Check out:</span> {checkOut}</p>

      </div>
      <div className='mt-3 pb-2 flex justify-between items-center mx-3'>
        <p className='font-Poppins text-[12px]'> 2 Nights</p>
        {
            confirm ?<p className="font-medium text-[12px] flex items-center text-[#90EB61] gap-1"><GiConfirmed />Confirmed</p>:<p className="font-medium text-[12px] flex items-center text-[#FF6525] gap-1"><RxCountdownTimer />Pending</p>
        }
      
      </div>
    </div>
  )
}

export default AcommodationCard