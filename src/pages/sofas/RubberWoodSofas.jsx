import BackArrow from "/src/assets/images/icons/BackArrowIcon.png"
import ModernRubberWoodSofa from "/src/assets/images/ui/banners/products/sofas/rubberwoodsofas/modern-rubber-wood-sofa.webp"
import RubberWoodSofaSet from "/src/assets/images/ui/banners/products/sofas/rubberwoodsofas/rubber-wood-sofa-set.webp"
import CushionRubberWoodSofa from "/src/assets/images/ui/banners/products/sofas/rubberwoodsofas/cushion-rubber-wood-sofa.webp"
import CompactRubberWoodSofa from "/src/assets/images/ui/banners/products/sofas/rubberwoodsofas/compact-rubber-wood-sofa.webp"
import RubberWoodLshapedSofa from "/src/assets/images/ui/banners/products/sofas/rubberwoodsofas/rubber-wood-lshaped-sofa.webp"
import RubberWoodSofaCumBed from "/src/assets/images/ui/banners/products/sofas/rubberwoodsofas/rubber-wood-sofa-cum-bed.webp"

const SofaCollections = [
    { name: "Modern Rubber Wood Sofa", image: ModernRubberWoodSofa, alt: "Modern Rubber Wood Sofa" },
    { name: "Rubber Wood Sofa Set", image: RubberWoodSofaSet, alt: "Modern Rubber Wood Sofa Set" },
    { name: "Cushion Rubber Wood Sofa", image: CushionRubberWoodSofa, alt: "Cushion Rubber Wood Sofa" },
    { name: "Compact Rubber Wood Sofa", image: CompactRubberWoodSofa, alt: "Compact Rubber Wood Sofa" },
    { name: "Rubber Wood L-Shaped Sofa", image: RubberWoodLshapedSofa, alt: "Rubber Wood L-Shaped Sofa" },
    { name: "Rubber Wood Sofa Cum Bed", image: RubberWoodSofaCumBed, alt: "Rubber Wood Sofa Cum Bed" },
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

export default RubberWoodSofas;