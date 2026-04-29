import BackArrow from "/src/assets/images/ui/icons/BackArrowIcon.png"
import BerowsWithMirror from "/src/assets/images/products/berows/berows-with-mirror.webp"
import BerowsWithDrawers from "/src/assets/images/products/berows/berows-with-drawers.webp"
import SlidingDoorBerows from "/src/assets/images/products/berows/sliding-door-berows.webp"
import { useNavigate, Link } from "react-router-dom"
import { useEffect } from "react";

const BerowsCollections = [
    { name: "Berows with Mirror", image: BerowsWithMirror, alt: "Berows with Mirror", path: "/berows/berows-with-mirror" },
    { name: "Berows with Drawers", image: BerowsWithDrawers, alt: "Berows with Drawers", path: "/berows/berows-with-drawers" },
    { name: "Sliding Door Berows", image: SlidingDoorBerows, alt: "Sliding Door Berows", path: "/berows/sliding-door-berows" },
]

const Berows = () => {

    const navigate = useNavigate();

    useEffect(() => {
    document.title = "Berows | Lulu Furniture";
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
            Berows
        </h1>
    </div>
    <div className="mt-5 lg:mt-0 border-t border-[#33333366]"/>

    <div className="flex flex-col mt-6 lg:mt-8 items-center gap-6 lg:gap-8">

        {BerowsCollections.map((berow) => (
        <div 
        onClick={() => navigate(berow.path)}
        className="relative h-[140px] md:h-[180px] lg:h-[320px] w-full cursor-pointer overflow-hidden rounded-3xl"
        >
        <img src={berow.image} alt={berow.alt} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[#00000030] hover:bg-[#00000045]" />
        <h3 className="absolute font-lato text-[#FFFFFF] text-xl lg:text-3xl bottom-4 lg:bottom-6 left-4 lg:left-8">
            {berow.name}
        </h3>
        </div>
        ))}
        </div>
        </div>
        
    </div>
    </>
  )
}

export default Berows;
