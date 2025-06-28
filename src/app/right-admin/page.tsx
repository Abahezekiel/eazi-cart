import { Metadata } from "next";
import ListItems from "../list-items/page";
import AddItems from "../add-items/page";
import Orders from "../orders/page";

export default function RightAdmin({ selectedIndex }) {
  return (
    <>
      <div className="w-[80%]">
        {selectedIndex === 0 && <AddItems />}
        {selectedIndex === 1 && <ListItems />}
        {selectedIndex === 2 && <Orders />}
      </div>
    </>
  );
}
