import SofaLounge from "/src/assets/SofaLounge.png";
import BedCot from "/src/assets/Bed&Cot.png";
import DiningTable from "/src/assets/DiningTable.png";
import StorageShelf from "/src/assets/StorageShelf.png";
import TvUnit from "/src/assets/TvUnit.png";
import WoodenAccessories from "/src/assets/WoodenAccessories.png";
import SofaVector from "/src/assets/SofaVector.png";
import SofaVector1 from "/src/assets/SofaVector1.png";
import DeliveryVector from "/src/assets/DeliveryVector.png";
import { useNavigate } from "react-router-dom";

const OurCollections = () => {

    const navigate = useNavigate();

  return (
    <>
     <div className="bg-[#FFFFFF] flex flex-col items-center">
    
        <div className="flex flex-col">
            <div className="mb-10 border-t w-[1295px] border-[#33333366]"></div>
            <h1 className="text-[#6B4C41] font-bold text-[40px] font-corinthia">
                Our Collections
            </h1>
        </div>
    
        <div className="mt-[40px] grid grid-cols-3 gap-8 mb-[100px]">
       
        <div
        onClick={() => navigate("/sofa")} 
        className="flex relative cursor-pointer">
            <img src={SofaLounge} alt="Sofa Lounge" className="h-[460px] w-[380px] rounded-xl"/>
            <div className="absolute inset-0 bg-[#00000059] hover:bg-[#00000075] rounded-xl"></div>
            <h2 className="absolute font-lato text-[#FFFFFF] text-[30px] bottom-6 left-8">
                SOFA <br/>
                LOUNGE
            </h2>
        </div>
        <div 
        onClick={() => navigate("/bedcot")} 
        className="flex relative">
        <img src={BedCot} alt="Bed & Cot" className="h-[320px] w-[380px] object-cover self-end rounded-xl"/>
        <div className="absolute inset-0 bg-[#00000059] hover:bg-[#00000075] h-[320px] cursor-pointer object-cover self-end rounded-xl"></div>
            <h2 className="absolute font-lato text-[#FFFFFF] text-[30px] bottom-6 left-8 cursor-pointer">
                BED & COT
            </h2>
        </div>
        <div 
        onClick={() => navigate("/diningtable")} 
        className="flex relative">
        <img src={DiningTable} alt="Dinning Table" className="h-[320px] w-[380px] object-cover self-end rounded-xl"/>
        <div className="absolute inset-0 bg-[#00000059] hover:bg-[#00000075] h-[320px] cursor-pointer object-cover self-end rounded-xl"></div>
            <h2 className="absolute font-lato text-[#FFFFFF] text-[30px] bottom-6 left-8 cursor-pointer">
                DINING <br/>
                TABLE
            </h2>
        </div>
        <div 
        onClick={() => navigate("/storageshelf")}
        className="flex relative cursor-pointer">
        <img src={StorageShelf} alt="Storage Shelf" className="h-[320px] w-[380px] rounded-xl"/>
        <div className="absolute inset-0 bg-[#00000059] hover:bg-[#00000075] rounded-xl"></div>
            <h2 className="absolute font-lato text-[#FFFFFF] text-[30px] bottom-6 left-8">
                STORAGE <br/>
                SHELF
            </h2>
        </div>
        <div 
        onClick={() => navigate("/tvunit")}
        className="flex relative cursor-pointer">
        <img src={TvUnit} alt="Tv Unit" className="h-[320px] w-[380px] rounded-xl"/>
        <div className="absolute inset-0 bg-[#00000059] hover:bg-[#00000075] rounded-xl"></div>
            <h2 className="absolute font-lato text-[#FFFFFF] text-[30px] bottom-6 left-8">
                TV UNIT
            </h2>
        </div>
        <div 
        onClick={() => navigate("/woodenaccessories")}
        className="flex relative cursor-pointer">
        <img src={WoodenAccessories} alt="Wooden Accessories" className="h-[320px] w-[380px] rounded-xl"/>
        <div className="absolute inset-0 bg-[#00000059] hover:bg-[#00000075] rounded-xl"></div>
            <h2 className="absolute font-lato text-[#FFFFFF] text-[30px] bottom-6 left-8">
                WOODEN <br/>
                ACCESSORIES
            </h2>
        </div>
        
        </div>

        <div className="bg-[#DBD1C7] h-[110px] mb-[100px] w-full flex items-center justify-evenly">

            <div className="flex items-center flex-row">
            <img src={SofaVector1} alt="Sofa Vector1" className="h-[40px] w-[50px]"/>
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
            <img src={DeliveryVector} alt="Delivery Vector" className="h-[40px] w-[50px]"/>
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
            <img src={SofaVector} alt="Sofa Vector" className="h-[40px] w-[50px]"/>
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