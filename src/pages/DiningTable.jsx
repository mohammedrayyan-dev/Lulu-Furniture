import BackArrow from "/src/assets/images/icons/BackArrowIcon.png"
import TeakWoodDiningTable from "/src/assets/images/ui/banners/products/diningtable/TeakWoodDiningTable.webp"
import RubberWoodDiningTable from "/src/assets/images/ui/banners/products/diningtable/RubberWoodDiningTable.webp"
import NeemWoodDiningTable from "/src/assets/images/ui/banners/products/diningtable/NeemWoodDiningTable.webp"
import CoffeeTable from "/src/assets/images/ui/banners/products/diningtable/CoffeeTable.webp"
import Footer from "../components/Footer.jsx"
import { WhatsApp } from "/src/components/Whatsapp.jsx"

const DiningTableCollections = [
    { name: "Teak Wood Dining Table", image: TeakWoodDiningTable, alt: "Teak Wood Dining Table Image" },
    { name: "Rubber Wood Dining Table", image: RubberWoodDiningTable, alt: "Rubber Wood Dining Table Image" },
    { name: "Neem Wood Dining Table", image: NeemWoodDiningTable, alt: "Neem Wood Dining Table Image" },
    { name: "Coffee Table", image: CoffeeTable, alt: "Coffee Table Image" },
]

const DiningTable = () => {
  return (
    <>
    {/* Whatsapp float */}
    <WhatsApp />

    {/* Dining Table */}
    <div className="bg-white mt-5 lg:mt-10 mx-5 md:mx-10 lg:mx-15">
    <div className="flex flex-row items-center space-x-4">
        <a href="/">
            <img src={BackArrow} alt="Back Arrow" onClick={"/"} className="w-[24px] lg:w-[28px] cursor-pointer" />
        </a>
        <h1 className="font-corinthia text-2xl lg:text-[40px] text-[#6B4C41] font-bold">
            Dining Table
        </h1>
    </div>
    <div className="mt-5 lg:mt-0 border-t border-[#33333366]" />

    <div className="mt-2 mb-10">
    <h2 className="text-sm lg:text-xl font-md pt-[20px] text-[#5a4a42]">
        Dining Tables Made for Everyday Use
    </h2>
    <p className="text-[#6F6F6F] text-justify pt-[20px] font-dm max-w-sm md:max-w-full lg:max-w-screen-2xl text-sm lg:text-lg">
        The dining table is where daily routines and shared moments come together. At Lulu Furniture, we design wooden dining tables in various designs, focusing on strength, balance, and comfort. Our dining tables are made for everyday use, whether it’s quick meals or longer family gatherings. We offer dining tables in different sizes, shapes, and design styles to suit both compact and spacious dining areas. Each table is crafted with attention to proportion, leg placement, and surface finish, ensuring stability and ease of use. Our designs focus on practicality without sacrificing visual appeal.
    </p>
    <p className="text-[#6F6F6F] text-justify pt-[20px] font-dm max-w-sm md:max-w-full lg:max-w-screen-2xl text-sm lg:text-lg">
        Customization allows you to choose a dining table that fits your space and seating needs. From simple designs to more detailed wooden finishes, we provide options that blend naturally with your home interiors. Built with quality materials and solid construction, our dining tables are designed to last and remain reliable over time. They are made to feel comfortable, functional, and suited for everyday family life.
    </p>
    </div>

    <div className="flex flex-col items-center px-5 sm:px-6 lg:px-15 space-y-6 lg:space-y-10">

        {DiningTableCollections.map((item) => (
        <div className="relative aspect-[12/5] lg:aspect-[25/6] w-[320px] lg:w-full">
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

export default DiningTable;
