import React from 'react'
import Greetings from "./components/Greetings"
import NewTripCard from './components/NewTripCard'
import FlightDetailsCard from './components/FlightDetailsCard'
import AcommodationSection from './components/Acommodation/AcommodationSection'
import ActivitiesPlanner from './components/Activities/ActivitiesPlanner'
import { GiPikeman } from "react-icons/gi";
import ActivitesSection from './components/Activities/ActivitesSection'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className="min-h-screen w-full max-w-screen body  bg-gradient-to-b overflow-x-hidden from-[#1a1a1a] to-[#000000]">
      <Greetings />
      <div className='mt-10 ml-5'>
        <h1 className='text-white font-Poppins font-semibold'>
          Your Upcoming Trip
        </h1>
      </div>
      <NewTripCard />
      <FlightDetailsCard />
      <div className='mt-10 ml-5 flex justify-between'>
        <h1 className='text-white font-Poppins font-semibold'>
          Accomodation
        </h1>
        <a className='text-[#D1F462] underline mr-5' href="/">See all</a>
      </div>
      <AcommodationSection />
      <div className='mt-10 ml-5 flex justify-between'>
        <h1 className='text-white font-Poppins font-semibold text-[18px]'>
          Activities
        </h1>
        <a className='text-[#D1F462] underline mr-5' href="/">See all</a>
      </div>
      <ActivitiesPlanner />
      <div className='w-full mt-4 ml-3 flex gap-3'>
        <div className='bg-[#D3F462] h-[30px] w-[25%] rounded-[8px] text-[#333333] font-Montserrat flex justify-center items-center text-[12px] font-semibold'>
          Day 1  27.01.2025
        </div>
        <div className=' h-[30px] w-[25%] rounded-[8px]  text-[#D3F462] font-Montserrat flex justify-center items-center text-[12px] font-semibold '>
        <GiPikeman className='mr-2' />  3 Activities
        </div>
      </div>
      <ActivitesSection /> 
       <Footer />
    </div>
  )
}

export default App

