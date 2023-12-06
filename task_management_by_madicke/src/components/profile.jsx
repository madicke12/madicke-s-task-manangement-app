
import { authOption } from "@/app/api/auth/[...nextauth]/route"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from 'next/image'
import Link from 'next/link'

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { getServerSession } from "next-auth"
import { signOut } from "next-auth/react"
import { Button } from "./ui/button"

const Profile = async () => {
    const user = await getServerSession(authOption)
  return (
    <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage>
                <Image src={user.image} />
              </AvatarImage>
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <Button  onClick={()=>signOut()}>
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </Button>
          </DropdownMenuContent>
        </DropdownMenu>
  )
}

export default Profile