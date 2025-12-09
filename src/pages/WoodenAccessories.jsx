import BackArrow from "/src/assets/images/icons/BackArrowIcon.png"
import WoodenChair from "/src/assets/images/icons/ui/banners/products/woodenaccessories/WoodenChair.png"
import Diwan from "/src/assets/images/icons/ui/banners/products/woodenaccessories/Diwan.png"
import OfficeChair from "/src/assets/images/icons/ui/banners/products/woodenaccessories/OfficeChair.png"
import BossChair from "/src/assets/images/icons/ui/banners/products/woodenaccessories/BossChair.png"
import DevotionalTable from "/src/assets/images/icons/ui/banners/products/woodenaccessories/DevotionalTable.png"
import Footer from "../components/Footer.jsx"
import { WhatsApp } from "../components/WhatsApp.jsx"

const WoodenAccessories = () => {
  return (
    <>
    {/* Whatsapp float */}
    <WhatsApp />

    {/* Wooden Accessories */}
    <div className="bg-[#FFFFFF] mt-5 lg:mt-10 mx-5 md:mx-10 lg:mx-15">
    <div className="flex flex-row items-center space-x-4">
        <a href="/">
            <img src={BackArrow} alt="Back Arrow" onClick={"/"} className="w-[24px] lg:w-[28px] cursor-pointer" />
        </a>
        <h1 className="font-corinthia text-[24px] lg:text-[40px] text-[#6B4C41] font-bold">
            Wooden Accessories
        </h1>
    </div>
    <div className="mb-10 mt-5 lg:mt-0 border-t border-[#33333366]"></div>

    <div className="flex flex-col items-center space-y-6 lg:space-y-10">
        <div className="relative">
        <img src={WoodenChair} alt="Teak Wood Sofa" className="h-[165px] lg:h-[280px] w-[1200px] rounded-3xl" />
        <div className="absolute inset-0 bg-[#00000030] hover:bg-[#00000045] rounded-3xl"></div>
        <h1 className="absolute font-lato text-[#FFFFFF] text-[20px] lg:text-[30px] bottom-4 lg:bottom-6 left-4 lg:left-8">
            Wooden Chair
        </h1>
        </div>
        <div className="relative">
        <img src={Diwan} alt="Teak Wood Sofa" className="h-[165px] lg:h-[280px] w-[1200px] rounded-3xl" />
        <div className="absolute inset-0 bg-[#00000030] hover:bg-[#00000045] rounded-3xl"></div>
        <h1 className="absolute font-lato text-[#FFFFFF] text-[20px] lg:text-[30px] bottom-4 lg:bottom-6 left-4 lg:left-8">
            Diwan
        </h1>
        </div>
        <div className="relative">
        <img src={OfficeChair} alt="Teak Wood Sofa" className="h-[165px] lg:h-[280px] w-[1200px] rounded-3xl" />
        <div className="absolute inset-0 bg-[#00000030] hover:bg-[#00000045] rounded-3xl"></div>
        <h1 className="absolute font-lato text-[#FFFFFF] text-[20px] lg:text-[30px] bottom-4 lg:bottom-6 left-4 lg:left-8">
            Office Chair
        </h1>
        </div>
        <div className="relative">
        <img src={BossChair} alt="Teak Wood Sofa" className="h-[165px] lg:h-[280px] w-[1200px] rounded-3xl" />
        <div className="absolute inset-0 bg-[#00000030] hover:bg-[#00000045] rounded-3xl"></div>
        <h1 className="absolute font-lato text-[#FFFFFF] text-[20px] lg:text-[30px] bottom-4 lg:bottom-6 left-4 lg:left-8">
            Boss Chair
        </h1>
        </div>
        <div className="relative">
        <img src={DevotionalTable} alt="Teak Wood Sofa" className="h-[165px] lg:h-[280px] w-[1200px] rounded-3xl" />
        <div className="absolute inset-0 bg-[#00000030] hover:bg-[#00000045] rounded-3xl"></div>
        <h1 className="absolute font-lato text-[#FFFFFF] text-[20px] lg:text-[30px] bottom-4 lg:bottom-6 left-4 lg:left-8">
            Devotional Table
        </h1>
        </div>
    </div>
    </div>
    <Footer />
    </>
  )
}

export default WoodenAccessories;
