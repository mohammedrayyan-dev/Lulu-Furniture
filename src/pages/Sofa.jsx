import BackArrow from "/src/assets/images/icons/BackArrowIcon.png"
import TeakWoodSofa from "/src/assets/images/ui/banners/products/sofa/TeakWoodSofa.webp"
import RubberWoodSofa from "/src/assets/images/ui/banners/products/sofa/RubberWoodSofa.webp"
import CushionComfortSofa from "/src/assets/images/ui/banners/products/sofa/CushionComfortSofa.webp"
import FabricSofa from "/src/assets/images/ui/banners/products/sofa/FabricSofa.webp"
import VelvetFabricSofa from "/src/assets/images/ui/banners/products/sofa/VelvetFabricSofa.webp"
import ReclinerLeatherSofa from "/src/assets/images/ui/banners/products/sofa/ReclinerLeatherSofa.webp"
import TeakWoodFabricSofa from "/src/assets/images/ui/banners/products/sofa/TeakWoodFabricSofa.webp"
import Footer from "../components/Footer.jsx"
import { WhatsApp } from "/src/components/Whatsapp.jsx"

const SofaCollections = [
    { name: "Teak Wood Sofa", image: TeakWoodSofa, alt: "Teak Wood Sofa Image" },
    { name: "Rubber Wood Sofa", image: RubberWoodSofa, alt: "Rubber Wood Sofa Image" },
    { name: "Cushion Comfort Sofa", image: CushionComfortSofa, alt: "Cushion Comfort Sofa Image" },
    { name: "Fabric Sofa", image: FabricSofa,  alt: "Fabric Sofa Image" },
    { name: "Velvet Fabric Sofa", image: VelvetFabricSofa, alt: "Velvet Fabric Sofa Image" },
    { name: "Recliner Leather Sofa", image: ReclinerLeatherSofa, alt: "Recliner Leather Sofa Image" },
    { name: "Teak Wood Fabric Sofa", image: TeakWoodFabricSofa, alt: "Teak Wood Fabric Sofa Image" } 
]

const Sofa = () => {
  return (
    <>
    {/* Whatsapp float */}
    <WhatsApp />
    
    {/* Sofa */}
    <div className="bg-[#FFFFFF] mt-5 lg:mt-10 mx-5 md:mx-10 lg:mx-15">
    <div className="flex flex-row items-center space-x-4">
        <a href="/">
        <img src={BackArrow} alt="Back Arrow" onClick={"/"} className="w-[24px] lg:w-[28px] cursor-pointer" />
        </a>
        <h1 className="font-corinthia text-2xl lg:text-[40px] text-[#6B4C41] font-bold">
            Sofa
        </h1>
    </div>
    <div className="mt-5 lg:mt-0 border-t border-[#33333366]"/>

    <div className="mt-2 mb-10">
    <h2 className="text-sm lg:text-xl font-md pt-[20px] text-[#5a4a42]">
        Designed for Everyday Comfort
    </h2>
    <p className="text-[#6F6F6F] text-justify pt-[20px] font-dm max-w-sm md:max-w-full lg:max-w-screen-2xl text-sm lg:text-lg">
        Our sofa collection is designed to bring together comfort, durability, and everyday practicality. At Lulu Furniture, we offer wooden and solid wood sofas in various designs, suited for different spaces, layouts, and lifestyles. Whether you’re furnishing a compact living room or a larger family space, we focus on sofas that feel comfortable, balanced, and dependable over time. We provide a wide range of sofa designs — from simple, clean-lined styles to more detailed wooden frames. Our sofas are built with strong internal structures and quality materials, ensuring long-lasting support and stability. Comfort is a priority, but so is usability. Each sofa is designed to fit naturally into your living space without feeling bulky or overwhelming.
    </p>
    <p className="text-[#6F6F6F] text-justify pt-[20px] font-dm max-w-sm md:max-w-full lg:max-w-screen-2xl text-sm lg:text-lg">
        Customization plays an important role in our sofa designs. You can choose dimensions, finishes, and layout options that suit your room and daily use. Whether you prefer a firm seating feel or something more relaxed, we help guide you toward designs that work best for your needs. Our focus is on building sofas that are not only visually appealing but also practical for everyday life. With attention to structure, proportion, and finish, our sofas are made to be used, lived on, and enjoyed for years.
    </p>
    </div>

    <div className="flex flex-col items-center px-5 sm:px-6 lg:px-15 space-y-6 lg:space-y-10">

        {SofaCollections.map((item) => (
        <div className="relative aspect-[12/5] md:aspect-[25/6] lg:aspect-[25/6] w-[320px] md:w-full lg:w-full">
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

export default Sofa;
