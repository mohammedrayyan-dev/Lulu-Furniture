import BackArrow from "/src/assets/images/ui/icons/BackArrowIcon.png"
import BabyBedCot from "/src/assets/images/products/bedcots/BabyBedCot.webp"
import WesternBedCot from "/src/assets/images/products/bedcots/WesternBedCot.webp"
import IndianBedCot from "/src/assets/images/products/bedcots/IndianBedCot.webp"
import LuxuryFabricBedCot from "/src/assets/images/products/bedcots/LuxuryFabricBedCot.webp"
import ChineseBedCot from "/src/assets/images/products/bedcots/ChineseBedCot.webp"
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"

const BedCotCollections = [
    { name: "Teak Wood Bed Cots", image: BabyBedCot, alt: "Teak Wood Bed Cots", path: "/beds-&-cots/teak-wood-bed-cots" },
    { name: "Engineered Wood Bed Cots", image: WesternBedCot, alt: "Engineered Wood Bed Cots", path: "/beds-&-cots/engineered-wood-bed-cots" },
    { name: "Metal Bed Cots", image: IndianBedCot, alt: "Metal Bed Cots", path: "/beds-&-cots/metal-bed-cots" },
    { name: "Box Storage Bed Cots", image: LuxuryFabricBedCot, alt: "Box Storage Bed Cots", path: "/beds-&-cots/box-storage-bed-cots" },
    { name: "Hydraulic Storage Bed Cots ", image: ChineseBedCot, alt: "Hydraulic Storage Bed Cots", path: "/beds-&-cots/hydraulic-storage-bed-cots" },
]

const BedCot = () => {

    const navigate = useNavigate();

    useEffect(() => {
            document.title = "Beds & Cots | Lulu Furniture";
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
            Beds & Cots
        </h1>
    </div>
    <div className="mt-5 lg:mt-0 border-t border-[#33333366]" />
    
    <div className="flex flex-col mt-6 lg:mt-8 items-center gap-6 lg:gap-8">

        {BedCotCollections.map((bed) => (
        <div 
        onClick={() => navigate(bed.path)}
        className="relative h-[140px] md:h-[180px] lg:h-[320px] w-full cursor-pointer overflow-hidden rounded-3xl"
        >
        <img src={bed.image} alt={bed.alt} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[#00000030] hover:bg-[#00000045]" />
        <h3 className="absolute font-lato text-[#FFFFFF] text-xl lg:text-3xl bottom-4 lg:bottom-6 left-4 lg:left-8">
            {bed.name}
        </h3>
        </div>
        ))}
        </div>
        </div>
         
    </div>
    </>
  )
}

export default BedCot;
