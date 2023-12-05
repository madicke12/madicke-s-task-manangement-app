'use client'

import { signIn } from "next-auth/react"
import { Button } from "./ui/button"
import Link from 'next/link'

const Signin =()=>{

    return(
        <Button variant='outline' asChild  className='mt-2 hover:bg-white dark:text-white px-4 ml-4 dark:hover:text-black'  onClick={()=>signIn(undefined,{callbackUrl:`${window.location.origin}/board`})}>
       <Link href={'/signin'} >
          Sign in
        </Link>
       </Button>
    )
}

export default Signin