import BackArrow from "/src/assets/images/icons/BackArrowIcon.png"
import WoodenChair from "/src/assets/images/ui/banners/products/woodenaccessories/WoodenChair.webp"
import Diwan from "/src/assets/images/ui/banners/products/woodenaccessories/Diwan.webp"
import OfficeChair from "/src/assets/images/ui/banners/products/woodenaccessories/OfficeChair.webp"
import BossChair from "/src/assets/images/ui/banners/products/woodenaccessories/BossChair.webp"
import DevotionalTable from "/src/assets/images/ui/banners/products/woodenaccessories/DevotionalTable.webp"
import Footer from "../components/Footer.jsx"
import { WhatsApp } from "/src/components/Whatsapp.jsx"

const WoodenAccessoriesCollections = [
    { name: "Wooden Chair", image: WoodenChair, alt: "Wooden Chair Image" },
    { name: "Diwan", image: Diwan, alt: "Diwan Image" },
    { name: "Office Chair", image: OfficeChair, alt: "Office Chair Image" },
    { name: "Boss Chair", image: BossChair, alt: "Boss Chair Image" },
    { name: "Devotional Table", image: DevotionalTable, alt: "Devotional Table Image" }
]

const WoodenAccessories = () => {
  return (
    <>
    {/* Whatsapp float */}
    <WhatsApp />

    {/* Wooden Accessories */}
    <div className="bg-[#FFFFFF] mt-5 lg:mt-10 mx-5 md:mx-10 lg:mx-15">
    <div className="flex flex-row items-center space-x-4">
        <a href="/">
            <img src={BackArrow} alt="Back Arrow" onClick={"/"} className="w-[24px] lg:w-[28px] cursor-pointer" />
        </a>
        <h1 className="font-corinthia text-2xl lg:text-[40px] text-[#6B4C41] font-bold">
            Wooden Accessories
        </h1>
    </div>
    <div className="mt-5 lg:mt-0 border-t border-[#33333366]" />

    <div className="mt-2 mb-10">
    <h2 className="text-sm lg:text-xl font-md pt-[20px] text-[#5a4a42]">
        Subtle Wooden Accents for Your Home
    </h2>
    <p className="text-[#6F6F6F] text-justify pt-[20px] font-dm max-w-sm md:max-w-full lg:max-w-screen-2xl text-sm lg:text-lg">
        Wooden accessories add warmth and character to a home through small but meaningful details. At Lulu Furniture, we offer wooden accessories in various designs, crafted to complement different interior styles without overwhelming the space. Our accessories are designed to be both functional and decorative, made with care and attention to finish. From subtle accents to practical wooden pieces, each item is created to blend naturally into your home environment.
    </p>
    <p className="text-[#6F6F6F] text-justify pt-[20px] font-dm max-w-sm md:max-w-full lg:max-w-screen-2xl text-sm lg:text-lg">
        We focus on clean design, smooth finishing, and quality materials, ensuring each accessory feels refined and purposeful. These pieces are ideal for adding a touch of wood to shelves, tables, and living spaces. Thoughtfully made and easy to integrate, our wooden accessories help bring warmth and balance to everyday interiors.
    </p>
    </div>

    <div className="flex flex-col items-center px-5 sm:px-6 lg:px-15 space-y-6 lg:space-y-10">

        {WoodenAccessoriesCollections.map((item) => (
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

export default WoodenAccessories;
