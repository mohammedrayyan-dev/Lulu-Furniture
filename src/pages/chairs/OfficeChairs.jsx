import BackArrow from "/src/assets/images/ui/icons/BackArrowIcon.png"
import MeshChair from "/src/assets/images/products/chairs/office-chairs/mesh-chair.webp"
import ErgonomicChair from "/src/assets/images/products/chairs/office-chairs/ergonomic-chair.webp"
import BossChair from "/src/assets/images/products/chairs/office-chairs/boss-chair.webp"
import { useEffect } from "react";
import { Link } from "react-router-dom"

const OfficeChairsCollections = [
    { name: "Mesh Chair", image: MeshChair, alt: "Teak Arm Chair" },
    { name: "Ergonomic Chair", image: ErgonomicChair, alt: "Sheesham Arm Chair" },
    { name: "Boss Chair", image: BossChair, alt: "Painted Arm Chair" },
]

const OfficeChairs = () => {

    useEffect(() => {
        document.title = "Office Chairs | Lulu Furniture";
    }, []);

  return (
    <>
    <div className="bg-white mt-5 lg:mt-10 mx-5 sm:mx-6 lg:mx-10">
        
    <div className="max-w-7xl mx-auto">
    <div className="flex flex-row items-center space-x-4">
        <Link 
        to="/chairs">
        <img src={BackArrow} alt="Back Arrow" className="w-[24px] lg:w-[28px] cursor-pointer" />
        </Link>
        <h1 className="font-corinthia text-2xl lg:text-[40px] text-[#6B4C41] font-bold">
            Office Chairs
        </h1>
    </div>
    <div className="mt-5 lg:mt-0 border-t border-[#33333366]"/>

    <div className="flex flex-col mt-6 lg:mt-8 items-center gap-6 lg:gap-8">

        {OfficeChairsCollections.map((chair) => (
        <div 
        className="relative h-[140px] md:h-[180px] lg:h-[320px] w-full overflow-hidden rounded-3xl"
        >
        <img src={chair.image} alt={chair.alt} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[#00000030]" />
        <h3 className="absolute font-lato text-[#FFFFFF] text-xl lg:text-3xl bottom-4 lg:bottom-6 left-4 lg:left-8">
            {chair.name}
        </h3>
        </div>
        ))}
        </div>
        </div>
        
    </div>
    </>
  )
}

export default OfficeChairs;