import BackArrow from "/src/assets/images/ui/icons/BackArrowIcon.png"
import TeakWoodSofa from "/src/assets/images/products/sofas/TeakWoodSofa.webp"
import RubberWoodSofa from "/src/assets/images/products/sofas/RubberWoodSofa.webp"
import CushionComfortSofa from "/src/assets/images/products/sofas/CushionComfortSofa.webp"
import FabricSofa from "/src/assets/images/products/sofas/FabricSofa.webp"
import VelvetSofa from "/src/assets/images/products/sofas/VelvetSofa.webp"
import ReclinerSofa from "/src/assets/images/products/sofas/ReclinerSofa.webp"
import LeatherSofa from "/src/assets/images/products/sofas/LeatherSofa.webp"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react";

const SofaCollections = [
    { name: "Teak Wood Sofas", image: TeakWoodSofa, alt: "Teak Wood Sofas Image", path: "/sofas/teak-wood" },
    { name: "Rubber Wood Sofas", image: RubberWoodSofa, alt: "Rubber Wood Sofas Image", path: "/sofas/rubber-wood" },
    { name: "Cushion Comfort Sofas", image: CushionComfortSofa, alt: "Cushion Comfort Sofas Image", path: "/sofas/cushion-comfort" },
    { name: "Fabric Sofas", image: FabricSofa,  alt: "Fabric Sofas Image", path: "/sofas/fabric" },
    { name: "Velvet Sofas", image: VelvetSofa, alt: "Velvet Sofas Image", path: "/sofas/velvet" },
    { name: "Recliner Sofas", image: ReclinerSofa, alt: "Recliner Sofas Image", path: "/sofas/recliner" },
    { name: "Leather / PU Sofas", image: LeatherSofa, alt: "Leather Sofas Image", path: "/sofas/leather-pu" } 
]

const Sofa = () => {

    const navigate = useNavigate();

    useEffect(() => {
    document.title = "Sofas | Lulu Furniture";
    }, []);

  return (
    <>
    <div className="bg-white mt-5 lg:mt-10 mx-5 sm:mx-6 lg:mx-10">
    <div className="max-w-7xl mx-auto">
    <div className="flex flex-row items-center gap-4">
        <a href="/">
        <img src={BackArrow} alt="Back Arrow" className="w-[24px] lg:w-[28px] cursor-pointer" />
        </a>
        <h1 className="font-corinthia text-2xl lg:text-[40px] text-[#6B4C41] font-bold">
            Sofas
        </h1>
    </div>
    <div className="mt-5 lg:mt-0 border-t border-[#33333366]"/>

    <div className="flex flex-col mt-6 lg:mt-8 items-center gap-6 lg:gap-8">

        {SofaCollections.map((sofa) => (
        <div 
        onClick={() => navigate(sofa.path)}
        className="relative h-[140px] md:h-[260px] lg:h-[350px] w-full cursor-pointer overflow-hidden"
        >
        <img src={sofa.image} alt={sofa.alt} className="w-full h-full object-cover rounded-3xl" />
        <div className="absolute inset-0 bg-[#00000030] hover:bg-[#00000045] rounded-3xl" />
        <h3 className="absolute font-lato text-[#FFFFFF] text-xl lg:text-3xl bottom-4 lg:bottom-6 left-4 lg:left-8">
            {sofa.name} 
        </h3>
        </div>
        ))}
        
    </div>
    </div>
    </div>
    </>
  )
}

export default Sofa;
