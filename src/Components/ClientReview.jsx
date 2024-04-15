import React from 'react'

function ClientReview() {

    const data=[
        {
            name:"Planetly",
            person:"Nina Walloch",
            read:"Read"
        },
        {
            name:"Workiz Easy",
            person:"Tomer Levy",
            read:"Read"
        },
        {
            name:"Premium Blend",
            person:"Ellen Kim",
            read:"Read"
        },
        {
            name:"Hypercare System",
            person:"Brendan Goss",
            read:"Read"
        },
        {
            name:"Officevibe",
            person:"Raff Labrie",
            read:"Read"
        },
        {
            name:"Orderlion",
            person:"Stefan Strohmer",
            read:"Read"
        },
        {
            name:"Black Book",
            person:"Jaci Smith",
            read:"Read"
        },
        {
            name:"Trawa Energy",
            person:"David Budde",
            read:"Read"
        }
    ]



  return (
    <div className='w-full min-h-screen bg-[#F1F1F1] pb-[10vw]'>

        <div className='border-b-[1.599px] border-[#BEBEBE]'>
            <h1 className='px-14 font-["Neue_Montreal"] text-[3.7vw] pb-[2vw]'>Clients' reviews</h1>
        </div>

        <div className='px-14 text-[#474747] flex py-4 mb-[2vw] font-["Neue_Montreal"]'>

            <div className='underline w-[25%] text-[1.1vw]'>
                Karman Ventures
            </div>
            <div className='flex flex-col w-[25%]'>
                <h3 className='pb-[4vw] text-[1.1vw]'>Services:</h3>
                {["INVESTOR DECK","SALES DECK"].map((item,index)=>{
                    return (
                        <div className='border-[1.6px] rounded-full px-4 py-1 w-fit mb-3 border-[#474747]'>
                            {item}
                        </div>
                    )
                })}
            </div>
            <div className=' w-[35%]'>
                <h4 className='text-[1.1vw] pb-[3.5vw]'>Kirtan Gondaliya</h4>
                <div className='bg-cover mb-[1.3vw] h-[7vw] w-[7vw]'>
                    <img className='rounded-xl' src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png" alt="" />
                </div>

                <div className='font-[500] text-[1.14vw]'>
                They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5
                </div>

            </div>
            <div className='text-[1.1vw] text-[#B9B9B9] pl-[11vw]'>
                READ
            </div>

        </div>

        <div  className='flex flex-col font-["Neue_Montreal"] border-t-[1.6px] border-[#C1C1C1] '>
            {data.map((item,index)=>{
                return (

                <div className='py-4 px-14  border-b-[1.6px] border-[#C1C1C1] flex items-center justify-between'>
                    <h3 className='underline text-[1.2vw] w-[10vw]'>{item.name}</h3>
                    <div className='w-[10vw]'>
                        <h3 className='text-[1.2vw]'>{item.person}</h3>
                    </div>
                    <h3 className='underline text-[1.2vw] uppercase'>{item.read}</h3>
                </div>
                )
            })}
        </div>

        <div  className='flex px-14 mt-[6.8vw] gap-4'>
             <div className='w-[50%] bg-[#004D43] flex flex-col px-8 py-6 justify-between rounded-xl h-[58vh]'>
                 <div className='flex justify-center '>
                    <img className='w-[9.5vw] mt-[9vw]' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                 </div>
                 <div className='font-["Neue_Montreal"] text-[#CDEA68] border-[1.6px] w-fit rounded-full px-4 py-1 border-[#CDEA68]'>
                 &copy;2022-2025
                 </div>
             </div>

             <div className='w-[25%] bg-[#212121] flex flex-col px-8 py-6 justify-between rounded-xl h-[58vh]'>
                 <div className='flex justify-center '>
                    <img className='w-[9.5vw] mt-[9vw]' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                 </div>
                 <div className='font-["Neue_Montreal"] text-[#F4F4F4] border-[1.6px] w-fit rounded-full px-4 py-1 text-[1vw] tracking-tighter border-[#F4F4F4]'>
                 RATING 5.0 ON CLUTCH
                 </div>
             </div>
             <div className='w-[25%] bg-[#212121] flex flex-col px-8 py-6 justify-between rounded-xl h-[58vh]'>
                 <div className='flex justify-center '>
                    <img className='h-[7vw] w-[7vw] mt-[9vw]' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                 </div>
                 <div className='font-["Neue_Montreal"] text-[#F4F4F4] border-[1.6px] w-fit rounded-full px-4 py-1 text-[1vw] tracking-tighter border-[#F4F4F4]'>
                 BUSINESS BOOTCAMP ALUMNI
                 </div>
             </div>
        </div>

        

    </div>
  )
}

export default ClientReview