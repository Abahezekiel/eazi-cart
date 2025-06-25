import { Metadata } from "next";
import LeftAdmin from "../left-admin/page";
import RightAdmin from "../right-admin/page";



export default function Dashboard() {
  return (
    <>
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
        
            <LeftAdmin />
            <RightAdmin />
          
          </div>
        </div>
      </div>
    </>
  );
}
