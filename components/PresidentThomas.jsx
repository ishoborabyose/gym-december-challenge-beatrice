import React from 'react'
import Image from 'next/image'
import pic from "../public/images/csm_20211111_Presidential_student_Lunch_Garching_AE_Z_-1004_64e4d1584d.jpeg"
import Card from './Card'
function PresidentThomas() {
  return (
    <section className="px-[24px] lg:flex lg:flex-row   mt-[8rem]  mb-[7rem] ">
        <Image  src={pic} />
        <Card styles={"lg:relative lg:-left-40 lg:top-10 lg:p-4 lg:w-[1000px] lg:h-[250px]"} />
    </section>
  )
}

export default PresidentThomas