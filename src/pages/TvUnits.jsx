import BackArrow from "/src/assets/images/ui/icons/BackArrowIcon.png"
import TVCabinetDecor from "/src/assets/images/products/tvunits/TvCabinetDoor.webp"
import TVStand from "/src/assets/images/products/tvunits/TvStand.webp"
import TVUnitDesign from "/src/assets/images/products/tvunits/TvUnitDesign.webp"
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const TvUnitCollections = [
    { name: "Wooden TV Units", image: TVCabinetDecor, alt: "Wooden TV Units", path: "/tv-units/wooden-tv-units" },
    { name: "TV Units with Storage", image: TVStand, alt: "TV Units with Storage", path: "/tv-units/tv-units-with-storage" },
    { name: "Wall Mounted TV Units", image: TVUnitDesign, alt: "Wall Mounted TV Units", path: "/tv-units/wall-mounted-tv-units" },
    { name: "Corner TV Units", image: TVUnitDesign, alt: "Corner TV Units", path: "/tv-units/corner-tv-units" },
]

const TvUnits = () => {

    const naviagte = useNavigate()

    useEffect(() => {
        document.title = "Tv Units | Lulu Furniture";
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
            Tv Units
        </h1>
    </div>
    <div className="mt-5 lg:mt-0 border-t border-[#33333366]" />

    <div className="flex flex-col mt-6 lg:mt-8 items-center gap-6 lg:gap-8">

        {TvUnitCollections.map((tv) => (
        <div 
        onClick={() => naviagte(tv.path)}
        className="relative h-[140px] md:h-[180px] lg:h-[320px] w-full cursor-pointer overflow-hidden rounded-3xl"
        >
        <img src={tv.image} alt={tv.alt} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[#00000030] hover:bg-[#00000045]" />
        <h3 className="absolute font-lato text-[#FFFFFF] text-xl lg:text-3xl bottom-4 lg:bottom-6 left-4 lg:left-8">
            {tv.name}
        </h3>
        </div>
        ))}
        </div>   
        </div>

    </div>
    </>
  )
}

export default TvUnits;
