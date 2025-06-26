import { useState } from "react";

export default function LeftAdmin() {
  const [clickedIndex, setClickedIndex] = useState(0);

  return (
    <div className="w-[20%] border-[#E5E7EB] border-r-2 min-h-screen">
      <div className="flex flex-col pl-10">
        <div
          onClick={() => setClickedIndex(0)}
          className={`bg-[#FFEBF5] border-gray-300 border-r-0 border mt-4 p-2 rounded-l text-md flex items-center gap-3 ${
            clickedIndex === 0 ? "" : "hidden"
          }`}
        >
          <img src="..." className="w-5" />
          <p>Add Items</p>
        </div>
        <div
          onClick={() => setClickedIndex(1)}
          className={`bg-[#FFEBF5] border-gray-300 border-r-0 border mt-4 p-2 rounded-l text-md flex items-center gap-3 ${
            clickedIndex === 1 ? "" : "hidden"
          }`}
        >
          <img src="..." className="w-5" />
          <p>List Items</p>
        </div>
        <div
          onClick={() => setClickedIndex(2)}
          className={`bg-[#FFEBF5] border-gray-300 border-r-0 border mt-4 p-2 rounded-l text-md flex items-center gap-3 ${
            clickedIndex === 2 ? "" : "hidden"
          }`}
        >
          <img src="..." className="w-5" />
          <p>Orders</p>
        </div>
      </div>
    </div>
  );
}
