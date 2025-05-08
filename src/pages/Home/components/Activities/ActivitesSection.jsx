import React from 'react'
import ActivitiesCard from './ActivitiesCard'
import image1 from "../../../../assets/images/ActivityImage1.svg"
import image2 from "../../../../assets/images/ActivityImage2.png"
import image3 from "../../../../assets/images/ActivityImage3.png"

const ActivitesSection = () => {
  return (
    <div className=' mt-5 mx-3'>
        <ActivitiesCard  image={image1} heading={"Senso-ji Temple & Nakamise Shopping Street Senso-ji"} timing={"8:15 am Morning"} duration={"3 hours"} pickUp={"From Hotel"} />

        <ActivitiesCard image={image2} heading={"Tokyo Sky Tree"} timing={"1:00 pm Afteroon"} duration={"3 hours"} pickUp={"From Nakamise Street"} />

        <ActivitiesCard image={image3} heading={"Kimono Wearing"} timing={"Anytime before 8:00pm "} duration={"1-2 hours"} pickUp={"From Hotel"} />
        
        <ActivitiesCard  image={image1} heading={"Senso-ji Temple & Nakamise Shopping Street Senso-ji"} timing={"8:15 am Morning"} duration={"3 hours"} pickUp={"From Hotel"} />

        <ActivitiesCard image={image2} heading={"Tokyo Sky Tree"} timing={"1:00 pm Afteroon"} duration={"3 hours"} pickUp={"From Nakamise Street"} />

        <ActivitiesCard image={image3} heading={"Kimono Wearing"} timing={"Anytime before 8:00pm "} duration={"1-2 hours"} pickUp={"From Hotel"} />

    </div>
  )
}

export default ActivitesSection