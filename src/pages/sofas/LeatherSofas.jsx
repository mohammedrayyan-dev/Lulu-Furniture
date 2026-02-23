import BackArrow from "/src/assets/images/icons/BackArrowIcon.png"
import LeatherPUSofaSet from "/src/assets/images/ui/banners/products/sofas/leathersofas/leather-pu-sofa-set.webp"
import LshapedLeatherPUSofa from "/src/assets/images/ui/banners/products/sofas/leathersofas/lshaped-leather-pu-sofa.webp"
import LeatherPUSofaCumBed from "/src/assets/images/ui/banners/products/sofas/leathersofas/leather-pu-sofa-cum-bed.webp"
import PremiumLeatherSofa from "/src/assets/images/ui/banners/products/sofas/leathersofas/premium-leather-sofa.webp"

const SofaCollections = [
    { name: "Leather / PU Sofa Set", image: LeatherPUSofaSet, alt: "Leather / PU Sofa Set" },
    { name: "L-Shaped Leather / PU Sofa", image: LshapedLeatherPUSofa, alt: "L-Shaped Leather / PU Sofa" },
    { name: "Leather / PU Sofa Cum Bed", image: LeatherPUSofaCumBed, alt: "Leather / PU Sofa Cum Bed" },
    { name: "Premium Leather Sofa", image: PremiumLeatherSofa, alt: "Premium Leather Sofa" },
]

const LeatherSofas = () => {
  return (
    <>
    
    <div className="bg-white mt-5 lg:mt-10 mx-5 sm:mx-6 lg:mx-10">
    <div className="flex flex-row items-center space-x-4">
        <a href="/sofas">
        <img src={BackArrow} alt="Back Arrow" className="w-[24px] lg:w-[28px] cursor-pointer" />
        </a>
        <h1 className="font-corinthia text-2xl lg:text-[40px] text-[#6B4C41] font-bold">
            Leather / PU Sofas
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
    </>
  )
}

export default LeatherSofas;