import Arrow from "../assets/Arrow2.png"
import WoodenChair from "../assets/WoodenChair.png"
import Diwan from "../assets/Diwan.png"
import OfficeChair from "../assets/OfficeChair.png"
import BossChair from "../assets/BossChair.png"
import DevotionalTable from "../assets/DevotionalTable.png"
import Footer from "../components/Footer.jsx"
import { WhatsApp } from "../components/WhatsApp.jsx"

const WoodenAccessories = () => {
  return (
    <>
    {/* Whatsapp float */}
    <WhatsApp />

    {/* Wooden Accessories */}
    <div className="bg-[#FFFFFF] mt-10 mx-15">
    <div className="flex flex-row items-center space-x-4">
        <a href="/">
            <img src={Arrow} alt="Arrow" onClick={"/"} className="h-[16px] cursor-pointer" />
        </a>
        <h1 className="font-corinthia text-[40px] text-[#6B4C41] font-bold">
            Wooden Accessories
        </h1>
    </div>
    <div className="mb-10 border-t border-[#33333366]"></div>

    <div className="flex flex-col items-center space-y-10">
        <div className="relative">
        <img src={WoodenChair} alt="Teak Wood Sofa" className="h-[300px] w-[1200px] rounded-3xl" />
        <div className="absolute inset-0 bg-[#00000030] hover:bg-[#00000045] rounded-3xl"></div>
        <h1 className="absolute font-lato text-[#FFFFFF] text-[30px] bottom-6 left-8">
            Wooden Chair
        </h1>
        </div>
        <div className="relative">
        <img src={Diwan} alt="Teak Wood Sofa" className="h-[300px] w-[1200px] rounded-3xl" />
        <div className="absolute inset-0 bg-[#00000030] hover:bg-[#00000045] rounded-3xl"></div>
        <h1 className="absolute font-lato text-[#FFFFFF] text-[30px] bottom-6 left-8">
            Diwan
        </h1>
        </div>
        <div className="relative">
        <img src={OfficeChair} alt="Teak Wood Sofa" className="h-[300px] w-[1200px] rounded-3xl" />
        <div className="absolute inset-0 bg-[#00000030] hover:bg-[#00000045] rounded-3xl"></div>
        <h1 className="absolute font-lato text-[#FFFFFF] text-[30px] bottom-6 left-8">
            Office Chair
        </h1>
        </div>
        <div className="relative">
        <img src={BossChair} alt="Teak Wood Sofa" className="h-[300px] w-[1200px] rounded-3xl" />
        <div className="absolute inset-0 bg-[#00000030] hover:bg-[#00000045] rounded-3xl"></div>
        <h1 className="absolute font-lato text-[#FFFFFF] text-[30px] bottom-6 left-8">
            Boss Chair
        </h1>
        </div>
        <div className="relative">
        <img src={DevotionalTable} alt="Teak Wood Sofa" className="h-[300px] w-[1200px] rounded-3xl" />
        <div className="absolute inset-0 bg-[#00000030] hover:bg-[#00000045] rounded-3xl"></div>
        <h1 className="absolute font-lato text-[#FFFFFF] text-[30px] bottom-6 left-8">
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
