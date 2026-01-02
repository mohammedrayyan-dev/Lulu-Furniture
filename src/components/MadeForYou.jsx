import HeroBanner3 from "/src/assets/images/ui/banners/HeroBanner3.webp"

const MadeForYou = () => {
  return (
    <>
    <div className="bg-white px-5 sm:px-6 lg:px-10">
    <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-2xl mx-auto lg:mb-[50px] justify-center md:flex-row lg:flex-row md:gap-4 lg:gap-10 py-8 lg:py-0">

  <div className="flex flex-col space-y-4 lg:space-y-10">
  <div className="hidden lg:block mb-10 w-full border-t border-[#33333366]" />
    <h2 className="text-2xl lg:text-4xl pt-[10px] font-corinthia text-[#6B4C41] font-bold">
      Made for You
    </h2>
    <p className="text-[#6F6F6F] text-justify max-w-sm md:max-w-md lg:max-w-screen-2xl font-dm text-sm lg:text-lg">
      We understand that every customer is unique. That’s why we focus on customisation—allowing you to choose designs, colours, finishes, and sizes that perfectly match your space and taste. Whether you’re looking for a cozy sofa, a solid wood dining table, or a complete home interior setup, we work closely with you to turn your vision into reality.
    </p>
    <p className="text-[#6F6F6F] text-justify max-w-sm md:max-w-md lg:max-w-screen-2xl font-dm text-sm lg:text-lg">
    Every piece we create is thoughtfully crafted to suit your lifestyle, preferences, and home aesthetics. No generic designs, no one-size-fits-all solutions—just furniture made for you. From the first idea to final installation, we ensure the result feels personal, intentional, and uniquely yours.
    </p>
  </div>

  <div className="mx-auto pt-[30px] lg:pt-[0px] aspect-[1/1] max-w-full lg:max-w-[800px]">
    <img src={HeroBanner3} alt="Hero Banner" className="w-full h-full rounded-lg" />
  </div>

</div>
</div>

    </>
  )
}

export default MadeForYou;
