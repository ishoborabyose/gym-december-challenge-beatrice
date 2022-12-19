import React from 'react'
import video from '../public/images/video.gif';
import Image from 'next/image';

function Hero() {
  return (
    <section>
    <div className='lg:relative  lg:block hidden'>
      <Image src={video} className=' w-full h-[700px]' alt='cover' />
      <div className='max-w-[104rem] mx-auto px-[24px] py-4 '>
        <div className='absolute text-white top-40'>
          <h1 className='text-5xl font-medium text-white'>
            TUM. The Entrepreneurial <br /> University
          </h1>
          <p className='text-lg mt-5'>Innovation through talent, excellence and responsibility</p>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Hero