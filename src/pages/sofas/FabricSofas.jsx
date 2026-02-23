import BackArrow from "/src/assets/images/icons/BackArrowIcon.png"
import FabricSofaSet from "/src/assets/images/ui/banners/products/sofas/fabricsofas/fabric-sofa-set.webp"
import ThreeSeaterFabricSofa from "/src/assets/images/ui/banners/products/sofas/fabricsofas/three-seater-fabric-sofa.webp"
import TwoSeaterFabricSofa from "/src/assets/images/ui/banners/products/sofas/fabricsofas/2-seater-fabric-sofa.webp"
import LshapedFabricSofa from "/src/assets/images/ui/banners/products/sofas/fabricsofas/lshaped-fabric-sofa.webp"
import FabricSofaCumBed from "/src/assets/images/ui/banners/products/sofas/fabricsofas/fabric-sofa-cum-bed.webp"
import FabricSofasForSmallRoom from "/src/assets/images/ui/banners/products/sofas/fabricsofas/fabric-sofa-for-small-room.webp"

const SofaCollections = [
    { name: "Fabric Sofa Set", image: FabricSofaSet, alt: "Fabric Sofa Set" },
    { name: "3 Seater Fabric Sofa", image: ThreeSeaterFabricSofa, alt: "3 Seater Fabric Sofa" },
    { name: "2 Seater Fabric Sofa", image: TwoSeaterFabricSofa, alt: "2 Seater Fabric Sofa" },
    { name: "L-Shaped Fabric Sofa", image: LshapedFabricSofa, alt: "L-Shaped Fabric Sofa" },
    { name: "Fabric Sofa Cum Bed", image: FabricSofaCumBed, alt: "Fabric Sofa Cum Bed" },
    { name: "Fabric Sofa for Small Room", image: FabricSofasForSmallRoom, alt: "Fabric Sofas for Small Room" },
]

const FabricSofas = () => {
  return (
    <>
    
    <div className="bg-white mt-5 lg:mt-10 mx-5 sm:mx-6 lg:mx-10">
    <div className="flex flex-row items-center space-x-4">
        <a href="/sofas">
        <img src={BackArrow} alt="Back Arrow" className="w-[24px] lg:w-[28px] cursor-pointer" />
        </a>
        <h1 className="font-corinthia text-2xl lg:text-[40px] text-[#6B4C41] font-bold">
            Fabric Sofas
        </h1>
    </div>
    <div className="mt-5 lg:mt-0 border-t border-[#33333366]"/>

    <div className="flex flex-col mt-10 items-center space-y-6 lg:space-y-10">

        {SofaCollections.map((item) => (
        <div className="relative max-h-[140px] md:max-h-[350px] aspect-[8/4] md:aspect-[25/6] lg:aspect-[25/6] w-full">
        <img src={item.image} alt={item.alt} className="h-full w-full object-cover rounded-3xl" />
        <div className="absolute inset-0 bg-[#00000030] hover:bg-[#00000045] rounded-3xl" />
        <h3 className="absolute font-lato text-[#FFFFFF] text-xl lg:text-3xl bottom-4 lg:bottom-6 left-4 lg:left-8">
            {item.name}
        </h3>
        </div>
        ))}
        
    </div>
    </div>
    </>
  )
}

export default FabricSofas;