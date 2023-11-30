
import Link from "next/link";
import  { PlusIcon} from '@heroicons/react/24/solid'
import Modal from "@/components/modal";
import { DialogDemo } from "./addBoardDialog";

import NavLinks from "./nav-links";
import { Card } from "@/components/ui/card";
import { ModeToggle } from "./mode-toggle";
const Sidenav = () => {
  return (
    <div className="flex h-full flex-col px-3  md:px-2">
     <Card className="h-20">
     <Link
        className="mb-2 flex  items-end justify-start rounded-md   p-3 "
        href="/"
      >
        <div className="w-32 md:w-40 flex items-center">
          <span className=" dark:text-white text-black text-xl">ZenTasker</span>
        </div>
      </Link>
     </Card>
      <div className="flex grow flex-row  space-x-2 md:flex-col md:space-x-0 md:space-y-2 justify-between">
        <div className="flex flex-col  h-full">
        <NavLinks />
        <DialogDemo/>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
