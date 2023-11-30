
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { Menubar } from '@/components/ui/menubar'
import Image from 'next/image'
import Link from 'next/link'
import { ModeToggle } from "./mode-toggle"
import AddNewTask from "./addNewTask"


export default function Navbar({boardName}) {
  console.log(boardName)
  return (
    <Menubar
      className="flex px-3 py-4 w-full rounded-lg h-20 "
      variant="outline"
    >
      <div className="flex-1">
        <span className="text-xl">{boardName}</span>
      </div>
      <div className="flex items-center gap-2">
        <AddNewTask />
      
        <ModeToggle />

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage>
                <Image src="djjj.jpg" />
              </AvatarImage>
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <Link href="/profile">
              <DropdownMenuItem>Profile</DropdownMenuItem>
            </Link>
            <Link href={"#"}>
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </Menubar>
  );
}
