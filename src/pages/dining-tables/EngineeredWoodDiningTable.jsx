import BackArrow from "/src/assets/images/ui/icons/BackArrowIcon.png"
import BlackPU from "/src/assets/images/products/sofas/leather-sofas/black-pu.webp"
import BrownPU from "/src/assets/images/products/sofas/leather-sofas/brown-pu.webp"
import CreamPU from "/src/assets/images/products/sofas/leather-sofas/cream-pu.webp"
import { useEffect } from "react";
import { Link } from "react-router-dom"

const EngineeredWoodDiningTableCollections = [
    { name: "Plain Top", image: BlackPU, alt: "Plain Top" },
    { name: "Laminate Finish", image: BrownPU, alt: "Laminate Finish" },
    { name: "High Gloss Finish", image: CreamPU, alt: "High Gloss Finish" },
]

const EngineeredWoodDiningTable = () => {

    useEffect(() => {
        document.title = "Engineered Wood Dining Table | Lulu Furniture";
    }, []);

  return (
    <>
    <div className="bg-white mt-5 lg:mt-10 mx-5 sm:mx-6 lg:mx-10">
        
    <div className="max-w-7xl mx-auto">
    <div className="flex flex-row items-center space-x-4">
        <Link 
        to="/dining-tables">
        <img src={BackArrow} alt="Back Arrow" className="w-[24px] lg:w-[28px] cursor-pointer" />
        </Link>
        <h1 className="font-corinthia text-2xl lg:text-[40px] text-[#6B4C41] font-bold">
            Engineered Wood Dining Table
        </h1>
    </div>
    <div className="mt-5 lg:mt-0 border-t border-[#33333366]"/>

    <div className="flex flex-col mt-6 lg:mt-8 items-center gap-6 lg:gap-8">

        {EngineeredWoodDiningTableCollections.map((item) => (
        <div 
        className="relative h-[140px] md:h-[180px] lg:h-[320px] w-full overflow-hidden rounded-3xl"
        >
        <img src={item.image} alt={item.alt} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[#00000030]" />
        <h3 className="absolute font-lato text-[#FFFFFF] text-xl lg:text-3xl bottom-4 lg:bottom-6 left-4 lg:left-8">
            {item.name}
        </h3>
        </div>
        ))}
        </div>
        </div>
        
    </div>
    </>
  )
}

export default EngineeredWoodDiningTable;