import React from "react";

import Ranking from "./Ranking";

function Grid() {
  return (
    <section className="mt-[48px] hidden lg:flex gap-4  mr-[100px] justify-end  px-[24px]   ">
  


<Ranking styles={"w-[350px]"}/>
      <Ranking styles={"w-[350px]"} />
    
    </section>
  );
}

export default Grid;
