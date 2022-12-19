import React from "react";
import Button from "./Button";
import Ranking from "./Ranking";

function News() {
  return (
    <section className="mt-[48px]  lg:grid lg:grid-cols-2 px-[24px] text-[#072140] ">
      <div className=" flex flex-col">
        <h2 className="text-[32px]">News from TUM</h2>
        <p className="mt-[24px] text-[20px]">
          News , research results and events: everything that enthusiast people
          at our university.
        </p>
        <Button
          styles={"bg-[#3070B3] lg:text-center text-[#fff] mt-[1.5rem] w-[35%]"}
          children={"see all"}
        />
      </div>

<div className="lg:flex gap-4 ">
<Ranking styles={"w-[350px]"} />
<Ranking styles={"w-[350px]"} />
</div>


<Ranking styles={"lg:hidden block"} />
      <Ranking styles={"lg:hidden block"} />
    </section>
  );
}

export default News;
