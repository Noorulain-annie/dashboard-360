
import { ArrowRight } from "lucide-react";
import React from "react";

const AboutSection: React.FC = () => {
  return (
    <div className="w-full max-w-[1529px] mx-auto mt-[156px] mb-10 max-md:w-[90%] max-md:mt-10 max-sm:w-[92%]">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        {/* Left Column */}
        <div className="w-[44%] max-md:w-full max-md:ml-0">
          <div className="flex w-full flex-col self-stretch text-white my-auto max-md:max-w-full max-md:mt-10">
            <div className="text-[33px] font-normal">About Us</div>
            <div className="text-[50px] font-bold self-stretch mt-2.5 max-md:max-w-full max-md:text-[40px] max-md:mr-[9px]">
              We promote emerging{" "}
              <span className="text-[rgba(216,177,80,1)]">
                digital experiences
              </span>
              .
            </div>
            <div className="text-lg font-medium leading-9 self-stretch mt-[19px] max-md:max-w-full">
              We are dedicated to revolutionizing the way you manage your
              finances by seamlessly integrating cutting-edge technology with
              the principles of Islamic finance
            </div>
            <button className="bg-[rgba(216,177,80,1)] flex min-h-[67px] w-[231px] max-w-full items-center gap-[7px] text-xl font-semibold justify-center mt-[83px] px-[38px] py-5 rounded-[13391px] max-md:mt-10 max-md:px-5 max-sm:mb-10">
              <div className="self-stretch flex items-center gap-2.5 justify-center my-auto">
                <div className="self-stretch my-auto">Know More</div>
                <ArrowRight />
              </div>
            </button>
          </div>
        </div>

        {/* Right Column with Purple Container */}
        <div className="w-[56%] ml-5 max-md:w-full max-md:ml-0">
          <div className="bg-[rgba(48,33,72,1)] relative flex grow flex-col w-full pt-[121px] px-20 rounded-[67px_0px_67px_67px] max-md:max-w-full max-md:mt-10 max-md:pt-[100px] max-sm:px-10">
            {/* Centered Logo */}
            <img
              src="https://cdn.builder.io/api/v1/image/assets/61d335b31c0444f1bce1eac9bbc4a3b2/956429752a64508534d3aef81491d0ed1adaf512ff9af662af0de2093ae0fb1d?placeholderIfAbsent=true"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-[200px] h-auto"
              alt="Centered logo"
            />

            {/* About Us Illustration */}
            <img
              src="https://cdn.builder.io/api/v1/image/assets/61d335b31c0444f1bce1eac9bbc4a3b2/e0001ad7998b1c66c121936dc8c3a2c0df0b72725d0170148d29c5f54a19a067?placeholderIfAbsent=true"
              className="aspect-[1.22] object-contain w-[607px] z-10 max-w-full"
              alt="About us illustration"
            />
          </div>
        </div>
      </div>

      {/* Collaborative Partners Section */}
      <div className="flex justify-center mt-[103px] max-md:mt-10">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/61d335b31c0444f1bce1eac9bbc4a3b2/be7228694c60fab89d29db3a039ccae1c1b6ab4610982748f455dad651bbe0f6?placeholderIfAbsent=true"
          className="aspect-[18.52] object-contain w-[1012px] max-w-full"
          alt="collaborative partners"
        />
      </div>
    </div>
  );
};

export default AboutSection;