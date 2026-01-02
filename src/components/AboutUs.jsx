import HeroBanner4 from "/src/assets/images/ui/banners/HeroBanner4.webp"

const AboutUs = () => {
  return (
    <>
    <div className="bg-white px-5 sm:px-6 lg:px-10">
    <div className="flex flex-col max-w-screen-2xl mx-auto">
      <div className="hidden lg:block mb-10 border-t w-full border-[#33333366]" />

      {/* Text Content */}
      <div>
        <h2 className="text-[#6B4C41] text-2xl lg:text-4xl font-bold font-corinthia pt-[2px] lg:pt-[10px]">
            About us
        </h2>

        <p className="font-dm text-justify pt-[10px] lg:pt-[40px] max-w-sm md:max-w-full lg:max-w-screen-2xl text-[#6F6F6F] text-xs lg:text-lg">
          Lulu Furniture was built on a simple belief — good furniture should be made properly and last for years. We focus on solid materials, skilled workmanship, and thoughtful design, rather than shortcuts or mass production. Based in Hosur, we work closely with customers who value durability, comfort, and honesty. From sourcing quality wood to crafting each piece with care, every step is handled with attention and responsibility. We believe furniture should feel dependable in everyday life, not just look good on the first day.
        </p>
        <p className="font-dm text-justify pt-[10px] lg:pt-[40px] max-w-sm md:max-w-full lg:max-w-screen-2xl text-[#6F6F6F] text-xs lg:text-lg">
          Our work is shaped by experience and a clear understanding of how homes are actually used. Instead of following trends, we focus on building furniture that fits naturally into different spaces and lifestyles. Whether it’s a single piece or furniture for an entire home, we approach every project with the same level of care. What matters most to us is trust. Clear communication, honest pricing, and consistent quality are at the core of how we work. When you choose Lulu Furniture, you’re choosing craftsmanship, reliability, and furniture made to stand the test of time.
        </p>
      </div>

      {/* Image Section */}
        <div className="mx-auto pt-[30px] lg:pt-[40px] aspect-[16/10] max-w-full md:max-w-[600px] lg:max-w-[905px]">
        <img 
        src={HeroBanner4} 
        alt="Hero Banner" 
        className="w-full h-full rounded-lg"
        />
        </div>
    </div>
    </div>
    </>
  )
}

export default AboutUs;
