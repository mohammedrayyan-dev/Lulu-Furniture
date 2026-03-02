import BackArrow from "/src/assets/images/ui/icons/BackArrowIcon.png"
import VelvetSofaSet from "/src/assets/images/products/sofas/velvetsofas/velvet-sofa-set.webp"
import LshapedVelvetSofa from "/src/assets/images/products/sofas/velvetsofas/lshaped-velvet-sofa.webp"
import VelvetSofaCumBed from "/src/assets/images/products/sofas/velvetsofas/velvet-sofa-cum-bed.webp"
import PremiumVelvetSofa from "/src/assets/images/products/sofas/velvetsofas/premium-velvet-sofa.webp"
import { useEffect } from "react";

const SofaCollections = [
    { name: "Velvet Sofa Set", image: VelvetSofaSet, alt: "Velvet Sofa Set" },
    { name: "L-Shaped Velvet Sofa", image: LshapedVelvetSofa, alt: "L-Shaped Velvet Sofa" },
    { name: "Velvet Sofa Cum Bed", image: VelvetSofaCumBed, alt: "Velvet Sofa Cum Bed" },
    { name: "Premium Velvet Sofa", image: PremiumVelvetSofa,  alt: "Premium Velvet Sofa" },
]

const VelvetSofas = () => {

    useEffect(() => {
        document.title = "Velvet Sofas | Lulu Furniture";
    }, []);

  return (
    <>
    <div className="bg-white mt-5 lg:mt-10 mx-5 sm:mx-6 lg:mx-10">
    <div className="flex flex-row items-center space-x-4">
        <a href="/sofas">
        <img src={BackArrow} alt="Back Arrow" className="w-[24px] lg:w-[28px] cursor-pointer" />
        </a>
        <h1 className="font-corinthia text-2xl lg:text-[40px] text-[#6B4C41] font-bold">
            Velvet Sofas
        </h1>
    </div>
    <div className="mt-5 lg:mt-0 border-t border-[#33333366]"/>

    <div className="flex flex-col mt-6 lg:mt-8 items-center gap-6 lg:gap-8">

        {SofaCollections.map((sofa) => (
        <div 
        className="relative h-[140px] md:h-[260px] lg:h-[350px] w-full cursor-pointer overflow-hidden"
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
    </>
  )
}

export default VelvetSofas;