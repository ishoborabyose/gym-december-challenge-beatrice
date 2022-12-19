import React from 'react'
import Image from 'next/image'
import play from '../public/vectors/play.svg'

function Video() {
  return (
    <section className=''>
 <section className='bg-video px[24px] w-full h-full bg-center   bg-no-repeat bg-cover '>
    
    <button className='p-[10px] bg-[#3070B3] absolute right-[1.5rem] bottom-[1.5rem]'>
        <Image  src={play} />
    </button>
   </section>
    </section>
  
  )
}

export default Video