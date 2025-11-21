import Whatsapp from "/src/assets/WhatsappIcon.png"

export const WhatsApp = () => {
  return (
    <>
    <div className="fixed bg-[#FFFFFF50] rounded-2xl bottom-7 right-21 z-50">
      <h1 className="font-lato p-[10px] text-[14px]">
        Deals on Whatsapp!
      </h1>
    </div>
    <div className="fixed bottom-5 right-5 z-50">
      <a
      href="https://wa.me/8220137877"
      target="_blank">
      <img src={Whatsapp} alt="WhatsApp" className="h-14 w-14 cursor-pointer"/>
      </a>
    </div>

    </>
  )
}
