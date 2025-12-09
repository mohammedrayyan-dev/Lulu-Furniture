import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import logo from "/src/assets/images/icons/LulufurnitureLogo.png"
import HamBurgerMenu from "/src/assets/images/icons/HamBurgerMenu.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;

      if (window.scrollY > 120) {
        setIsFloating(true);
      } else {
        setIsFloating(false);
      }
    };

    window.addEventListener("sroll", handleScroll, {passive: true});
    document.addEventListener("scroll", handleScroll, {passive: true});

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
    
    {/* Navbar */}
    <div className="flex relative items-center justify-between">
    <div>
      <img src={logo} alt="LuluLogo" className="ml-[20px] mt-[15px] lg:ml-[40px] lg:mt-[30px] h-[40px] md:h-[50px] md:w-[78px] lg:w-[98px]"/>
    </div>
    <div
    className={`
    w-full z-50 transition-all duration-300 fixed ${isFloating ? "top-5" : "top-[15px] lg:top-[30px]"} bg-white shadow-md
    `}>
    <div className="hidden lg:absolute lg:flex lg:items-center lg:gap-6 lg:bg-[#FFFFFF66] lg:h-[60px] lg:w-[382px] lg:rounded-full lg:backdrop-blur-sm lg:font-sans lg:text-[#333333] lg:px-[20px] lg:py-[24px] lg:font-semibold lg:left-1/2 lg:transform lg:-translate-x-1/2">
    <a href="/">
    Home
    </a>
    <a href="#products">
    Products
    </a>
    <a href="#feedback">
    Feedback
    </a>
    <a href="#aboutus">
    About Us
    </a>
    </div>
    </div>

    {/* Hamburger */}
    <div className="relative sm:block mr-[20px] mt-[10px]">
      <img src={HamBurgerMenu}
      alt="Menu"
      onClick={() => setIsOpen(!isOpen)}
      className="w-[24px] lg:hidden" />
    { isOpen && (
    <div className="absolute lg:hidden top-full right-0 pt-[12px] flex flex-col md:pl-[65px] gap-2 bg-[#FFFFFF66] text-[16px] backdrop-blur-sm mt-[20px] h-[152px] w-[124px] md:w-[200px] rounded-xl font-sans text-[#333333] px-[20px] py-[140x] font-semibold">
    <a href="/">
    Home
    </a>
    <a href="#products">
    Products
    </a>
    <a href="#feedback">
    Feedback
    </a>
    <a href="#aboutus">
    About Us
    </a>
    </div>
    )}
    </div>
    </div>

    </>
  )
}

export default Navbar;