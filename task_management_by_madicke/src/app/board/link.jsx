"use client";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {TrashIcon} from '@heroicons/react/24/solid'
import { deleteBoard } from "../actions/submit";
const LinkS = ({ boards }) => {
  const pathName = usePathname();
  console.log(pathName);

  return (
    boards &&
    boards.map((link) => {
      return (
        <div key={link.id} className="flex items-center">
          <Button key={link.id} asChild className=" w-4/5" variant="outline">
            <Link
              key={link.id}
              href={`/board/${encodeURIComponent(link.id)}`}
              className={clsx(
                "flex h-[48px] justify-center items-center hover:bg-zinc-900 mb-3 gap-2 rounded-md mt-2 p-3 text-sm font-medium   md:flex-none md:justify-start md:p-2 md:px-3",
                {
                  " bg-zinc-950 dark:bg-zinc-800  text-white":
                    pathName === `/board/${encodeURIComponent(link.id)}`,
                }
              )}
            >
              <p className="hidden md:block">{link.name}</p>
            </Link>
          </Button>
            <form action={deleteBoard}>
            <input type="text" name='id' readOnly value={link.id} className="hidden" />
          <Button type='submit'  className='hover:cursor-pointer'>
            <TrashIcon height={20}/>
          </Button>
            </form>
        </div>
      );
    })
  );
};
export default LinkS;
