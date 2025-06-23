import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "contact",
  },
};

export default function Contact() {
  return (
    <>
      {/* contact page */}
      <div>
        <div className="flex gap-3 items-center justify-center border-t border-[#E5E7EB] ">
          <p className="text-2xl text-[#6B7280] mt-8">
            CONTACT <span className="text-[#374051] font-medium">US</span>
          </p>
          <p className="w-12 h-[2px] bg-[#414141] mt-8"></p>
        </div>

        <div className="  flex mt-10  gap-10 mb-10  m-20">
          <div className="w-[60%] ">
            <img
              src="https://foreverbuy.in/assets/contact_img-CyOum2vk.png"
              alt="About"
              className=""
            />
          </div>

          <div className="w-[40%] h-full mt-12 text-[#4B5563] mb-10">
            <b className="mt-6 font-bold ">Our Store</b>
            <p className="mt-6">54709 Willms Station</p>
            <p>Suite 350, Washington, USA</p>
            <p className="mt-6">Tel: (415) 555-0132</p>
            <p className="mb-6">Email: admin@forever.com</p>

            <b className="mt-6 font-bold ">Careers at Forever</b>
            <p className="mt-6">Learn more about our teams and job openings.</p>
            <button className="mt-6 hover:bg-black hover:text-white px-8 py-3 border border-black transition duration-700 ease-in-out">
              Explore Jobs
            </button>
          </div>
        </div>

        <div className="text-md mt-3 flex items-center flex-col">
          <p className="mb- text-[#374051] font-medium mt-18 text-2xl">
            Subscribe now & get 20% off
          </p>
          <span className="text-[#9CA3AF] mt-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </span>
          <div className="flex w-3/4 items-center justify-center mt-6 mb-6">
            <input
              placeholder="Enter your email"
              className="border border-[#E5E7EB] p-3 w-2/4 outline-none"
            />
            <button className="bg-black text-white text-xs p-4 w-36">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
