import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { RxCross2 } from "react-icons/rx";
import SideArt from "./SideArt";
const Navbar = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [renderDiv, setRenderDiv] = useState(-1);
  const [language, setLanguage] = useState(true);
  const something: string[] = [
    "HOME",
    "ABOUT",
    "CONTACT",
    "FARMER ROYALTIES",
    "DIGITAL ADVERTISEMENT",
  ];

  const setRenderTo = (num: number) => {
    setRenderDiv(num);
  };
  return (
    <>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{
          delay: 4, duration: 2
        }}
      >
        <div className="fixed top-[1.9rem] hover:bg-white hover:text-black hover:cursor-default transition-all duration-300 rounded-xl border-[0.5px] left-[11rem] border-white text-white p-4 text-3xl" onClick={() => setLanguage(!language)}>
          {language == true ? <>Hindi</> : <>English</>}
        </div>
      </motion.div>
      <motion.div
        animate={{
          x: 0,
        }}
        initial={{ x: -200 }}
        transition={{
          delay: 4,
          duration: 2,
          type: "spring",
        }}
        className="text-white  fixed top-[2rem] left-[5rem]  border-[1px] border-white  rounded-xl cursor-default hover:bg-white hover:text-black   gap-4 text-[1.5rem] flex justify-center items-center"
        onClick={() => setIsShowing(!isShowing)}
      >
        <div
          className="flex justify-center w-full items-center gap-4 hover:bg-white p-[1rem] hover:text-black transition-all duration-300"
        >
          <GiHamburgerMenu size={30} />
        </div>
      </motion.div>
      <AnimatePresence>
        {isShowing && (
          <motion.div
            animate={{
              opacity: 1,
              y: 0,
            }}
            initial={{
              y: -10,
              opacity: 0,
            }}
            exit={{ opacity: 0, y: -10 }}
            onClick={() => setIsShowing(!isShowing)}
            style={{
              paddingInline: "1rem",
              width: "100vw",
              height: "100vh",
              position: "fixed",
              paddingBlock: "1rem",
              top: "8.5rem",
              borderRadius: "1rem",
              border: "1px solid white",
              backgroundColor: "white",
              zIndex: "10000",
              boxShadow: "0 0 2px 80000px white",
            }}
          >
            <ul className="text-black text-[1.3rem] ">
              <div className="flex hover:cursor-default justify-start items-center text-[2rem] py-[1.5rem] hover:bg-[#303030] rounded-xl transition-all duration-300 hover:text-white gap-[1rem] ">
                <RxCross2 size={50} className="ml-5" /> Close
              </div>
              {something.map((items, index) => (
                <li className="list_items" onClick={() => setRenderDiv(index)}>
                  {items}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        animate={{ x: 0 }}
        initial={{ x: 350 }}
        transition={{
          delay: 4,
          duration: 2,
          type: "spring",
        }}
        className="fixed top-[3rem] md:top-[2rem]  right-[4rem] text-white text-[1.5rem] md:text-[3rem] "
      >
        <h1 className="main_heading ">AGROTECH</h1>
      </motion.div>

      <div
        className="text-white"
        style={{
          width: "100vw",
          height: "80vh",
          overflow: "scroll",
          // backgroundColor: "rgba(255,255,255,0.15)",
          paddingInline: "3rem",
          top: "10rem",
          position: "absolute",
        }}
      >

        {/* rendering pages */}
        {renderDiv == 0 ? (
          <div>page 1</div>
        ) : renderDiv == 1 ? (
          <div>page 2</div>
        ) : renderDiv == 2 ? (
          <div>page 3</div>
        ) : renderDiv == 3 ? (
          <div>page 4</div>
        ) : renderDiv == 4 ? (
          <div>page 5</div>
        ) : (
          <div>
            {language == true ? (
              <div>
                <motion.h1
                  animate={{ x: 0 }}
                  initial={{ x: -1000 }}
                  transition={{ delay: 3.5, duration: 2 }}
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "6rem",
                    fontWeight: "bolder",
                    marginTop: "7rem",
                    paddingInline: "2rem",
                  }}
                >
                  <span>MAKING FRAMING</span>, <br />{" "}
                  <span>AN EASY PROCESS.</span>
                </motion.h1>
              </div>
            ) : (
              <motion.h1
                animate={{ x: 0 }}
                initial={{ x: -1000 }}
                transition={{ delay: 0.2, duration: 1 }}
                style={{
                  fontFamily: "Poppins",
                  fontSize: "6rem",
                  fontWeight: "bolder",
                  marginTop: "5rem",
                  paddingInline: "2rem",
                }}
              >
                <span>खेती करना</span>, <br /> <span>एक आसान प्रक्रिया</span>
              </motion.h1>
            )}

            {/* this is for the second hero text  */}
            {language == true ? (
              <motion.div
                animate={{ x: 0 }}
                initial={{ x: -1000 }}
                transition={{ delay: 3.9, duration: 2.5 }}
              >
                <p className="text-2xl p-4 text-center md:text-left">
                  We provide tools that a farmer needs. Our website provides an
                  all over solution <br /> for farmers, that can be used to{" "}
                </p>
                <motion.button 
                  onClick={() => setRenderDiv(0)} className=" transition-all duration-500 bg-white z-[10000]   text-black font-semibold p-6 w-full  md:w-[53%] rounded-xl m-4 text-2xl">
                  Let's Get Started
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                animate={{ x: 0 }}
                initial={{ x: -1000 }}
                transition={{ delay: 0.2, duration: 1 }}
              >
                <p className="text-2xl p-4 text-center md:text-left">
                  हम उपकरण प्रदान करते हैं जिसकी एक किसान को आवश्यकता होती है।
                  हमारी वेबसाइट किसानों <br /> के लिए एक संपूर्ण समाधान प्रदान
                  करती है, जिसका उपयोग किया जा सकता है
                </p>
                <button onClick={() => setRenderDiv(0)} className="hover:scale-[1.01] transition-all duration-500 bg-white z-[10000]   text-black font-semibold p-6 w-[53%] rounded-xl m-4 text-2xl">
                  Let's Get Started
                </button>
              </motion.div>
            )}
          </div>
        )}
      </div>
      <SideArt />
    </>
  );
};

export default Navbar;
