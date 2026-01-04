import BackArrow from "/src/assets/images/icons/BackArrowIcon.png"
import BabyBedCot from "/src/assets/images/ui/banners/products/bedcot/BabyBedCot.webp"
import WesternBedCot from "/src/assets/images/ui/banners/products/bedcot/WesternBedCot.webp"
import IndianBedCot from "/src/assets/images/ui/banners/products/bedcot/IndianBedCot.webp"
import LuxuryFabricBedCot from "/src/assets/images/ui/banners/products/bedcot/LuxuryFabricBedCot.webp"
import ChineseBedCot from "/src/assets/images/ui/banners/products/bedcot/ChineseBedCot.webp"
import Footer from "../components/Footer.jsx"
import { WhatsApp } from "/src/components/Whatsapp.jsx"

const BedCollections = [
    { name: "Baby Bed Cot", image: BabyBedCot, alt: "Baby Bed Cot Image" },
    { name: "Western Bed Cot", image: WesternBedCot, alt: "Western Bed Cot Image" },
    { name: "Indian Bed Cot", image: IndianBedCot, alt: "Indian Bed Cot Image" },
    { name: "Luxury Fabric Bed Cot", image: LuxuryFabricBedCot, alt: "Luxury Fabric Bed Cot Image" },
    { name: "Chinese Bed Cot", image: ChineseBedCot, alt: "Chinese Bed Cot Image" },
]

const BedCot = () => {
  return (
    <>
    {/* Whatsapp float */}
    <WhatsApp />

    {/* Bed Cot */}
    <div className="bg-white mt-5 lg:mt-10 mx-5 sm:mx-6 lg:mx-10">
    <div className="flex flex-row items-center space-x-4">
        <a href="/">
            <img src={BackArrow} alt="Back Arrow" onClick={"/"} className="w-[24px] lg:w-[28px] cursor-pointer" />
        </a>
        <h1 className="font-corinthia text-2xl lg:text-[40px] text-[#6B4C41] font-bold">
            Bed Cot
        </h1>
    </div>
    <div className="mt-5 lg:mt-0 border-t border-[#33333366]" />

    <div className="mt-2 mb-10">
    <h2 className="text-sm lg:text-xl font-md pt-[20px] text-[#5a4a42]">
        Beds Designed for Everyday Use
    </h2>
    <p className="text-[#6F6F6F] text-justify pt-[20px] font-dm max-w-sm md:max-w-full lg:max-w-screen-2xl text-sm lg:text-lg">
        A bed is one of the most important pieces of furniture in any home, and at Lulu Furniture, we design beds and cots that prioritise strength, comfort, and durability. We offer a variety of wooden bed designs, suitable for different room sizes, interior styles, and usage needs. Our beds are crafted using quality wood and solid construction methods to ensure stability and long-term support. From minimal designs to beds with storage options, we provide multiple design choices that balance functionality with a clean, timeless look. Each bed is built to feel sturdy and dependable, supporting everyday use without compromise.
    </p>
    <p className="text-[#6F6F6F] text-justify pt-[20px] font-dm max-w-sm md:max-w-full lg:max-w-screen-2xl text-sm lg:text-lg">
        We understand that bedroom requirements vary from home to home. That’s why we offer flexibility in design, size, and layout. Whether you need a compact cot, a standard bed, or a design that includes additional storage, we help create solutions that fit naturally into your space. Comfort, structure, and thoughtful design come together in every bed we make. Our goal is to provide beds that feel solid, comfortable, and suited to long-term use — furniture that supports rest and everyday living.
    </p>
    </div>
    
    <div className="flex flex-col items-center space-y-6 lg:space-y-10">

        {BedCollections.map((item) => (
        <div className="relative aspect-[12/5] lg:aspect-[25/6] w-full">
        <img src={item.image} alt={item.alt} className="h-full w-full object-cover rounded-3xl" />
        <div className="absolute inset-0 bg-[#00000030] hover:bg-[#00000045] rounded-3xl" />
        <h3 className="absolute font-lato text-[#FFFFFF] text-xl lg:text-3xl bottom-4 lg:bottom-6 left-4 lg:left-8">
            {item.name}
        </h3>
        </div>
        ))}
        
    </div>
    
    </div>
    <Footer />
    </>
  )
}

export default BedCot;
