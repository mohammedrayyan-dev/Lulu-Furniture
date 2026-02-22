import BackArrow from "/src/assets/images/icons/BackArrowIcon.png"
import Modern from "/src/assets/images/ui/banners/products/sofas/rubberwoodsofa/ModernRubberWoodSofas.webp"
import Luxury from "/src/assets/images/ui/banners/products/sofas/teakwoodsofa/LuxuryTeakWoodSofa.webp"
import Upholstery from "/src/assets/images/ui/banners/products/sofas/teakwoodsofa/TeakWoodSofawithUpholstery.webp"
import Solid from "/src/assets/images/ui/banners/products/sofas/teakwoodsofa/SolidTeakWoodSofa.webp"
import Sectional from "/src/assets/images/ui/banners/products/sofas/teakwoodsofa/TeakWoodSectionalSofa.webp"
import Footer from "../../components/Footer"

const SofaCollections = [
    { name: "Modern Rubber Wood Sofas", image: Modern, alt: "Modern Rubber Wood Sofa Image" },
    { name: "Rubber Wood Sofa Sets", image: Modern, alt: "Modern Teak Wood Sofa Image" },
    { name: "Cushion Rubber Wood Sofas", image: Luxury, alt: "Luxury Teak Wood Sofa Image" },
    { name: "Compact Rubber Wood Sofas", image: Upholstery, alt: "Teak Wood Sofa with Upholstery Image" },
    { name: "Rubber Wood L-Shaped Sofas", image: Solid, alt: "Solid Teak Wood Sofa Image" },
    { name: "Rubber Wood Sofa Cum Bed", image: Sectional, alt: "Teak Wood Sectional Sofa Image" },
]

const RubberWoodSofas = () => {
  return (
    <>
    
    <div className="bg-white mt-5 lg:mt-10 mx-5 sm:mx-6 lg:mx-10">
    <div className="flex flex-row items-center space-x-4">
        <a href="/sofas">
        <img src={BackArrow} alt="Back Arrow" className="w-[24px] lg:w-[28px] cursor-pointer" />
        </a>
        <h1 className="font-corinthia text-2xl lg:text-[40px] text-[#6B4C41] font-bold">
            Rubber Wood Sofas
        </h1>
    </div>
    <div className="mt-5 lg:mt-0 border-t border-[#33333366]"/>

    <div className="flex flex-col mt-10 items-center space-y-6 lg:space-y-10">

        {SofaCollections.map((item) => (
        <div className="relative max-h-[140px] md:max-h-[350px] aspect-[8/4] md:aspect-[25/6] lg:aspect-[25/6] w-full cursor-pointer">
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

export default RubberWoodSofas;