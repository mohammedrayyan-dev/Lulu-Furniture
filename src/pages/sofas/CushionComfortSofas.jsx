import BackArrow from "/src/assets/images/icons/BackArrowIcon.png"
import Chesterfield from "/src/assets/images/ui/banners/products/sofas/velvetfabricsofa/ChesterfieldVelvetSofa.webp"
import MidCenturyModern from "/src/assets/images/ui/banners/products/sofas/velvetfabricsofa/MidCenturyModernVelvetSofa.webp"
import Tuxedo from "/src/assets/images/ui/banners/products/sofas/velvetfabricsofa/TuxedoVelvetSofa.webp"
import LawsonStyle from "/src/assets/images/ui/banners/products/sofas/velvetfabricsofa/LawsonStyleVelvetSofa.webp"
import Camelback from "/src/assets/images/ui/banners/products/sofas/velvetfabricsofa/CamelbackVelvetSofa.webp"
import Sectional from "/src/assets/images/ui/banners/products/sofas/velvetfabricsofa/SectionalVelvetSofa.webp"
import Footer from "../../components/Footer"

const SofaCollections = [
    { name: "Cushion Sofa Sets", image: Chesterfield, alt: "Chesterfield Velvet Sofa Image" },
    { name: "3 Seater Cushion Sofas", image: MidCenturyModern, alt: "Mid Century Modern Velvet Sofa Image" },
    { name: "2 Seater Cushion Sofas", image: Tuxedo, alt: "Tuxedo Velvet Sofa Image" },
    { name: "L-Shaped Cushion Sofas", image: LawsonStyle,  alt: "Lawson Style Velvet Sofa Image" },
    { name: "Cushion Sofa Cum Bed", image: Camelback, alt: "Camelback Velvet Sofa Image" },
    { name: "Cushion Sofas for Small Rooms", image: Sectional, alt: "Sectional Velvet Sofa Image" },
]

const CushionComfortSofas = () => {
  return (
    <>
    
    <div className="bg-white mt-5 lg:mt-10 mx-5 sm:mx-6 lg:mx-10">
    <div className="flex flex-row items-center space-x-4">
        <a href="/sofas">
        <img src={BackArrow} alt="Back Arrow" className="w-[24px] lg:w-[28px] cursor-pointer" />
        </a>
        <h1 className="font-corinthia text-2xl lg:text-[40px] text-[#6B4C41] font-bold">
            Cushion Comfort Sofas
        </h1>
    </div>
    <div className="mt-5 lg:mt-0 border-t border-[#33333366]"/>

    <div className="flex flex-col mt-10 items-center space-y-6 lg:space-y-10">

        {SofaCollections.map((sofa) => (
        <div className="relative max-h-[140px] md:max-h-[350px] aspect-[8/4] md:aspect-[25/6] lg:aspect-[25/6] w-full cursor-pointer">
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

export default CushionComfortSofas;