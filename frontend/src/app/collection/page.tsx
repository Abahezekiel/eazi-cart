import { Metadata } from "next";
import Search from "../search/page";
import Link from "next/link";

export default function Collection() {
  return (
    <>
      {/* collection page */}
      <div className="flex gap-10  border-t border-[#E5E7EB] ">
        <div className="w-[25%]  h-96 mt-14">
          <p>FILTERS</p>
          <div className="  mt-6 p-5 border border-[#D1D5DB]">
            <p className="text-sm font-semibold mb-3">CATEGORIES</p>
            <ul>
              <li className="mb-2 text-[#374051] text-sm  font-extralight">
                <input type="checkbox" />
                <label> Men</label>
              </li>
              <li className="mb-2 text-[#374051] text-sm ">
                <input type="checkbox" />
                <label> Women</label>
              </li>
              <li className="mb-2 text-[#374051] text-sm ">
                <input type="checkbox" />
                <label> Kids</label>
              </li>
            </ul>
          </div>
          <div className="  mt-6 p-5 border border-[#D1D5DB]">
            <p className="text-sm font-semibold mb-3">TYPE</p>
            <ul>
              <li className="mb-2 text-[#374051] text-sm  font-extralight">
                <input type="checkbox" />
                <label> Topwear</label>
              </li>
              <li className="mb-2 text-[#374051] text-sm ">
                <input type="checkbox" />
                <label> Bottomwear</label>
              </li>
              <li className="mb-2 text-[#374051] text-sm ">
                <input type="checkbox" />
                <label> Winterwear</label>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[75%]   mt-14 ">
          <div className="flex justify-between">
            <div className="flex gap-3 items-center">
              <p className="text-2xl text-[#6B7280]">
                ALL{" "}
                <span className="text-[#374051] font-medium">COLLECTIONS</span>
              </p>
              <p className="w-12 h-[2px] bg-[#414141]"></p>
            </div>
            <div>
              <select className="border-[#D1D5DB] border-2 p-2 w-46">
                <option>Sort by: Relevant</option>
                <option>Sort by: Low to High</option>
                <option>Sort by: High to Low</option>
              </select>
            </div>
          </div>

          <div className="flex gap-5 mt-3">
            <div className="">
              <div className="w-44  ">
                <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img47.png" />
              </div>
              <div className="text-sm mt-3">
                <p>Kid Tapered Slim Fit Trouser</p>
                <span>$38</span>
              </div>
            </div>
            <div className="">
              <div className="w-44  ">
                <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img8.png" />
              </div>
              <div className="text-sm mt-3">
                <p>Kid Tapered Slim Fit Trouser</p>
                <span>$38</span>
              </div>
            </div>
            <div className="">
              <div className="w-44  ">
                <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img14.png" />
              </div>
              <div className="text-sm mt-3">
                <p>Kid Tapered Slim Fit Trouser</p>
                <span>$38</span>
              </div>
            </div>
            <div className="">
              <div className="w-44  ">
                <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img35.png" />
              </div>
              <div className="text-sm mt-3">
                <p>Kid Tapered Slim Fit Trouser</p>
                <span>$38</span>
              </div>
            </div>
          </div>
          <div className="flex gap-5 mt-3">
            <div className="">
              <div className="w-44  ">
                <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img15.png" />
              </div>
              <div className="text-sm mt-3">
                <p>Kid Tapered Slim Fit Trouser</p>
                <span>$38</span>
              </div>
            </div>
            <div className="">
              <div className="w-44  ">
                <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img6.png" />
              </div>
              <div className="text-sm mt-3">
                <p>Kid Tapered Slim Fit Trouser</p>
                <span>$38</span>
              </div>
            </div>
            <div className="">
              <div className="w-44  ">
                <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img51.png" />
              </div>
              <div className="text-sm mt-3">
                <p>Kid Tapered Slim Fit Trouser</p>
                <span>$38</span>
              </div>
            </div>
            <div className="">
              <div className="w-44  ">
                <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img50.png" />
              </div>
              <div className="text-sm mt-3">
                <p>Kid Tapered Slim Fit Trouser</p>
                <span>$38</span>
              </div>
            </div>
          </div>

          <div className="flex gap-5 mt-3">
            <div className="">
              <div className="w-44  ">
                <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img39.png" />
              </div>
              <div className="text-sm mt-3">
                <p>Kid Tapered Slim Fit Trouser</p>
                <span>$38</span>
              </div>
            </div>
            <div className="">
              <div className="w-44  ">
                <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img36.png" />
              </div>
              <div className="text-sm mt-3">
                <p>Kid Tapered Slim Fit Trouser</p>
                <span>$38</span>
              </div>
            </div>
            <div className="">
              <div className="w-44  ">
                <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img28.png" />
              </div>
              <div className="text-sm mt-3">
                <p>Kid Tapered Slim Fit Trouser</p>
                <span>$38</span>
              </div>
            </div>
            <div className="">
              <div className="w-44  ">
                <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img26.png" />
              </div>
              <div className="text-sm mt-3">
                <p>Kid Tapered Slim Fit Trouser</p>
                <span>$38</span>
              </div>
            </div>
          </div>
          <div className="flex gap-5 mt-3">
            <div className="">
              <div className="w-44  ">
                <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img24.png" />
              </div>
              <div className="text-sm mt-3">
                <p>Kid Tapered Slim Fit Trouser</p>
                <span>$38</span>
              </div>
            </div>
            <div className="">
              <div className="w-44  ">
                <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img4.png" />
              </div>
              <div className="text-sm mt-3">
                <p>Kid Tapered Slim Fit Trouser</p>
                <span>$38</span>
              </div>
            </div>
            <div className="">
              <div className="w-44  ">
                <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img1.png" />
              </div>
              <div className="text-sm mt-3">
                <p>Kid Tapered Slim Fit Trouser</p>
                <span>$38</span>
              </div>
            </div>
            <div className="">
              <div className="w-44  ">
                <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img3.png" />
              </div>
              <div className="text-sm mt-3">
                <p>Kid Tapered Slim Fit Trouser</p>
                <span>$38</span>
              </div>
            </div>
          </div>

          <div className="flex gap-5 mt-3">
            <div className="">
              <div className="w-44  ">
                <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img46.png" />
              </div>
              <div className="text-sm mt-3">
                <p>Kid Tapered Slim Fit Trouser</p>
                <span>$38</span>
              </div>
            </div>
            <div className="">
              <div className="w-44  ">
                <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img21.png" />
              </div>
              <div className="text-sm mt-3">
                <p>Kid Tapered Slim Fit Trouser</p>
                <span>$38</span>
              </div>
            </div>
            <div className="">
              <div className="w-44  ">
                <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img17.png" />
              </div>
              <div className="text-sm mt-3">
                <p>Kid Tapered Slim Fit Trouser</p>
                <span>$38</span>
              </div>
            </div>
            <div className="">
              <div className="w-44  ">
                <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img12.png" />
              </div>
              <div className="text-sm mt-3">
                <p>Kid Tapered Slim Fit Trouser</p>
                <span>$38</span>
              </div>
            </div>
          </div>
          <div className="flex gap-5 mt-3">
            <div className="">
              <div className="w-44  ">
                <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img8.png" />
              </div>
              <div className="text-sm mt-3">
                <p>Kid Tapered Slim Fit Trouser</p>
                <span>$38</span>
              </div>
            </div>
            <div className="">
              <div className="w-44  ">
                <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img18.png" />
              </div>
              <div className="text-sm mt-3">
                <p>Kid Tapered Slim Fit Trouser</p>
                <span>$38</span>
              </div>
            </div>
            <div className="">
              <div className="w-44  ">
                <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img34.png" />
              </div>
              <div className="text-sm mt-3">
                <p>Kid Tapered Slim Fit Trouser</p>
                <span>$38</span>
              </div>
            </div>
            <div className="">
              <div className="w-44  ">
                <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img48.png" />
              </div>
              <div className="text-sm mt-3">
                <p>Kid Tapered Slim Fit Trouser</p>
                <span>$38</span>
              </div>
            </div>
          </div>

          <div className="flex gap-5 mt-3">
            <div className="">
              <div className="w-44  ">
                <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img43.png" />
              </div>
              <div className="text-sm mt-3">
                <p>Kid Tapered Slim Fit Trouser</p>
                <span>$38</span>
              </div>
            </div>
            <div className="">
              <div className="w-44  ">
                <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img13.png" />
              </div>
              <div className="text-sm mt-3">
                <p>Kid Tapered Slim Fit Trouser</p>
                <span>$38</span>
              </div>
            </div>
            <div className="">
              <div className="w-44  ">
                <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img31.png" />
              </div>
              <div className="text-sm mt-3">
                <p>Kid Tapered Slim Fit Trouser</p>
                <span>$38</span>
              </div>
            </div>
            <div className="">
              <div className="w-44  ">
                <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img16.png" />
              </div>
              <div className="text-sm mt-3">
                <p>Kid Tapered Slim Fit Trouser</p>
                <span>$38</span>
              </div>
            </div>
          </div>
          <div className="flex gap-5 mt-3">
            <div className="">
              <div className="w-44  ">
                <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img13.png" />
              </div>
              <div className="text-sm mt-3">
                <p>Kid Tapered Slim Fit Trouser</p>
                <span>$38</span>
              </div>
            </div>
            <div className="">
              <div className="w-44  ">
                <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img22.png" />
              </div>
              <div className="text-sm mt-3">
                <p>Kid Tapered Slim Fit Trouser</p>
                <span>$38</span>
              </div>
            </div>
            <div className="">
              <div className="w-44  ">
                <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img3.png" />
              </div>
              <div className="text-sm mt-3">
                <p>Kid Tapered Slim Fit Trouser</p>
                <span>$38</span>
              </div>
            </div>
            <div className="">
              <div className="w-44  ">
                <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img52.png" />
              </div>
              <div className="text-sm mt-3">
                <p>Kid Tapered Slim Fit Trouser</p>
                <span>$38</span>
              </div>
            </div>
          </div>

          <div className="flex gap-5 mt-3">
            <div className="">
              <div className="w-44  ">
                <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img14.png" />
              </div>
              <div className="text-sm mt-3">
                <p>Kid Tapered Slim Fit Trouser</p>
                <span>$38</span>
              </div>
            </div>
            <div className="">
              <div className="w-44  ">
                <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img44.png" />
              </div>
              <div className="text-sm mt-3">
                <p>Kid Tapered Slim Fit Trouser</p>
                <span>$38</span>
              </div>
            </div>
            <div className="">
              <div className="w-44  ">
                <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img9.png" />
              </div>
              <div className="text-sm mt-3">
                <p>Kid Tapered Slim Fit Trouser</p>
                <span>$38</span>
              </div>
            </div>
            <div className="">
              <div className="w-44  ">
                <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img11.png" />
              </div>
              <div className="text-sm mt-3">
                <p>Kid Tapered Slim Fit Trouser</p>
                <span>$38</span>
              </div>
            </div>
          </div>
          <div className="flex gap-5 mt-3">
            <div className="">
              <div className="w-44  ">
                <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img6.png" />
              </div>
              <div className="text-sm mt-3">
                <p>Kid Tapered Slim Fit Trouser</p>
                <span>$38</span>
              </div>
            </div>
            <div className="">
              <div className="w-44  ">
                <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img19.png" />
              </div>
              <div className="text-sm mt-3">
                <p>Kid Tapered Slim Fit Trouser</p>
                <span>$38</span>
              </div>
            </div>
            <div className="">
              <div className="w-44  ">
                <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img25.png" />
              </div>
              <div className="text-sm mt-3">
                <p>Kid Tapered Slim Fit Trouser</p>
                <span>$38</span>
              </div>
            </div>
            <div className="">
              <div className="w-44  ">
                <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img41.png" />
              </div>
              <div className="text-sm mt-3">
                <p>Kid Tapered Slim Fit Trouser</p>
                <span>$38</span>
              </div>
            </div>
          </div>

          <div className="flex gap-5 mt-3">
            <div className="">
              <div className="w-44  ">
                <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img20.png" />
              </div>
              <div className="text-sm mt-3">
                <p>Kid Tapered Slim Fit Trouser</p>
                <span>$38</span>
              </div>
            </div>
            <div className="">
              <div className="w-44  ">
                <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img9.png" />
              </div>
              <div className="text-sm mt-3">
                <p>Kid Tapered Slim Fit Trouser</p>
                <span>$38</span>
              </div>
            </div>
            <div className="">
              <div className="w-44  ">
                <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img18.png" />
              </div>
              <div className="text-sm mt-3">
                <p>Kid Tapered Slim Fit Trouser</p>
                <span>$38</span>
              </div>
            </div>
            <div className="">
              <div className="w-44  ">
                <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img40.png" />
              </div>
              <div className="text-sm mt-3">
                <p>Kid Tapered Slim Fit Trouser</p>
                <span>$38</span>
              </div>
            </div>
          </div>
          <div className="flex gap-5 mt-3">
            <div className="">
              <div className="w-44  ">
                <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img23.png" />
              </div>
              <div className="text-sm mt-3">
                <p>Kid Tapered Slim Fit Trouser</p>
                <span>$38</span>
              </div>
            </div>
            <div className="">
              <div className="w-44  ">
                <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img49.png" />
              </div>
              <div className="text-sm mt-3">
                <p>Kid Tapered Slim Fit Trouser</p>
                <span>$38</span>
              </div>
            </div>
            <div className="">
              <div className="w-44  ">
                <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img45.png" />
              </div>
              <div className="text-sm mt-3">
                <p>Kid Tapered Slim Fit Trouser</p>
                <span>$38</span>
              </div>
            </div>
            <div className="">
              <div className="w-44  ">
                <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img7.png" />
              </div>
              <div className="text-sm mt-3">
                <p>Kid Tapered Slim Fit Trouser</p>
                <span>$38</span>
              </div>
            </div>
          </div>

          <div className="flex gap-5 mt-3">
            <div className="">
              <div className="w-44  ">
                <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img29.png" />
              </div>
              <div className="text-sm mt-3">
                <p>Kid Tapered Slim Fit Trouser</p>
                <span>$38</span>
              </div>
            </div>
            <div className="">
              <div className="w-44  ">
                <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img29.png" />
              </div>
              <div className="text-sm mt-3">
                <p>Kid Tapered Slim Fit Trouser</p>
                <span>$38</span>
              </div>
            </div>
            <div className="">
              <div className="w-44  ">
                <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img10.png" />
              </div>
              <div className="text-sm mt-3">
                <p>Kid Tapered Slim Fit Trouser</p>
                <span>$38</span>
              </div>
            </div>
          <Link href="/product-page">
          <div className="">
              <div className="w-44  ">
                <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img2_1.png" />
              </div>
              <div className="text-sm mt-3">
                <p>Kid Tapered Slim Fit Trouser</p>
                <span>$388</span>
              </div>
            </div>
          </Link>
          </div>
        </div>
      </div>
    </>
  );
}
