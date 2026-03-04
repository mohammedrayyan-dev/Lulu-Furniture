import BackArrow from "/src/assets/images/ui/icons/BackArrowIcon.png"
import StorageTable from "/src/assets/images/products/storageshelfs/StorageTable.webp"
import DressingTable from "/src/assets/images/products/storageshelfs/DressingTable.webp"
import DressCupboard from "/src/assets/images/products/storageshelfs/DressCupboard.webp"
import { useEffect } from "react";

const StorageShelfCollections = [
    { name: "Storage Table", image: StorageTable, alt: "Storage Table Image" },
    { name: "Dressing Table", image: DressingTable, alt: "Dressing Table Image" },
    { name: "Dress Cupboard", image: DressCupboard, alt: "Dress Cupboard Image" }
]

const StorageShelfs = () => {

    useEffect(() => {
        document.title = "Storage Shelfs | Lulu Furniture";
    }, []);

  return (
    <>
    <div className="bg-white mt-5 lg:mt-10 mx-5 sm:mx-6 lg:mx-10">

    <div className="max-w-7xl mx-auto">
    <div className="flex flex-row items-center space-x-4">
        <a href="/">
            <img src={BackArrow} alt="Back Arrow" className="w-[24px] lg:w-[28px] cursor-pointer" />
        </a>
        <h1 className="font-corinthia text-2xl lg:text-[40px] text-[#6B4C41] font-bold">
            Storage Shelfs
        </h1>
    </div>
    <div className="mt-5 lg:mt-0 border-t border-[#33333366]" />

    <div className="flex flex-col mt-6 lg:mt-8 items-center gap-6 lg:gap-8">

        {StorageShelfCollections.map((item) => (
        <div 
        className="relative h-[140px] md:h-[260px] lg:h-[350px] w-full cursor-pointer overflow-hidden"
        >
        <img src={item.image} alt={item.alt} className="h-full w-full object-cover rounded-3xl" />
        <div className="absolute inset-0 bg-[#00000030] hover:bg-[#00000045] rounded-3xl" />
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

export default StorageShelfs;
