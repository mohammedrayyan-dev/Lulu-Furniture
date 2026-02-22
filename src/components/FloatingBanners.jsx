import WhatsappIcon from "/src/assets/images/icons/WhatsappIcon.png"
import BajajIcon from "/src/assets/images/icons/BajajFinanceIcon.png"

const FloatingBanners = () => {
  return (
    <>
    <div className="fixed bg-[#FFFFFF50] backdrop-blur-sm rounded-2xl bottom-6 lg:bottom-7 right-18 lg:right-26 z-50">
      <h3 className="font-lato p-[10px] text-[11px] lg:text-[14px]">
        Deals on Whatsapp!
      </h3>
    </div>
    <div className="fixed bottom-5 right-5 lg:right-9 z-50">
      <a
      href="https://wa.me/918754610386"
      target="_blank">
        <img src={WhatsappIcon} alt="WhatsApp Icon" className="h-11 lg:h-14 w-11 lg:w-14 cursor-pointer"/>
      </a>
    </div>

    </>
  )
}

export default FloatingBanners;
