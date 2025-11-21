import Arrow from "../assets/Arrow2.png"
import TeakWoodDiningTable from "../assets/TeakWoodDiningTable.png"
import RubberWoodDiningTable from "../assets/RubberWoodDiningTable.png"
import NeemWoodDiningTable from "../assets/NeemWoodDiningTable.png"
import CoffeeTable from "../assets/CoffeeTable.png"
import Footer from "../components/Footer.jsx"
import { WhatsApp } from "../components/WhatsApp.jsx"

const DiningTable = () => {
  return (
    <>
    {/* Whatsapp float */}
    <WhatsApp />

    {/* Dining Table */}
    <div className="bg-[#FFFFFF] mt-10 mx-15">
    <div className="flex flex-row items-center space-x-4">
        <a href="/">
            <img src={Arrow} alt="Arrow" onClick={"/"} className="h-[16px] cursor-pointer" />
        </a>
        <h1 className="font-corinthia text-[40px] text-[#6B4C41] font-bold">
            Dining Table
        </h1>
    </div>
    <div className="mb-10 border-t border-[#33333366]"></div>

    <div className="flex flex-col items-center space-y-10">
        <div className="relative">
        <img src={TeakWoodDiningTable} alt="Teak Wood Sofa" className="h-[300px] w-[1200px] rounded-3xl" />
        <div className="absolute inset-0 bg-[#00000030] hover:bg-[#00000045] rounded-3xl"></div>
        <h1 className="absolute font-lato text-[#FFFFFF] text-[30px] bottom-6 left-8">
            Teak Wood Dining Table
        </h1>
        </div>
        <div className="relative">
        <img src={RubberWoodDiningTable} alt="Teak Wood Sofa" className="h-[300px] w-[1200px] rounded-3xl" />
        <div className="absolute inset-0 bg-[#00000030] hover:bg-[#00000045] rounded-3xl"></div>
        <h1 className="absolute font-lato text-[#FFFFFF] text-[30px] bottom-6 left-8">
            Rubber Wood Dining Table
        </h1>
        </div>
        <div className="relative">
        <img src={NeemWoodDiningTable} alt="Teak Wood Sofa" className="h-[300px] w-[1200px] rounded-3xl" />
        <div className="absolute inset-0 bg-[#00000030] hover:bg-[#00000045] rounded-3xl"></div>
        <h1 className="absolute font-lato text-[#FFFFFF] text-[30px] bottom-6 left-8">
            Neem Wood Dining Table
        </h1>
        </div>
        <div className="relative">
        <img src={CoffeeTable} alt="Teak Wood Sofa" className="h-[300px] w-[1200px] rounded-3xl" />
        <div className="absolute inset-0 bg-[#00000030] hover:bg-[#00000045] rounded-3xl"></div>
        <h1 className="absolute font-lato text-[#FFFFFF] text-[30px] bottom-6 left-8">
            Coffee Table
        </h1>
        </div>
    </div>
    </div>
    <Footer />
    </>
  )
}

export default DiningTable;
