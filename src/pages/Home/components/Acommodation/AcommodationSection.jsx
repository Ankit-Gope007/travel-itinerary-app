import React from 'react'
import { useState } from 'react'
import AcommodationCard from './AcommodationCard'
import acommodationImage from "../../../../assets/images/image.svg"
import accomodationImage2 from "../../../../assets/images/image2.svg"
import useUserStore from '../../../../store/User.Store'

const AcommodationSection = () => {
    const [images, setImages] = useState()
    const {theme} = useUserStore()

    return (
        <div className='overflow-x-auto scrollbar-hide'>
            <div className="flex ">
                <AcommodationCard theme={theme} image={acommodationImage} heading={"Shinagawa Prince Hotel"} checkIn={"26.01.2025, 11:15 pm"} checkOut={"28.01.2025, 11:15 am"} confirm={true} />


                <AcommodationCard theme={theme} image={accomodationImage2}
                    heading={"Mercure Tokyo Hotel"} checkIn={"28.01.2025, 6:00 pm"} checkOut={"30.01.2025, 11:15 am"} confirm={false} />


                <AcommodationCard theme={theme} image={acommodationImage} heading={"Shinagawa Prince Hotel"} checkIn={"26.01.2025, 11:15 pm"} checkOut={"28.01.2025, 11:15 am"} confirm={true} />


                <AcommodationCard theme={theme} image={accomodationImage2}
                    heading={"Mercure Tokyo Hotel"} checkIn={"28.01.2025, 6:00 pm"} checkOut={"30.01.2025, 11:15 am"} confirm={false} />


            </div>

        </div>
    )
}

export default AcommodationSection