// app/components/TopBar.tsx
export default function TopBar() {
  return (
    <>
      <div className=" mt-7 flex border border-[#9CA3AF] ">
        <div className=" w-1/2 flex items-center justify-center text-[#414141]">
          <div className="flex flex-col">
            <div className="flex items-center  gap-2">
              <p className="w-8 h-[2px] bg-[#414141]"></p>
              <p className="">OUR BEST SELLERS</p>
            </div>
            <div className=" text-5xl mt-3">
              <p className="">Latest Arrivals</p>
            </div>
            <div className="flex items-center gap-2 mt-3">
              <p className="">SHOP NOW</p>
              <p className="w-8 h-[1px] bg-[#414141]"></p>
            </div>
          </div>
        </div>

        <div className="w-1/2 ">
          <img
            src="https://foreverbuy.in/assets/hero_img-DOCOb6wn.png"
            alt="Hero image"
          />
        </div>
      </div>
      <div className="flex items-center justify-center mt-24 flex-col text-[#414141] ">
        <div className="flex gap-3 items-center">
          <p className="text-3xl text-[#6B7280]">
            LATEST{" "}
            <span className="text-[#374051] font-medium">COLLECTIONS</span>
          </p>
          <p className="w-12 h-[2px] bg-[#414141]"></p>
        </div>

        <p className="text-[#4B5563]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the.
        </p>
      </div>

      <div className="flex gap-6 mt-10">
        <div className="">
          <div className="w-48  ">
            <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img47.png" />
          </div>
          <div className="text-sm mt-3">
            <p>Kid Tapered Slim Fit Trouser</p>
            <span>$38</span>
          </div>
        </div>
        <div className="">
          <div className="w-48  ">
            <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img8.png" />
          </div>
          <div className="text-sm mt-3">
            <p>Kid Tapered Slim Fit Trouser</p>
            <span>$38</span>
          </div>
        </div>
        <div className="">
          <div className="w-48  ">
            <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img14.png" />
          </div>
          <div className="text-sm mt-3">
            <p>Kid Tapered Slim Fit Trouser</p>
            <span>$38</span>
          </div>
        </div>
        <div className="">
          <div className="w-48  ">
            <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img35.png" />
          </div>
          <div className="text-sm mt-3">
            <p>Kid Tapered Slim Fit Trouser</p>
            <span>$38</span>
          </div>
        </div>
        <div className="">
          <div className="w-48  ">
            <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img15.png" />
          </div>
          <div className="text-sm mt-3">
            <p>Kid Tapered Slim Fit Trouser</p>
            <span>$38</span>
          </div>
        </div>
      </div>

      <div className="flex gap-6 mt-6">
        <div className="">
          <div className="w-48  ">
            <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img47.png" />
          </div>
          <div className="text-sm mt-3">
            <p>Kid Tapered Slim Fit Trouser</p>
            <span>$38</span>
          </div>
        </div>
        <div className="">
          <div className="w-48  ">
            <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img8.png" />
          </div>
          <div className="text-sm mt-3">
            <p>Kid Tapered Slim Fit Trouser</p>
            <span>$38</span>
          </div>
        </div>
        <div className="">
          <div className="w-48  ">
            <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img14.png" />
          </div>
          <div className="text-sm mt-3">
            <p>Kid Tapered Slim Fit Trouser</p>
            <span>$38</span>
          </div>
        </div>
        <div className="">
          <div className="w-48  ">
            <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img35.png" />
          </div>
          <div className="text-sm mt-3">
            <p>Kid Tapered Slim Fit Trouser</p>
            <span>$38</span>
          </div>
        </div>
        <div className="">
          <div className="w-48  ">
            <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img15.png" />
          </div>
          <div className="text-sm mt-3">
            <p>Kid Tapered Slim Fit Trouser</p>
            <span>$38</span>
          </div>
        </div>
      </div>
    </>
  );
}
