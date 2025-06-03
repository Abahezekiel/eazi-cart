import { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import screenshot from "./Images/Screenshot 2025-05-31 at 11.45.46 AM.png";
import { FaRegUser,  } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen py-5 px-28">
        <div className="">
          <div className="flex justify-between items-center">
            <div>
              <Image
                src={screenshot}
                alt="Screenshot"
                width={100}
                height={100}
              />
            </div>
            <ul className="flex gap-5 items-center justify-center text-sm ">
              <li>HOME</li>
              <li>COLLECTION</li>
              <li>ABOUT</li>
              <li>CONTACT</li>
              <li>
                {" "}
                <button className="border border-gray-300 rounded-2xl p-2 w-28 text-xs font-light">
                  Admin panel
                </button>
              </li>
            </ul>
            <div className="flex items-center gap-4">
              <FiSearch />
              
              <FaRegUser />
              <HiOutlineShoppingBag />
            </div>
          </div>
        </div>

        <main className="flex-grow">{children}</main>

        <footer className="bg-gray-500 p-3 flex items-center justify-center">
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
