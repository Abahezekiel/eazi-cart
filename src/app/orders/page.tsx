import { Metadata } from "next";



export default function Orders({ clickedIndex }) {
  return (
    <>
   
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
            <p>Order Page</p>

           

            <div className="  mt-4 flex gap-4  border-2 border-[#E5E7EB] w-[100%]  p-8 text-sm">
              <div className="  mt-4 w-[10%] ">
                <img
                  src="data:image/svg+xml,%3csvg%20width='73'%20height='73'%20viewBox='0%200%2073%2073'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='0.5'%20y='0.5'%20width='72'%20height='72'%20fill='%23F9FAFB'%20stroke='%23D2D2D2'/%3e%3cpath%20d='M41.1484%2037.4871L38.6348%2038.9418V65.0908L61.2694%2052.0221V25.873L41.1484%2037.4871Z'%20fill='%23565656'/%3e%3cpath%20d='M45.247%2014.039L36.5423%209L13.2793%2022.4295L21.9956%2027.4684L45.247%2014.039Z'%20fill='%23565656'/%3e%3cpath%20d='M59.7945%2022.4307L49.7631%2016.7168L26.5117%2030.1463L27.8384%2030.8329L36.5431%2035.8602L45.2013%2030.8678L59.7945%2022.4307Z'%20fill='%23565656'/%3e%3cpath%20d='M24.7545%2039.7573L20.5883%2037.6161V30.9595L12%2026.0137V51.9765L34.4717%2064.9521V38.9893L24.7545%2033.3917V39.7573Z'%20fill='%23565656'/%3e%3c/svg%3e"
                  className="w-10"
                />
              </div>
              <div className="  mt-4 w-[45%] ">
                <p>Men Round Neck Pure Cotton T-shirt x 1 L</p>
                <p>yasser blandon</p>
                <p>HOUSE NO - C42,</p>
                <p>DELHI, DELHI, India, 110051</p>
              </div>

              <div className="  mt-4 w-[30%]">
                <p>Items: 1</p>
                <p>Method: COD</p>
                <p>Payment: Pending</p>
                <p>Date : 16/06/2025</p>
              </div>
              <div className="  mt-4 w-[3%]">
                <p>$74</p>
              </div>
              <div className="  mt-4 w-[15%] m-6">
                <select className="border-2 border-[#E5E7EB] rounded outline- p-2">
                  <option>Order Placed</option>
                  <option>Packing</option>
                  <option>Shipped</option>
                  <option>Out for delivery</option>
                  <option>Delivered</option>
                </select>
              </div>
            </div>
            <div className="  mt-4 flex gap-4  border-2 border-[#E5E7EB] w-[100%]  p-8 text-sm">
              <div className="  mt-4 w-[10%] ">
                <img
                  src="data:image/svg+xml,%3csvg%20width='73'%20height='73'%20viewBox='0%200%2073%2073'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='0.5'%20y='0.5'%20width='72'%20height='72'%20fill='%23F9FAFB'%20stroke='%23D2D2D2'/%3e%3cpath%20d='M41.1484%2037.4871L38.6348%2038.9418V65.0908L61.2694%2052.0221V25.873L41.1484%2037.4871Z'%20fill='%23565656'/%3e%3cpath%20d='M45.247%2014.039L36.5423%209L13.2793%2022.4295L21.9956%2027.4684L45.247%2014.039Z'%20fill='%23565656'/%3e%3cpath%20d='M59.7945%2022.4307L49.7631%2016.7168L26.5117%2030.1463L27.8384%2030.8329L36.5431%2035.8602L45.2013%2030.8678L59.7945%2022.4307Z'%20fill='%23565656'/%3e%3cpath%20d='M24.7545%2039.7573L20.5883%2037.6161V30.9595L12%2026.0137V51.9765L34.4717%2064.9521V38.9893L24.7545%2033.3917V39.7573Z'%20fill='%23565656'/%3e%3c/svg%3e"
                  className="w-10"
                />
              </div>
              <div className="  mt-4 w-[45%] ">
                <p>Men Round Neck Pure Cotton T-shirt x 1 L</p>
                <p>yasser blandon</p>
                <p>HOUSE NO - C42,</p>
                <p>DELHI, DELHI, India, 110051</p>
              </div>

              <div className="  mt-4 w-[30%]">
                <p>Items: 1</p>
                <p>Method: COD</p>
                <p>Payment: Pending</p>
                <p>Date : 16/06/2025</p>
              </div>
              <div className="  mt-4 w-[3%]">
                <p>$74</p>
              </div>
              <div className="  mt-4 w-[15%] m-6">
                <select className="border-2 border-[#E5E7EB] rounded outline- p-2">
                  <option>Order Placed</option>
                  <option>Packing</option>
                  <option>Shipped</option>
                  <option>Out for delivery</option>
                  <option>Delivered</option>
                </select>
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </>
  );
}
