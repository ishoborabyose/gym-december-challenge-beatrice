import React from 'react'
import Button from './Button'
import Image from 'next/image'
import pic from "../public/images/csm_20211111_Presidential_student_Lunch_Garching_AE_Z_-1004_64e4d1584d.jpeg"
import pic1 from "../public/images/csm_20221117_Laura_Fabbietti_AE_-352_8b0f58d99e.jpeg"

function Podcast() {
  return (
   <section className='lg:grid lg:grid-cols-2'>
    <div className="px-[24px] lg:mt-[4rem] mt-[6rem]  ">
        <Image src={pic} />
        <div className={` pt-[1.2rem] bg-white`}>
            <h3 className='text-[1.75rem] text-[#072140] leading-[1.2] font-bold '>
            We are TUM – the podcast of our university
            </h3>

            <p className={`text-[16px] mt-[1.25rem] tracking-[0.0125rem] text-[#072140 `}>
            In our podcast series, we regularly talk to the people who make up our university: From top researchers, students and faculty to the "hidden champions" behind the scenes. 
            </p>

            <Button styles={"mt-[32px] text-[#3070b3]  w-[50%]"} children={"All episodes"} />
    </div>
    </div>

    <div className="px-[24px] mt-[4rem]  ">
        <Image src={pic1} />
        <div className={` pt-[1.2rem] bg-white`}>
            <h3 className='text-[1.75rem] text-[#072140] leading-[1.2] font-bold '>
            Lifelong learning
            </h3>

            <p className={`text-[16px] mt-[1.25rem] tracking-[0.0125rem] text-[#072140 `}>
            We offer continuing education opportunities accompanying you over your whole career.

            </p>

            <Button styles={"mt-[32px] text-[#3070b3]  text-sm"} children={"TUM Institute for LifeLong Learning"} />
    </div>
    </div>
   </section>
  )
}

export default Podcast