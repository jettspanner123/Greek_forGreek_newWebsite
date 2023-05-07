import React from "react";
import { motion } from "framer-motion";
import { RiPlantFill } from "react-icons/ri";
const Loader = () => {
  return (
    <motion.div
      animate={{
        y: -1700,
      }}
      initial={{
        y: 0,
      }}
      transition={{
        delay: 3,
        duration: 2,
        type: "spring",
      }}
      className="w-full z-[100000] h-[100vh] bg-black border-[5px] border-white rounded-xl flex justify-center items-center"
    >
      <motion.div
        animate={{
          width: "50%"
          , height: "50%"
        }}
        initial={{
          width: "100%",
          height: "100%"
        }}
        transition={{
          duration: 1,
          delay: 1,
          type: "spring",
        }}
        className="w-[40%] bg-white flex gap-5 justify-center items-center text-[6rem] font-bold p-[10rem] rounded-xl"
      >
        AGROTECH
        <RiPlantFill size={80} color="black" />
      </motion.div>
    </motion.div>
  );
};

export default Loader;
