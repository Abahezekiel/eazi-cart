// app/components/TopBar.tsx
export default function TopBar() {
  return (
    <div className=" mt-7 flex border border-[#9CA3AF] ">
      <div className=" w-1/2 flex items-center justify-center flex-col">
        <div className="flex gap-3 items-center justify-center ">
          <p className="w-8 h-[2px] bg-[#414141]"></p>
          <p className="">OUR BEST SELLERS</p>
        </div>
        <p>Latest Arrivals</p>
        <div className="flex gap-3 items-center justify-center ">
          <p className="">SHOP NOW</p>
          <p className="w-8 h-[1px] bg-[#414141]"></p>
        </div>
      </div>
      <div className="w-1/2 ">
        <img
          src="https://foreverbuy.in/assets/hero_img-DOCOb6wn.png"
          alt="Hero image"
        />
      </div>
    </div>
  );
}
