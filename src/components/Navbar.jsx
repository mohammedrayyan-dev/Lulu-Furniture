import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import logo from "/src/assets/images/ui/icons/LulufurnitureLogo.png"
import HamBurgerMenu from "/src/assets/images/ui/icons/HamBurgerMenu.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isFloating, setIsFloating] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsFloating(window.scrollY > 120)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <div className="flex items-center justify-between">

        {/* Logo */}
        <img
          src={logo}
          alt="LuluLogo"
          className="mt-[15px] lg:ml-[40px] lg:mt-[30px] h-[53px] md:h-[54px] md:w-[78px] lg:h-[64px] lg:w-[98px]"
        />

        {/* Desktop Nav */}
        <div
          className={`
          hidden md:flex md:items-center md:bg-[#FFFFFF40] md:h-[60px] md:w-[382px]
          md:rounded-full md:backdrop-blur-md md:z-50 md:transition-all md:duration-300
          md:fixed md:left-1/2 md:-translate-x-1/2
          ${isFloating ? "md:top-5" : "md:top-[20px] lg:top-[30px]"}
          bg-white shadow-md
          `}
        >
          <nav className="font-sans flex flex-row gap-6 text-[#333333] px-[20px] py-[24px] font-semibold">
            <Link 
            to=""
            className="hover:text-[#000000]"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Home
            </Link>
            <Link 
            to="/#products"
            className="hover:text-[#000000]">
              Products
            </Link>
            <Link 
            to="/#feedback"
            className="hover:text-[#000000]">
              Feedback
            </Link>
            <Link 
            to="/#aboutus"
            className="hover:text-[#000000]">
              About Us
            </Link>
          </nav>
        </div>

        {/* Hamburger */}
        <div className="relative sm:block mt-[10px]">
          <img
            src={HamBurgerMenu}
            alt="Menu"
            onClick={() => setIsOpen(!isOpen)}
            className="w-[22px] md:hidden"
          />

          {isOpen && (
            <nav className="absolute md:hidden top-full right-0 pt-[12px] flex flex-col gap-2 bg-[#FFFFFF66] text-[16px] backdrop-blur-sm mt-[20px] h-[152px] w-[124px] md:w-[120px] rounded-xl font-sans text-[#333333] px-[20px] py-[14px] font-semibold">
              <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/#products" onClick={() => setIsOpen(false)}>Products</Link>
              <Link to="/#feedback" onClick={() => setIsOpen(false)}>Feedback</Link>
              <Link to="/#aboutus" onClick={() => setIsOpen(false)}>About Us</Link>
            </nav>
          )}
        </div>

      </div>
    </>
  )
}

export default Navbar