import { Link } from "react-router-dom"
import logo from "/src/assets/Logo.png"

const Navbar = () => {
  return (
    <>
    
    {/* Navbar */}
    <div className="flex items-center">
    <div>
      <img src={logo} alt="LuluLogo" className="ml-[40px] mt-[30px]"/>
    </div>
    <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-6 bg-[#FFFFFF66] mt-[20px] h-[60px] w-[382px] rounded-full backdrop-blur-sm font-sans text-[#333333] px-[20px] py-[24px] font-semibold gap-6">
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
  
    </>
  )
}

export default Navbar;