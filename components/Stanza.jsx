import React from "react";

function Stanza({  styles }) {
  return (
    <section className={`gap-[0.5rem] text-[#072140] mt-[12px] ${styles}`}>
      <p className="text-[16px]  font-bold">Witchcrafts wotche rankings</p>
      <span className="text-[20px] text-[#072140]  font-bold">
        {" "}
        Germany's strongest university in business sciences
      </span>

      <p className="mt-[12px]  text-[14px]">
        TUM has retained its ranking as Germany’s strongest research university
        in business sciences. The latest issue of the...
      </p>

<div className="flex gap-[1.5rem] mt-[12px]  flex-row flex-wrap justify-between items-stretch">
<div className="font-[13px] pr-[12px]"> 
    12/16/2022
    </div>
    <div className="text-[13px] px-[12px]">Reading time 2 min.</div>
</div>

    </section>
  );
}

export default Stanza;
