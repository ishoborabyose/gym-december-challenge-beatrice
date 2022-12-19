import React from 'react'
import Button from './Button'

function Card({ styles}) {
  return (
    <section className={` p-[1.5rem] bg-[#3070B3]  ${styles}`}>
            <h3 className='text-[1.75rem] text-white leading-[1.2] font-bold '>
            What drives us: President Thomas F. Hofmann about TUM
            </h3>

            <p className={`text-[16px] mt-[1.25rem] tracking-[0.0125rem] text-white `}>
            Research and innovations for society, innovative teaching and continuing education: This is how we shape a sustainable future, relying on the intelligence of the entire university and working closely with global partners to do so.
            </p>

            <Button styles={"text-[#3070B3] mt-[32px] bg-white w-[50%]"} children={"Read more"} />
    </section>
  )
}

export default Card