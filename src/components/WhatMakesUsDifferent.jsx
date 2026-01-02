import HeroBanner2 from "/src/assets/images/ui/banners/HeroBanner2.webp"

const WhatMakesUsDifferent = () => {
  return (
    <>
    <div className="bg-white px-5 sm:px-6 lg:px-10">
    <div className="flex flex-col mt-[50px] lg:mb-[50px] lg:w-full max-w-screen-2xl mx-auto">
        <h2 className="text-[#6B4C41] font-bold text-2xl lg:text-4xl font-corinthia">
            What Makes Us Different
        </h2>
        <p className="text-[#6F6F6F] text-justify pt-[20px] font-dm max-w-sm md:max-w-full lg:max-w-screen-2xl text-sm lg:text-lg">
            We create beautiful and long-lasting furniture made from teak, rubber wood, and neem wood. Our main focus is customization, so every piece is designed to match your taste, space, and lifestyle. We believe good quality should be affordable, which is why we offer strong, stylish, and well-crafted furniture at fair prices. Each product is made with care, using the best materials and skilled craftsmanship. We value honesty, customer satisfaction, and attention to detail in everything we do. Choose us to bring comfort, style, and quality into your home.
        </p>
        <div className="mx-auto pt-[30px] lg:pt-[40px] aspect-[16/10] max-w-full md:max-w-[600px] lg:max-w-[905px]">
        <img src={HeroBanner2} 
        alt="Hero Banner" 
        className="w-full h-full rounded-lg" />
        </div>
    </div>
    </div>
    </>
  )
}

export default WhatMakesUsDifferent;
