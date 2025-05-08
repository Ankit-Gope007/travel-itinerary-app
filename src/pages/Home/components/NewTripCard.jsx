import React from 'react'
import tokyoImage from "../../../assets/images/tokyo.svg"

const NewTripCard = () => {
  return (
    <div className='w-full flex justify-center mt-5 '>
        <img src={tokyoImage} alt="Tokyo image" className='w-full mx-5'/>
    </div>
  )
}

export default NewTripCard