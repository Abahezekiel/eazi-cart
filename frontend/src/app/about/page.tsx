import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "about",
  },
  };


export default function About() {
  return (
    <>
      {/* about page */}
      <div>
         <div className="flex gap-3 items-center justify-center border-t border-[#E5E7EB] ">
           <p className="text-2xl text-[#6B7280] mt-8">
             ABOUT <span className="text-[#374051] font-medium">US</span>
           </p>
           <p className="w-12 h-[2px] bg-[#414141] mt-8"></p>
         </div>

         <div className="  flex mt-10">
           <div className="w-1/2 h-full ">
             <img
               src="https:foreverbuy.in/assets/about_img-BAJyTXw9.png"
               alt="About"
               className="w-[80%] h-full object-cover"
             />
           </div>

           <div className="w-1/2 h-full mt-12 text-[#4B5563]">
             <p>
               Forever was born out of a passion for innovation and a desire to
               revolutionize the way people shop online. Our journey began with a
               simple idea: to provide a platform where customers can easily
               discover, explore, and purchase a wide range of products from the
               comfort of their homes.
             </p>
             <p className="mt-6">
               Since our inception, we've worked tirelessly to curate a diverse
               selection of high-quality products that cater to every taste and
               preference. From fashion and beauty to electronics and home
               essentials, we offer an extensive collection sourced from trusted
               brands and suppliers.
             </p>
             <p className="mt-6 font-bold">Our Mission</p>
             <p className="mt-6">
               Our mission at Forever is to empower customers with choice,
               convenience, and confidence. We're dedicated to providing a
               seamless shopping experience that exceeds expectations, from
               browsing and ordering to delivery and beyond.
             </p>
           </div>
         </div>

         <div className="flex gap-3 items-center  ">
           <p className="text-xl text-[#6B7280]  mt-8">
             WHY <span className="text-[#374051] font-medium">CHOOSE US</span>
           </p>
           <p className="w-12 h-[2px] bg-[#414141] mt-8"></p>
         </div>

         <div className=" h-72 w-full flex border border-[#E5E7EB] mt-6">
           <div className="flex  items-center justify-center w-[33.3%] border-r border-[#E5E7EB]">
             <div className=" w-60  flex flex-col  text-sm">
               <b>Quality Assurance:</b>
               <p className="mt-4 text-[#4B5563]">
                 We meticulously select and vet each product to ensure it meets
                 our stringent quality standards.
               </p>
             </div>
           </div>
           <div className="flex  items-center justify-center w-[33.3%] border-r border-[#E5E7EB]">
             <div className=" w-60  flex flex-col  text-sm">
               <b>Convenience:</b>
               <p className="mt-4 text-[#4B5563]">
                 With our user-friendly interface and hassle-free ordering
                 process, shopping has never been easier.
               </p>
             </div>
           </div>

           <div className="flex  items-center justify-center w-[33.3%] ">
             <div className=" w-60  flex flex-col  text-sm">
               <b>Exceptional Customer Service:</b>
               <p className="mt-4 text-[#4B5563]">
                 Our team of dedicated professionals is here to assist you the
                 way, ensuring your satisfaction is our top priority.
               </p>
             </div>
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
  )
}