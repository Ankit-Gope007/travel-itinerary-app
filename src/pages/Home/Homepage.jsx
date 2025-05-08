import React, { useEffect } from 'react'
import Greetings from "./components/Greetings"
import NewTripCard from './components/NewTripCard'
import FlightDetailsCard from './components/FlightDetailsCard'
import AcommodationSection from './components/Acommodation/AcommodationSection'
import ActivitiesPlanner from './components/Activities/ActivitiesPlanner'
import { GiPikeman } from "react-icons/gi";
import ActivitesSection from './components/Activities/ActivitesSection'
import Footer from './components/Footer'
import useUserStore from '../../store/User.Store'

const App = () => {
  const { theme } = useUserStore()

  useEffect(() => {
    const bg = document.getElementById("background")
    const Heads = document.getElementsByClassName("Head")
    for (let el of Heads) {
      if (!el) return
      if (theme === "dark") {
        el.classList.add("text-white")
        el.classList.remove("text-black")
      } else {
        el.classList.remove("text-white")
        el.classList.add("text-black")
      }
    }
    if (!bg) return

    if (theme === "dark") {
      bg.classList.add("bg-gradient-to-b", "from-[#1a1a1a]", "to-[#000000]")
    } else {
      bg.classList.remove("bg-gradient-to-b", "from-[#1a1a1a]", "to-[#000000]")
    }
  }, [theme])

  return (
    <div id="background" className="min-h-screen w-full max-w-screen  overflow-x-hidden transition-all duration-300  ">
      <Greetings />
      <div className='mt-10 ml-5'>
        <h1 className='text-white font-Poppins font-medium Head'>
          Your Upcoming Trip
        </h1>
      </div>
      <NewTripCard />
      <FlightDetailsCard />
      <div className='mt-10 ml-5 flex justify-between'>
        <h1 className='text-white font-Poppins font-semibold Head'>
          Accomodation
        </h1>
        <a className={`underline mr-5 ${theme=="dark"? "text-[#D1F462] ":"text-[#3643FB]"}`} href="/">See all</a>
      </div>
      <AcommodationSection />
      <div className='mt-10 ml-5 flex justify-between'>
        <h1 className='text-white font-Poppins font-semibold text-[18px] Head'>
          Activities
        </h1>
        <a className={`underline mr-5 ${theme=="dark"? "text-[#D1F462] ":"text-[#3643FB]"}`} href="/">See all</a>
      </div>
      <ActivitiesPlanner />
      <div className='w-full mt-4 ml-3 flex gap-3'>
        <div className={` h-[30px] w-[25%] rounded-[8px]  font-Montserrat flex justify-center items-center text-[12px] font-semibold ${theme=="dark"?"bg-[#D3F462] text-[#333333]":"bg-[#3643FB] text-white"}`}>
          Day 1  27.01.2025
        </div>
        <div className={`h-[30px] w-[25%] rounded-[8px]   font-Montserrat flex justify-center items-center text-[12px] font-semibold ${theme=="dark"?"text-[#D3F462]":"text-[#3643FB]"} `}>
          <GiPikeman className='mr-2' />  3 Activities
        </div>
      </div>
      <ActivitesSection />
      <Footer />
    </div>
  )
}

export default App

