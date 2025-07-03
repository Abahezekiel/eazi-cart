import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "cart",
  },
  };


export default function AdminPanel() {
  return (
    <>
    
 {/* cart page */}
 <div>
        <div className="border-b border-[#E5E7EB] "></div>
        <div className="flex gap-6 items-center  mt-18">
          <div className="   w-[60%]">
            <div className="text-2xl text-[#6B7280]  flex items-center gap-3">
              YOUR <span className="text-[#374051] font-medium">CART</span>
              <p className="w-12 h-[2px] bg-[#414141] "></p>
            </div>
          </div>
        </div>

        <div className="border-b border-[#E5E7EB] mt-6"></div>

        <div className="flex gap-6 items-center  mt-2">
          <div className="   w-[60%]">
            <div className="text-2xl  flex items-center gap-3">
              <img
                src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img47.png"
                className="w-20"
              />
              <div className="text-lg font-medium">
                <b className="text-[#374051]">Kid Tapered Slim Fit Trouser</b>
                <div className="flex gap-3 mt-3">
                  <p>$38</p>
                  <span className="bg-[#F8FAFC] border border-[#E5E7EB] px-2">
                    M
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[30%]">
            <div className="">
              <input
                type="number"
                min="1"
                defaultValue={1}
                className="border border-[#E5E7EB] outline-none px-1 py-1 w-20"
              />
            </div>
          </div>

          <div className="w-[10%] flex ">
            <div className="">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFRSURBVHgB7ZfhTcMwFITPEf/JCBkBNggTUCYAJqAj0A1ggzABZYHEbJANmm4QFgicwUJVlTq8F6Wkkj/p5DaX1Ff7pc0zEJLn+ROHB8ElDXVjra0F1yCBHEkoR0ZdQ8gZ9DSUDfgZlUPJqGDcnvtDJrc8x4hgmq08CoZfbAFZDdz5saXWgfNSauFf115/wX3uygX7xPxYuq0sMC/cir2Z/aM7K8jatleYCH9zVP7tI+da7fqzLf4YTMpsg6l++Vm3GX7+M99ZtOuAX9N/gQLtirlJl9QrQ6QBvzjgTxbsd7IkSc4V/iCx+KXEYFJiMCkxmJQYTEoMJkUbrPFjW5blNuCj67oPKNB24s/U1hiz6TNdY8HHnW+/qqoWClTBOLGbrBg4J+gPEYtfykk2I6lvKqYi2AuEgl1QG/wTfVupur1H0uwf6FuxS+oWx6Pt6z2/APN7VZph5zBWAAAAAElFTkSuQmCC"
                className="w-5"
              />
            </div>
          </div>
        </div>

        <div className="border-b border-[#E5E7EB] mt-6"></div>

        <div className=" m-18 flex">
          <div className=" w-[60%]"></div>
          <div className=" w-[40%]">
            <div className="text-2xl text-[#6B7280]  flex items-center gap-3">
              CART <span className="text-[#374051] font-medium">TOTALS</span>
              <p className="w-12 h-[2px] bg-[#414141] "></p>
            </div>
            <div className=" flex justify-between mt-3  text-sm">
              <p>Subtotal</p>
              <p>$38.00</p>
            </div>
            <div className="border-b border-[#E5E7EB] mt-1"></div>

            <div className=" flex justify-between mt-3 text-sm">
              <p>Shipping Fee</p>
              <p>$10.00</p>
            </div>

            <div className="border-b border-[#E5E7EB] mt-1"></div>

            <div className=" flex justify-between mt-3 text-sm">
              <b>Total </b>
              <b>$48.00</b>
            </div>

            <div className="flex justify-end mt-6">
              <Link href="/place-order">
              <button className="bg-black text-white px-6 py-3 text-sm">
                PROCEED TO CHECKOUT
              </button>
              </Link>
             
            </div>
          </div>
        </div>
      </div>
   
    </>
  )
}