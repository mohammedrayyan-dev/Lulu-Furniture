import Navbar from "/src/components/Navbar.jsx"
import HeroBanner from "/src/assets/images/ui/banners/HeroBanner.webp"
import MobileView from "/src/assets/images/ui/banners/MobileViewHeroBanner.webp"
import WhatMakesUsDifferent from "/src/components/WhatMakesUsDifferent.jsx"
import MadeForYou from "../components/MadeForYou.jsx"
import OurCollections from "../components/OurCollections.jsx"
import AboutUs from "../components/AboutUs"
import CustomerFeedbacks from "../components/CustomerFeedbacks.jsx"
import { useEffect } from "react";
import { useLocation } from "react-router";

const Home = () => {

  const { hash, pathname } = useLocation();

useEffect(() => {
  if (pathname !== "/") return;
  if (!hash) return;

  const element = document.querySelector(hash);

  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}, [hash, pathname]);


  useEffect(() => {
    if (location.hash === "#products") {
      document.title = "Products | Lulu Furniture";
    } else if (location.hash === "#feedback") {
      document.title = "Customer Feedback | Lulu Furniture";
    } else if (location.hash === "#aboutus") {
      document.title = "About Lulu Furniture";
    } else {
      document.title = "Lulu Furniture | Premium Wooden Furniture";
    }
  }, [location]);

  return (
    <>
    
    {/* Navbar + Hero section */}
    <section id="navbar">
      
    <div className="bg-[#DBD1C7] to-white px-5 sm:px-6 lg:px-10 min-h-[100vh] lg:min-h-[110vh]">
      <div className ="max-w-[1400px] mx-auto">
      <Navbar />
    <div className="flex flex-col justify-center items-center mb-[20px]">
      <h1 className="font-lato font-normal text-[#333333] text-center text-2xl md:text-5xl lg:text-6xl pt-[40px] md:pt-[70px] lg:pt-[80px]">
        Inspire. Design. Make It Yours.
      </h1>
      <div className="hidden md:block pt-[35px] w-full max-w-[1250px] pb-[30px]">
      <img src={HeroBanner} alt="Hero Banner" className="w-full h-auto object-cover"/>
      </div>
      <div className="block md:hidden pt-[20px]">
      <img src={MobileView} alt="Hero Banner" className="w-full h-auto"/>
      </div>
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

    </>
  )
}

export default Home