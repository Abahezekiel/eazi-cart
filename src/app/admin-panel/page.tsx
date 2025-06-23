import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "admin-panel",
  },
  };


export default function AdminPanel() {
  return (
    <>
    
      {/* admin dashboard login  */}
       <div className="h-screen bg-[#F9FAFB] flex items-center justify-center w-[100%]">
        <div className="bg-white shadow-md w-80 p-5 rounded-lg">
          <p className="text-lg font-bold mb-2">Admin Panel</p>
          <p className="mb-1 mt-3">Email Address</p>
          <input
            type="email"
            placeholder="admin@example.com"
            className="border border-gray-300 p-2 w-full rounded"
          />
          <p className="mb-1 mt-3">Password</p>
          <input
            type="password"
            placeholder="password"
            className="border border-gray-300 p-2 w-full rounded"
          />
        <Link href="/add-items">
        <button className="bg-black text-white w-full p-2 rounded mt-3">
            Login
          </button>
        </Link>
        </div>
      </div> 
   
    </>
  )
}