import React from "react";
import Button from "./Button";
import Image from 'next/image';
import pic from "../public/images/csm_20220209_Neubau_EI_AH_672635_9c7fe2d24e.jpeg"

function Discover() {
  return (
    <section className="px-[24px] mt-[44px]">
      <div className="lg:hidden block ">
        <div className="flex gap-4 flex-col">
        <p className="text-[16px] font-bold leading-[1.625]">customized navigation</p>
        <h2 className="text-[32px] leading-[1.2] font-bold mt-[2px]">Discover what TUM has to offer</h2>
        </div>
       
        <div className="w-[100%] mt-[40px]    p-[1.rem] border-[#FED702] box-border border-[20px] ">
          <div className="bg-white  gap-[20px]  flex flex-col  border border-[#CDD4DB] solid p-[0.5rem]">
            <p className="text-[#072140] px-[20px] py-[12px] text-[14px]">
              For:
            </p>

            <h3 className=" text-[rgb(7,33,64)] text-[16px]  px-[20px] py-[12px] font-bold bg-[#e8ecef]  ">
              Prospective Students
            </h3>

            <h3 className=" text-[#3070B3] text-[16px]  px-[20px] py-[12px] font-bold">
              Founders
            </h3>

            <h3 className="text-[#3070B3] text-[16px]  px-[20px]  font-bold  ">
              Employees
            </h3>

            <div className="mt-[20px] pt-[8px] border-t border-[#072140]">
              <h3 className=" font-bold  text-[#3070B3]  px-[20px] py-[12px] ">
                Show all
              </h3>
            </div>
          </div>
        </div>

        <div className="mt-[32px]  ">
          <h3 className="font-bold leading-[1.2] text-[42px] mt-[2px]">
            Prospective Students
          </h3>
          <p className="text-[20px] mt-[14px]">
            Learn to bring ideas to life, discover new possibilities, work in
            teams and build networks.
          </p>
        </div>

        <Button
          styles={"text-[#3070B3] lg:hidden block mt-[32px] w-[50%]"}
          children={"Learn more"}
        />
      </div>



      <div className=' hidden lg:block mt-20'>
      <div className="max-w-[104rem] mx-auto px-[24px] py-4">
        <div className=''>
          <h2 className='font-semibold '>Customized navigation</h2>
          <h1 className='text-4xl font-semibold my-7'>Discover what TUM has to offer</h1>
        </div>
        <div className='flex justify-end items-center gap-20'>
          <div className='relative'>
            <div className='absolute -left-40 top-10 w-64 h-72 px-2 py-4  bg-white border-slate-400 border'>
              <p className='px-4'>For:</p>
              <ul className='mt-5 space-y-1'>
                <li className='bg-slate-100 px-4 py-3 cursor-pointer font-medium'>Prospective Students</li>
                <li className='hover:bg-slate-100 px-4 py-3 cursor-pointer font-medium text-[#14519A]'>Founders</li>
                <li className='hover:bg-slate-100 px-4 py-3 cursor-pointer font-medium text-[#14519A]'>Employees</li>
                <hr />
                <li className='hover:bg-slate-100 px-4 py-3 cursor-pointer font-medium text-[#14519A]'>Show all</li>
              </ul>
            </div>
            <div className='w-[600px] h-[400px] bg-yellow-400 flex justify-center items-center'>
              <div className='relative'>
                <Image src={pic} className=' w-96' alt='' />
                <div className='absolute bottom-0 left-0 h-[80%] w-[40px] bg-yellow-400'></div>
                <div className='absolute bottom-0 left-20 h-[80%] w-[40px] bg-yellow-400'></div>
                <div className='absolute top-0 left-40 h-[80%] w-[40px] bg-yellow-400'></div>
                <div className='absolute bottom-0 left-60 h-[80%] w-[40px] bg-yellow-400'></div>
                <div className='absolute bottom-0 left-80 h-[80%] w-[40px] bg-yellow-400'></div>
              </div>
            </div>
          </div>
          <div className='w-[400px]'>
            <h1 className='text-4xl font-semibold my-7'>Prospective Students</h1>
            <p className='text-xl'>
              Learn to bring ideas to life, discover new possibilities, work in teams and build networks.
            </p>
            <Button
          styles={"text-[#3070B3] hidden lg:block mt-[32px] w-[50%]"}
          children={"Learn more"}
        />
           
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Discover;
