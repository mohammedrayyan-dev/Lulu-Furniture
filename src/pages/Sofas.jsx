import BackArrow from "/src/assets/images/icons/BackArrowIcon.png"
import TeakWoodSofa from "/src/assets/images/ui/banners/products/sofas/TeakWoodSofa.webp"
import RubberWoodSofa from "/src/assets/images/ui/banners/products/sofas/RubberWoodSofa.webp"
import CushionComfortSofa from "/src/assets/images/ui/banners/products/sofas/CushionComfortSofa.webp"
import FabricSofa from "/src/assets/images/ui/banners/products/sofas/FabricSofa.webp"
import VelvetSofa from "/src/assets/images/ui/banners/products/sofas/VelvetSofa.webp"
import ReclinerSofa from "/src/assets/images/ui/banners/products/sofas/ReclinerSofa.webp"
import LeatherSofa from "/src/assets/images/ui/banners/products/sofas/LeatherSofa.webp"
import Footer from "../components/Footer.jsx"
import { useNavigate } from "react-router-dom"

const SofaCollections = [
    { name: "Teak Wood Sofas", image: TeakWoodSofa, alt: "Teak Wood Sofas Image", path: "/sofas/teak-wood" },
    { name: "Rubber Wood Sofas", image: RubberWoodSofa, alt: "Rubber Wood Sofas Image", path: "/sofas" },
    { name: "Cushion Comfort Sofas", image: CushionComfortSofa, alt: "Cushion Comfort Sofas Image", path: "/sofas" },
    { name: "Fabric Sofas", image: FabricSofa,  alt: "Fabric Sofas Image", path: "/sofas" },
    { name: "Velvet Sofas", image: VelvetSofa, alt: "Velvet Sofas Image", path: "/sofas" },
    { name: "Recliner Sofas", image: ReclinerSofa, alt: "Recliner Sofas Image", path: "/sofas" },
    { name: "Leather / PU Sofas", image: LeatherSofa, alt: "Leather Sofas Image", path: "/sofas" } 
]

const Sofa = () => {

    const navigate = useNavigate();

  return (
    <>
    
    <div className="bg-white mt-5 lg:mt-10 mx-5 sm:mx-6 lg:mx-10">
    <div className="flex flex-row items-center space-x-4">
        <a href="/">
        <img src={BackArrow} alt="Back Arrow" className="w-[24px] lg:w-[28px] cursor-pointer" />
        </a>
        <h1 className="font-corinthia text-2xl lg:text-[40px] text-[#6B4C41] font-bold">
            Sofas
        </h1>
    </div>
    <div className="mt-5 lg:mt-0 border-t border-[#33333366]"/>

    <div className="flex flex-col mt-10 items-center space-y-6 lg:space-y-10">

        {SofaCollections.map((sofa) => (
        <div 
        onClick={() => navigate(sofa.path)}
        className="relative max-h-[140px] md:max-h-[350px] aspect-[8/4] md:aspect-[25/6] lg:aspect-[25/6] w-full cursor-pointer"
        >
        <img src={sofa.image} alt={sofa.alt} className="h-full w-full object-fit rounded-3xl" />
        <div className="absolute inset-0 bg-[#00000030] hover:bg-[#00000045] rounded-3xl" />
        <h3 className="absolute font-lato text-[#FFFFFF] text-xl lg:text-3xl bottom-4 lg:bottom-6 left-4 lg:left-8">
            {sofa.name}
        </h3>
        </div>
        ))}
        
    </div>
    </div>
    <Footer />
    </>
  )
}

export default Sofa;
