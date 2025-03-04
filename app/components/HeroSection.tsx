import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
      duration: 0.8,
      ease: "easeOut"
    }
  })
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (custom: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: custom * 0.2,
      duration: 0.5,
      ease: "easeOut"
    }
  }),
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 }
  },
  tap: {
    scale: 0.95,
    transition: { duration: 0.1 }
  }
};
// HeroSection.tsx
const HeroSection: React.FC = () => {

  return (
    <div className="flex flex-col px-4 md:px-0">
      <motion.div
        className="text-white text-2xl md:text-4xl font-normal mt-20 md:mt-40"
        initial="hidden"
        animate="visible"
        custom={0}
        variants={textVariants}
      >
        Virtual Islamic Banking
      </motion.div>

      <motion.div
        className="text-[rgba(216,177,80,1)] text-4xl md:text-6xl font-bold mt-4"
        initial="hidden"
        animate="visible"
        custom={1}
        variants={textVariants}
      >
        Transforming Finance
      </motion.div>

      <motion.div
        className="text-white text-3xl md:text-4xl font-normal mt-2"
        initial="hidden"
        animate="visible"
        custom={2}
        variants={textVariants}
      >
        with Fast & Easy!
      </motion.div>

      <motion.div
        className="text-white text-base md:text-lg font-medium leading-relaxed max-w-3xl mt-8"
        initial="hidden"
        animate="visible"
        custom={3}
        variants={textVariants}
      >
        From Virtual Islamic/ Digital Banking and payment platforms to asset
        management, our FinTech products encompass a wide spectrum of offerings
        that are reshaping the financial landscape.
      </motion.div>

      <div className="flex items-center flex-col md:flex-row items-start gap-6 mt-8">
        <motion.button
          className="bg-[rgba(216,177,80,1)] text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2"
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
          custom={4}
          variants={buttonVariants}
        >
          Get Started <ArrowRight />
        </motion.button>

        <motion.button
          className="text-white flex items-center gap-2"
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
          custom={5}
          variants={buttonVariants}
        >
          See Live Demo
          <motion.img
            src="https://cdn.builder.io/api/v1/image/assets/61d335b31c0444f1bce1eac9bbc4a3b2/7fc1fb1574397cc77d4e81986be569ea467f161499dd4542bde4004190505a94?placeholderIfAbsent=true"
            className="aspect-[1.03] object-contain w-[30px] self-stretch shrink-0 my-auto"
            alt="Play button"
            whileHover={{
              rotate: 360,
              transition: { duration: 0.8, ease: "easeInOut" }
            }}
          />
        </motion.button>
      </div>
    </div>
  );
  // return (
  //   <div className="flex flex-col px-4 md:px-0">
  //     <div className="text-white text-2xl md:text-4xl font-normal mt-20 md:mt-40">
  //       Virtual Islamic Banking
  //     </div>
  //     <div className="text-[rgba(216,177,80,1)]  text-4xl md:text-6xl font-bold mt-4">
  //       Transforming Finance
  //     </div>
  //     <div className="text-white text-3xl md:text-4xl font-normal mt-2">
  //       with Fast & Easy!
  //     </div>
  //     <div className="text-white text-base md:text-lg font-medium leading-relaxed max-w-3xl mt-8">
  //       From Virtual Islamic/ Digital Banking and payment platforms to asset
  //       management, our FinTech products encompass a wide spectrum of offerings
  //       that are reshaping the financial landscape.
  //     </div>
  //     <div className="flex items-center flex-col md:flex-row items-start gap-6 mt-8">
  //       <button className="bg-[rgba(216,177,80,1)]  text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2">
  //         Get Started <ArrowRight />
  //       </button>
  //       <button className="text-white flex items-center gap-2">
  //         See Live Demo
  //         <img
  //           src="https://cdn.builder.io/api/v1/image/assets/61d335b31c0444f1bce1eac9bbc4a3b2/7fc1fb1574397cc77d4e81986be569ea467f161499dd4542bde4004190505a94?placeholderIfAbsent=true"
  //           className="aspect-[1.03] object-contain w-[30px] self-stretch shrink-0 my-auto"
  //           alt="Play button"
  //         />
  //       </button>
  //     </div>
  //   </div>
  // );
};


export default HeroSection;