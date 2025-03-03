import React from "react";
import ServiceCard from "./ServiceCard";
import { ArrowRight } from "lucide-react";

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/61d335b31c0444f1bce1eac9bbc4a3b2/8d996c5b18b2aeae957b3290940275785f002cda04d68d562df1813a02c78185?placeholderIfAbsent=true",
      title: "Digital Financing",
      description:
        "This term refers to the impact of new technologies on the financial services industry. It includes a variety of products, applications that have transformed the traditional way",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/61d335b31c0444f1bce1eac9bbc4a3b2/8149c7191774b9c645e482943176069295462d3b8230742ce871d7d42076a1b8?placeholderIfAbsent=true",
      title: "Digital Investment",
      description:
        "This is a digital solution that allows customers to save and invest money in stocks, shares, and investment funds through an automated platform",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/61d335b31c0444f1bce1eac9bbc4a3b2/13e938a739f3443f64b5c7b9bc1b96dc50b8e6f925ceb9acdf759af7e342373a?placeholderIfAbsent=true",
      title: "Digital SME Commercial",
      description:
        "This product caters to the SME sector and provides long-term financing for infrastructure development and industrial projects.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/61d335b31c0444f1bce1eac9bbc4a3b2/4d383648099b8d28adea80f0a935bac89790757b0b9daf8ca77483b215dd5f56?placeholderIfAbsent=true",
      title: "Low Cost Housing Finance",
      description:
        "This product provides digital solutions for low-cost housing finance schemes. This creates employment and boosts demand in industries.",
    },
  ];

  return (
    <section className="flex flex-col items-center px-4 md:px-0">
      <div className="text-white text-[32px] font-normal text-center mt-[108px] max-md:mt-10">
        Our Service
      </div>

      <div className="flex flex-col items-center mt-2.5 w-full max-w-[90%] md:max-w-full">
        <div className="text-[rgba(216,177,80,1)] text-4xl md:text-[45px] font-bold text-center">
          <span className="text-white">Our</span> cutting edge solutions{" "}
          <span className="text-white">for</span>
        </div>
        <div className="text-white text-3xl md:text-[50px] font-normal text-center mt-2">
          Virtual Islamic & Digital Banking
        </div>
      </div>

      <div className="w-full max-w-[1558px] mt-[62px] max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          {services.map((service, index) => (
            <div key={index} className="w-3/12 max-md:w-full max-md:ml-0 flex">
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>
      </div>


      <button className="bg-[rgba(216,177,80,1)] flex min-h-[60px] items-center gap-1.5 text-lg md:text-xl text-white font-semibold justify-center mt-[62px] px-6 md:px-[38px] py-[18px] rounded-[12007px] max-md:mt-10">
        <div className="self-stretch my-auto">All Services</div>
        <ArrowRight />
      </button>
    </section>
  );
};

export default ServicesSection;
