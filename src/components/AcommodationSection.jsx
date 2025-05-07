import React from 'react'
import AcommodationCard from './AcommodationCard'

const AcommodationSection = () => {
  return (
    <div className='overflow-x-auto scrollbar-hide'>
        <div className="flex ">
        <AcommodationCard />
        <AcommodationCard />
        <AcommodationCard />
        </div>
        
    </div>
  )
}

export default AcommodationSection