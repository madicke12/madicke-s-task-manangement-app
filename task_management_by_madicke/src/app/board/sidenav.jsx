
import Link from "next/link";
import  { PlusIcon} from '@heroicons/react/24/solid'
import Modal from "@/components/modal";
import { DialogDemo } from "./addBoardDialog";

import NavLinks from "./nav-links";
import { Card } from "@/components/ui/card";
const Sidenav = () => {
  return (
    <div className="flex h-full flex-col px-3  md:px-2 ">
     <Card className="h-20">
     <Link
        className="mb-2 flex  items-end justify-start rounded-md   p-3 "
        href="/"
      >
        <div className="w-32 md:w-40">
          <span className="text-black text-xl">ZenTasker</span>
        </div>
      </Link>
     </Card>
      <div className="flex grow flex-row  space-x-2 md:flex-col md:space-x-0 md:space-y-2 justify-between">
        <div className="flex flex-col  h-full">
        <NavLinks />
        <DialogDemo/>
        </div>
        <Link href={"/"}>
          <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <div className="hidden md:block">Sign Out</div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sidenav;
