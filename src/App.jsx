import React from 'react'
import Greetings from './components/Greetings'
import NewTripCard from './components/NewTripCard'
import FlightDetailsCard from './components/FlightDetailsCard'
import AcommodationSection from './components/AcommodationSection'
import ActivitiesCard from './components/ActivitiesCard'

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a1a] to-[#000000]">
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
      <ActivitiesCard />
    </div>
  )
}

export default App

