import React from 'react'

const Greetings = () => {
  return (
    <div className='flex justify-between items-center' >
        <div className='mt-5 ml-5 text-white '>
            <div className='font-Poppins font-extrabold text-[24px]'>
            Hello Chhavi!
            </div>
            <div className='font-Montserrat font-medium text-[16px]'>
            Ready for the trip?
            </div>
        </div>
        <div className='h-[38px] w-[38px] rounded-full mr-5 mt-5 flex items-center justify-center bg-[#FF7339] text-white'>
            C
        </div>
    </div>
  )
}

export default Greetings