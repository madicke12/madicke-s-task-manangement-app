

import Link from 'next/link'
const Links = (links) =>{
    return(
        links.map((link) => {
            return (
              <Link
                key={link.name}
                href={`/dashboard/board/${encodeURIComponent(link.id)}`}
                className={clsx(
                  "flex h-[48px] grow items-center justify-center gap-2 rounded-md mt-2 p-3 text-sm font-medium btn btn-ghost btn-outline md:flex-none md:justify-start md:p-2 md:px-3",
                  {
                    " bg-gray-800 text-white": false,
                  }
                )}
              >
                <p className="hidden md:block">{link.name}</p>
              </Link>
            );
          }) 
    )
    }
export default Links