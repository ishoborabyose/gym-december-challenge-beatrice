import React from 'react'
import Button from './Button'
function Giving() {
  return (
 <section className='px-[24px] my-[6rem] '>
<div className='px-[0.75rem] py-[2rem] bg-[#EFEDFC]  flex flex-col items-center justify-center align-middle'>
<h3 className='text-[28px] text-[#072140] text-center font-bold'>
    Giving
</h3>

<p className='mt-[20px] text-[16px] text-[#072140] text-center'>
Support research, innovation and teaching at one of the best technical universities in Europe. Show social responsibility and help nurture talent.
</p>
<Button
            styles={"mt-[32px] text-white lg:w-[50%] lg:text-center bg-[#3070B3] w-[80%]"}
            children={"Join the TUM Community"}
          />
</div>
 </section>
  )
}

export default Giving