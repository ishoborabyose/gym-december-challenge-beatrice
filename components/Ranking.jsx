import React from 'react'
import Image from 'next/image'
import img from "../public/images/csm_20220803-01_035_aa40463f97.jpeg";

import Stanza from './Stanza';

function Ranking({styles}) {
  return (
    <section className={`mt-[24px]  ${styles}`}>
  <Image className='' src={img}/>

  <div className='py-[0.125rem] px-[0.5rem] relative left-0 bottom-0 font-medium cursor-pointer bg-[#e8ecef] text-sm -top-7 lg:top-[-24px]  w-[40%]'>
    TUM in rankings
  </div>

  <Stanza styles={"mt-[24px]"} />
    </section>
  )
}

export default Ranking