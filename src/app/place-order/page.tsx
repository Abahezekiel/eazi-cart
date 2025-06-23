import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "place-order",
  },
  };


export default function PlaceOrder() {
  return (
    <>
    
    <div>
        <div className="flex gap-3 items-center">
          <p className="text-2xl text-[#6B7280] mt-8">
            DELIVERY{" "}
            <span className="text-[#374051] font-medium">INFORMATION</span>
          </p>
          <p className="w-12 h-[2px] bg-[#414141] mt-8"></p>
        </div>

        <div className="flex gap-4 mt-12">
          <div className="w-[50%] ">
            <div className="flex gap-4 ">
              <input
                placeholder="First name"
                className="w-1/2 p-1 pl-3 rounded border border-[#D1D5DB]"
              />
              <input
                placeholder="Last name"
                className="w-1/2 p-1 pl-3 rounded border border-[#D1D5DB]"
              />
            </div>
            <div className="mt-4">
              <input
                placeholder="E-mail address"
                className="w-full p-1  pl-3 rounded border border-[#D1D5DB]"
              />
            </div>
            <div className="mt-4">
              <input
                placeholder="Street"
                className="w-full p-1  pl-3 rounded border border-[#D1D5DB]"
              />
            </div>
            <div className="flex gap-4 mt-4">
              <input
                placeholder="City"
                className="w-1/2 p-1 pl-3 rounded border border-[#D1D5DB]"
              />
              <input
                placeholder="State"
                className="w-1/2 p-1 pl-3 rounded border border-[#D1D5DB]"
              />
            </div>
            <div className="flex gap-4 mt-4">
              <input
                placeholder="Zip code"
                className="w-1/2 p-1 pl-3 rounded border border-[#D1D5DB]"
              />
              <input
                placeholder="Country"
                className="w-1/2 p-1 pl-3 rounded border border-[#D1D5DB]"
              />
            </div>
            <div className="mt-4">
              <input
                placeholder="Phone"
                className="w-full p-1  pl-3 rounded border border-[#D1D5DB]"
              />
            </div>
          </div>

          <div className="w-[50%]">
            <div className="flex gap-3 items-center">
              <p className="text-2xl text-[#6B7280] ">
                CART <span className="text-[#374051] font-medium">TOTALS</span>
              </p>
              <p className="w-12 h-[2px] bg-[#414141] "></p>
            </div>

            <div className="flex justify-between text-sm mt-4">
              <p>SubTotal</p>
              <p>$0.00</p>
            </div>
            <p className="border-b border-[#E5E7EB] mt-2"></p>

            <div className="flex justify-between text-sm mt-2">
              <p>Shipping Fee</p>
              <p>$10.00</p>
            </div>
            <p className="border-b border-[#E5E7EB] mt-2"></p>
            <div className="flex justify-between text-sm mt-2">
              <b>Total</b>
              <p>$0.00</p>
            </div>
            <p className="border-b border-[#E5E7EB] mt-2"></p>

            <div>
              <div className="flex gap-3 items-center mt-10">
                <p className=" text-[#6B7280] ">
                  PAYMENT{" "}
                  <span className="text-[#374051] font-medium">METHOD</span>
                </p>
                <p className="w-12 h-[2px] bg-[#414141] "></p>
              </div>

              <div className="flex gap-3">
                <label className="flex items-center border border-[#E5E7EB] w-30 gap-4 p-2 mt-4 cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="custom"
                    className="accent-blue-500"
                  />
                  <img
                    src="data:image/png;base64,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"
                    alt="Custom Payment"
                    className="w-10"
                  />
                </label>

                <label className="flex items-center border border-[#E5E7EB] w-52 gap-4 p-2 mt-4 cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="razorpay"
                    className="accent-blue-500"
                  />
                  <img
                    src="https://foreverbuy.in/assets/razorpay_logo-DrY6yMWi.png"
                    alt="Razorpay"
                    className="w-20"
                  />
                </label>

                <label className="flex items-center border border-[#E5E7EB] w-64 gap-4 p-2 mt-4 text-sm cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    className="accent-blue-500"
                  />
                  <span>CASH ON DELIVERY</span>
                </label>
              </div>

              <div className="text-end mt-8 text-sm">
                <button className="bg-black text-white px-14 py-3">
                  PLACE ORDER
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
   
    </>
  )
}