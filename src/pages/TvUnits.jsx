import BackArrow from "/src/assets/images/icons/BackArrowIcon.png"
import TVCabinetDecor from "/src/assets/images/ui/banners/products/tvunits/TvCabinetDoor.webp"
import TVStand from "/src/assets/images/ui/banners/products/tvunits/TvStand.webp"
import TVUnitDesign from "/src/assets/images/ui/banners/products/tvunits/TvUnitDesign.webp"
import Footer from "../components/Footer.jsx"

const TvUnitCollections = [
    { name: "TV Cabinet Decor", image: TVCabinetDecor, alt: "TV Cabinet Decor Image" },
    { name: "TV Stand", image: TVStand, alt: "TV Stand Image" },
    { name: "TV Unit Design", image: TVUnitDesign, alt: "TV Unit Design Image" }
]

const TvUnits = () => {
  return (
    <>

    {/* Tv Unit */}
    <div className="bg-white mt-5 lg:mt-10 mx-5 sm:mx-6 lg:mx-10">
    <div className="flex flex-row items-center space-x-4">
        <a href="/">
            <img src={BackArrow} alt="Back Arrow" className="w-[24px] lg:w-[28px] cursor-pointer" />
        </a>
        <h1 className="font-corinthia text-2xl lg:text-[40px] text-[#6B4C41] font-bold">
            Tv Units
        </h1>
    </div>
    <div className="mt-5 lg:mt-0 border-t border-[#33333366]" />

    <div className="flex flex-col mt-10 items-center space-y-6 lg:space-y-10">

        {TvUnitCollections.map((item) => (
        <div className="relative max-h-[140px] md:max-h-[350px] aspect-[12/5] lg:aspect-[25/6] w-full">
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

export default TvUnits;
