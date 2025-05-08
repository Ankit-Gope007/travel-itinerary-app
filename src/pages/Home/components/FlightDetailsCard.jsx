import React from 'react'
import flightImage from "../../../assets/images/FlightDetails.svg"

const FlightDetailsCard = () => {
  return (
    <div className='mt-8 flex justify-center  '>
        <img src={flightImage} alt="Flight Details" className='w-full mx-5' />
    </div>
  )
}

export default FlightDetailsCard