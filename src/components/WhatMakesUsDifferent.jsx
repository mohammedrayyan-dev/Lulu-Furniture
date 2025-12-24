import HeroBanner2 from "/src/assets/images/icons/ui/banners/HeroBanner2.webp"

const WhatMakesUsDifferent = () => {
  return (
    <>
    <div className="bg-white px-5 sm:px-6 lg:px-10">
    <div className="max-w-7xl mx-auto">
    <div className="flex flex-col mt-[50px] mb-[50px] items-center lg:w-full">
      <div>
        <h2 className="text-[#6B4C41] font-bold text-2xl lg:text-4xl font-corinthia">
            What Makes Us Different
        </h2>
        <p className="text-[#6F6F6F] text-justify pt-[20px] font-dm max-w-xs md:max-w-2xl lg:max-w-7xl text-sm lg:text-lg">
            We create beautiful and long-lasting furniture made from teak, rubber wood, and neem wood. Our main focus is customization, so every piece is designed to match your taste, space, and lifestyle. We believe good quality should be affordable, which is why we offer strong, stylish, and well-crafted furniture at fair prices. Each product is made with care, using the best materials and skilled craftsmanship. We value honesty, customer satisfaction, and attention to detail in everything we do. Choose us to bring comfort, style, and quality into your home.
        </p>
        </div>
        <img src={HeroBanner2} alt="Hero Banner" className="pt-[10px] lg:pt-[40px] w-[320px] md:w-[600px] lg:w-[905px] h-[241px] md:h-[430px] lg:h-[500px]"/>
    </div>
    </div>
    </div>
    </>
  )
}

export default WhatMakesUsDifferent;
