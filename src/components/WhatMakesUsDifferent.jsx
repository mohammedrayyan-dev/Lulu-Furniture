import HeroBanner2 from "/src/assets/images/ui/banners/HeroBanner2.webp"

const WhatMakesUsDifferent = () => {
  return (
    <>
    <div className="bg-white px-5 sm:px-6 lg:px-10">
    <div className="flex flex-col mt-[50px] lg:mb-[50px] lg:w-full max-w-screen-2xl mx-auto">
        <h2 className="text-[#6B4C41] font-bold text-2xl lg:text-4xl font-corinthia">
            What Makes Us Different
        </h2>
        <p className="text-sm lg:text-xl font-md pt-[20px] text-[#5a4a42]">
          Well-crafted furniture, built for everyday living.
        </p>
        <p className="text-[#6F6F6F] text-justify pt-[20px] font-dm max-w-sm md:max-w-full lg:max-w-screen-2xl text-xs lg:text-lg">
          We create well-crafted, long-lasting furniture using quality materials such as teak, neem, and rubber wood, chosen for their strength and reliability. Every piece we make is designed with everyday use in mind — furniture that feels solid, comfortable, and dependable over time.
        </p>
        <p className="text-[#6F6F6F] text-justify pt-[20px] font-dm max-w-sm md:max-w-full lg:max-w-screen-2xl text-xs lg:text-lg">
          Our main focus is customization. Instead of offering fixed designs, we work around your space, preferences, and lifestyle to create furniture that fits naturally into your home. From dimensions and finishes to overall design, each detail is thoughtfully planned rather than mass-produced.
        </p>
        <p className="text-[#6F6F6F] text-justify pt-[20px] font-dm max-w-sm md:max-w-full lg:max-w-screen-2xl text-xs lg:text-lg">
          We believe good furniture should be honestly priced. Each product is crafted with care by experienced hands, ensuring strong structure, balanced design, and a clean finish. Above all, we value honesty, transparency, and customer satisfaction — from the first conversation to the final delivery.
        </p>
        <p className="text-[#6B4C41]">
        ———
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
