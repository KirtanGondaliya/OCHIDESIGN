import React from 'react'

function About() {
  return (
    <div data-scroll data-scroll-speed='-.25' className='w-full min-h-screen rounded-t-xl rounded-b-xl pb-[9vw]  pt-20 bg-[#CDEA68]'>
        <div className=' border-[#242522] px-14 pb-16  border-b-[1px]'>
         <p className='w-[99%] font-["Neue_Montreal"] text-[4vw] leading-[4.4vw]'>
         Ochi is a strategic partner for fast-grow­ing tech businesses that need to <span className='border-b-[2.5px] border-black'>raise funds</span>,<span className='border-b-[2.5px] border-black'>sell prod­ucts</span>,<br />
         <span className='border-b-[2.5px] border-black'>ex­plain com­plex ideas</span>, and <span className='border-b-[2.5px] border-black'>hire great peo­ple.</span></p>
        </div>
        <div className='pt-2 px-14 flex w-full font-["Neue_Montreal"] pb-[4vw] border-b-[1px] border-[#242522] '>
            <div className='w-1/2'>What you can expect:</div>
            <div className='w-[40%] ml-[18vw]'>
                <p className='text-[1.1vw] mb-10'>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</p>
                <p className=' text-[1.1vw] mb-8'>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
            </div>
            <div className='w-1/3 text-[1.1vw] flex-col  mt-[4.5vw] ml-[12vw]'>
                <p className='mb-[1.2vw]'>S:</p>
                <div className=' flex flex-col '>
                    <a href="">Instagram</a>
                    <a href="">Behance</a>
                    <a href="">Facebook</a>
                    <a href="">Linkedin</a>
                </div>
            </div>
        </div>
        <div className=' px-14 w-full flex justify-between'>
            <div className='w-[40%]'>
                <h1 className='font-["Neue_Montreal"] text-[4vw] mb-[1vw]'>Our approach:</h1>
                <div className='bg-black rounded-full flex items-center justify-between px-6 py-4 w-[11vw]'>
                    <h4 className='font-["Neue_Montreal"] text-white  uppercase'>Read More</h4>
                    <div className='bg-white h-2 w-2 rounded-full'></div>
                </div>
            </div>
            <div className='w-[55%] h-[70vh] bg-[url("E:\FrontEndDomination\Projects\OchiDesign\src\Components\Homepage-Photo-663x469.jpg")] bg-cover  rounded-xl mt-4'>
            </div>
        </div>
    </div>
  )
}

export default About;