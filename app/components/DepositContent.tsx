import React from "react";
import CtaButton from "./CtaButton";

// DepositContent.tsx
function DepositContent() {
    return (
        <div className="relative pt-12 md:pt-28 mx-auto my-0 mb-5 text-center max-w-[1134px] z-[1] px-4">
            <h1 className="mb-4 md:mb-5 text-3xl md:text-4xl lg:text-5xl font-semibold">
                <span className="text-white">Digital Products On </span>
                <span className="text-[rgba(216,177,80,1)] block md:inline">Deposit Or Investments</span>
            </h1>

            <p className="mx-auto mb-8 md:mb-12 text-sm md:text-base lg:text-lg leading-6 md:leading-7 text-white max-w-[794px]">
                Work with Greensfin, more than a fintech company, currently on a mission
                to transform the global business infrastructure.
            </p>

            <div className="flex justify-center">
                <CtaButton className="w-full md:w-auto" />
            </div>
        </div>
    );
}
export default DepositContent;