import React from "react";

function Numbers() {
  return (
    <section className="text-[#072140] px-[24px] ">
      <h2 className="text-[32px] ">TUM in numbers</h2>

<div className="gap-[1.5rem] grid grid-rows-3 mt-[2.5rem]  ">
<div className="text-white bg-[#3070B3]  p-[20px] text-center ">
        <div className="text-[80px] font-bold">50,000</div>
        <p className="text-[20px] font-bold mt-[8px]">Student</p>
      </div>

<div className="lg:grid gap-10 lg:grid-cols-2">
<div className="text-[#072140] bg-[#f7b11e] p-[20px] text-center ">
        <div className="text-[80px] font-bold">176</div>
        <p className="text-[20px] font-bold mt-[8px]">ERC Grants for cutting-edge research</p>
      </div>

      <div className="text-[#072140] bg-[#B55CA5] p-[20px] text-center">
        <div className="text-[80px] font-bold">18</div>
        <p className="text-[20px] font-bold mt-[8px]">Nobel laureates</p>
      </div>
</div>
    
</div>
     
    </section>
  );
}

export default Numbers;
