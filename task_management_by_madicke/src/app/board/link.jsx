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
          key={link.name}
          href={`/board/${encodeURIComponent(link.id)}`}
          className={clsx(
            "flex h-[48px] grow items-center justify-center gap-2 rounded-md mt-2 p-3 text-sm font-medium btn   md:flex-none md:justify-start md:p-2 md:px-3",
            {
              " btn-primary":
                pathName === `/board/${encodeURIComponent(link.id)}`,
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
