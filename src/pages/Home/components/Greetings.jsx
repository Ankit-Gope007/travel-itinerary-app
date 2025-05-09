import React from 'react'
import { useEffect } from 'react'
import useUserStore from '../../../store/User.Store'

const Greetings = () => {
  const {theme,username} = useUserStore()

  useEffect(() => {
    const heading = document.getElementById("heading")
    if (!heading) return

    if (theme === "dark") {
      heading.classList.add("text-white")
      heading.classList.remove("text-black")
    } else {
      heading.classList.remove("text-white")
      heading.classList.add("text-black")
    }
  }, [theme])


  return (
    <div className='flex justify-between items-center' >
        <div id="heading" className='mt-5 ml-5 text-white '>
            <div className='font-Poppins font-extrabold text-[24px]'>
            Hello {username}!
            </div>
            <div className='font-Montserrat font-medium text-[16px]'>
            Ready for the trip?
            </div>
        </div>
        <div className='h-[38px] w-[38px] rounded-full mr-5 mt-5 flex items-center justify-center bg-[#FF7339] text-white'>
            {username.charAt(0).toUpperCase()}
        </div>
    </div>
  )
}

export default Greetings