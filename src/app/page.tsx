// app/components/TopBar.tsx
export default function TopBar() {
  return (
    <div className="main-top bg-white text-black border-b border-gray-200 ">
      <div className="container-fluid ">
        <div className="flex flex-wrap ">
          <div className="lg:w-1/2 md:w-1/2 sm:w-full xs:w-full bg-red-400 flex gap-3">
            <div className="custom-select-box">
              <select
                className="selectpicker show-tick form-control"
                data-placeholder="$ USD"
              >
                <option>¥ JPY</option>
                <option>$ USD</option>
                <option>€ EUR</option>
              </select>
            </div>
            <div className="right-phone-box">
              <p>
                Call US :-{" "}
                <a href="#" className="text-blue-500">
                  +11 900 800 100
                </a>
              </p>
            </div>
            <div className="our-link">
              <ul className="flex space-x-4">
                <li>
                  <a href="#" className="text-blue-500">
                    <i className="fa fa-user"></i> My Account
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-500">
                    <i className="fas fa-location-arrow"></i> Our location
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-500">
                    <i className="fas fa-headset"></i> Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:w-1/2 md:w-1/2 sm:w-full xs:w-full">
            <div className="login-box">
              <select
                className="selectpicker show-tick form-control"
                data-placeholder="Sign In"
              >
                <option>Register Here</option>
                <option>Sign In</option>
              </select>
            </div>
            <div className="text-slid-box">
              <div id="offer-box" className="carouselTicker">
                <ul className="offer-box space-y-2">
                  <li className="flex items-center space-x-2">
                    <i className="fab fa-opencart"></i>
                    <span>20% off Entire Purchase Promo code: offT80</span>
                  </li>
                  {/* Add more list items here as needed */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
