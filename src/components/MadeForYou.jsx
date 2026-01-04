import HeroBanner3 from "/src/assets/images/ui/banners/HeroBanner3.webp"

const MadeForYou = () => {
  return (
    <>
    <div className="bg-white mx-5 sm:mx-6 lg:mx-10">
    <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-2xl mx-auto lg:mt-[50px] lg:mb-[50px] justify-center md:flex-row lg:flex-row md:gap-4 lg:gap-10 py-8 lg:py-0">

  <div className="flex flex-col space-y-4 lg:space-y-6">
  <div className="hidden lg:block mb-10 w-full border-t border-[#33333366]" />
    <h2 className="text-2xl lg:text-4xl pt-[10px] font-corinthia text-[#6B4C41] font-bold">
      Made for You
    </h2>
    <p className="text-sm lg:text-xl font-md text-[#5a4a42]">
      Furniture designed around how you live.
    </p>
    <p className="text-[#6F6F6F] text-justify max-w-sm md:max-w-md lg:max-w-screen-2xl font-dm text-xs lg:text-lg">
      We understand that every home — and every customer — is different. That’s why we focus on customisation, giving you the freedom to choose designs, finishes, colours, and sizes that suit your space and taste.
    </p>
    <p className="text-[#6F6F6F] text-justify max-w-sm md:max-w-md lg:max-w-screen-2xl font-dm text-xs lg:text-lg">
      Whether you’re looking for a comfortable sofa, a solid wood dining table, or furniture for an entire home, we work closely with you to understand what you need and what will work best. Instead of fixed templates, we focus on practical solutions that feel right for your lifestyle.
    </p>
    <p className="text-[#6F6F6F] text-justify max-w-sm md:max-w-md lg:max-w-screen-2xl font-dm text-xs lg:text-lg">
      Every piece we create is thoughtfully made to suit how you live and use your space. No generic designs or one-size-fits-all solutions — just furniture that fits naturally into your home. From the initial discussion to the final installation, we make sure the result feels personal, intentional, and truly yours.
    </p>
    <button 
    className="hidden md:block bg-[#6B4C41] hover:bg-[#553C34] mt-[20px] font-semibold font-dm text-[12px] lg:text-[14px] text-[#ffffff] rounded-lg w-[130px] md:w-[180px] lg:w-[220px] h-[48px] cursor-pointer"
    onClick={() => window.open("https://maps.app.goo.gl/spwoasBbUh7aSXJeA", "_blank")}>
      Visit our showroom in Hosur
    </button>
  </div>

  <div className="mx-auto pt-[15px] lg:pt-[0px]  max-w-full lg:max-w-[800px]">
    <img src={HeroBanner3} alt="Hero Banner" className="w-full h-full rounded-lg" />
  </div>

</div>
</div>

    </>
  )
}

export default MadeForYou;
