import Arrow from "../assets/Arrow2.png"
import TeakWoodSofa from "../assets/TeakWoodSofa.png"
import RubberWoodSofa from "../assets/RubberWoodSofa.png"
import CushionComfortSofa from "../assets/CushionComfortSofa.png"
import FabricSofa from "../assets/FabricSofa.png"
import VelvetFabricSofa from "../assets/VelvetFabricSofa.png"
import ReclinerLeatherSofa from "../assets/ReclinerLeatherSofa.png"
import TeakWoodFabricSofa from "../assets/TeakWoodFabricSofa.png"
import Footer from "../components/Footer.jsx"
import { WhatsApp } from "../components/WhatsApp.jsx"

const Sofa = () => {
  return (
    <>
    {/* Whatsapp float */}
    <WhatsApp />
    
    {/* Sofa */}
    <div className="bg-[#FFFFFF] mt-10 mx-15">
    <div className="flex flex-row items-center space-x-4">
        <a href="/">
        <img src={Arrow} alt="Arrow" onClick={"/"} className="h-[16px] cursor-pointer" />
        </a>
        <h1 className="font-corinthia text-[40px] text-[#6B4C41] font-bold">
            Sofa
        </h1>
    </div>
    <div className="mb-10 border-t border-[#33333366]"></div>

    <div className="flex flex-col items-center space-y-10">
        <div className="relative">
        <img src={TeakWoodSofa} alt="Teak Wood Sofa" className="h-[300px] w-[1200px] rounded-3xl" />
        <div className="absolute inset-0 bg-[#00000030] hover:bg-[#00000045] rounded-3xl"></div>
        <h1 className="absolute font-lato text-[#FFFFFF] text-[30px] bottom-6 left-8">
            Teak Wood Sofa
        </h1>
        </div>
        <div className="relative">
        <img src={RubberWoodSofa} alt="Teak Wood Sofa" className="h-[300px] w-[1200px] rounded-3xl" />
        <div className="absolute inset-0 bg-[#00000030] hover:bg-[#00000045] rounded-3xl"></div>
        <h1 className="absolute font-lato text-[#FFFFFF] text-[30px] bottom-6 left-8">
            Rubber Wood Sofa
        </h1>
        </div>
        <div className="relative">
        <img src={CushionComfortSofa} alt="Teak Wood Sofa" className="h-[300px] w-[1200px] rounded-3xl" />
        <div className="absolute inset-0 bg-[#00000030] hover:bg-[#00000045] rounded-3xl"></div>
        <h1 className="absolute font-lato text-[#FFFFFF] text-[30px] bottom-6 left-8">
            Cushion Comfort Sofa
        </h1>
        </div>
        <div className="relative">
        <img src={FabricSofa} alt="Teak Wood Sofa" className="h-[300px] w-[1200px] rounded-3xl" />
        <div className="absolute inset-0 bg-[#00000030] hover:bg-[#00000045] rounded-3xl"></div>
        <h1 className="absolute font-lato text-[#FFFFFF] text-[30px] bottom-6 left-8">
            Fabric Sofa
        </h1>
        </div>
        <div className="relative">
        <img src={VelvetFabricSofa} alt="Teak Wood Sofa" className="h-[300px] w-[1200px] rounded-3xl" />
        <div className="absolute inset-0 bg-[#00000030] hover:bg-[#00000045] rounded-3xl"></div>
        <h1 className="absolute font-lato text-[#FFFFFF] text-[30px] bottom-6 left-8">
            Velvet Fabric Sofa
        </h1>
        </div>
        <div className="relative">
        <img src={ReclinerLeatherSofa} alt="Teak Wood Sofa" className="h-[300px] w-[1200px] rounded-3xl" />
        <div className="absolute inset-0 bg-[#00000030] hover:bg-[#00000045] rounded-3xl"></div>
        <h1 className="absolute font-lato text-[#FFFFFF] text-[30px] bottom-6 left-8">
            Recliner Leather Sofa
        </h1>
        </div>
        <div className="relative">
        <img src={TeakWoodFabricSofa} alt="Teak Wood Sofa" className="h-[300px] w-[1200px] rounded-3xl" />
        <div className="absolute inset-0 bg-[#00000030] hover:bg-[#00000045] rounded-3xl"></div>
        <h1 className="absolute font-lato text-[#FFFFFF] text-[30px] bottom-6 left-8">
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
