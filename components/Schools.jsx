import React from 'react'
import Image from 'next/image'
import pic from "../public/images/csm_20220209_Neubau_EI_AH_672635_9c7fe2d24e.jpeg"
import Button from './Button'
function Schools() {
  return (
    <section className="px-[24px] lg:flex mt-[8rem]  ">
        <Image src={pic} />
        <div className={` lg:relative lg:-left-40 lg:top-10 lg:p-4 lg:w-[1500px] lg:h-[350px] p-[1.5rem] bg-[#8F81EA]`}>
            <h3 className='text-[1.75rem] text-[#072140] leading-[1.2] font-bold '>
            Schools and Research Centers
            </h3>

            <p className={`text-[16px] mt-[1.25rem] tracking-[0.0125rem] text-[#072140 `}>
            They form the academic foundation of TUM: Our schools and departments, connected at disciplinary interfaces by integrative research institutes to create an organization that drives innovation. 
            </p>

            <Button styles={"mt-[32px] bg-[#3070b3] text-white w-[50%]"} children={"Organization"} />
    </div>
    </section>
  )
}

export default Schools