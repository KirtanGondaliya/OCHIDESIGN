import { easeIn, easeInOut, easeOut, motion } from "framer-motion";
import React, { useState } from "react";
import './FeatureStyle.css'

function FeaturedProjects() {
  const [ishover,sethover]=useState(false);
  const [hoover, sethoover] = useState(false);
  const [hooover, sethooover] = useState(false);
  const [hoooover, sethoooover] = useState(false);




  return (
    <div className="w-full py-20 bg-[#F1F1F1] ">
      <div className="px-14">
        <h1 className='font-["Neue_Montreal"] tracking-tight text-[4vw] mb-[2vw]'>
          Featured Projects
        </h1>
      </div>

      <div className="flex-wrap flex justify-between items-center py-10 px-14 w-full border-t-[1.5px] border-[#C1C1C1]">
        {["FYDE", "VISE", "TRAWA", "PREMIMUM BLEND"].map((item, index) => {
          return (
            <div className="flex flex-col gap-4 w-[49%] mb-[5vw]">
              <div className="flex items-center gap-2">
                <div className="w-[0.7vw] h-[0.7vw] rounded-full bg-black"></div>
                <h4 className="text-[1.1vw]">{item}</h4>
              </div>
              {index === 0 && (
                <div className="flex flex-col relative">

                    <h1 className="absolute flex z-[999] overflow-hidden translate-x-1/2 top-1/2 -translate-y-1/2 pt-[2vw] text-[#CDEA68] font-['Founders_Grotesk_X'] text-[8.5vw]  right-0 leading-none font-semibold">
                      {item.split("").map((item, index) => (
                        <motion.span
                        initial={{ y: "100%" }}
                        animate={ishover ? { y: "0%" } : { y: "100%" }}
                        transition={{ ease: easeOut, delay: index * 0.06 }}
                        >{item}
                        </motion.span>
                      ))}
                    </h1>


                  <motion.div
                   onMouseEnter={() => sethover(true)}
                   onMouseLeave={() => sethover(false)}
                    whileHover={{ scale: 0.97 }} // Increase the scale on hover
                    transition={{ ease: "easeInOut", duration: 0.3 }}
                    className='h-[80vh] cursor-pointer relative overflow-hidden  rounded-lg bg-cover mb-[1vw]'
                  >
                   
                    <motion.img
                      className="w-full h-full bg-cover "
                      whileHover={{ scale: 1.12 }}
                      transition={{ ease: "easeInOut", duration: 0.5 }}
                      src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                      alt=""
                    />
                  </motion.div>
                  <div className="flex gap-2">
                    {[
                      "AUDIT",
                      "COPYWRITING",
                      "SALES DECK",
                      "SLIDES DESIGN",
                    ].map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="border-[1.6px] font-['Neue_Montreal'] border-[#7D7D7D] rounded-full px-4 py-1 w-fit"
                        >
                          {item}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
              {index === 1 && (
                <div className="flex flex-col relative">

<h1 className="absolute overflow-hidden flex z-[9] translate-x-1/2 top-1/2 -translate-y-1/2 pt-[2vw] text-[#CDEA68] font-['Founders_Grotesk_X'] text-[8.5vw]  right-full leading-none font-semibold">
                      {item.split("").map((item, index) => (
                        <motion.span
                          initial={{ y: "110%" }}
                          animate={hoover ? { y: "0%" } : { y: "110%" }}
                          transition={{ ease: easeOut, delay: index * 0.06 }}
                          className="inline-block -translate-y-full"
                        >
                          {item}
                        </motion.span>
                      ))}
                    </h1>


                  <motion.div
                    whileHover={{ scale: 0.97 }} // Increase the scale on hover
                    transition={{ ease: "easeInOut", duration: 0.3 }}
                    onMouseEnter={() => sethoover(true)}
                    onMouseLeave={() => sethoover(false)}
                    className="h-[80vh] overflow-hidden  cursor-pointer relative rounded-lg  bg-cover mb-[1vw]"
                  >
                    <motion.img
                      className="w-full h-full bg-cover "
                      whileHover={{ scale: 1.12 }}
                      transition={{ ease: "easeInOut", duration: 0.5 }}
                      src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                      alt=""
                    />
                  </motion.div>
                  <div className="flex gap-2">
                    {["AGENCY", "COMPANY PRESENTATIONS"].map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="border-[1.6px] font-['Neue_Montreal'] border-[#7D7D7D] rounded-full px-4 py-1 w-fit"
                        >
                          {item}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
              {index === 2 && (
                <div className="flex flex-col relative">
                   <h1 className="absolute flex z-[9] overflow-hidden -translate-x-1/2 top-1/2 -translate-y-1/2 pt-[2vw] text-[#CDEA68] font-['Founders_Grotesk_X'] text-[8.5vw]  left-full leading-none font-semibold">
                      {item.split("").map((item, index) => (
                        <motion.span
                          initial={{ y: "110%" }}
                          animate={hooover ? { y: "0%" } : { y: "110%" }}
                          transition={{ ease: easeOut, delay: index * 0.06 }}
                          className="inline-block translate-y-full"
                        >
                          {item}
                        </motion.span>
                      ))}
                    </h1>
                  <motion.div
                      whileHover={{ scale: 0.97 }} // Increase the scale on hover
                      transition={{ ease: "easeInOut", duration: 0.3 }}
                    onMouseEnter={() => sethooover(true)}
                    onMouseLeave={() => sethooover(false)}
                    className='h-[80vh]  cursor-pointer relative rounded-lg overflow-hidden bg-cover mb-[1vw]'
                  >
                    <motion.img
                      className="w-full h-full bg-cover "
                      whileHover={{ scale: 1.12 }}
                      transition={{ ease: "easeInOut", duration: 0.5 }}
                      src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
                      alt=""
                    />
                  </motion.div>
                  <div className="flex gap-2">
                    {["BRAND IDENTITY", "DESIGN RESEARCH", "INVESTOR DECK"].map(
                      (item, index) => {
                        return (
                          <div
                            key={index}
                            className="border-[1.6px] font-['Neue_Montreal'] border-[#7D7D7D] rounded-full px-4 py-1 w-fit"
                          >
                            {item}
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              )}
              {index === 3 && (
                <div className="flex flex-col relative">
                  <h1 className="absolute overflow-hidden flex z-[9] translate-x-1/2 top-1/2 -translate-y-1/2 pt-[2vw] text-[#CDEA68] font-['Founders_Grotesk_X'] text-[8.5vw]  right-full leading-none font-semibold">
                      {item.split("").map((item, index) => (
                        <motion.span
                          initial={{ y: "110%" }}
                          animate={hoooover ? { y: "0%" } : { y: "110%" }}
                          transition={{ ease: easeOut, delay: index * 0.03 }}
                          className="inline-block -translate-y-full"
                        >
                          {item}
                        </motion.span>
                      ))}
                    </h1>
                  <motion.div
                     whileHover={{ scale: 0.97 }} // decrease the scale on hover
                     transition={{ ease: "easeInOut", duration: 0.3 }}
                    onMouseEnter={() => sethoooover(true)}
                    onMouseLeave={() => sethoooover(false)}
                    className='h-[80vh] cursor-pointer overflow-hidden rounded-lg relative bg-cover mb-[1vw]'
                  >
                   
                    <motion.img
                      className="w-full h-full bg-cover "
                      whileHover={{ scale: 1.12 }}
                      transition={{ ease: "easeInOut", duration: 0.5 }}
                      src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
                      alt=""
                    />
                  </motion.div>
                  <div className="flex gap-2">
                    {["BRANDED TEMPLATE"].map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="border-[1.6px] itemsfont-['Neue_Montreal'] border-[#7D7D7D]  rounded-full px-4 py-1 w-fit"
                        >
                          {item}
                        </div>

                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
        <div className="flex items-center justify-center w-full mt-[3vw]">
          <div className="flex btnparent  items-center overflow-hidden justify-center  rounded-full bg-[#212121]">
            <div className="flex   text-white relative items-center justify-between gap-8 px-4 py-4 font-['Neue_Montreal']">
              <h4 className="z-[9] view">VIEW ALL CASE STUDIES</h4>
              <div className="bg-white z-[9] round rounded-full  h-[0.6vw] w-[0.6vw]"></div>
              <div className="btnbackcolor"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProjects;
