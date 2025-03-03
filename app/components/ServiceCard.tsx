

import React from "react";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-[rgba(49,49,49,1)] shadow-[0px_8px_20px_rgba(0,0,0,0.1)] flex flex-col items-center text-white text-center w-full px-4 md:px-10 py-8 md:py-[52px] rounded-[15px] max-md:mt-[30px] flex-1">
      <img
        src={icon}
        className="aspect-[1] object-contain w-12 md:w-[58px]"
        alt={title}
      />
      <div className="text-lg md:text-[19px] font-bold mt-3">{title}</div>
      <div className="text-base md:text-lg font-medium leading-relaxed md:leading-[31px] self-stretch mt-4 md:mt-[17px]">
        {description}
      </div>
    </div>
  );
};
export default ServiceCard;