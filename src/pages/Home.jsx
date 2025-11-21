import Navbar from "/src/components/Navbar.jsx"
import HeroBanner from "/src/assets/HeroImage.png"
import WhatMakesUsDifferent from "/src/components/WhatMakesUsDifferent.jsx"
import MadeForYou from "../components/MadeForYou.jsx"
import OurCollections from "../components/OurCollections.jsx"
import AboutUs from "../components/AboutUs"
import Footer from "../components/Footer"
import CustomerFeedbacks from "../components/CustomerFeedbacks.jsx"
import { WhatsApp } from "../components/WhatsApp.jsx"

const Home = () => {
  return (
    <>
    {/* Whatsapp float */}
    <WhatsApp />
    
    {/* Navbar + Hero section */}
    <section id="navbar">
    <div className="bg-[#DBD1C7] h-dvh">
      <Navbar />
    <div className="flex  flex-col justify-center items-center mb-[20px]">
      <h1 className="font-lato font-normal text-[#333333] text-center text-[64px] pt-[100px]">
        Inspire. Design. Make It Yours.
      </h1>
      <img src={HeroBanner} alt="Hero Banner" className="pt-[2px] h-[450px]"/>
    </div>
    </div>
    </section>

    {/* What Makes Us Different */}
    <section id="whatmakesusdifferent">
      <WhatMakesUsDifferent />
    </section>

    {/* Made For You */}
    <section id="madeforyou">
      <MadeForYou />
    </section>

    {/* Our Collections */}
    <section id="products">
      <OurCollections />
    </section>

    {/* Customer Feedbacks */}
    <section id="feedback">
      <CustomerFeedbacks />
    </section>

    {/* About Us */}
    <section id="aboutus">
      <AboutUs />
    </section>

    {/* Footer */}
    <section id="footer">
      <Footer />
    </section>    
    </>
  )
}

export default Home