"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
const LinkS = ({ boards }) => {
  const pathName = usePathname();
  console.log(pathName)

  return (
    boards &&
    boards.map((link) => {
      return (
        <Link
          variant="outline"
          key={link.name}
          href={`/board/${encodeURIComponent(link.id)}`}
          className={clsx(
            "flex h-[48px] justify-center items-center dark:bg-white dark:text-white mb-3 gap-2 rounded-md mt-2 p-3 text-sm font-medium   md:flex-none md:justify-start md:p-2 md:px-3",
            {
              " bg-zinc-950 text-white":pathName === `/board/${encodeURIComponent(link.id)}`,
            }
          )}
       
        >
          <p className="hidden md:block">{link.name}</p>
        </Link>
      );
    })
  );
};
export default LinkS;
