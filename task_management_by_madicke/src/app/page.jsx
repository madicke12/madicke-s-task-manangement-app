'use client'
import Link from 'next/link';

import Signin from '@/components/signIn';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import img from './assets/Screenshot.png';
import { useEffect } from 'react';
import { getServerSession } from 'next-auth';
import { authOption } from './api/auth/[...nextauth]/route';
import  {useRouter} from 'next/navigation'

export default async function Home() {
const router = useRouter()
  useEffect(()=>{
    const b = async ()=>{
      const user = getServerSession(authOption)
      console.log(user)
      if (user) router.push('/board')
    }
  b()
  },[])
  return (
    
    <main className="p-3 h-screen flex flex-col gap-3">
      
      <header className="w-full bg-zinc-700 flex items-end p-4 rounded-lg h-[200px]">
        <div className="flex items-center text-black">
          <h1 className=" text-3xl dark:text-white text-black">ZenTasker </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 ml-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
        </div>
      </header>
      <section className="flex flex-col item-center  lg:flex-row p-5">
        <div className="lg:w-2/3 py-8 md:py-20 px-8 md:px-20">
          <p className="text-2xl font-bold">Welcome to Zentasker</p>
          <p className=" mt-2 text-xl">
            Take Control of Your Day with Zentasker Effortlessly manage tasks,
            set priorities, and track progress. Your all-in-one solution for
            productivity.
          </p>
       <Button asChild  className='mt-2 bg-white text-black dark:hover:text-black' >
       <Link href={'/signup'} >
          Get started
        </Link>
       </Button>
       
       <Signin/>
        </div>
        <div className="">
         <Image src={img} width={800} height={700}/>
        </div>
      </section>
    </main>
  );
}
