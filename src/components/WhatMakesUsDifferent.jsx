import HeroBanner2 from "/src/assets/images/icons/ui/banners/HeroBanner2.png"

const WhatMakesUsDifferent = () => {
  return (
    <>
    <div className="bg-[#FFFFFF] lg:h-dvh flex flex-col items-center px-5 lg:px-10">

    <div className="flex flex-col mt-[40px] items-center space-y-6 lg:w-[1295px]">
      <div>
        <h1 className="text-[#6B4C41] font-bold text-[24px] lg:text-[40px] font-corinthia">
            What Makes Us Different
        </h1>
        <p className="text-[#6F6F6F] pt-[20px] font-dm max-w-xs md:max-w-2xl lg:max-w-7xl text-[14px] lg:text-[19px]">
            We create beautiful and long-lasting furniture made from teak, rubber wood, and neem wood. Our main focus is customization, so every piece is designed to match your taste, space, and lifestyle. We believe good quality should be affordable, which is why we offer strong, stylish, and well-crafted furniture at fair prices. Each product is made with care, using the best materials and skilled craftsmanship. We value honesty, customer satisfaction, and attention to detail in everything we do. Choose us to bring comfort, style, and quality into your home.
        </p>
        </div>
        <img src={HeroBanner2} alt="Hero Banner" className="mt-[10px] lg:mt-[20px] w-[320px] md:w-[600px] lg:w-[905px] h-[241px] md:h-[430px] lg:h-[500px]"/>
    </div>
    </div>
    </>
  )
}

export default WhatMakesUsDifferent;
