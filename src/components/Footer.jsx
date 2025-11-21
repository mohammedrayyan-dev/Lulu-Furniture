import logo from "/src/assets/Logo.png"
import instagramIcon from "/src/assets/InstagramIcon.png"
import facebookIcon from "/src/assets/FacebookIcon.png"
import { Link } from "react-router-dom"

const Footer = () => {

  return (
    <div className="bg-[#DBD1C7] h-[430px] mt-[90px] flex flex-row justify-center space-x-20">

    <div className="pt-[50px]">
        <img src={logo} alt="LuluLogo"/>
        <p className="text-[#6F6F6F] mt-[32px] text-[19px] font-normal w-[502px]">
            At our store, we believe that furniture is more than just something you use — it’s what makes a house feel like a home. Every piece we create is made with care, using high-quality woods.
        </p>
        <div className="flex flex-row mt-[30px] space-x-3">
        <img src={instagramIcon} alt="InstagramIcon"/>
        <a 
        href="https://www.instagram.com/lulufurniture.official/" 
        className="font-dm text-[#6F6F6F] text-[16px]"
        target="_blank"> 
            Lulufurnitures.official
        </a>
        </div>
        <div className="flex flex-row mt-[25px] space-x-3">
        <img src={instagramIcon} alt="InstagramIcon"/>
        <a 
        href="mailto:officiallulufurnitures@gmail.com" 
        className="font-dm text-[#6F6F6F] text-[16px]"
        target="_blank"> 
            officiallulufurniture@gmail.com
        </a>
        </div>
    </div>

    <div className="flex flex-col space-y-8 pt-[50px]">
        <h2 className="font-corinthia text-[#6B4C41] text-[36px] font-bold">
            Explore
        </h2>
        <a href="/" className="font-dm text-[#6F6F6F] text-[19px]">
            Home
        </a>
        <a href="#products" className="font-dm text-[#6F6F6F] text-[19px]">
            Products
        </a>
        <a href="#feedback" className="font-dm text-[#6F6F6F] text-[19px]">
            Feedback
        </a>
        <a href="#aboutus" className="font-dm text-[#6F6F6F] text-[19px]">
            About us
        </a>
    </div>

    <div className="flex flex-col space-y-8 pt-[50px]">
        <h2 className="font-corinthia text-[#6B4C41] text-[36px] font-bold">
            Knowledge
        </h2>
        <Link to="/" className="font-dm text-[#6F6F6F] text-[19px]">
            FAQ
        </Link>
        <Link to="/" className="font-dm text-[#6F6F6F] text-[19px]">
            Return Policy
        </Link>
        <Link to="/" className="font-dm text-[#6F6F6F] text-[19px]">
            EMI
        </Link>
    </div>

    <div className="flex flex-col space-y-8 pt-[50px]">
        <h2 className="font-corinthia text-[#6B4C41] text-[36px] font-bold">
            Contact
        </h2>
        <div className="flex">
        <a
        href="https://wa.me/8754610386"
        target="_blank">
        <button className="bg-[#6B4C41] hover:bg-[#553C34] font-dm font-bold text-[14px] text-[#ffffff] rounded-3xl w-[160px] h-[48px] cursor-pointer">
            Customer Support
        </button>
        </a>
        </div>
        <h4 className="font-dm text-[#6F6F6F] text-[19px]">
            2nd Street, Nanjundeshwar Nagar, <br/>
            Near Ashok Pillor, <br/>
            Hosur - 635109.
        </h4>
    </div>

    </div>
  )
}

export default Footer;
