import BackArrow from "/src/assets/images/icons/BackArrowIcon.png"
import TeakWoodSofa from "/src/assets/images/icons/ui/banners/products/sofa/TeakWoodSofa.png"
import RubberWoodSofa from "/src/assets/images/icons/ui/banners/products/sofa/RubberWoodSofa.png"
import CushionComfortSofa from "/src/assets/images/icons/ui/banners/products/sofa/CushionComfortSofa.png"
import FabricSofa from "/src/assets/images/icons/ui/banners/products/sofa/FabricSofa.png"
import VelvetFabricSofa from "/src/assets/images/icons/ui/banners/products/sofa/VelvetFabricSofa.png"
import ReclinerLeatherSofa from "/src/assets/images/icons/ui/banners/products/sofa/ReclinerLeatherSofa.png"
import TeakWoodFabricSofa from "/src/assets/images/icons/ui/banners/products/sofa/TeakWoodFabricSofa.png"
import Footer from "../components/Footer.jsx"
import { WhatsApp } from "../components/Whatsapp.jsx"

const Sofa = () => {
  return (
    <>
    {/* Whatsapp float */}
    <WhatsApp />
    
    {/* Sofa */}
    <div className="bg-[#FFFFFF] mt-5 lg:mt-10 mx-5 md:mx-10 lg:mx-15">
    <div className="flex flex-row items-center space-x-4">
        <a href="/">
        <img src={BackArrow} alt="Back Arrow" onClick={"/"} className="w-[24px] lg:w-[28px] cursor-pointer" />
        </a>
        <h1 className="font-corinthia text-[24px] lg:text-[40px] text-[#6B4C41] font-bold">
            Sofa
        </h1>
    </div>
    <div className="mb-10 mt-5 lg:mt-0 border-t border-[#33333366]"/>

    <div className="flex flex-col items-center space-y-6 lg:space-y-10">
        <div className="relative">
        <img src={TeakWoodSofa} alt="Teak Wood Sofa" className="h-[165px] lg:h-[280px] w-[1200px] rounded-3xl" />
        <div className="absolute inset-0 bg-[#00000030] hover:bg-[#00000045] rounded-3xl"></div>
        <h1 className="absolute font-lato text-[#FFFFFF] text-[20px] lg:text-[30px] bottom-4 lg:bottom-6 left-4 lg:left-8">
            Teak Wood Sofa
        </h1>
        </div>
        <div className="relative">
        <img src={RubberWoodSofa} alt="Teak Wood Sofa" className="h-[165px] lg:h-[280px] w-[1200px] rounded-3xl" />
        <div className="absolute inset-0 bg-[#00000030] hover:bg-[#00000045] rounded-3xl"></div>
        <h1 className="absolute font-lato text-[#FFFFFF] text-[20px] lg:text-[30px] bottom-4 lg:bottom-6 left-4 lg:left-8">
            Rubber Wood Sofa
        </h1>
        </div>
        <div className="relative">
        <img src={CushionComfortSofa} alt="Teak Wood Sofa" className="h-[165px] lg:h-[280px] w-[1200px] rounded-3xl" />
        <div className="absolute inset-0 bg-[#00000030] hover:bg-[#00000045] rounded-3xl"></div>
        <h1 className="absolute font-lato text-[#FFFFFF] text-[20px] lg:text-[30px] bottom-4 lg:bottom-6 left-4 lg:left-8">
            Cushion Comfort Sofa
        </h1>
        </div>
        <div className="relative">
        <img src={FabricSofa} alt="Teak Wood Sofa" className="h-[165px] lg:h-[280px] w-[1200px] rounded-3xl" />
        <div className="absolute inset-0 bg-[#00000030] hover:bg-[#00000045] rounded-3xl"></div>
        <h1 className="absolute font-lato text-[#FFFFFF] text-[20px] lg:text-[30px] bottom-4 lg:bottom-6 left-4 lg:left-8">
            Fabric Sofa
        </h1>
        </div>
        <div className="relative">
        <img src={VelvetFabricSofa} alt="Teak Wood Sofa" className="h-[165px] lg:h-[280px] w-[1200px] rounded-3xl" />
        <div className="absolute inset-0 bg-[#00000030] hover:bg-[#00000045] rounded-3xl"></div>
        <h1 className="absolute font-lato text-[#FFFFFF] text-[20px] lg:text-[30px] bottom-4 lg:bottom-6 left-4 lg:left-8">
            Velvet Fabric Sofa
        </h1>
        </div>
        <div className="relative">
        <img src={ReclinerLeatherSofa} alt="Teak Wood Sofa" className="h-[165px] lg:h-[280px] w-[1200px] rounded-3xl" />
        <div className="absolute inset-0 bg-[#00000030] hover:bg-[#00000045] rounded-3xl"></div>
        <h1 className="absolute font-lato text-[#FFFFFF] text-[20px] lg:text-[30px] bottom-4 lg:bottom-6 left-4 lg:left-8">
            Recliner Leather Sofa
        </h1>
        </div>
        <div className="relative">
        <img src={TeakWoodFabricSofa} alt="Teak Wood Sofa" className="h-[165px] lg:h-[280px] w-[1200px] rounded-3xl" />
        <div className="absolute inset-0 bg-[#00000030] hover:bg-[#00000045] rounded-3xl"></div>
        <h1 className="absolute font-lato text-[#FFFFFF] text-[20px] lg:text-[30px] bottom-4 lg:bottom-6 left-4 lg:left-8">
            Teak Wood Fabric Sofa
        </h1>
        </div>
    </div>
    </div>
    <Footer />
    </>
  )
}

export default Sofa;
