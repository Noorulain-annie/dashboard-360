import React from "react";
import BackgroundShapes from "./BackgroundShapes";
import NewsletterContent from "./NewsletterContent";

function NewsletterSection() {
  return (
    <section className="overflow-hidden relative mt-36 mx-auto w-[1529px] bg-[rgba(48,33,72,1)] md:h-[300px] rounded-[61.6px] max-md:w-[90%] max-md:py-16 max-md:mt-20 max-md:h-auto max-sm:w-[92%] max-sm:py-10 max-sm:mt-10 max-sm:rounded-[30px]">
      <BackgroundShapes />
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <NewsletterContent />
      </div>
    </section>
  );
}

export default NewsletterSection;

