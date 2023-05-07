import React from 'react'
import { motion } from 'framer-motion'
const SideArt = () => {
    return (
        <motion.div
            animate={{ x: 0 }}
            initial={{ x: 950 }}
            transition={{
                delay: 4,
                duration: 2,
                type: "spring",
            }} className='md:block hidden w-[35%] absolute right-[4rem] h-[75vh] text-white top-[10rem]'>
            <motion.div 
                animate={{rotate: "4000deg"}}
                transition={{delay: 4, duration: 100, repeat: 100, bounce: 0.1}}
                className="relative  w-full h-full">
                <div className="rounded-full h-[24rem] w-[24rem] absolute bg-white top-[64px] left-[80px]">1</div>
                <div className="rounded-full h-[24rem] w-[24rem] absolute  border-[4px] backdrop:blur-[20px] z-[100] border-white bg-[rgba(255,255,255,0.05)] shadow-xl blur_it bottom-[64px] right-[80px]">1</div>
            </motion.div>
        </motion.div>
    )
}

export default SideArt