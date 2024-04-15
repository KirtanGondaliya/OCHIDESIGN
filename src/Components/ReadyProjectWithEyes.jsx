import React, { useEffect, useState } from "react";

function ReadyProjectWithEyes() {


  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      var mX = e.clientX;
      var mY = e.clientY;

      var dX = mX - window.innerWidth / 2;
      var dY = mY - window.innerHeight / 2;

      var Angle = Math.atan2(dY, dX) * (180 / Math.PI);
      setRotation(Angle - 180);
    });
  });

  return (
    <div  data-scroll-speed="-.2" data-scroll-section data-scroll  className="min-h-screen relative rounded-t-xl w-full bg-[#CDEA68]">
      <div data-scroll data-scroll-section data-scroll-speed=".1" className="pt-[10vw]">
        {["Ready", "To Start", "The Project ?"].map((item, index) => {
          return (
            <div className='font-["Founders_Grotesk_X"] font-semibold flex flex-col text-[15vw] tracking-tight leading-[11vw] text-[#212121] text-center uppercase'>
              {item}
            </div>
          );
        })}
      </div>

      <div data-scroll className="absolute h-[13vw] flex gap-10  -translate-x-[50%] top-[30%] left-[50%] -translate-y-[50%] ">
        <div className="rounded-full bg-white h-[11vw] flex items-center justify-center w-[11vw] ">
          <div className="overflow-hidden w-[6.9vw] h-[6.9vw] relative rounded-full flex items-center justify-center bg-[#212121]">
            <div
              style={{
                transform: `translate(-50%,-50%) rotate(${rotation}deg)`,
              }}
              className="line absolute -translate-x-[50%] top-1/2 left-1/2 -translate-y-[50%]  w-full h-10 "
            >
              <div className=" h-[1.1vw] w-[1.1vw] rounded-full bg-white"></div>
            </div>
          </div>
        </div>

        <div className="rounded-full bg-white h-[11vw] flex items-center justify-center w-[11vw] ">
          <div className="overflow-hidden w-[6.9vw] h-[6.9vw] relative rounded-full flex items-center justify-center bg-[#212121]">
            <div
              style={{
                transform: `translate(-50%,-50%) rotate(${rotation}deg)`,
              }}
              className="line absolute -translate-x-[50%] top-1/2 left-1/2 -translate-y-[50%]  w-full h-10 "
            >
              <div className=" h-[1.1vw] w-[1.1vw] rounded-full bg-white"></div>
            </div>
          </div>
        </div>
      </div>

      <div data-scroll data-scroll-section data-scroll-speed=".1" className="flex flex-col justify-center w-full items-center pb-[10vw]">
         <div className="flex gap-6 items-center bg-[#212121] px-6 py-4  rounded-full">
            <h3 className="text-white font-['Neue_Montreal']">START THE PROJECT</h3> 
            <div className="bg-white h-[0.6vw] w-[0.6vw] rounded-full"></div>
         </div>
         <h4 className="mt-[1vw] mb-[1vw] text-[1.1vw] font-['Neue_Montreal']">OR</h4>
         <div className="flex gap-6 items-center bg-[#CDEA68] px-6 py-4  rounded-full border-[1.5px] border-black">
            <h3 className="text-black font-['Neue_Montreal']">HELLO@OCHI.DESIGN</h3> 
            <div className="bg-black h-[0.6vw] w-[0.6vw] rounded-full"></div>
         </div>

      </div>
              
    </div>
  );
}

export default ReadyProjectWithEyes;
