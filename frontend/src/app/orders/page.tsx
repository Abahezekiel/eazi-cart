import { Metadata } from "next";

export default function Orders() {
  return (
    <>
      <div className=" bg-[#F9FAFB]  ">
        <div className="flex w-full bg-[#F9FAFB] ">
          <div className="w-[97%] pl-18 p-8">
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
