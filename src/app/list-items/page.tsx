export default function ListItems() {
  return (
    <>
      {/* admin dashboard list-items page  */}

      <div className=" bg-[#F9FAFB]  ">
        <div className="flex justify-between w-full">
          <img
            src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FScreenshot%202025-05-31%20at%2011.45.46%20AM.a209a70e.png&w=256&q=75"
            className="w-30"
          />
          <button className="bg-gray-500 rounded-3xl text-white m-1 w-28 ">
            Logout
          </button>
        </div>
        <p className="border-[#E5E7EB] border-t mt-2"></p>
        <div className="flex w-full bg-[#F9FAFB] ">
          <div className="w-[20%] border-[#E5E7EB] border-r-2">
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
            <p>All Products List</p>

            <div className="flex flex-col">
              <div className="grid grid-cols-[1fr_3fr_1fr_1fr_1fr] border border-[#E5E7EB] mt-2">
                <p className="p-1 font-bold bg-[#F3F4F6] text-sm">Name</p>
                <p className="p-1 font-bold bg-[#F3F4F6] text-sm">Category</p>
                <p className="p-1 font-bold bg-[#F3F4F6] text-sm">Image</p>
                <p className="p-1 font-bold bg-[#F3F4F6] text-sm">Price</p>
                <p className="p-1 font-bold bg-[#F3F4F6] text-sm">Action</p>
              </div>

              <div className="grid grid-cols-[1fr_3fr_1fr_1fr_1fr] border border-[#E5E7EB] mt-2 bg-[#F3F4F6] items-center justify-center">
                <img
                  src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img47.png"
                  className="w-14"
                />
                <p className="p-1 text-sm">Kid Tapered Slim Fit Trouser</p>
                <p className="p-1 text-sm">Kids</p>
                <p className="p-1 text-sm">$38</p>
                <p className="p-1 text-sm">X</p>
              </div>

              <div className="grid grid-cols-[1fr_3fr_1fr_1fr_1fr] border border-[#E5E7EB] mt-2 bg-[#F3F4F6] items-center justify-center">
                <img
                  src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img47.png"
                  className="w-14"
                />
                <p className="p-1 text-sm">Kid Tapered Slim Fit Trouser</p>
                <p className="p-1 text-sm">Kids</p>
                <p className="p-1 text-sm">$38</p>
                <p className="p-1 text-sm">X</p>
              </div>
              <div className="grid grid-cols-[1fr_3fr_1fr_1fr_1fr] border border-[#E5E7EB] mt-2 bg-[#F3F4F6] items-center justify-center">
                <img
                  src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img47.png"
                  className="w-14"
                />
                <p className="p-1 text-sm">Kid Tapered Slim Fit Trouser</p>
                <p className="p-1 text-sm">Kids</p>
                <p className="p-1 text-sm">$38</p>
                <p className="p-1 text-sm">X</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
