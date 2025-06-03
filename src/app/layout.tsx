import { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import screenshot from "./Images/Screenshot 2025-05-31 at 11.45.46 AM.png"; 
import { FaRegUser, FaSearch } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen ml-32 mr-32  ">
        <div className="bg-amber-400">
          <div className="flex justify-between items-center">
            <div>
              <Image
                src={screenshot}
                alt="Screenshot"
                width={100}
                height={100}
              />
            </div>
            <ul className="flex gap-5 items-center justify-center">
              <li>HOME</li>
              <li>COLLECTION</li>
              <li>ABOUT</li>
              <li>CONTACT</li>
              <li>
                {" "}
                <button className="border border-gray-400 rounded-2xl p-1 w-28 text-sm font-semibold">
                  Admin panel
                </button>
              </li>
            </ul>
            <div className="flex items-center gap-4">
              <FaSearch />
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
