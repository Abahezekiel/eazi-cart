import { Metadata } from "next";
import "./globals.css";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen">
        <header className="bg-blue-200 p-3">
         <div>
         <ul className="flex gap-5">
            <li>HOME</li>
            <li>COLLECTION</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>
         </div>

         <div>
         <CiSearch />

         </div>
        </header>

        <main className="flex-grow">{children}</main>

        <footer className="bg-gray-500 p-3 flex items-center justify-center">
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
