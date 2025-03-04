'use client';
import React from "react";
import { LazyMotion, domAnimation, m } from 'framer-motion';

import AboutSection from "./components/AboutSection";
import BlogSection from "./components/BlogSection";
import DepositSection from "./components/DepositSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import InvestmentsSection from "./components/InvestmentsSection";
import Navbar from "./components/Navbar";
import NewsletterSection from "./components/NewsletterSection";
import ServicesSection from "./components/ServicesSection";
import EstimationForm from './components/EstimationForm';
import Products from './components/Products';

// Animation variants with improved mobile responsiveness
const sectionVariants = {
    hidden: { opacity: 0, y: 30 }, // Reduced y offset for mobile
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6, // Slightly faster for mobile
            ease: "easeOut"
        }
    }
};

const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 1 }
    }
};

const Index = () => {
    return (
        <LazyMotion features={domAnimation}>
            <div className="w-full overflow-hidden">
                <m.div
                    className="bg-[rgba(39,39,39,1)] flex w-full flex-col overflow-hidden items-center"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                >
                    {/* Hero section with improved responsive handling */}
                    <div className="flex flex-col self-stretch relative min-h-[700px] md:min-h-[959px] w-full pt-6 md:pt-12 pb-[17px] px-4 sm:px-8 md:px-20">
                        <m.img
                            src="https://cdn.builder.io/api/v1/image/assets/61d335b31c0444f1bce1eac9bbc4a3b2/bdcea6354ee15454bc89fccfee9bec8e98eeb9be7936354fcb14eff5940cfefc?placeholderIfAbsent=true"
                            className="absolute h-full w-full object-cover inset-0"
                            alt="Background"
                            initial={{ scale: 1.1, opacity: 0.8 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 2 }}
                        />
                        <div className="relative flex flex-col w-full">
                            <Navbar />
                            <HeroSection />
                        </div>
                    </div>

                    {/* Improved viewport detection for mobile */}
                    <m.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }} // Reduced threshold for mobile
                        variants={sectionVariants}
                        className="w-full"
                    >
                        <EstimationForm />
                    </m.div>

                    {/* Improved viewport settings for all sections */}
                    {[
                        { Component: AboutSection, id: "about" },
                        { Component: Products, id: "products" },
                        { Component: ServicesSection, id: "services" },
                        { Component: DepositSection, id: "deposit" },
                        { Component: InvestmentsSection, id: "investments" },
                        { Component: BlogSection, id: "blog" },
                        { Component: NewsletterSection, id: "newsletter" },
                        { Component: Footer, id: "footer" }
                    ].map(({ Component, id }) => (
                        <m.div
                            key={id}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }} // Lower threshold ensures sections appear properly on mobile
                            variants={sectionVariants}
                            className="w-full"
                        >
                            <Component />
                        </m.div>
                    ))}
                </m.div>
            </div>
        </LazyMotion>
    );
};

export default Index;

// 'use client';
// import React from "react";
// // import dynamic from 'next/dynamic';
// import { LazyMotion, domAnimation, m } from 'framer-motion';

// import AboutSection from "./components/AboutSection";
// import BlogSection from "./components/BlogSection";
// import DepositSection from "./components/DepositSection";
// import Footer from "./components/Footer";
// import HeroSection from "./components/HeroSection";
// import InvestmentsSection from "./components/InvestmentsSection";
// import Navbar from "./components/Navbar";
// import NewsletterSection from "./components/NewsletterSection";
// import ServicesSection from "./components/ServicesSection";
// import EstimationForm from './components/EstimationForm';
// import Products from './components/Products';


// // Animation variants for staggered section animations
// const sectionVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//         opacity: 1,
//         y: 0,
//         transition: {
//             duration: 0.8,
//             ease: "easeOut"
//         }
//     }
// };

// const fadeIn = {
//     hidden: { opacity: 0 },
//     visible: {
//         opacity: 1,
//         transition: { duration: 1.5 }
//     }
// };

// const Index = () => {
//     return (
//         <LazyMotion features={domAnimation}>
//             <div>
//                 <m.div
//                     className="bg-[rgba(39,39,39,1)] flex w-full flex-col overflow-hidden items-center max-md:max-w-full"
//                     initial="hidden"
//                     animate="visible"
//                     variants={fadeIn}
//                 >
//                     <div className="flex flex-col self-stretch relative min-h-[959px] w-full pt-12 pb-[17px] px-20 max-md:max-w-full max-md:px-5">
//                         <m.img
//                             src="https://cdn.builder.io/api/v1/image/assets/61d335b31c0444f1bce1eac9bbc4a3b2/bdcea6354ee15454bc89fccfee9bec8e98eeb9be7936354fcb14eff5940cfefc?placeholderIfAbsent=true"
//                             className="absolute h-full w-full object-cover inset-0"
//                             alt="Background"
//                             initial={{ scale: 1.1, opacity: 0.8 }}
//                             animate={{ scale: 1, opacity: 1 }}
//                             transition={{ duration: 2 }}
//                         />
//                         <div className="relative flex flex-col max-md:max-w-full">
//                             <Navbar />
//                             <HeroSection />
//                         </div>
//                     </div>

//                     <m.div
//                         initial="hidden"
//                         whileInView="visible"
//                         viewport={{ once: true, amount: 0.3 }}
//                         variants={sectionVariants}
//                     >
//                         <EstimationForm />
//                     </m.div>

//                     <m.div
//                         initial="hidden"
//                         whileInView="visible"
//                         viewport={{ once: true, amount: 0.3 }}
//                         variants={sectionVariants}
//                         className="w-full"
//                     >
//                         <AboutSection />
//                     </m.div>

//                     <m.div
//                         initial="hidden"
//                         whileInView="visible"
//                         viewport={{ once: true, amount: 0.3 }}
//                         variants={sectionVariants}
//                         className="w-full"
//                     >
//                         <Products />
//                     </m.div>

//                     <m.div
//                         initial="hidden"
//                         whileInView="visible"
//                         viewport={{ once: true, amount: 0.3 }}
//                         variants={sectionVariants}
//                         className="w-full"
//                     >
//                         <ServicesSection />
//                     </m.div>

//                     <m.div
//                         initial="hidden"
//                         whileInView="visible"
//                         viewport={{ once: true, amount: 0.3 }}
//                         variants={sectionVariants}
//                         className="w-full"
//                     >
//                         <DepositSection />
//                     </m.div>

//                     <m.div
//                         initial="hidden"
//                         whileInView="visible"
//                         viewport={{ once: true, amount: 0.3 }}
//                         variants={sectionVariants}
//                         className="w-full"
//                     >
//                         <InvestmentsSection />
//                     </m.div>

//                     <m.div
//                         initial="hidden"
//                         whileInView="visible"
//                         viewport={{ once: true, amount: 0.3 }}
//                         variants={sectionVariants}
//                         className="w-full"
//                     >
//                         <BlogSection />
//                     </m.div>

//                     <m.div
//                         initial="hidden"
//                         whileInView="visible"
//                         viewport={{ once: true, amount: 0.3 }}
//                         variants={sectionVariants}
//                         className="w-full"
//                     >
//                         <NewsletterSection />
//                     </m.div>

//                     <m.div
//                         initial="hidden"
//                         whileInView="visible"
//                         viewport={{ once: true, amount: 0.1 }}
//                         variants={sectionVariants}
//                         className="w-full"
//                     >
//                         <Footer />
//                     </m.div>
//                 </m.div>
//             </div>
//         </LazyMotion>
//     );
// };

// export default Index;

// import './globals.css';
// import * as framerMotion from "framer-motion";
// const { motion } = framerMotion;
// import AboutSection from "./components/AboutSection";
// import BlogSection from "./components/BlogSection";
// import DepositSection from "./components/DepositSection";
// import Footer from "./components/Footer";
// import HeroSection from "./components/HeroSection";
// import InvestmentsSection from "./components/InvestmentsSection";
// import Navbar from "./components/Navbar";
// import NewsletterSection from "./components/NewsletterSection";
// import ServicesSection from "./components/ServicesSection";
// import EstimationForm from './components/EstimationForm';
// import Products from './components/Products';




// // Animation variants for staggered section animations
// const sectionVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//         opacity: 1,
//         y: 0,
//         transition: {
//             duration: 0.8,
//             ease: "easeOut"
//         }
//     }
// };

// const fadeIn = {
//     hidden: { opacity: 0 },
//     visible: {
//         opacity: 1,
//         transition: { duration: 1.5 }
//     }
// };
// const Home = () => {
//     return (
//         <div>
//             <motion.div
//                 className="bg-[rgba(39,39,39,1)] flex w-full flex-col overflow-hidden items-center max-md:max-w-full"
//                 initial="hidden"
//                 animate="visible"
//                 variants={fadeIn}
//             >
//                 <div className="flex flex-col self-stretch relative min-h-[959px] w-full pt-12 pb-[17px] px-20 max-md:max-w-full max-md:px-5">
//                     <motion.img
//                         src="https://cdn.builder.io/api/v1/image/assets/61d335b31c0444f1bce1eac9bbc4a3b2/bdcea6354ee15454bc89fccfee9bec8e98eeb9be7936354fcb14eff5940cfefc?placeholderIfAbsent=true"
//                         className="absolute h-full w-full object-cover inset-0"
//                         alt="Background"
//                         initial={{ scale: 1.1, opacity: 0.8 }}
//                         animate={{ scale: 1, opacity: 1 }}
//                         transition={{ duration: 2 }}
//                     />
//                     <div className="relative flex flex-col max-md:max-w-full">
//                         <Navbar />
//                         <HeroSection />
//                     </div>
//                 </div>

//                 <motion.div
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true, amount: 0.3 }}
//                     variants={sectionVariants}
//                 // className="w-full"
//                 >
//                     <EstimationForm />
//                 </motion.div>

//                 <motion.div
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true, amount: 0.3 }}
//                     variants={sectionVariants}
//                     className="w-full"
//                 >
//                     <AboutSection />
//                 </motion.div>

//                 <motion.div
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true, amount: 0.3 }}
//                     variants={sectionVariants}
//                     className="w-full"
//                 >
//                     <Products />
//                 </motion.div>

//                 <motion.div
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true, amount: 0.3 }}
//                     variants={sectionVariants}
//                     className="w-full"
//                 >
//                     <ServicesSection />
//                 </motion.div>

//                 <motion.div
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true, amount: 0.3 }}
//                     variants={sectionVariants}
//                     className="w-full"
//                 >
//                     <DepositSection />
//                 </motion.div>

//                 <motion.div
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true, amount: 0.3 }}
//                     variants={sectionVariants}
//                     className="w-full"
//                 >
//                     <InvestmentsSection />
//                 </motion.div>

//                 <motion.div
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true, amount: 0.3 }}
//                     variants={sectionVariants}
//                     className="w-full"
//                 >
//                     <BlogSection />
//                 </motion.div>

//                 <motion.div
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true, amount: 0.3 }}
//                     variants={sectionVariants}
//                     className="w-full"
//                 >
//                     <NewsletterSection />
//                 </motion.div>

//                 <motion.div
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true, amount: 0.1 }}
//                     variants={sectionVariants}
//                     className="w-full"
//                 >
//                     <Footer />
//                 </motion.div>
//             </motion.div>
//         </div>
//     );


// };

// export default Home;
