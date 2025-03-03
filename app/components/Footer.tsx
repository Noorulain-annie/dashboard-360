import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="bg-[rgba(31,31,31,1)] w-full mt-24 pt-[106px] pb-[33px] px-20 max-md:px-5">
      <div className="max-w-[1370px] mx-auto">
        {/* Grid container for footer sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 xl:gap-20">
          {/* Logo Section */}
          <div className="mb-8 lg:mb-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/61d335b31c0444f1bce1eac9bbc4a3b2/cad69000b3770d5f930efb82b7cbb0c31013137cbf741af9973ebee53e3f5dea?placeholderIfAbsent=true"
              className="w-[88px]"
              alt="Logo"
            />
            <p className="text-white text-lg font-medium leading-[27px] tracking-[0.72px] mt-6">
              Virtual Islamic/ Digital Banking and payment platforms to asset
              management
            </p>
            <div className="flex gap-4 mt-6">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/61d335b31c0444f1bce1eac9bbc4a3b2/b80f3dbb364e420e2e12ffc7afe71cd89599da079f2fc0a56a3c8d0a2197ea69?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-[34px] shrink-0"
                alt="Social media"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/61d335b31c0444f1bce1eac9bbc4a3b2/e16ae8713940ceb129023124d267b9945a620f7f97d57c9c42048d0ae1716c7a?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-[34px] shrink-0"
                alt="Social media"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/61d335b31c0444f1bce1eac9bbc4a3b2/4088fcb56e474b4629704b12e8d818c8a1ba479fa365715a4b5106a98b1e184a?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-[34px] shrink-0"
                alt="Social media"
              />
            </div>
          </div>

          {/* Products Section */}
          <div className="text-white">
            <h3 className="text-xl font-semibold mb-6">Products</h3>
            <ul className="space-y-4">
              {["Virtual Islamic Bank", "Shariah Marketplace", "Islamic Edtech", "Product Advisory"].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="text-white">
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {["Services", "Blogs", "Knowledge Center", "Clients", "About Us"].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="text-white">
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Phone:</p>
                <p className="font-medium">021-35123213</p>
              </div>
              <div>
                <p className="font-semibold">Email:</p>
                <p className="font-medium">info@greensfin.com</p>
              </div>
              <div>
                <p className="font-semibold">Address:</p>
                <p className="font-medium">
                  4C 21st Comm. St, D.H.A Phase II Extension Phase 2 Ext Defence
                  Housing Authority, Karachi,
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white mt-16 mb-12" />

        {/* Copyright */}
        <div className="text-white text-center text-[17px] font-medium">
          Copyright © 2023 Sheikh. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;