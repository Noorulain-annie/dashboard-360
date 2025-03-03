import { ArrowRight } from "lucide-react";
import React from "react";

interface BlogCardProps {
  image: string;
  category?: string;
  title: string;
  excerpt: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  category = "Tech",
  title,
  excerpt,
}) => {
  return (
    <div className="flex flex-col relative min-h-[470px] w-full items-stretch text-white py-8 rounded-2xl max-md:max-w-full max-md:mt-[29px]">
      <img
        src={image}
        className="absolute h-full w-full object-cover inset-0 rounded-2xl"
        alt={title}
      />
      {/* Updated category badge */}
      <div className="relative bg-[rgba(216,177,80,1)] text-2xl font-medium whitespace-nowrap px-4 py-[9px] rounded-[13415px] max-md:px-5 self-end mr-4 mt-4">
        {category}
      </div>
      <div className="relative flex w-full flex-col font-semibold mt-56 px-[35px] max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="text-[27px]">{title}</div>
        <div className="text-[19px] font-medium leading-7 self-stretch mt-1.5">
          {excerpt}
        </div>
        <div className="flex justify-center items-center gap-[7px] text-2xl mt-[13px]">
          <div className="grow">
            Know More
          </div>
          <ArrowRight />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
