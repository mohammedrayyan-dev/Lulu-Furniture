import Arrow from "../assets/Arrow2.png"
import BabyBedCot from "../assets/BabyBedCot.png"
import WesternBedCot from "../assets/WesternBedCot.png"
import IndianBedCot from "../assets/IndianBedCot.png"
import LuxuryFabricBedCot from "../assets/LuxuryFabricBedCot.png"
import ChineseBedCot from "../assets/ChineseBedCot.png"
import Footer from "../components/Footer.jsx"
import { WhatsApp } from "../components/WhatsApp.jsx"

const BedCot = () => {
  return (
    <>
    {/* Whatsapp float */}
    <WhatsApp />

    {/* Bed Cot */}
    <div className="bg-[#FFFFFF] mt-10 mx-15">
    <div className="flex flex-row items-center space-x-4">
        <a href="/">
            <img src={Arrow} alt="Arrow" onClick={"/"} className="h-[16px] cursor-pointer" />
        </a>
        <h1 className="font-corinthia text-[40px] text-[#6B4C41] font-bold">
            Bed Cot
        </h1>
    </div>
    <div className="mb-10 border-t border-[#33333366]"></div>

    <div className="flex flex-col items-center space-y-10">
        <div className="relative">
        <img src={BabyBedCot} alt="Teak Wood Sofa" className="h-[300px] w-[1200px] rounded-3xl" />
        <div className="absolute inset-0 bg-[#00000030] hover:bg-[#00000045] rounded-3xl"></div>
        <h1 className="absolute font-lato text-[#FFFFFF] text-[30px] bottom-6 left-8">
            Teak Wood Sofa
        </h1>
        </div>
        <div className="relative">
        <img src={WesternBedCot} alt="Teak Wood Sofa" className="h-[300px] w-[1200px] rounded-3xl" />
        <div className="absolute inset-0 bg-[#00000030] hover:bg-[#00000045] rounded-3xl"></div>
        <h1 className="absolute font-lato text-[#FFFFFF] text-[30px] bottom-6 left-8">
            Rubber Wood Sofa
        </h1>
        </div>
        <div className="relative">
        <img src={IndianBedCot} alt="Teak Wood Sofa" className="h-[300px] w-[1200px] rounded-3xl" />
        <div className="absolute inset-0 bg-[#00000030] hover:bg-[#00000045] rounded-3xl"></div>
        <h1 className="absolute font-lato text-[#FFFFFF] text-[30px] bottom-6 left-8">
            Cushion Comfort Sofa
        </h1>
        </div>
        <div className="relative">
        <img src={LuxuryFabricBedCot} alt="Teak Wood Sofa" className="h-[300px] w-[1200px] rounded-3xl" />
        <div className="absolute inset-0 bg-[#00000030] hover:bg-[#00000045] rounded-3xl"></div>
        <h1 className="absolute font-lato text-[#FFFFFF] text-[30px] bottom-6 left-8">
            Fabric Sofa
        </h1>
        </div>
        <div className="relative">
        <img src={ChineseBedCot} alt="Teak Wood Sofa" className="h-[300px] w-[1200px] rounded-3xl" />
        <div className="absolute inset-0 bg-[#00000030] hover:bg-[#00000045] rounded-3xl"></div>
        <h1 className="absolute font-lato text-[#FFFFFF] text-[30px] bottom-6 left-8">
            Velvet Fabric Sofa
        </h1>
        </div>
    </div>
    </div>
    <Footer />
    </>
  )
}

export default BedCot;
