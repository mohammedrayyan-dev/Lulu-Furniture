import BackArrow from "/src/assets/images/ui/icons/BackArrowIcon.png"
import OfficeChairs from "/src/assets/images/products/chairs/office-chairs.webp"
import DiningChairs from "/src/assets/images/products/chairs/dining-chairs.webp"
import LivingRoomChairs from "/src/assets/images/products/chairs/living-room-chairs.webp"
import PlasticChairs from "/src/assets/images/products/chairs/plastic-chairs.webp"
import WoodenChairs from "/src/assets/images/products/chairs/wooden-chairs.webp"
import KidsChairs from "/src/assets/images/products/chairs/kids-chairs.webp"
import OutdoorChairs from "/src/assets/images/products/chairs/outdoor-chairs.webp"
import CafeRestaurentChairs from "/src/assets/images/products/chairs/cafe-restaurant-chairs.webp"
import { useNavigate } from "react-router-dom"

const SofaCollections = [
    { name: "Office Chairs", image: OfficeChairs, alt: "Office Chairs", path: "/chairs" },
    { name: "Dining Chairs", image: DiningChairs, alt: "Dining Chairs", path: "/chairs" },
    { name: "Living Room Chairs", image: LivingRoomChairs, alt: "Living Room Chairs", path: "/chairs" },
    { name: "Plastic Chairs", image: PlasticChairs,  alt: "Plastic Chairs", path: "/chairs" },
    { name: "Wooden Chairs", image: WoodenChairs, alt: "Wooden Chairs", path: "/chairs" },
    { name: "Kids Chairs", image: KidsChairs, alt: "Kids Chairs", path: "/chairs" },
    { name: "Outdoor Chairs", image: OutdoorChairs, alt: "Outdoor Chairs", path: "/chairs" },
    { name: "Café / Restaurant Chairs", image: CafeRestaurentChairs, alt: "Café / Restaurant Chairs", path: "/chairs" },
]

const Chairs = () => {

    const navigate = useNavigate();

  return (
    <>
    <div className="bg-white mt-5 lg:mt-10 mx-5 sm:mx-6 lg:mx-10">
    <div className="flex flex-row items-center space-x-4">
        <a href="/">
        <img src={BackArrow} alt="Back Arrow" className="w-[24px] lg:w-[28px] cursor-pointer" />
        </a>
        <h1 className="font-corinthia text-2xl lg:text-[40px] text-[#6B4C41] font-bold">
            Chairs
        </h1>
    </div>
    <div className="mt-5 lg:mt-0 border-t border-[#33333366]"/>

    <div className="flex flex-col mt-6 lg:mt-8 items-center gap-6 lg:gap-8">

        {SofaCollections.map((sofa) => (
        <div 
        onClick={() => navigate(sofa.path)}
        className="relative h-[140px] md:h-[260px] lg:h-[350px] w-full cursor-pointer overflow-hidden"
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
    </>
  )
}

export default Chairs;
