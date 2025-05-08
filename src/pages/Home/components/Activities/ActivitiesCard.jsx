import React from 'react'

const ActivitiesCard = ({image,heading,timing,duration,pickUp,theme}) => {
    return (
        <div className='my-3'>
            <div class={`flex h-[170px]   rounded-[8px] overflow-hidden shadow-lg max-w-4xl ${theme=="dark"?"bg-[#4D4D4D] text-white":"bg-white border border-slate-400 "}`} >
                <img src={image} alt="Senso-ji Temple"
                    class="w-2/5  object-cover h-[200px]" />

                <div class="p-6 w-1/2 flex flex-col justify-center ">
                    <h2 class="text-[14px] font-semibold leading-snug font-Poppins ">
                        {heading}
                    </h2>
                    

                    <p className='font-Montserrat text-[12px]'><span class="font-semibold font-Poppins text-[12px] ">Timing:</span> {timing} </p>
                    <p className='font-Montserrat text-[12px]'><span class="font-semibold  font-Poppins text-[12px]">Duration:</span> {duration}</p>
                    <p className='font-Montserrat text-[12px] w-[200px]'><span class="font-semibold font-Poppins text-[12px]">Pick up:</span> {pickUp}</p>
                </div>
            </div>
        </div>
    )
}

export default ActivitiesCard