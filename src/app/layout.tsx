// app/layout.tsx or app/root-layout.tsx
"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import screenshot from "./Images/Screenshot 2025-05-31 at 11.45.46 AM.png";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import "./globals.css";
import Search from "./search/page";
// import Search from "./components/Search"; // Move Search component to components

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideNavAndFooter =
    pathname.startsWith("/admin-login") || pathname.startsWith("/dashboard");


  const [showSearch, setShowSearch] = useState(false);

const openSearch = () => setShowSearch(true);
const closeSearch = () => setShowSearch(false);

  const toggleSearch = () => setShowSearch((prev) => !prev);

  return (
    <html lang="en">
      <body
        className={`flex flex-col h-screen ${
          hideNavAndFooter ? "" : "py-5 px-28"
        }`}
      >
        {!hideNavAndFooter && (
          <>
            {/* NAVBAR */}
            <div className="flex justify-between items-center mb-6">
              <Image src={screenshot} alt="Logo" width={100} height={100} />
              <ul className="flex gap-5 items-center justify-center text-sm">
                <li>
                  <Link href="/">HOME</Link>
                </li>
                <li>
                  <Link href="/collection">COLLECTION</Link>
                </li>
                <li>
                  <Link href="/about">ABOUT</Link>
                </li>
                <li>
                  <Link href="/contact">CONTACT</Link>
                </li>
                <li>
                  <a
                    href="/admin-login"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="border border-gray-300 rounded-2xl p-2 w-28 text-xs font-light cursor-pointer">
                      Admin panel
                    </button>
                  </a>
                </li>
              </ul>
              <div className="flex items-center gap-4">
                <FiSearch className="cursor-pointer" onClick={openSearch} />
                <Link href="/login">
                  <FaRegUser />
                </Link>
                <Link href="/cart">
                  <HiOutlineShoppingBag />
                </Link>
              </div>
            </div>
            {showSearch && <Search onClose={closeSearch} />}


          </>
        )}

        <main className="flex-grow">{children}</main>

        {!hideNavAndFooter && (
          <footer className="flex w-full gap-12 mt-32 flex-col">
            {/* FOOTER */}
            <div className="flex">
              <div className="w-5/6">
                <Image
                  src={screenshot}
                  alt="Footer Logo"
                  width={100}
                  height={100}
                />
                <p className="mt-4 w-1/2 text-sm text-[#6C737F] font-bold">
                  Lorem Ipsum is dummy text of the printing and typesetting
                  industry...
                </p>
              </div>
              <div className="w-54 text-[#6C737F]">
                <h1 className="text-black font-medium text-xl">COMPANY</h1>
                <ul className="text-sm mt-8">
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Delivery</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              <div className="w-54 text-[#6C737F]">
                <h1 className="text-black font-medium text-xl">GET IN TOUCH</h1>
                <ul className="text-sm mt-8">
                  <li>+1-000-000-0000</li>
                  <li>eazydevdev@gmail.com</li>
                  <li>Instagram</li>
                </ul>
              </div>
            </div>
            <div className="flex items-center justify-center mb-4 border-t border-[#E5E7EB]">
              <p className="mt-4 text-sm">
                © 2024 greatstack.dev - All Rights Reserved
              </p>
            </div>
          </footer>
        )}
      </body>
    </html>
  );
}
