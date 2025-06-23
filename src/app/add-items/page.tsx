import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "add-items",
  },
};

export default function AddItems() {
  return (
    <>
      {/* admin dashboard add-items page  */}
      <div>
        <div className=" bg-[#F9FAFB]  mt-2">
          <div className="flex justify-between w-full ">
            <img
              src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FScreenshot%202025-05-31%20at%2011.45.46%20AM.a209a70e.png&w=256&q=75"
              className="w-30"
            />
            <button className="bg-gray-500 rounded-3xl text-white m-1 w-28 ">
              Logout
            </button>
          </div>
          <p className="border-[#E5E7EB] border-t mt-2"></p>
          <div className="flex w-full bg-[#F9FAFB]   ">
            <div className="w-[20%] border-[#E5E7EB] border-r-2 min-h-screen">
              <div className="flex flex-col pl-10">
                <div className="bg-[#FFEBF5] border-gray-300 border-r-0 border mt-4 p-2 rounded-l text-md flex items-center gap-3">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI5SURBVHgBtZZbS5RRFIZfzaKgIDrQUAbaiamgA3S6ncv6DXXRrwjGoAuDsh/RTXZRPyAJSu/0QlEQL2QuxtHxjEcURhTB93WtTx3Rz/3N4YVnDvvb31p7r31YqwFhaiYZ0kpaSMrbl0me5MhfMo8qdZ/8csPbZJz8Iz+d/6RAtsgG+e3vJNZ58pmskWnSQR6S00f0bfJnX8kiWfd3LyBQCl8/bEZt5BLCpYFmyQrpdVsnOtOaTJKnqFwvYOEfQ4xTja7POz5C9XpMimQEx4RXcVconqN2UpS23XaZtLO02FnUXlm3nT7YqO28AAtriFLYP4sn6RSZch+7ugo7Qx0IVxf5k6D/N9hyNTfy4zXsLP1IYOAsOZegfyds42Tk8C5syjnUT6Puo1UOb8POyybqp0330aJQXiSzMZ21Ob6jPIRP/LvnQFuJvCdzx9iRj1Sj/2lA9Qqy0eQjuhXTRyN7c6gtmlkG4VKkipqhYqs8dwb1k2xrUvnI4Q1UmMcCpVvmOsnJocKjvPcugYGSE6q3sJ3aFTXo2lGivRxo4JoTIl1tS7DKYU+asmb5CbVXm9tOH36gFKJU8gy100uyStqPeqhMMUBmUF22j6QEXCBDiMlCN2ElxgR5hcqlARfdVlBdMwgLxUfYoodKu/4DbGmGEeAskkKguGuxVfp9QXyZ+MD7FP2ddoQn8zJpZ+nIlHzUBVgh3Onoty4OFcKr3jcdZzD00r4Cu0/vkTuwDKN3dc/m3Wk3rLyM1Q7IrnrJFjF9QAAAAABJRU5ErkJggg=="
                    className="w-5"
                  />
                  <p>Add Items</p>
                </div>
                <div className="bg-[#FFEBF5] border-gray-300 border-r-0 border mt-4 p-2 rounded-l text-md flex items-center gap-3">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAcCAYAAACQ0cTtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEPSURBVHgB1ZaNDYIwEIWfhgEYoW7gCk7gCo7gBnQDR3AFnQA3kA3ACXADvJMDmyjaUo7EL3mQ8HMfR5umQIuh5JSa0kwYrneU+lg4Ij7fKQWmw0gqygZi5q/IoEMm9XPujFvljlbQgx1YUlK0bWrCQ5MuMSOJnNdox04LwwceswYz0XV2oeygx4myTpwLN+jBsx2zTpC/le0ph18PPZcSxGGlTjlwP5f70TLriAwiZKkkRuQtK78Usp4ib1k2UNDCX+Qt+yS0CBMFyVxhPUIULHOFoaJRMmY7QtTLksCXzoiAlytekQ10MeLp/6eFDlbqH7t94xXtSlF0XzARXJO3HBVk3wi8NqqNQnLoD9M7D/ctiPZPx1n1AAAAAElFTkSuQmCC"
                    className="w-5"
                  />
                  <p>List Items</p>
                </div>
                <div className="bg-[#FFEBF5] border-gray-300 border-r-0 border mt-4 p-2 rounded-l text-md flex items-center gap-3">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAcCAYAAACQ0cTtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEPSURBVHgB1ZaNDYIwEIWfhgEYoW7gCk7gCo7gBnQDR3AFnQA3kA3ACXADvJMDmyjaUo7EL3mQ8HMfR5umQIuh5JSa0kwYrneU+lg4Ij7fKQWmw0gqygZi5q/IoEMm9XPujFvljlbQgx1YUlK0bWrCQ5MuMSOJnNdox04LwwceswYz0XV2oeygx4myTpwLN+jBsx2zTpC/le0ph18PPZcSxGGlTjlwP5f70TLriAwiZKkkRuQtK78Usp4ib1k2UNDCX+Qt+yS0CBMFyVxhPUIULHOFoaJRMmY7QtTLksCXzoiAlytekQ10MeLp/6eFDlbqH7t94xXtSlF0XzARXJO3HBVk3wi8NqqNQnLoD9M7D/ctiPZPx1n1AAAAAElFTkSuQmCC"
                    className="w-5"
                  />
                  <p>Orders</p>
                </div>
              </div>
            </div>
            <div className="w-[80%] pl-18 p-8">
              <p>Upload Image</p>
              <div className="flex gap-3 mt-2">
                <div>
                  <img
                    src="data:image/png;base64,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"
                    className="w-20"
                  />
                </div>
                <div>
                  <img
                    src="data:image/png;base64,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"
                    className="w-20"
                  />
                </div>
                <div>
                  <img
                    src="data:image/png;base64,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"
                    className="w-20"
                  />
                </div>
                <div>
                  <img
                    src="data:image/png;base64,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"
                    className="w-20"
                  />
                </div>
              </div>

              <div className="mt-4">
                <p>Product name</p>
                <input
                  placeholder="Type here"
                  className="w-[60%] border border-[#C2C2C2] p-2 rounded"
                />
              </div>
              <div className="mt-4">
                <p>Product description</p>
                <textarea
                  placeholder="Write content here"
                  className="w-[60%] border border-[#C2C2C2] p-2 rounded outline-[#C586A5]"
                ></textarea>
              </div>

              <div className="flex gap-7 mt-2">
                <div>
                  <p>Product category</p>
                  <select className="border border-[#C2C2C2] rounded w-30 p-2">
                    <option>Men</option>
                    <option>Women</option>
                    <option>Kids</option>
                  </select>
                </div>

                <div>
                  <p>Sub category</p>
                  <select className="border border-[#C2C2C2] rounded w-30 p-2">
                    <option>Topwear</option>
                    <option>Bottomwear</option>
                    <option>Winterwear</option>
                  </select>
                </div>
                <div>
                  <p>Product price</p>
                  <input
                    placeholder="25"
                    min="0"
                    type="number"
                    className="border border-[#C2C2C2] rounded w-30 p-2"
                  />
                </div>
              </div>

              <div className="mt-3">
                <p>Product Sizes</p>

                <div className="flex gap-4">
                  <p className="cursor-pointer p-1 bg-[#E2E8F0] w-8 flex items-center justify-center">
                    S
                  </p>
                  <p className="cursor-pointer p-1 bg-[#E2E8F0] w-8 flex items-center justify-center">
                    M
                  </p>
                  <p className="cursor-pointer p-1 bg-[#E2E8F0] w-8 flex items-center justify-center">
                    L
                  </p>
                  <p className="cursor-pointer p-1 bg-[#E2E8F0] w-10 flex items-center justify-center">
                    XL
                  </p>
                  <p className="cursor-pointer p-1 bg-[#E2E8F0] w-12 flex items-center justify-center">
                    XXL
                  </p>
                </div>
              </div>

              <div className="flex gap-3 mt-3">
                <input type="checkbox" />
                <label>Add to bestseller</label>
              </div>

              <button
                className="bg-black text-white px-10 py-3 mt-4"
                type="submit"
              >
                ADD
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
