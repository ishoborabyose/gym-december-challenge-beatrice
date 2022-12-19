import React from 'react'
import Image from 'next/image'
import arrow from "../public/vectors/upthan.svg"

import arrowLeft from "../public/vectors/arrow.svg"
function Degree() {
  return (
   <section className='px-[24px] mt-[24px]  mb-[3rem]'>
    <div className='border-b solid border-[#3070b3]'>
    <div className=' bg-[#e8ecef] py-[20px] px-[20px]'>
        <div className='flex justify-between'> 
            <input className='font-bold text-[16px] bg-[#e8ecef] w-[90%] ' placeholder='Select degree program or enter keyword' />
                

<Image className='w-[24px]' src={arrow} />
            
        </div>
    </div>

    </div>
   
   <div className='font-medium
mt-[20px] text-[16px] text-[#3070B3] flex gap-2 float-right'>
    <p>Degree programs</p>
<Image src={arrowLeft} />
   </div>
   </section>
  )
}

export default Degree