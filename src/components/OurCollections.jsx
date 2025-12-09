import SofaLounge from "/src/assets/images/icons/ui/banners/products/SofaLounge.png";
import BedCot from "/src/assets/images/icons/ui/banners/products/Bed&Cot.png";
import DiningTable from "/src/assets/images/icons/ui/banners/products/DiningTable.png";
import StorageShelf from "/src/assets/images/icons/ui/banners/products/StorageShelf.png";
import TvUnit from "/src/assets/images/icons/ui/banners/products/TvUnit.png";
import WoodenAccessories from "/src/assets/images/icons/ui/banners/products/WoodenAccessories.png";
import OneSeaterSofaVector from "/src/assets/images/icons/1SeaterSofaVector.png";
import TwoSeaterSofaVector from "/src/assets/images/icons/2SeaterSofaVector.png";
import DeliveryVanVector from "/src/assets/images/icons/DeliveryVanVector.png";
import { useNavigate } from "react-router-dom";

const OurCollections = () => {

    const navigate = useNavigate();

  return (
    <>
     <div className="bg-[#FFFFFF] flex flex-col items-center">

        <div className="flex flex-col">
            <div className="hidden lg:block mb-10 border-t w-[1295px] border-[#33333366]" />  
            <h1 className="text-[#6B4C41] pr-[180px] md:pr-[530px] font-bold text-[24px] lg:text-[40px] font-corinthia">
                Our Collections
            </h1>
        </div>

        <div className="mt-[10px] lg:mt-[40px] grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-[40px] lg:mb-[100px]">
       
        <div
        onClick={() => navigate("/sofa")} 
        className="flex relative cursor-pointer">
            <img src={SofaLounge} alt="Sofa Lounge" className="h-[300px] w-[320px] lg:h-[460px] lg:w-[380px] rounded-xl"/>
            <div className="absolute inset-0 bg-[#00000059] hover:bg-[#00000075] h-[300px] w-[320px] lg:h-[460px] lg:w-[380px] rounded-xl" />
            <h2 className="absolute font-lato text-[#FFFFFF] text-[24px] lg:text-[30px] bottom-4 lg:bottom-6 left-6 lg:left-8">
                SOFA <br/>
                LOUNGE
            </h2>
        </div>
        <div 
        onClick={() => navigate("/bedcot")} 
        className="flex relative">
        <img src={BedCot} alt="Bed & Cot" className="h-[300px] w-[320px] lg:h-[320px] lg:w-[380px] object-cover self-end rounded-xl"/>
        <div className="absolute inset-0 bg-[#00000059] hover:bg-[#00000075] h-[300px] w-[320px] lg:h-[320px] lg:w-[380px] cursor-pointer object-cover self-end rounded-xl" />
            <h2 className="absolute font-lato text-[#FFFFFF] text-[24px] lg:text-[30px] bottom-4 lg:bottom-6 left-6 lg:left-8 cursor-pointer">
                BED & COT
            </h2>
        </div>
        <div 
        onClick={() => navigate("/diningtable")} 
        className="flex relative">
        <img src={DiningTable} alt="Dinning Table" className="h-[300px] w-[320px] lg:h-[320px] lg:w-[380px] object-cover self-end rounded-xl"/>
        <div className="absolute inset-0 bg-[#00000059] hover:bg-[#00000075] h-[300px] w-[320px] lg:h-[320px] lg:w-[380px] cursor-pointer object-cover self-end rounded-xl" />
            <h2 className="absolute font-lato text-[#FFFFFF] text-[24px] lg:text-[30px] bottom-4 lg:bottom-6 left-6 lg:left-8 cursor-pointer">
                DINING <br/>
                TABLE
            </h2>
        </div>
        <div 
        onClick={() => navigate("/storageshelf")}
        className="flex relative cursor-pointer">
        <img src={StorageShelf} alt="Storage Shelf" className="h-[300px] w-[320px] lg:h-[320px] lg:w-[380px] rounded-xl"/>
        <div className="absolute inset-0 bg-[#00000059] hover:bg-[#00000075] h-[300px] w-[320px] lg:h-[320px] lg:w-[380px] rounded-xl" />
            <h2 className="absolute font-lato text-[#FFFFFF] text-[24px] lg:text-[30px] bottom-4 lg:bottom-6 left-6 lg:left-8">
                STORAGE <br/>
                SHELF
            </h2>
        </div>
        <div 
        onClick={() => navigate("/tvunit")}
        className="flex relative cursor-pointer">
        <img src={TvUnit} alt="Tv Unit" className="h-[300px] w-[320px] lg:h-[320px] lg:w-[380px] rounded-xl"/>
        <div className="absolute inset-0 bg-[#00000059] hover:bg-[#00000075] h-[300px] w-[320px] lg:h-[320px] lg:w-[380px] rounded-xl" />
            <h2 className="absolute font-lato text-[#FFFFFF] text-[24px] lg:text-[30px] bottom-4 lg:bottom-6 left-6 lg:left-8">
                TV UNIT
            </h2>
        </div>
        <div 
        onClick={() => navigate("/woodenaccessories")}
        className="flex relative cursor-pointer">
        <img src={WoodenAccessories} alt="Wooden Accessories" className="h-[300px] w-[320px] lg:h-[320px] lg:w-[380px] rounded-xl"/>
        <div className="absolute inset-0 bg-[#00000059] hover:bg-[#00000075] h-[300px] w-[320px] lg:h-[320px] lg:w-[380px] rounded-xl" />
            <h2 className="absolute font-lato text-[#FFFFFF] text-[24px] lg:text-[30px] bottom-4 lg:bottom-6 left-6 lg:left-8">
                WOODEN <br/>
                ACCESSORIES
            </h2>
        </div>
        
        </div>

        <div className="hidden lg:flex bg-[#DBD1C7] h-[110px] mb-[100px] w-full flex items-center justify-evenly">

            <div className="flex items-center flex-row">
            <img src={OneSeaterSofaVector} alt="One Seater Sofa Vector" className="w-[40px]"/>
            <div className="flex flex-col ml-[20px]">
            <h2 className="font-lato text-[#6B4C41] text-[20px]">
                Shift the Furniture
            </h2>
            <p className="font-lato text-[#6B4C41] text-[12px]">
                Tomorrow’s Comfort Today
            </p>
            </div>
            </div>

            <div className="flex items-center flex-row">
            <img src={DeliveryVanVector} alt="Delivery Van Vector" className="w-[50px]"/>
            <div className="flex flex-col ml-[20px]">
            <h2 className="font-lato text-[#6B4C41] text-[20px] ">
                Simplicity in Action
            </h2>
            <p className="font-lato text-[#6B4C41] text-[12px]">
                So Easy to Assemble!
            </p>
            </div>
            </div>

            <div className="flex items-center flex-row">
            <img src={TwoSeaterSofaVector} alt="Two Seater Sofa Vector" className="w-[50px]"/>
            <div className="flex flex-col ml-[20px]">
            <h2 className="font-lato text-[#6B4C41] text-[20px]">
                Touch, Feel, Relax
            </h2>
            <p className="font-lato text-[#6B4C41] text-[12px]">
                Upto 5yrs Warranty 
            </p>
            </div>
            </div>

        </div>

        </div>
        </>
  )
}

export default OurCollections;