import React from 'react'
import Image from 'next/image'
import pic from "../public/images/csm_20220209_Neubau_EI_AH_672635_9c7fe2d24e.jpeg"
import Button from './Button'
function Alumni() {
  return (
    <section className="px-[24px] lg:flex mt-[8rem]  ">
        <Image src={pic} alt='pic' />
        <div className={`p-[1.5rem]  lg:relative lg:-left-40 lg:top-10 lg:p-4 lg:w-[1500px] lg:h-[350px]  bg-[#EA7237]`}>
            <h3 className='text-[1.75rem] text-[#072140] leading-[1.2] font-bold '>
            "Here I have met a lot of people who are breaking new ground"
            </h3>

            <p className={`text-[16px] mt-[1.25rem] tracking-[0.0125rem] text-[#072140 `}>
            Philip Häusser, alumnus 
            </p>

            <Button styles={"mt-[32px] bg-[#3070b3] text-white w-[80%]"} children={"Read the alumni story"} />
    </div>
    </section>
  )
}

export default Alumni