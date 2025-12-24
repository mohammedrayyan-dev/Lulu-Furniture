import Navbar from "/src/components/Navbar.jsx"
import HeroBanner from "/src/assets/images/ui/banners/HeroBanner.webp"
import MobileView from "/src/assets/images/ui/banners/MobileViewHeroBanner.webp"
import WhatMakesUsDifferent from "/src/components/WhatMakesUsDifferent.jsx"
import MadeForYou from "../components/MadeForYou.jsx"
import OurCollections from "../components/OurCollections.jsx"
import AboutUs from "../components/AboutUs"
import Footer from "../components/Footer"
import CustomerFeedbacks from "../components/CustomerFeedbacks.jsx"
import { WhatsApp } from "/src/components/Whatsapp.jsx"
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  return (
    <>
    {/* Whatsapp float */}
    <WhatsApp />
    
    {/* Navbar + Hero section */}
    <section id="navbar">
    <div className="bg-[#DBD1C7] px-5 sm:px-6 lg:px-10 min-h-[150svh] min-h-screen">
      <Navbar />
    <div className="flex flex-col justify-center items-center mb-[20px]">
      <h1 className="font-lato font-normal text-[#333333] text-center text-2xl md:text-5xl lg:text-6xl pt-[40px] md:pt-[70px] lg:pt-[80px]">
        Inspire. Design. Make It Yours.
      </h1>
      <div className="hidden md:block pt-[40px] md:aspect-[4/3] lg:aspect-[16/9] lg:max-w-[1250px] oveflow-hidden pb-[30px]">
      <img src={HeroBanner} alt="Hero Banner" className="h-full w-full"/>
      </div>
      <div className="block md:hidden pt-[20px]">
      <img src={MobileView} alt="Hero Banner" className="h-full w-full"/>
      </div>
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