import { motion } from 'framer-motion'
import React from 'react'


function Marquee() {
  return (
    <div  data-scroll data-scroll-speed=".1" data-scroll-section className='w-full bg-[#004D43] rounded-t-xl py-20 '>
        <div  className='texts border-t-[1.8px]  border-[#4D837C] text-white tracking-tighter border-b-[1.8px] overflow-hidden flex whitespace-nowrap'>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}}  transition={{ease:"linear",repeat:Infinity,duration:9}}  className='text-[30vw] leading-none font-["Founders_Grotesk_X"] pl-10 font-semibold  -mb-[9vw] pt-4 uppercase'>We Are Ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:9}}  className='text-[30vw] leading-none  font-["Founders_Grotesk_X"] pl-10 font-semibold -mb-[9vw] pt-4  uppercase'>We Are Ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee