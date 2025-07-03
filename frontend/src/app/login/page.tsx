

"use client";

import { Metadata } from "next";
import { useState } from "react";

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="flex items-center justify-center flex-col">
      {/* Header */}
      <div className="flex gap-3 items-center justify-center">
        <p className="text-black font-serif text-3xl mt-20">
          {isSignUp ? "Sign Up" : "Login"}
        </p>
        <p className="w-10 h-[2px] bg-[#414141] mt-20"></p>
      </div>

      <div className="flex items-center justify-center flex-col">
        {/* Sign Up Form */}
        {isSignUp ? (
          <>
            <div>
              <input
                placeholder="Name"
                className="outline-none border border-black w-96 p-2 mt-8"
              />
            </div>
            <div>
              <input
                placeholder="Email"
                className="outline-none border border-black w-96 p-2 mt-4"
              />
            </div>
            <div>
              <input
                placeholder="Password"
                className="outline-none border border-black w-96 p-2 mt-4"
              />
            </div>
            <div className="flex justify-between w-full mt-2 text-sm">
              <p>Forgot your password?</p>
              <button
                className="cursor-pointer"
                onClick={() => setIsSignUp(false)}
              >
                Login Here
              </button>
            </div>
            <button className="bg-black text-white px-7 py-2 mt-6">
              Sign Up
            </button>
          </>
        ) : (
          // Login Form
          <>
            <div>
              <input
                placeholder="Email"
                className="outline-none border border-black w-96 p-2 mt-8"
              />
            </div>
            <div>
              <input
                placeholder="Password"
                className="outline-none border border-black w-96 p-2 mt-4"
              />
            </div>
            <div className="flex justify-between w-full mt-2 text-sm">
              <p>Forgot your password?</p>
              <button
                className="cursor-pointer"
                onClick={() => setIsSignUp(true)}
              >
                Create account
              </button>
            </div>
            <button className="bg-black text-white px-7 py-2 mt-6">
              Sign in
            </button>
          </>
        )}
      </div>
    </div>
  );
}
