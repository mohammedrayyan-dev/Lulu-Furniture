import HeroBanner4 from "/src/assets/images/icons/ui/banners/HeroBanner4.png"

const AboutUs = () => {
  return (
    <>
    <div className="flex flex-col bg-[#FFFFFF] items-center">
      <div className="hidden lg:block mb-10 border-t w-[1295px] border-[#33333366]" />
      <div>
        <h1 className="text-[#6B4C41] pt-[2px] lg:pt-[10px] font-bold text-[24px] lg:text-[40px] font-corinthia">
            About us
        </h1>
        <p className="font-dm pt-[15px] lg:pt-[40px] max-w-xs md:max-w-2xl lg:max-w-7xl text-[#6F6F6F] text-[14px] lg:text-[19px]">
            At our store, we believe that furniture is more than just something you use it’s what makes a house feel like a home. Every piece we create is made with care, using high-quality woods such as teak, rubber wood, and neem wood, known for their strength, durability, and natural beauty. Our skilled craftsmen combine traditional techniques with modern design to make furniture that is both stylish and long-lasting.
        </p>
        </div>
      <div className="flex flex-col items-center">
        <img src={HeroBanner4} alt="Hero Banner" className="pt-[30px] lg:pt-[50px] h-[220px] md:h-[430px] lg:h-[650px] w-[326px] md:w-[600px] lg:w-[1050px]"/>
    </div>
    </div>
    </>
  )
}

export default AboutUs;
