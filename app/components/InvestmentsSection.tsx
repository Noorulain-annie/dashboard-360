import { ArrowRight } from "lucide-react";
import React from "react";

const InvestmentsSection: React.FC = () => {
  return (
    <div className="flex flex-col self-stretch relative min-h-[1130px] w-full items-stretch justify-center mt-[118px] px-[70px] py-44 max-md:max-w-full max-md:mt-10 max-md:px-5 max-md:py-[100px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/61d335b31c0444f1bce1eac9bbc4a3b2/f81234fa49b7ca662ae3a9dba0f3089d44f367ec8232076fa06835bf98d1cd7e?placeholderIfAbsent=true"
        className="absolute h-full w-full object-cover inset-0"
        alt="Background"
      />
      <div className="relative mb-[-35px] max-md:max-w-full max-md:mb-2.5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/61d335b31c0444f1bce1eac9bbc4a3b2/d14d29a76ee5c9b974455e07005b8b4ecff92bfd7a00442b61b8dfe40dc1866b?placeholderIfAbsent=true"
              className="aspect-[0.92] object-contain w-full grow max-md:max-w-full max-md:mt-10"
              alt="Investments illustration"
            />
          </div>
          <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="relative flex w-full flex-col text-[17px] text-white font-medium mt-[118px] max-md:max-w-full max-md:mt-10">
              <div className="text-[32px] font-normal">Investments</div>
              <div className="text-[50px] font-bold mt-2.5 max-md:max-w-full max-md:text-[40px]">
                our Digital Products on
                <br />
                <span className="text-[rgba(216,177,80,1)]">
                  Deposit or investments
                </span>
              </div>
              <div className="leading-[35px] tracking-[0.7px] self-stretch mt-[23px] max-md:max-w-full">
                Through our Digital Products on Deposit or investments, you can
                fulfill your different requirements as per your need through
                digital payment mechanism or virtual cards. Our main products
                are mentioned below. However, they could be customized as per
                your need in Shariah Compliance ways.
              </div>
              <div className="flex items-center gap-[15px] whitespace-nowrap tracking-[0.7px] leading-[35px] mt-[29px]">
                <div className="bg-[rgba(216,177,80,1)] self-stretch flex w-5 shrink-0 h-5 my-auto rounded-[50%]" />
                <div className="self-stretch my-auto">Current</div>
              </div>
              <div className="flex items-center gap-[15px] whitespace-nowrap tracking-[0.7px] leading-[35px] mt-[5px]">
                <div className="bg-[rgba(216,177,80,1)] self-stretch flex w-5 shrink-0 h-5 my-auto rounded-[50%]" />
                <div className="self-stretch my-auto">Saving</div>
              </div>
              <div className="flex items-center gap-[15px] tracking-[0.7px] leading-[35px] mt-[5px]">
                <div className="bg-[rgba(216,177,80,1)] self-stretch flex w-5 shrink-0 h-5 my-auto rounded-[50%]" />
                <div className="self-stretch my-auto">Fixed Deposit</div>
              </div>
              <div className="flex items-center gap-[15px] whitespace-nowrap tracking-[0.7px] leading-[35px] mt-[5px]">
                <div className="bg-[rgba(216,177,80,1)] self-stretch flex w-5 shrink-0 h-5 my-auto rounded-[50%]" />
                <div className="self-stretch my-auto">Sukuk</div>
              </div>
              <button className="bg-[rgba(216,177,80,1)] flex min-h-[60px] items-center gap-1.5 text-xl font-semibold justify-center mt-[70px] px-[38px] py-[18px] rounded-[12007px] max-md:mt-10 max-md:px-5">
                <div className="self-stretch my-auto">Read More</div>
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentsSection;
