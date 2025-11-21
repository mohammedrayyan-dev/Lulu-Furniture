import HeroBanner3 from "/src/assets/HeroImage3.png"

const MadeForYou = () => {
  return (
    <>
    <div className="bg-[#FFFFFF] h-dvh flex justify-center gap-10 px-10 py-16">

  <div className="flex flex-col">
  <div className="mb-10 border-t border-[#33333366]"></div>
    <h1 className="text-[40px] pt-[10px] font-corinthia text-[#6B4C41] font-bold">
      Made for You
    </h1>
    <p className="text-[#6F6F6F] pt-[60px] font-dm text-[19px] w-[620px]">
      We understand that every customer is unique. That’s why we focus on customisation—allowing you to choose designs, colours, finishes, and sizes that perfectly match your space and taste. Whether you’re looking for a cozy sofa, a solid wood dining table, or a complete home interior setup, we work closely with you to turn your vision into reality.
    </p>
    <p className="text-[#6F6F6F] pt-[60px] font-dm text-[19px] w-[620px]">
    Every piece we create is thoughtfully crafted to suit your lifestyle, preferences, and home aesthetics. No generic designs, no one-size-fits-all solutions—just furniture made for you. From the first idea to final installation, we ensure the result feels personal, intentional, and uniquely yours.
    </p>
  </div>

  <div className="">
    <img src={HeroBanner3} alt="Hero Banner" className="max-w-full h-auto rounded-lg" />
  </div>

</div>

    </>
  )
}

export default MadeForYou;
