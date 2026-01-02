import LuluLogo from "/src/assets/images/icons/LulufurnitureLogo.png"
import InstagramIcon from "/src/assets/images/icons/InstagramIcon.png"
import MailIcon from "/src/assets/images/icons/MailIcon.png"
import { Link } from "react-router-dom"
import GoogleMaps from "./GoogleMaps"

const Footer = () => {

  return (
    <div className="bg-[#DBD1C7] px-5 sm:px-6 lg:px-10">
    <div className="h-[auto] pb-[40px] lg:h-[auto] lg:max-w-screen-2xl mt-[40px] lg:mt-[90px] flex flex-col lg:flex-row justify-center gap-10 lg:gap-20">
    
    {/* Lulu Furntirue Info */}
    <div className="pt-[25px] lg:pt-[50px]">
        <img src={LuluLogo} 
        alt="Lulu Logo" 
        className="w-[64px] lg:w-[98px]"
        />
        <p className="text-[#6F6F6F] text-justify pt-[18px] lg:pt-[32px] text-sm lg:text-lg font-normal max-w-xl md:max-w-full lg:max-w-md">
            At our store, we believe that furniture is more than just something you use — it’s what makes a house feel like a home. Every piece we create is made with care, using high-quality woods.
        </p>

        <div className="flex flex-row pt-[20px] lg:pt-[30px] space-x-3">
        <img src={InstagramIcon} 
        alt="InstagramIcon" 
        className="w-[18px] lg:w-[24px]"/>
        <a 
        href="https://www.instagram.com/lulufurniture.official/" 
        className="font-dm text-[#6F6F6F] text-[12px] lg:text-[16px]"
        target="_blank"> 
            Lulufurnitures.official
        </a>
        </div>

        <div className="flex flex-row pt-[18px] lg:pt-[25px] space-x-3">
        <img src={MailIcon} 
        alt="InstagramIcon" 
        className="w-[18px] lg:w-[24px]"
        />
        <a 
        href="mailto:officiallulufurnitures@gmail.com" 
        className="font-dm text-[#6F6F6F] text-[12px] lg:text-[16px]"
        target="_blank"> 
            officiallulufurnitures@gmail.com
        </a>
        </div>
    </div>

    <div className="flex flex-col md:flex md:flex-row  md:gap-35 lg:gap-20">
    <div className="flex flex-row gap-25 md:gap-35 lg:gap-20">
    
    {/* Explore */}
    <div className="flex flex-col space-y-4 lg:space-y-8 lg:pt-[50px]">
        <h2 className="font-corinthia text-[#6B4C41] text-[24px] lg:text-[36px] font-bold">
            Explore
        </h2>
        <Link to="/" className="font-dm text-[#6F6F6F] text-[14px] lg:text-[18px]">
            Home
        </Link>
        <Link to="/#products" className="font-dm text-[#6F6F6F] text-[14px] lg:text-[18px]">
            Products
        </Link>
        <Link to="/#feedback" className="font-dm text-[#6F6F6F] text-[14px] lg:text-[18px]">
            Feedback
        </Link>
        <Link to="/#aboutus" className="font-dm text-[#6F6F6F] text-[14px] lg:text-[18px]">
            About us
        </Link>
    </div>

    {/* Knowledge */}
    <div className="flex flex-col space-y-4 lg:space-y-8 lg:pt-[50px]">
        <h2 className="font-corinthia text-[#6B4C41] text-[24px] lg:text-[36px] font-bold">
            Knowledge
        </h2>
        <Link to="/" className="font-dm text-[#6F6F6F] text-[14px] lg:text-[18px]">
            FAQ
        </Link>
        <Link to="/" className="font-dm text-[#6F6F6F] text-[14px] lg:text-[18px]">
            Return Policy
        </Link>
        <Link to="/" className="font-dm text-[#6F6F6F] text-[14px] lg:text-[18px]">
            EMI
        </Link>
    </div>
    </div>

    <div className="flex flex-col space-y-4 lg:space-y-8 pt-[30px] md:pt-[0px] lg:pt-[50px]">
        <h2 className="font-corinthia text-[#6B4C41] text-[24px] lg:text-[36px] font-bold">
            Contact
        </h2>
        <div className="flex">
        <a
        href="https://wa.me/918220137877"
        target="_blank">
        <button className="bg-[#6B4C41] hover:bg-[#553C34] font-semibold font-dm text-[12px] lg:text-[14px] text-[#ffffff] rounded-3xl w-[130px] lg:w-[160px] h-[48px] cursor-pointer">
            Customer Support
        </button>
        </a>
        </div>
        <h4 className="font-dm text-[#6F6F6F] max-w-md lg:max-w-xs text-[14px] lg:text-[18px]">
            2nd Street, Nanjundeshwar Nagar, <br/>
            Near Ashok Pillor, <br/>
            Hosur - 635109.
        </h4>
        <section>
            <GoogleMaps/>
        </section>
    </div>
    </div>

    </div>
    </div>
  )
}

export default Footer;
