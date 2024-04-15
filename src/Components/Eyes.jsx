import React, { useEffect, useState } from "react";

function Eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });

  return (
    <div className="h-screen w-full flex items-center justify-center overflow-hidden">
      <div data-scroll data-scroll-speed="-.8" className='w-full h-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")] bg-cover relative bg-center'>
        <div className="absolute h-[13vw] flex gap-10  -translate-x-[50%] top-[50%] left-[50%] -translate-y-[50%]">

          <div data-scroll data-scroll-speed=".2" className="rounded-full bg-white h-[13vw] flex items-center justify-center w-[13vw] ">
              <div className="overflow-hidden w-[9vw] h-[9vw] relative rounded-full flex items-center justify-center bg-[#212121]">
                <p className="absolute text-[1.2vw] text-white">PLAY</p>
                <div
                  style={{
                    transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                  }}
                  className="line absolute -translate-x-[50%] top-1/2 left-1/2 -translate-y-[50%]  w-full h-10 "
                >
                  <div className=" h-[1.1vw] w-[1.1vw] rounded-full bg-white"></div>
                
              </div>
            </div>
          </div>

          <div data-scroll data-scroll-speed=".2"  className="rounded-full flex items-center justify-center bg-white h-[13vw] w-[13vw] ">
            <div className="relative overflow-hidden w-[9vw] h-[9vw] rounded-full flex items-center justify-center  bg-[#212121]">
              <p className="absolute text-[1.2vw] text-white">PLAY</p>
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line absolute -translate-x-[50%] top-[50%] left-[50%] -translate-y-[50%]  w-full h-10 "
              >
                <div className=" h-[1.1vw] w-[1.1vw] rounded-full bg-white"></div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Eyes;
