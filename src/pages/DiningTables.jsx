import BackArrow from "/src/assets/images/ui/icons/BackArrowIcon.png"
import TeakWoodDiningTable from "/src/assets/images/products/diningtables/TeakWoodDiningTable.webp"
import RubberWoodDiningTable from "/src/assets/images/products/diningtables/RubberWoodDiningTable.webp"
import NeemWoodDiningTable from "/src/assets/images/products/diningtables/NeemWoodDiningTable.webp"
import CoffeeTable from "/src/assets/images/products/diningtables/CoffeeTable.webp"
import { useEffect } from "react";
import { Link } from "react-router-dom"

const DiningTableCollections = [
    { name: "Teak Wood Dining Table", image: TeakWoodDiningTable, alt: "Teak Wood Dining Table Image" },
    { name: "Rubber Wood Dining Table", image: RubberWoodDiningTable, alt: "Rubber Wood Dining Table Image" },
    { name: "Neem Wood Dining Table", image: NeemWoodDiningTable, alt: "Neem Wood Dining Table Image" },
    { name: "Coffee Table", image: CoffeeTable, alt: "Coffee Table Image" },
]

const DiningTables = () => {

    useEffect(() => {
        document.title = "Dining Tables | Lulu Furniture";
        }, []);
    
  return (
    <>
    <div className="bg-white mt-5 lg:mt-10 mx-5 sm:mx-6 lg:mx-10">
    
    <div className="max-w-7xl mx-auto">
    <div className="flex flex-row items-center space-x-4">
        <Link 
        to="/">
            <img src={BackArrow} alt="Back Arrow" className="w-[24px] lg:w-[28px] cursor-pointer" />
        </Link>
        <h1 className="font-corinthia text-2xl lg:text-[40px] text-[#6B4C41] font-bold">
            Dining Tables
        </h1>
    </div>
    <div className="mt-5 lg:mt-0 border-t border-[#33333366]" />

    <div className="flex flex-col mt-6 lg:mt-8 items-center gap-6 lg:gap-8">

        {DiningTableCollections.map((item) => (
        <div 
        className="relative h-[140px] md:h-[180px] lg:h-[320px] w-full cursor-pointer overflow-hidden rounded-3xl"
        >
        <img src={item.image} alt={item.alt} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[#00000030] hover:bg-[#00000045]" />
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

export default DiningTables;
