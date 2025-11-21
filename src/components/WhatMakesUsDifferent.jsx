import HeroBanner2 from "/src/assets/HeroImage2.png"

const WhatMakesUsDifferent = () => {
  return (
    <>
    <div className="bg-[#FFFFFF] h-dvh flex flex-col items-center">

    <div className="flex flex-col mt-[40px] items-center space-y-6 w-[1295px]">
      <div>
        <h1 className="text-[#6B4C41] font-bold text-[40px] font-corinthia">
            What Makes Us Different
        </h1>
        <p className="text-[#6F6F6F] pt-[20px] font-dm text-[19px]">
            We create beautiful and long-lasting furniture made from teak, rubber wood, and neem wood. Our main focus is customization, so every piece is designed to match your taste, space, and lifestyle. We believe good quality should be affordable, which is why we offer strong, stylish, and well-crafted furniture at fair prices. Each product is made with care, using the best materials and skilled craftsmanship. We value honesty, customer satisfaction, and attention to detail in everything we do. Choose us to bring comfort, style, and quality into your home.
        </p>
        </div>
        <img src={HeroBanner2} alt="Hero Banner" className="mt-[20px] h-[500px] w-[900px]"/>
    </div>
    </div>
    </>
  )
}

export default WhatMakesUsDifferent;
