import BackArrow from "/src/assets/images/icons/BackArrowIcon.png"
import TraditionalTeakWoodSofa from "/src/assets/images/ui/banners/products/sofas/teakwoodsofas/TraditionalTeakWoodSofa.webp"
import ModernTeakWoodSofa from "/src/assets/images/ui/banners/products/sofas/teakwoodsofas/ModernTeakWoodSofa.webp"
import TeakWoodSofaSet from "/src/assets/images/ui/banners/products/sofas/teakwoodsofas/TeakWoodSofaSets.webp"
import CushionTeakWoodSofa from "/src/assets/images/ui/banners/products/sofas/teakwoodsofas/CushionTeakWoodSofa.webp"
import TeakWoodDiwan from "/src/assets/images/ui/banners/products/sofas/teakwoodsofas/TeakWoodDiwan.webp"
import TeakWoodLshapedSofa from "/src/assets/images/ui/banners/products/sofas/teakwoodsofas/TeakWoodLShapedSofas.webp"

const SofaCollections = [
    { name: "Traditional Teak Wood Sofa", image: TraditionalTeakWoodSofa, alt: "Traditional Teak Wood Sofa" },
    { name: "Modern Teak Wood Sofa", image: ModernTeakWoodSofa, alt: "Modern Teak Wood Sofa" },
    { name: "Teak Wood Sofa Set", image: TeakWoodSofaSet, alt: "Teak Wood Sofa Sets" },
    { name: "Cushion Teak Wood Sofa", image: CushionTeakWoodSofa, alt: "Cushion Teak Wood Sofa" },
    { name: "Teak Wood Diwan", image: TeakWoodDiwan, alt: "Teak Wood Diwan" },
    { name: "Teak Wood L-Shaped Sofa", image: TeakWoodLshapedSofa, alt: "Teak Wood L-Shaped Sofa" },
]

const TeakWoodSofas = () => {
  return (
    <>
    
    <div className="bg-white mt-5 lg:mt-10 mx-5 sm:mx-6 lg:mx-10">
    <div className="flex flex-row items-center space-x-4">
        <a href="/sofas">
        <img src={BackArrow} alt="Back Arrow" className="w-[24px] lg:w-[28px] cursor-pointer" />
        </a>
        <h1 className="font-corinthia text-2xl lg:text-[40px] text-[#6B4C41] font-bold">
            Teak Wood Sofas
        </h1>
    </div>
    <div className="mt-5 lg:mt-0 border-t border-[#33333366]"/>

    <div className="flex flex-col mt-10 items-center space-y-6 lg:space-y-10">

        {SofaCollections.map((item) => (
        <div className="relative max-h-[140px] md:max-h-[350px] aspect-[8/6] md:aspect-[25/6] lg:aspect-[25/6] w-full">
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

export default TeakWoodSofas;