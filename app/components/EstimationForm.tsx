"use client"
import { ArrowRight } from "lucide-react";
import React, { useState } from "react";

const EstimationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
    });
  };

  return (
    <div className="flex flex-col items-center bg-[rgba(68,68,68,1)] mt-7 rounded-lg shadow-lg px-4 mx-4 md:mx-0">
      <div className="text-[rgba(216,177,80,1)] text-[25px] font-bold self-center mt-[30px] max-md:max-w-full max-md:mt-10 text-center">
        GET YOUR PROJECT ESTIMATION
      </div>
      <div className="text-white text-lg font-medium leading-normal tracking-[0.72px] text-center z-10 mt-2 max-md:max-w-full">
        Submit your details, our representative will be in your touch soon.
      </div>
      <form onSubmit={handleSubmit} className="w-full mb-[30px]">
        <div className="flex gap-[30px] text-base text-white font-medium flex-wrap mt-[23px] max-md:max-w-full justify-center">
          <div className="min-w-60 text-center tracking-[0.64px] leading-normal w-[281px] rounded-[14px]">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className={`bg-[rgba(68,68,68,1)] w-full px-[25px] py-5 rounded-[14px] border-[rgba(216,177,80,1)] border-solid border-2 max-md:px-5 ${formData.fullName ? "text-white" : "text-gray-400"
                }`}
              required
            />
          </div>
          <div className="min-w-60 whitespace-nowrap tracking-[0.64px] leading-normal w-[281px] rounded-[14px]">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className={`border w-full p-5 rounded-[14px] border-[rgba(210,210,210,1)] border-solid bg-transparent ${formData.email ? "text-white" : "text-gray-400"
                }`}
              required
            />
          </div>
          <div className="min-w-60 tracking-[0.64px] leading-normal w-[281px] rounded-[14px]">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone no"
              className={`border w-full p-5 rounded-[14px] border-[rgba(210,210,210,1)] border-solid bg-transparent ${formData.phone ? "text-white" : "text-gray-400"
                }`}
              required
            />
          </div>
          <button
            type="submit"
            className="text-xl font-bold w-[225px] rounded-[0px_0px_0px_0px]"
          >
            <div className="bg-[rgba(216,177,80,1)] flex w-full flex-col items-stretch justify-center px-[23px] py-[19px] rounded-[14px] max-md:px-5">
              <div className="flex items-center justify-center gap-2.5">
                <div className="self-stretch my-auto">Get A Quote</div>
                <ArrowRight />
              </div>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default EstimationForm;

// import React, { useState } from "react";
// import { IconRight } from "react-day-picker";

// const EstimationForm: React.FC = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // In a real application, you would send this data to your backend
//     console.log("Form submitted:", formData);
//     // Reset form
//     setFormData({
//       fullName: "",
//       email: "",
//       phone: "",
//     });
//   };

//   return (
//     <div className="flex flex-col items-center bg-[rgba(68,68,68,1)] mt-7 rounded-lg shadow-lg px-4">
//       <div className="text-[rgba(216,177,80,1)] text-[25px] font-bold self-center mt-[30px]  max-md:max-w-full max-md:mt-10">
//         GET YOUR PROJECT ESTIMATION
//       </div>
//       <div className="text-white text-lg font-medium leading-normal tracking-[0.72px] text-center z-10 mt-[-7px] max-md:max-w-full">
//         Submit your details, our representative will be in your touch soon.
//       </div>
//       <form onSubmit={handleSubmit} className="w-full mb-[30px]">
//         <div className="flex gap-[30px] text-base text-white font-medium flex-wrap mt-[23px] max-md:max-w-full justify-center">
//           <div className="min-w-60 text-center tracking-[0.64px] leading-normal w-[281px] rounded-[14px]">
//             <input
//               type="text"
//               name="fullName"
//               value={formData.fullName}
//               onChange={handleChange}
//               placeholder="Full Name"
//               className={`bg-[rgba(68,68,68,1)] w-full px-[25px] py-5 rounded-[14px] border-[rgba(216,177,80,1)] border-solid border-2 max-md:px-5 ${formData.fullName ? "text-white" : "text-gray-400"
//                 }`}
//               required
//             />
//           </div>
//           <div className="min-w-60 whitespace-nowrap tracking-[0.64px] leading-normal w-[281px] rounded-[14px]">
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Email"
//               className={`border w-full p-5 rounded-[14px] border-[rgba(210,210,210,1)] border-solid bg-transparent ${formData.email ? "text-white" : "text-gray-400"
//                 }`}
//               required
//             />
//           </div>
//           <div className="min-w-60 tracking-[0.64px] leading-normal w-[281px] rounded-[14px]">
//             <input
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               placeholder="Phone no"
//               className={`border w-full p-5 rounded-[14px] border-[rgba(210,210,210,1)] border-solid bg-transparent ${formData.phone ? "text-white" : "text-gray-400"
//                 }`}
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="text-xl font-bold w-[225px] rounded-[0px_0px_0px_0px]"
//           >
//             <div className="bg-[rgba(216,177,80,1)] flex w-full flex-col items-stretch justify-center px-[23px] py-[19px] rounded-[14px] max-md:px-5">
//               <div className="flex items-center justify-center gap-2.5">
//                 <div className="self-stretch my-auto">Get A Quote</div>
//                 <IconRight />
//               </div>
//             </div>
//           </button>
//         </div>
//       </form>

//     </div>
//   );
// };

// export default EstimationForm;
