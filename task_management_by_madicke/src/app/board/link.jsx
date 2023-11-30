"use client";
import { Button } from "@/components/ui/button";
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
        <Button asChild className="" variant="outline"> 
          <Link
          key={link.name}
          href={`/board/${encodeURIComponent(link.id)}`}
          className={clsx(
            "flex h-[48px] justify-center items-center hover:bg-zinc-900 mb-3 gap-2 rounded-md mt-2 p-3 text-sm font-medium   md:flex-none md:justify-start md:p-2 md:px-3",
            {
              " bg-zinc-950 dark:bg-zinc-800  text-white":pathName === `/board/${encodeURIComponent(link.id)}`,
            }
          )}
       
        >
          <p className="hidden md:block">{link.name}</p>
        </Link>
        </Button>
        
      );
    })
  );
};
export default LinkS;
