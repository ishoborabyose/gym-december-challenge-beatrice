import React from "react";
import Button from "./Button";
import Image from "next/image";
import pic from "../public/images/csm_20211111_Presidential_student_Lunch_Garching_AE_Z_-1004_64e4d1584d.jpeg";
import pic1 from "../public/images/csm_20211111_Presidential_student_Lunch_Garching_AE_Z_-1004_64e4d1584d.jpeg";
import pic2 from "../public/images/csm_20211111_Presidential_student_Lunch_Garching_AE_Z_-1004_64e4d1584d.jpeg";

function Connected() {
  return (
    <section className="lg:grid lg:grid-cols-3">
      <div className="px-[24px] mt-[6rem] lg:mt-[4rem]   ">
        <Image src={pic} />
        <div className={` pt-[1.2rem] bg-white`}>
          <h3 className="text-[1.75rem] text-[#072140] leading-[1.2] font-bold ">
            Stay connected
          </h3>

          <p
            className={`text-[16px] mt-[1.25rem] tracking-[0.0125rem] text-[#072140 `}
          >
            Benefit from our worldwide network, make contacts and stay connected
            with your Alma Mater!
          </p>

          <Button
            styles={"mt-[32px] text-[#3070b3]  w-[80%]"}
            children={"Join the TUM Community"}
          />
        </div>
      </div>

      <div className="px-[24px] mt-[4rem]  ">
        <Image src={pic1} />
        <div className={` pt-[1.2rem] bg-white`}>
          <h3 className="text-[1.75rem] text-[#072140] leading-[1.2] font-bold ">
            TUMint Relocation Service
          </h3>

          <p
            className={`text-[16px] mt-[1.25rem] tracking-[0.0125rem] text-[#072140 `}
          >
            All-inclusive onboarding package for international students assists
            with accommodation and much more.
          </p>

          <Button
            styles={"mt-[32px] text-[#3070b3] w-[50%] text-sm"}
            children={"See our services"}
          />
        </div>
      </div>

      <div className="px-[24px] mt-[4rem]  ">
        <Image src={pic2} />
        <div className={` pt-[1.2rem] bg-white`}>
          <h3 className="text-[1.75rem] text-[#072140] leading-[1.2] font-bold ">
            Discover the TUMshop
          </h3>

          <p
            className={`text-[16px] mt-[1.25rem] tracking-[0.0125rem] text-[#072140 `}
          >
            Merchandising items, conference materials and other products in the
            corporate design can be found online and on site.
          </p>

          <Button
            styles={"mt-[32px] text-[#3070b3] w-[50%]  text-sm"}
            children={"Shop online"}
          />
        </div>
      </div>
    </section>
  );
}

export default Connected;
