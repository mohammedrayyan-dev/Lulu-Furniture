import BackArrow from "/src/assets/images/ui/icons/BackArrowIcon.png"
import PillowsCushions from "/src/assets/images/products/comfort-essentials/pillows-cushions.webp"
import BeanBags from "/src/assets/images/products/comfort-essentials/bean-bags.webp"
import PoufsOttomans from "/src/assets/images/products/comfort-essentials/poufs-ottomans.webp"
import { useNavigate } from "react-router"
import { useEffect } from "react";

const ComfortCollections = [
    { name: "Pillows & Cushions", image: PillowsCushions, alt: "Pillows & Cushions", path: "/comfort-essentials" },
    { name: "Bean Bags", image: BeanBags, alt: "Bean Bags", path: "/comfort-essentials" },
    { name: "Poufs & Ottomans", image: PoufsOttomans, alt: "Poufs & Ottomans", path: "/comfort-essentials" },
]

const ComfortEssentials = () => {

    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Comfort Essentials | Lulu Furniture";
    }, []);

  return (
    <>
    <div className="bg-white mt-5 lg:mt-10 mx-5 sm:mx-6 lg:mx-10">
    <div className="flex flex-row items-center gap-4">
        <a href="/">
        <img src={BackArrow} alt="Back Arrow" className="w-[24px] lg:w-[28px] cursor-pointer" />
        </a>
        <h1 className="font-corinthia text-2xl lg:text-[40px] text-[#6B4C41] font-bold">
            Comfort Essentials
        </h1>
    </div>
    <div className="mt-5 lg:mt-0 border-t border-[#33333366]"/>

    <div className="flex flex-col mt-6 lg:mt-8 items-center gap-6 lg:gap-8">

        {ComfortCollections.map((comfort) => (
        <div 
        onClick={() => navigate(comfort.path)}
        className="relative h-[140px] md:h-[260px] lg:h-[350px] w-full cursor-pointer overflow-hidden"
        >
        <img src={comfort.image} alt={comfort.alt} className="w-full h-full object-cover object-top rounded-3xl" />
        <div className="absolute inset-0 bg-[#00000030] hover:bg-[#00000045] rounded-3xl" />
        <h3 className="absolute font-lato text-[#FFFFFF] text-xl lg:text-3xl bottom-4 lg:bottom-6 left-4 lg:left-8">
            {comfort.name}
        </h3>
        </div>
        ))}
        
    </div>
    </div>
    </>
  )
}

export default ComfortEssentials;
