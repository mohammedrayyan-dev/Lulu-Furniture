import BackArrow from "/src/assets/images/icons/BackArrowIcon.png"
import StorageTable from "/src/assets/images/icons/ui/banners/products/storageshelf/StorageTable.png"
import DressingTable from "/src/assets/images/icons/ui/banners/products/storageshelf/DressingTable.png"
import DressCupboard from "/src/assets/images/icons/ui/banners/products/storageshelf/DressCupboard.png"
import Footer from "../components/Footer.jsx"
import { WhatsApp } from "../components/Whatsapp.jsx"

const StorageShelf = () => {
  return (
    <>
    {/* Whatsapp float */}
    <WhatsApp />

    {/* Storage Shelf */}
    <div className="bg-[#FFFFFF]  mt-5 lg:mt-10 mx-5 md:mx-10 lg:mx-15">
    <div className="flex flex-row items-center space-x-4">
        <a href="/">
            <img src={BackArrow} alt="Back Arrow" onClick={"/"} className="w-[24px] lg:w-[28px] cursor-pointer" />
        </a>
        <h1 className="font-corinthia text-[24px] lg:text-[40px] text-[#6B4C41] font-bold">
            Storage Shelf
        </h1>
    </div>
    <div className="mb-10 mt-5 lg:mt-0 border-t border-[#33333366]"></div>

    <div className="flex flex-col items-center space-y-6 lg:space-y-10">
        <div className="relative">
        <img src={StorageTable} alt="Teak Wood Sofa" className="h-[165px] lg:h-[280px] w-[1200px] rounded-3xl" />
        <div className="absolute inset-0 bg-[#00000030] hover:bg-[#00000045] rounded-3xl"></div>
        <h1 className="absolute font-lato text-[#FFFFFF] text-[20px] lg:text-[30px] bottom-4 lg:bottom-6 left-4 lg:left-8">
            Storage Table
        </h1>
        </div>
        <div className="relative">
        <img src={DressingTable} alt="Teak Wood Sofa" className="h-[165px] lg:h-[280px] w-[1200px] rounded-3xl" />
        <div className="absolute inset-0 bg-[#00000030] hover:bg-[#00000045] rounded-3xl"></div>
        <h1 className="absolute font-lato text-[#FFFFFF] text-[20px] lg:text-[30px] bottom-4 lg:bottom-6 left-4 lg:left-8">
            Dressing Table
        </h1>
        </div>
        <div className="relative">
        <img src={DressCupboard} alt="Teak Wood Sofa" className="h-[165px] lg:h-[280px] w-[1200px] rounded-3xl" />
        <div className="absolute inset-0 bg-[#00000030] hover:bg-[#00000045] rounded-3xl"></div>
        <h1 className="absolute font-lato text-[#FFFFFF] text-[20px] lg:text-[30px] bottom-4 lg:bottom-6 left-4 lg:left-8">
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
