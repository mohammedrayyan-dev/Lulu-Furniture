import HeroBanner4 from "/src/assets/HeroImage4.png"

const AboutUs = () => {
  return (
    <>
    

    <div className="flex flex-col bg-[#FFFFFF] items-center">
      <div className="mb-10 border-t border-[#33333366] w-[1295px]">
        <h1 className="text-[#6B4C41] pt-[40px] font-bold text-[40px] font-corinthia">
            About us
        </h1>
      </div>
        <p className="font-dm text-[#6F6F6F] items-center text-[19px] w-[1280px]">
            At our store, we believe that furniture is more than just something you use it’s what makes a house feel like a home. Every piece we create is made with care, using high-quality woods such as teak, rubber wood, and neem wood, known for their strength, durability, and natural beauty. Our skilled craftsmen combine traditional techniques with modern design to make furniture that is both stylish and long-lasting.
        </p>
        <img src={HeroBanner4} alt="Hero Banner" className="mt-[50px] h-[650px]"/>
    </div>
    
    </>
  )
}

export default AboutUs;
