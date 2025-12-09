import Whatsapp from "/src/assets/images/icons/WhatsappIcon.png"

export const WhatsApp = () => {
  return (
    <>
    <div className="fixed bg-[#FFFFFF50] backdrop-blur-sm rounded-2xl bottom-6 lg:bottom-7 right-18 lg:right-21 z-50">
      <h1 className="font-lato p-[10px] text-[11px] lg:text-[14px]">
        Deals on Whatsapp!
      </h1>
    </div>
    <div className="fixed bottom-5 right-5 z-50">
      <a
      href="https://wa.me/918754610386"
      target="_blank">
      <img src={Whatsapp} alt="WhatsApp" className="h-11 lg:h-14 w-11 lg:w-14 cursor-pointer"/>
      </a>
    </div>

    </>
  )
}
