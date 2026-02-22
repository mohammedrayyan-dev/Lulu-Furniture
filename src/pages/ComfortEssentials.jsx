import BackArrow from "/src/assets/images/icons/BackArrowIcon.png"
import PillowsCushions from "/src/assets/images/ui/banners/products/comfort-essentials/pillows-cushions.webp"
import BeanBags from "/src/assets/images/ui/banners/products/comfort-essentials/bean-bags.webp"
import PoufsOttomans from "/src/assets/images/ui/banners/products/comfort-essentials/poufs-ottomans.webp"
import Footer from "../components/Footer.jsx"
import { useNavigate } from "react-router-dom"

const SofaCollections = [
    { name: "Pillows & Cushions", image: PillowsCushions, alt: "Pillows & Cushions", path: "/comfort-essentials" },
    { name: "Bean Bags", image: BeanBags, alt: "Bean Bags", path: "/comfort-essentials" },
    { name: "Poufs & Ottomans", image: PoufsOttomans, alt: "Poufs & Ottomans", path: "/comfort-essentials" },
]

const ComfortEssentials = () => {

    const navigate = useNavigate();

  return (
    <>
    
    {/* Sofa */}
    <div className="bg-white mt-5 lg:mt-10 mx-5 sm:mx-6 lg:mx-10">
    <div className="flex flex-row items-center space-x-4">
        <a href="/">
        <img src={BackArrow} alt="Back Arrow" className="w-[24px] lg:w-[28px] cursor-pointer" />
        </a>
        <h1 className="font-corinthia text-2xl lg:text-[40px] text-[#6B4C41] font-bold">
            Comfort Essentials
        </h1>
    </div>
    <div className="mt-5 lg:mt-0 border-t border-[#33333366]"/>

    <div className="flex flex-col mt-10 items-center space-y-6 lg:space-y-10">

        {SofaCollections.map((sofa) => (
        <div 
        onClick={() => navigate(sofa.path)}
        className="relative max-h-[140px] md:max-h-[350px] aspect-[12/5] md:aspect-[25/6] lg:aspect-[25/6] w-full cursor-pointer"
        >
        <img src={sofa.image} alt={sofa.alt} className="h-full w-full object-cover rounded-3xl" />
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

export default ComfortEssentials;
