import BackArrow from "/src/assets/images/ui/icons/BackArrowIcon.png"
import OfficeChairs from "/src/assets/images/products/chairs/office-chairs.webp"
import PlasticChairs from "/src/assets/images/products/chairs/plastic-chairs.webp"
import CushionedChairs from "/src/assets/images/products/chairs/cushioned-chairs.webp"
import { useNavigate, Link } from "react-router-dom"
import { useEffect } from "react";

const SofaCollections = [
    { name: "Office Chairs", image: OfficeChairs, alt: "Office Chairs", path: "/chairs/office-chairs" },
    { name: "Plastic Chairs", image: PlasticChairs, alt: "Plastic Chairs", path: "/chairs/plastic-chairs" },
    { name: "Cushioned Chairs", image: CushionedChairs, alt: "Cushioned Chairs", path: "/chairs/cushioned-chairs" },
]

const Chairs = () => {

    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Chairs | Lulu Furniture";
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
            Chairs
        </h1>
    </div>
    <div className="mt-5 lg:mt-0 border-t border-[#33333366]"/>

    <div className="flex flex-col mt-6 lg:mt-8 items-center gap-6 lg:gap-8">

        {SofaCollections.map((sofa) => (
        <div 
        onClick={() => navigate(sofa.path)}
        className="relative h-[140px] md:h-[180px] lg:h-[320px] w-full cursor-pointer overflow-hidden rounded-3xl"
        >
        <img src={sofa.image} alt={sofa.alt} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[#00000030] hover:bg-[#00000045]" />
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

export default Chairs;
