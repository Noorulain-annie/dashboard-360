import React from "react";
import BlogCard from "./BlogCard";
import { ArrowRight } from "lucide-react";

const BlogSection: React.FC = () => {
  const blogs = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/61d335b31c0444f1bce1eac9bbc4a3b2/b1caf54d6f60dd71116201fda8e422e68b0468fb79027975a2f4968903aada78?placeholderIfAbsent=true",
      title: "Lorem ipsum dolor sit amet",
      excerpt:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt...",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/61d335b31c0444f1bce1eac9bbc4a3b2/bc4930e86a4200f384ce938ae5d66985447f3e18a65d22aa8d9c76f16724f318?placeholderIfAbsent=true",
      title: "Lorem ipsum dolor sit amet",
      excerpt:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt...",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/61d335b31c0444f1bce1eac9bbc4a3b2/e2e24b2b1a61020330e7d28a9a27aa2b44152ce8b818570a6370c39a721e7fae?placeholderIfAbsent=true",
      title: "Lorem ipsum dolor sit amet",
      excerpt:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt...",
    },
  ];

  return (
    <div className="flex w-full max-w-[1529px] mx-auto flex-col mt-[118px] max-md:w-[90%] max-md:mt-10 max-sm:w-[92%]">
      <div className="text-white text-[32px] font-normal">Blogs</div>

      <div className="text-[rgba(216,177,80,1)] text-[54px] font-bold mt-2.5 max-md:max-w-full max-md:text-[40px]">
        <span className="text-white">latest News </span>
        Managing Money Better
      </div>
      <div className="text-white text-[21px] font-medium leading-9 mt-3.5 max-md:max-w-full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </div>
      <div className="self-stretch mt-[42px] max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          {blogs.map((blog, index) => (
            <div key={index} className="w-[33%] max-md:w-full max-md:ml-0">
              <BlogCard
                image={blog.image}
                title={blog.title}
                excerpt={blog.excerpt}
              />
            </div>
          ))}
        </div>
      </div>
      <button className="bg-[rgba(216,177,80,1)] self-center flex min-h-[67px] items-center gap-[7px] text-xl text-white font-semibold justify-center mt-[66px] px-[43px] py-5 rounded-[13415px] max-md:mt-10 max-md:px-5">
        <div className="self-stretch my-auto">Read All Blogs</div>
        <ArrowRight />
      </button>
    </div>
  );
};

export default BlogSection;

// import React from "react";
// import BlogCard from "./BlogCard";
// import { IconRight } from "react-day-picker";

// const BlogSection: React.FC = () => {
//   const blogs = [
//     {
//       image:
//         "https://cdn.builder.io/api/v1/image/assets/61d335b31c0444f1bce1eac9bbc4a3b2/b1caf54d6f60dd71116201fda8e422e68b0468fb79027975a2f4968903aada78?placeholderIfAbsent=true",
//       title: "Lorem ipsum dolor sit amet",
//       excerpt:
//         "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt...",
//     },
//     {
//       image:
//         "https://cdn.builder.io/api/v1/image/assets/61d335b31c0444f1bce1eac9bbc4a3b2/bc4930e86a4200f384ce938ae5d66985447f3e18a65d22aa8d9c76f16724f318?placeholderIfAbsent=true",
//       title: "Lorem ipsum dolor sit amet",
//       excerpt:
//         "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt...",
//     },
//     {
//       image:
//         "https://cdn.builder.io/api/v1/image/assets/61d335b31c0444f1bce1eac9bbc4a3b2/e2e24b2b1a61020330e7d28a9a27aa2b44152ce8b818570a6370c39a721e7fae?placeholderIfAbsent=true",
//       title: "Lorem ipsum dolor sit amet",
//       excerpt:
//         "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt...",
//     },
//   ];

//   return (
//     <div className="flex w-full max-w-[1529px] flex-col mt-[118px] max-md:max-w-full max-md:mt-10">
//       <div className="text-white text-[32px] font-normal">Blogs</div>

//       <div className="text-[rgba(216,177,80,1)] text-[54px] font-bold mt-2.5 max-md:max-w-full max-md:text-[40px]">
//         <span className="text-white">latest News </span>
//         Managing Money Better
//       </div>
//       <div className="text-white text-[21px] font-medium leading-9 mt-3.5 max-md:max-w-full">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//         tempor incididunt.
//       </div>
//       <div className="self-stretch mt-[42px] max-md:max-w-full max-md:mt-10">
//         <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
//           {blogs.map((blog, index) => (
//             <div key={index} className="w-[33%] max-md:w-full max-md:ml-0">
//               <BlogCard
//                 image={blog.image}
//                 title={blog.title}
//                 excerpt={blog.excerpt}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//       <button className="bg-[rgba(216,177,80,1)] self-center flex min-h-[67px] items-center gap-[7px] text-xl text-white font-semibold justify-center mt-[66px] px-[43px] py-5 rounded-[13415px] max-md:mt-10 max-md:px-5">
//         <div className="self-stretch my-auto">Read All Blogs</div>
//         <IconRight />
//       </button>
//     </div>
//   );
// };

// export default BlogSection;
