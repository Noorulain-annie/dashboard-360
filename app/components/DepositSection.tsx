import React from "react";
import DepositContent from "./DepositContent";
import BackgroundShapes from "./BackgroundShapes";


function DepositSection() {
  return (
    <section className="overflow-hidden relative mt-20 md:mt-36 w-full max-w-[1529px] mx-auto bg-[rgba(48,33,72,1)] h-auto md:h-[461px] rounded-2xl md:rounded-[61.6px] max-md:w-[90%] max-sm:w-[92%]">
      <BackgroundShapes />
      <DepositContent />
    </section>
  );
}

export default DepositSection;



