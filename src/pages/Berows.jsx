import BackArrow from "/src/assets/images/icons/BackArrowIcon.png"
import BedroomBerows from "/src/assets/images/ui/banners/products/berows/bedroom-berows.webp"
import OfficeBerows from "/src/assets/images/ui/banners/products/berows/office-berows.webp"
import KidsBerows from "/src/assets/images/ui/banners/products/berows/kids-berows.webp"
import SmallRoomPGBerows from "/src/assets/images/ui/banners/products/berows/small-room-pg-berows.webp"
import HeavyDutyBerows from "/src/assets/images/ui/banners/products/berows/heavy-duty-berows.webp"
import RustProofBerows from "/src/assets/images/ui/banners/products/berows/rust-proof-berows.webp"
import Footer from "../components/Footer.jsx"
import { useNavigate } from "react-router-dom"

const SofaCollections = [
    { name: "Bedroom Berows", image: BedroomBerows, alt: "Bedroom Berows", path: "/berows" },
    { name: "Office Berows", image: OfficeBerows, alt: "Office Berows", path: "/berows" },
    { name: "Kids Berows", image: KidsBerows, alt: "Kids Berows", path: "/berows" },
    { name: "Small Room / PG Berows", image: SmallRoomPGBerows,  alt: "Small Room / PG Berows", path: "/berows" },
    { name: "Heavy Duty Berows", image: HeavyDutyBerows, alt: "Heavy Duty Berows", path: "/berows" },
    { name: "Rust Proof Berows", image: RustProofBerows, alt: "Rust Proof Berows", path: "/berows" },
]

const Berows = () => {

    const navigate = useNavigate();

  return (
    <>
    
    <div className="bg-white mt-5 lg:mt-10 mx-5 sm:mx-6 lg:mx-10">
    <div className="flex flex-row items-center space-x-4">
        <a href="/">
        <img src={BackArrow} alt="Back Arrow" className="w-[24px] lg:w-[28px] cursor-pointer" />
        </a>
        <h1 className="font-corinthia text-2xl lg:text-[40px] text-[#6B4C41] font-bold">
            Berows
        </h1>
    </div>
    <div className="mt-5 lg:mt-0 border-t border-[#33333366]"/>

    <div className="flex flex-col mt-10 items-center space-y-6 lg:space-y-10">

        {SofaCollections.map((sofa) => (
        <div 
        onClick={() => navigate(sofa.path)}
        className="relative max-h-[140px] md:max-h-[350px] aspect-[12/6] md:aspect-[25/6] lg:aspect-[25/6] w-full cursor-pointer"
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

export default Berows;
