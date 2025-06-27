import { Metadata } from "next";
import ListItems from "../list-items/page";
import AddItems from "../add-items/page";
import Orders from "../orders/page";

export default function RightAdmin() {
  return (
    <>
      <div className="w-[80%] pl-18 p-8">
        <AddItems />

        <ListItems />
        <Orders />
      </div>
    </>
  );
}
