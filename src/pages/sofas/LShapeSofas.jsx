import BackArrow from "/src/assets/images/ui/icons/BackArrowIcon.png"
import LeftHandLShape from "/src/assets/images/products/sofas/l-shape-sofas/left-hand-l-shape.webp"
import RightHandLShape from "/src/assets/images/products/sofas/l-shape-sofas/right-hand-l-shape.webp"
import UShapeSectional from "/src/assets/images/products/sofas/l-shape-sofas/u-shape-sectional.webp"
import { useEffect } from "react";
import { Link } from "react-router-dom";

const LShapeSofaCollections = [
    { name: "Left Hand L-Shape", image: LeftHandLShape, alt: "Left Hand L-Shape" },
    { name: "Right Hand L-Shape", image: RightHandLShape, alt: "Right Hand L-Shape" },
    { name: "U-Shape Sectional", image: UShapeSectional, alt: "U-Shape Sectional" },
]

const LShapeSofas = () => {

    useEffect(() => {
        document.title = "L-Shape Sofas | Lulu Furniture";
    }, []);

  return (
    <>
    <div className="bg-white mt-5 lg:mt-10 mx-5 sm:mx-6 lg:mx-10">

    <div className="max-w-7xl mx-auto">
    <div className="flex flex-row items-center space-x-4">
        <Link 
        to="/sofas">
        <img src={BackArrow} alt="Back Arrow" className="w-[24px] lg:w-[28px] cursor-pointer" />
        </Link>
        <h1 className="font-corinthia text-2xl lg:text-[40px] text-[#6B4C41] font-bold">
            L-Shape Sofas
        </h1>
    </div>
    <div className="mt-5 lg:mt-0 border-t border-[#33333366]"/>

    <div className="flex flex-col mt-6 lg:mt-8 items-center gap-6 lg:gap-8">

        {LShapeSofaCollections.map((sofa) => (
        <div 
        className="relative h-[140px] md:h-[180px] lg:h-[350px] w-full overflow-hidden rounded-3xl"
        >
        <img src={sofa.image} alt={sofa.alt} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[#00000030]" />
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

export default LShapeSofas;