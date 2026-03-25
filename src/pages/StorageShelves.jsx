import BackArrow from "/src/assets/images/ui/icons/BackArrowIcon.png"
import StorageTable from "/src/assets/images/products/storage-shelves/StorageTable.webp"
import DressingTable from "/src/assets/images/products/storage-shelves/DressingTable.webp"
import DressCupboard from "/src/assets/images/products/storage-shelves/DressCupboard.webp"
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom"

const StorageShelfCollections = [
    { name: "Book Shelves", image: StorageTable, alt: "Book Shelves", path: "/storage-shelves/book-shelves" },
    { name: "Shoe Racks", image: DressingTable, alt: "Shoe Racks", path: "/storage-shelves/shoe-racks" },
    { name: "Wall Mounted Shelves", image: DressCupboard, alt: "Wall Mounted Shelves", path: "/storage-shelves/wall-mounted-shelves" },
]

const StorageShelfs = () => {

    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Storage Shelves | Lulu Furniture";
    }, []);

  return (
    <>
    <div className="bg-white mt-5 lg:mt-10 mx-5 sm:mx-6 lg:mx-10">

    <div className="max-w-7xl mx-auto">
    <div className="flex flex-row items-center space-x-4">
        <Link 
        to="/">
            <img src={BackArrow} alt="Back Arrow" className="w-[24px] lg:w-[28px] cursor-pointer" />
        </Link>
        <h1 className="font-corinthia text-2xl lg:text-[40px] text-[#6B4C41] font-bold">
            Storage Shelves
        </h1>
    </div>
    <div className="mt-5 lg:mt-0 border-t border-[#33333366]" />

    <div className="flex flex-col mt-6 lg:mt-8 items-center gap-6 lg:gap-8">

        {StorageShelfCollections.map((storage) => (
        <div
        onClick={() => navigate(storage.path)}
        className="relative h-[140px] md:h-[180px] lg:h-[320px] w-full cursor-pointer overflow-hidden rounded-3xl"
        >
        <img src={storage.image} alt={storage.alt} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[#00000030] hover:bg-[#00000045]" />
        <h3 className="absolute font-lato text-[#FFFFFF] text-xl lg:text-3xl bottom-4 lg:bottom-6 left-4 lg:left-8">
            {storage.name}
        </h3>
        </div>
        ))}
        </div>
        </div>
        
    </div>
    </>
  )
}

export default StorageShelfs;
