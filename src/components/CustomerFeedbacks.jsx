import GoogleReviews from "/src/components/GoogleReviews.jsx"

const CustomerFeedbacks = () => {
  return (
    <>
    <div className="bg-white mx-5 sm:mx-6 lg:mx-10">
    <div className="flex flex-col max-w-screen-2xl mx-auto">
      <div className="hidden lg:block mb-10 border-t w-full border-[#33333366]" />

      {/* Text Content */}
      <div className="flex items-center justify-between">
        <h2 className="text-[#6B4C41] font-bold text-2xl lg:text-4xl font-corinthia">
            Customer Feedbacks
        </h2>
      </div>

      {/* Google Review */}
      <div className="pt-[20px] pb-[40px] max-w-sm md:max-w-4xl lg:max-w-screen-2xl">
        <GoogleReviews />
      </div>
    </div>
    </div>
    </>
  )
}

export default CustomerFeedbacks;
