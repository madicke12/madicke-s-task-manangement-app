
import { PrismaClient } from '@prisma/client'
import Link from 'next/link'
export default function Navbar() {
  return (
    <div className="navbar outline px-3 py-4  rounded-lg h-20 ">
    <div className="flex-1">
      <span  className="text-xl">daisyUI</span>
    </div>
    <div className="flex-none gap-2">
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS Navbar component" src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </label>
        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
          <li>
            <Link href={'#'} className="justify-between">
              Profile
            </Link>
          </li>
          <li><Link href={'#'}>Logout</Link></li>
        </ul>
      </div>
    </div>
  </div>
  )
}
