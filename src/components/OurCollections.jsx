import SofaLounge from "/src/assets/images/ui/banners/products/SofaLounge.webp";
import BedCot from "/src/assets/images/ui/banners/products/Bed&Cot.webp";
import DiningTable from "/src/assets/images/ui/banners/products/DiningTable.webp";
import StorageShelf from "/src/assets/images/ui/banners/products/StorageShelf.webp";
import TvUnit from "/src/assets/images/ui/banners/products/TvUnit.webp";
import WoodenAccessories from "/src/assets/images/ui/banners/products/WoodenAccessories.webp";
import Chair from "/src/assets/images/ui/banners/products/Chair.webp"
import Berow from "/src/assets/images/ui/banners/products/Berow.webp"
import ComfortEssentials from "/src/assets/images/ui/banners/products/ComfortEssentials.webp";
import OneSeaterSofaVector from "/src/assets/images/icons/1SeaterSofaVector.png";
import TwoSeaterSofaVector from "/src/assets/images/icons/2SeaterSofaVector.png";
import DeliveryVanVector from "/src/assets/images/icons/DeliveryVanVector.png";
import { useNavigate } from "react-router-dom";

const OurCollections = () => {

    const navigate = useNavigate();

  return (
    <>
    <div className="bg-white mx-5 sm:mx-6 lg:mx-10">
     <div className="flex flex-col max-w-screen-2xl ">

        <div className="flex flex-col">
            <div className="hidden lg:block w-full mb-10 border-t border-[#33333366]" />  
            <h2 className="text-[#6B4C41] font-bold text-[24px] lg:text-[40px] font-corinthia">
                Our Collections
            </h2>
        </div>

        <div className="lg:mx-auto mt-[10px] md:mt-[20px] lg:mt-[40px] grid md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[290px] gap-6 lg:gap-8 mb-[40px] lg:mb-[100px]">
       
        <div
        onClick={() => navigate("/sofas")} 
        className="flex relative cursor-pointer h-[300px] max-w-full max-w-full lg:h-auto lg:max-w-[400px] lg:col-start-1 lg:row-start-1 lg:row-span-2">
            <img src={SofaLounge} alt="Sofa Lounge" className="h-full w-full rounded-xl"/>
            <div className="absolute inset-0 bg-[#00000059] hover:bg-[#00000075] rounded-xl" />
            <h3 className="absolute font-lato text-[#FFFFFF] text-[24px] lg:text-[30px] bottom-4 lg:bottom-6 left-6 lg:left-8">
                SOFAS
            </h3>
        </div>
        <div 
        onClick={() => navigate("/bed-&-cots")} 
        className="flex relative cursor-pointer h-[300px] max-w-full lg:max-h-[420px] lg:max-w-[400px] lg:col-start-2 lg:row-start-2">
        <img src={BedCot} alt="Bed & Cot" className="h-full w-full rounded-xl"/>
        <div className="absolute inset-0 bg-[#00000059] hover:bg-[#00000075] cursor-pointer rounded-xl" />
            <h3 className="absolute font-lato text-[#FFFFFF] text-[24px] lg:text-[30px] bottom-4 lg:bottom-6 left-6 lg:left-8 cursor-pointer">
                BEDS & COTS
            </h3>
        </div>
        <div 
        onClick={() => navigate("/dining-tables")} 
        className="flex relative cursor-pointer h-[300px] max-w-full lg:max-h-[420px] lg:max-w-[400px] lg:col-start-3 lg:row-start-2">
        <img src={DiningTable} alt="Dinning Table" className="h-full w-full rounded-xl"/>
        <div className="absolute inset-0 bg-[#00000059] hover:bg-[#00000075] cursor-pointer rounded-xl" />
            <h3 className="absolute font-lato text-[#FFFFFF] text-[24px] lg:text-[30px] bottom-4 lg:bottom-6 left-6 lg:left-8 cursor-pointer">
                DINING <br/>
                TABLES
            </h3>
        </div>
        <div 
        onClick={() => navigate("/storage-shelfs")}
        className="flex relative cursor-pointer h-[300px] max-w-full lg:max-h-[420px] lg:max-w-[400px] lg:col-start-1 lg:row-start-3">
        <img src={StorageShelf} alt="Storage Shelf" className="h-full w-full rounded-xl"/>
        <div className="absolute inset-0 bg-[#00000059] hover:bg-[#00000075] rounded-xl" />
            <h3 className="absolute font-lato text-[#FFFFFF] text-[24px] lg:text-[30px] bottom-4 lg:bottom-6 left-6 lg:left-8">
                STORAGE <br/>
                SHELFS
            </h3>
        </div>
        <div 
        onClick={() => navigate("/tv-units")}
        className="flex relative cursor-pointer h-[300px] max-w-full lg:max-h-[420px] lg:max-w-[400px] lg:col-start-2 lg:row-start-3">
        <img src={TvUnit} alt="Tv Unit" className="h-full w-full rounded-xl"/>
        <div className="absolute inset-0 bg-[#00000059] hover:bg-[#00000075] rounded-xl" />
            <h3 className="absolute font-lato text-[#FFFFFF] text-[24px] lg:text-[30px] bottom-4 lg:bottom-6 left-6 lg:left-8">
                TV UNITS
            </h3>
        </div>
        <div 
        onClick={() => navigate("/berows")}
        className="flex relative cursor-pointer h-[300px] max-w-full lg:max-h-[420px] lg:max-w-[400px] lg:col-start-3 lg:row-start-3">
        <img src={Berow} alt="Berow" className="h-full w-full rounded-xl"/>
        <div className="absolute inset-0 bg-[#00000059] hover:bg-[#00000075] rounded-xl" /> 
            <h3 className="absolute font-lato text-[#FFFFFF] text-[24px] lg:text-[30px] bottom-4 lg:bottom-6 left-6 lg:left-8">
                BEROWS
            </h3>
        </div>
        <div 
        onClick={() => navigate("/chairs")}
        className="flex relative cursor-pointer h-[300px] max-w-full lg:max-h-[420px] lg:max-w-[400px] lg:col-start-1 lg:row-start-4">
        <img src={Chair} alt="Chair" className="h-full w-full rounded-xl"/>
        <div className="absolute inset-0 bg-[#00000059] hover:bg-[#00000075] rounded-xl" /> 
            <h3 className="absolute font-lato text-[#FFFFFF] text-[24px] lg:text-[30px] bottom-4 lg:bottom-6 left-6 lg:left-8">
                CHAIRS
            </h3>
        </div>
        <div 
        onClick={() => navigate("/comfort-essentials")}
        className="flex relative cursor-pointer h-[300px] max-w-full lg:max-h-[420px] lg:max-w-[400px] lg:col-start-2 lg:row-start-4">
        <img src={ComfortEssentials} alt="Comfort Essentials" className="h-full w-full rounded-xl"/>
        <div className="absolute inset-0 bg-[#00000059] hover:bg-[#00000075] rounded-xl" /> 
            <h3 className="absolute font-lato text-[#FFFFFF] text-[24px] lg:text-[30px] bottom-4 lg:bottom-6 left-6 lg:left-8">
                COMFORT ESSENTIALS
            </h3>
        </div>
        
        </div>
        </div>
        </div>

        <div className="hidden lg:flex bg-[#DBD1C7] h-[110px] mb-[60px] w-full flex items-center justify-evenly">

            <div className="flex items-center flex-row">
            <img src={OneSeaterSofaVector} alt="One Seater Sofa Vector" className="w-[40px]"/>
            <div className="flex flex-col ml-[20px]">
            <h3 className="font-lato text-[#6B4C41] text-[20px]">
                Shift the Furniture
            </h3>
            <p className="font-lato text-[#6B4C41] text-[12px]">
                Tomorrow’s Comfort Today
            </p>
            </div>
            </div>

            <div className="flex items-center flex-row">
            <img src={DeliveryVanVector} alt="Delivery Van Vector" className="w-[50px]"/>
            <div className="flex flex-col ml-[20px]">
            <h3 className="font-lato text-[#6B4C41] text-[20px] ">
                Simplicity in Action
            </h3>
            <p className="font-lato text-[#6B4C41] text-[12px]">
                So Easy to Assemble!
            </p>
            </div>
            </div>

            <div className="flex items-center flex-row">
            <img src={TwoSeaterSofaVector} alt="Two Seater Sofa Vector" className="w-[50px]"/>
            <div className="flex flex-col ml-[20px]">
            <h3 className="font-lato text-[#6B4C41] text-[20px]">
                Touch, Feel, Relax
            </h3>
            <p className="font-lato text-[#6B4C41] text-[12px]">
                Upto 5yrs Warranty 
            </p>
            </div>
            </div>

        </div>
        </>
  )
}

export default OurCollections;