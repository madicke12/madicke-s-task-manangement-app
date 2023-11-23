import Link from "next/link";
import NavLinks from "./nav-links";
const Sidenav = () => {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-sky-200  p-3 "
        href="/"
      >
        <div className="w-32 md:w-40">
          <span className="text-black text-xl">ZenTasker</span>
        </div>
      </Link>
      <div className="flex grow flex-row  space-x-2 md:flex-col md:space-x-0 md:space-y-2 justify-between">
        <div className=" h-full">
        <NavLinks />
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
