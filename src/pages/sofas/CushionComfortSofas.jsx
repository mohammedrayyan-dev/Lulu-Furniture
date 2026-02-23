import BackArrow from "/src/assets/images/icons/BackArrowIcon.png"
import CushionSofaSet from "/src/assets/images/ui/banners/products/sofas/cushioncomfortsofas/cushion-sofa-set.webp"
import ThreeSeaterCushionSofa from "/src/assets/images/ui/banners/products/sofas/cushioncomfortsofas/3-seater-cushion-sofa.webp"
import TwoSeaterCushionSofa from "/src/assets/images/ui/banners/products/sofas/cushioncomfortsofas/2-seater-cushion-sofa.webp"
import LshapedCushionSofa from "/src/assets/images/ui/banners/products/sofas/cushioncomfortsofas/lshaped-cushion-sofa.webp"
import CushionSofaCumBed from "/src/assets/images/ui/banners/products/sofas/cushioncomfortsofas/cushion-sofa-cum-bed.webp"
import CushionSofaForSmallRoom from "/src/assets/images/ui/banners/products/sofas/cushioncomfortsofas/cushion-sofas-for-small-room.webp"

const SofaCollections = [
    { name: "Cushion Sofa Set", image: CushionSofaSet, alt: "Cushion Sofa Set" },
    { name: "3 Seater Cushion Sofa", image: ThreeSeaterCushionSofa, alt: "Three Seater Cushion Sofa" },
    { name: "2 Seater Cushion Sofa", image: TwoSeaterCushionSofa, alt: "Two Seater Cushion Sofa" },
    { name: "L-Shaped Cushion Sofa", image: LshapedCushionSofa,  alt: "L-Shaped Cushion Sofa" },
    { name: "Cushion Sofa Cum Bed", image: CushionSofaCumBed, alt: "Cushion Sofa Cum Bed" },
    { name: "Cushion Sofa for Small Room", image: CushionSofaForSmallRoom, alt: "Cushion Sofa for Small Room" },
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
        <div className="relative max-h-[140px] md:max-h-[350px] aspect-[8/4] md:aspect-[25/6] lg:aspect-[25/6] w-full">
        <img src={sofa.image} alt={sofa.alt} className="h-full w-full object-cover rounded-3xl" />
        <div className="absolute inset-0 bg-[#00000030] hover:bg-[#00000045] rounded-3xl" />
        <h3 className="absolute font-lato text-[#FFFFFF] text-xl lg:text-3xl bottom-4 lg:bottom-6 left-4 lg:left-8">
            {sofa.name}
        </h3>
        </div>
        ))}

        </div>
    
    </div>
    </>
  )
}

export default CushionComfortSofas;