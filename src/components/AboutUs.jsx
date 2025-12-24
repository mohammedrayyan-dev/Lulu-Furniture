import HeroBanner4 from "/src/assets/images/icons/ui/banners/HeroBanner4.webp"

const AboutUs = () => {
  return (
    <>
    <div className="bg-white px-5 sm:px-6 lg:px-10">
    <div className="flex flex-col max-w-7xl mx-auto">
      <div className="hidden lg:block mb-10 border-t w-full border-[#33333366]" />

      {/* Text Content */}
      <div>
        <h2 className="text-[#6B4C41] text-2xl lg:text-4xl font-bold font-corinthia pt-[2px] lg:pt-[10px]">
            About us
        </h2>

        <p className="font-dm text-justify pt-[15px] lg:pt-[40px] max-w-sm md:max-w-2xl lg:max-w-7xl text-[#6F6F6F] text-sm lg:text-lg">
            At our store, we believe that furniture is more than just something you use it’s what makes a house feel like a home. Every piece we create is made with care, using high-quality woods such as teak, rubber wood, and neem wood, known for their strength, durability, and natural beauty. Our skilled craftsmen combine traditional techniques with modern design to make furniture that is both stylish and long-lasting.
        </p>
      </div>

      {/* Image Section */}
      <div className="pt-[30px] lg:pt-[50px] w-full">
        <div className="w-full max-w-[1050px] aspect-[16/9] mx-auto overflow-hidden rounded-xl">
        <img 
        src={HeroBanner4} 
        alt="Hero Banner" 
        className="w-full h-full object-cover"
        />
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default AboutUs;
