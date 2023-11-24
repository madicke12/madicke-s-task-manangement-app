
import { PrismaClient } from "@prisma/client";

import LinkS from "./link";

const NavLinks = async () => {
  const prisma = new PrismaClient();

  const boards = await prisma.board.findMany();

  return (
    <>
    <LinkS boards={boards} />
      {/* {boards.map((link) => {
        return (
          <Link
            key={link.name}
            href={`/board/${encodeURI(link.id)}`}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md mt-2 p-3 text-sm font-medium btn   md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "btn-primary": false,
              }
            )}
          >
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })} */}
    </>
  );
};

export default NavLinks;
