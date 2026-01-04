import BackArrow from "/src/assets/images/icons/BackArrowIcon.png"
import TVCabinetDecor from "/src/assets/images/ui/banners/products/tvunit/TvCabinetDoor.webp"
import TVStand from "/src/assets/images/ui/banners/products/tvunit/TvStand.webp"
import TVUnitDesign from "/src/assets/images/ui/banners/products/tvunit/TvUnitDesign.webp"
import Footer from "../components/Footer.jsx"
import { WhatsApp } from "/src/components/Whatsapp.jsx"

const TvUnitCollections = [
    { name: "TV Cabinet Decor", image: TVCabinetDecor, alt: "TV Cabinet Decor Image" },
    { name: "TV Stand", image: TVStand, alt: "TV Stand Image" },
    { name: "TV Unit Design", image: TVUnitDesign, alt: "TV Unit Design Image" }
]

const TvUnit = () => {
  return (
    <>
    {/* Whatsapp float */}
    <WhatsApp />

    {/* Tv Unit */}
    <div className="bg-white mt-5 lg:mt-10 mx-5 sm:mx-6 lg:mx-10">
    <div className="flex flex-row items-center space-x-4">
        <a href="/">
            <img src={BackArrow} alt="Back Arrow" onClick={"/"} className="w-[24px] lg:w-[28px] cursor-pointer" />
        </a>
        <h1 className="font-corinthia text-2xl lg:text-[40px] text-[#6B4C41] font-bold">
            Tv Unit
        </h1>
    </div>
    <div className="mt-5 lg:mt-0 border-t border-[#33333366]" />

    <div className="mt-2 mb-10">
    <h2 className="text-sm lg:text-xl font-md pt-[20px] text-[#5a4a42]">
        Clean and Practical TV Unit Designs
    </h2>
    <p className="text-[#6F6F6F] text-justify pt-[20px] font-dm max-w-sm md:max-w-full lg:max-w-screen-2xl text-sm lg:text-lg">
        A TV unit should do more than hold a screen — it should help organise your living space. At Lulu Furniture, we design wooden TV units in various designs, focusing on layout, storage, and everyday usability. Our TV units are built with thoughtful compartments for devices, cables, and accessories, helping keep your space neat and functional. We offer different design styles, from simple and minimal to more detailed wooden units, depending on your preference and room layout.
    </p>
    <p className="text-[#6F6F6F] text-justify pt-[20px] font-dm max-w-sm md:max-w-full lg:max-w-screen-2xl text-sm lg:text-lg">
        Each TV unit is designed to feel stable, balanced, and visually clean. Proper ventilation, strong structure, and practical storage are key considerations in every design. With flexible sizing and design options, our TV units are made to fit naturally into different living areas, offering a reliable and organised setup for everyday use.
    </p>
    </div>

    <div className="flex flex-col items-center space-y-6 lg:space-y-10">

        {TvUnitCollections.map((item) => (
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

export default TvUnit;
