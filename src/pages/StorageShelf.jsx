import Arrow from "../assets/Arrow2.png"
import StorageTable from "../assets/StorageTable.png"
import DressingTable from "../assets/DressingTable.png"
import DressCupboard from "../assets/DressCupboard.png"
import Footer from "../components/Footer.jsx"
import { WhatsApp } from "../components/WhatsApp.jsx"

const StorageShelf = () => {
  return (
    <>
    {/* Whatsapp float */}
    <WhatsApp />

    {/* Storage Shelf */}
    <div className="bg-[#FFFFFF] mt-10 mx-15">
    <div className="flex flex-row items-center space-x-4">
        <a href="/">
            <img src={Arrow} alt="Arrow" onClick={"/"} className="h-[16px] cursor-pointer" />
        </a>
        <h1 className="font-corinthia text-[40px] text-[#6B4C41] font-bold">
            Storage Shelf
        </h1>
    </div>
    <div className="mb-10 border-t border-[#33333366]"></div>

    <div className="flex flex-col items-center space-y-10">
        <div className="relative">
        <img src={StorageTable} alt="Teak Wood Sofa" className="h-[300px] w-[1200px] rounded-3xl" />
        <div className="absolute inset-0 bg-[#00000030] hover:bg-[#00000045] rounded-3xl"></div>
        <h1 className="absolute font-lato text-[#FFFFFF] text-[30px] bottom-6 left-8">
            Storage Table
        </h1>
        </div>
        <div className="relative">
        <img src={DressingTable} alt="Teak Wood Sofa" className="h-[300px] w-[1200px] rounded-3xl" />
        <div className="absolute inset-0 bg-[#00000030] hover:bg-[#00000045] rounded-3xl"></div>
        <h1 className="absolute font-lato text-[#FFFFFF] text-[30px] bottom-6 left-8">
            Dressing Table
        </h1>
        </div>
        <div className="relative">
        <img src={DressCupboard} alt="Teak Wood Sofa" className="h-[300px] w-[1200px] rounded-3xl" />
        <div className="absolute inset-0 bg-[#00000030] hover:bg-[#00000045] rounded-3xl"></div>
        <h1 className="absolute font-lato text-[#FFFFFF] text-[30px] bottom-6 left-8">
            Dress Cupboard
        </h1>
        </div>
    </div>
    </div>
    <Footer />
    </>
  )
}

export default StorageShelf;
