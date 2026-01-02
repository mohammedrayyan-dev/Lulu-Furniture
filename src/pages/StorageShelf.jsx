import BackArrow from "/src/assets/images/icons/BackArrowIcon.png"
import StorageTable from "/src/assets/images/ui/banners/products/storageshelf/StorageTable.webp"
import DressingTable from "/src/assets/images/ui/banners/products/storageshelf/DressingTable.webp"
import DressCupboard from "/src/assets/images/ui/banners/products/storageshelf/DressCupboard.webp"
import Footer from "../components/Footer.jsx"
import { WhatsApp } from "/src/components/Whatsapp.jsx"

const StorageShelfCollections = [
    { name: "Storage Table", image: StorageTable, alt: "Storage Table Image" },
    { name: "Dressing Table", image: DressingTable, alt: "Dressing Table Image" },
    { name: "Dress Cupboard", image: DressCupboard, alt: "Dress Cupboard Image" }
]

const StorageShelf = () => {
  return (
    <>
    {/* Whatsapp float */}
    <WhatsApp />

    {/* Storage Shelf */}
    <div className="bg-[#FFFFFF]  mt-5 lg:mt-10 mx-5 md:mx-10 lg:mx-15">
    <div className="flex flex-row items-center space-x-4">
        <a href="/">
            <img src={BackArrow} alt="Back Arrow" onClick={"/"} className="w-[24px] lg:w-[28px] cursor-pointer" />
        </a>
        <h1 className="font-corinthia text-2xl lg:text-[40px] text-[#6B4C41] font-bold">
            Storage Shelf
        </h1>
    </div>
    <div className="mt-5 lg:mt-0 border-t border-[#33333366]" />

    <div className="mt-2 mb-10">
    <h2 className="text-sm lg:text-xl font-md pt-[20px] text-[#5a4a42]">
        Storage Solutions for Everyday Spaces
    </h2>
    <p className="text-[#6F6F6F] text-justify pt-[20px] font-dm max-w-sm md:max-w-full lg:max-w-screen-2xl text-sm lg:text-lg">
        Good storage plays a key role in keeping a home organised and clutter-free. At Lulu Furniture, we offer wooden storage shelves in various designs, created to balance functionality with clean, practical design. Our storage shelves are designed to suit different spaces — living rooms, bedrooms, study areas, and more. From open shelving to more enclosed storage solutions, we focus on ease of access, proper structure, and durability. Each shelf is built to support daily use without feeling heavy or intrusive.
    </p>
    <p className="text-[#6F6F6F] text-justify pt-[20px] font-dm max-w-sm md:max-w-full lg:max-w-screen-2xl text-sm lg:text-lg">
        We understand that storage needs vary, so we provide flexible design options that can be adapted to different layouts and purposes. Whether used for display, organisation, or both, our shelves are designed to fit naturally into your home. With careful attention to materials, construction, and finish, our storage shelves offer practical solutions that help keep spaces organised while maintaining a clean and balanced look.
    </p>
    </div>

    <div className="flex flex-col items-center px-5 sm:px-6 lg:px-15 space-y-6 lg:space-y-10">

        {StorageShelfCollections.map((item) => (
        <div className="relative aspect-[12/5] lg:aspect-[25/6] w-[320px] lg:w-full">
        <img src={item.image} alt={item.alt} className="h-full w-full object-cover rounded-3xl" />
        <div className="absolute inset-0 bg-[#00000030] hover:bg-[#00000045] rounded-3xl" />
        <h3 className="absolute font-lato text-[#FFFFFF] text-xl lg:text-3xl bottom-4 lg:bottom-6 left-4 lg:left-8">
            {item.name}
        </h3>
        </div>
        ))}
        
    </div>
    </div>
    <Footer />
    </>
  )
}

export default StorageShelf;
