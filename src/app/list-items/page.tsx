export default function ListItems() {
  return (
    <>
      {/* admin dashboard list-items page  */}

      <div className=" bg-[#F9FAFB]  ">
        <div className="flex w-full bg-[#F9FAFB] ">
          <div className="w-[80%] pl-18 p-8">
            <p>All Products List</p>

            <div className="flex flex-col">
              <div className="grid grid-cols-[1fr_3fr_1fr_1fr_1fr] border border-[#E5E7EB] mt-2">
                <p className="p-1 font-bold bg-[#F3F4F6] text-sm">Name</p>
                <p className="p-1 font-bold bg-[#F3F4F6] text-sm">Category</p>
                <p className="p-1 font-bold bg-[#F3F4F6] text-sm">Image</p>
                <p className="p-1 font-bold bg-[#F3F4F6] text-sm">Price</p>
                <p className="p-1 font-bold bg-[#F3F4F6] text-sm">Action</p>
              </div>

              <div className="grid grid-cols-[1fr_3fr_1fr_1fr_1fr] border border-[#E5E7EB] mt-2 bg-[#F3F4F6] items-center justify-center">
                <img
                  src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img47.png"
                  className="w-14"
                />
                <p className="p-1 text-sm">Kid Tapered Slim Fit Trouser</p>
                <p className="p-1 text-sm">Kids</p>
                <p className="p-1 text-sm">$38</p>
                <p className="p-1 text-sm">X</p>
              </div>

              <div className="grid grid-cols-[1fr_3fr_1fr_1fr_1fr] border border-[#E5E7EB] mt-2 bg-[#F3F4F6] items-center justify-center">
                <img
                  src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img47.png"
                  className="w-14"
                />
                <p className="p-1 text-sm">Kid Tapered Slim Fit Trouser</p>
                <p className="p-1 text-sm">Kids</p>
                <p className="p-1 text-sm">$38</p>
                <p className="p-1 text-sm">X</p>
              </div>
              <div className="grid grid-cols-[1fr_3fr_1fr_1fr_1fr] border border-[#E5E7EB] mt-2 bg-[#F3F4F6] items-center justify-center">
                <img
                  src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img47.png"
                  className="w-14"
                />
                <p className="p-1 text-sm">Kid Tapered Slim Fit Trouser</p>
                <p className="p-1 text-sm">Kids</p>
                <p className="p-1 text-sm">$38</p>
                <p className="p-1 text-sm">X</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
