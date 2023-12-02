import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
const login =()=>{
    return(
        <div className="flex items-center min-h-screen bg-zinc-800">
        <div className="flex flex-col items-center  lg:flex-row-reverse">
          <div className="text-center lg:text-left ml-2">
            <h1 className="text-5xl font-bold">Log in and Take Charge</h1>
            <p className="py-6">Your tasks, your way. Unlock the full potential of Zentasker by logging in and managing your workload effortlessly.</p>
          </div>
          <Card className=" border-none  shrink-0 w-full max-w-sm  ">
            <CardContent>
            <form >
              <div className="mb-2 form-control">
                <Label htmlFor='email' >
                  Email
                </Label>
                <Input type="email" id="email" placeholder="email" className="input input-bordered mt-2" required />
              </div>
              <div className="mb-2 form-control">
                <Label htmlFor='pass' >
                  Password
                </Label>
                <Input type="password" id='pass' placeholder="password" className="input input-bordered mt-2 mb-2" required />
                <div className='flex justify-between'>
                <Label  >
                  <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                </Label> <Label  >
                  <Link href="/signup" className="label-text-alt link link-hover">Don't have an account? Signup</Link>
                </Label>
                </div>
              </div>
              <div className="form-control mt-6">
                <Button variant='outline' className='w-full dark:hover:bg-white dark:hover:text-black'>Login</Button>
              </div>
            </form>
            </CardContent>
           
          </Card>
        </div>
      </div>
    )
}

export default login