import React from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import Marquee from './Components/Marquee'
import About from './Components/About'
import Eyes from './Components/Eyes'
import FeaturedProjects from './Components/FeaturedProjects'
import ClientReview from './Components/ClientReview'
import ReadyProjectWithEyes from './Components/ReadyProjectWithEyes'
import Footer from './Components/Footer'
import LocomotiveScroll from 'locomotive-scroll';
function App() {


const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full text-black h-screen bg-[#F1F1F1]'>

    <Navbar/>
    <LandingPage/>
    <Marquee />
    <About />
    <Eyes />
    <FeaturedProjects/>
    <ClientReview/>
    <ReadyProjectWithEyes/>
    <Footer/>

    </div>
  )
}

export default App