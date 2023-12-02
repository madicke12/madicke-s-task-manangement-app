import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import Link from 'next/link'
const signup = () => {
  return (
    <div className=" flex items-center min-h-screen bg-zinc-800 p-3">
      <div className="flex flex-col items-center lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">
            Start Your Productivity Journey
          </h1>
          <p className="py-6">
            Start Your Productivity Journey Sign up for Zentasker and experience
            the power of intuitive task management. Your success story begins
            here.
          </p>
        </div>
        <Card className="border-none shrink-0 w-full max-w-sm mr-2">
          <form className="card-body">
          <div className="form-control">
              <Label htmlFor='prenom'>
                Firts Name
              </Label>
              <Input
                id='prenom'
                type="email"
                placeholder="First Name"
                className="mt-2 mb-2 input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <Label htmlFor='nom'>
                 Name
              </Label>
              <Input
              id='nom'
                type="text"
                placeholder="Name"
                className="mt-2 mb-2 input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <Label htmlFor='email'>
                Email
              </Label>
              <Input
                type="email"
                id='email'
                placeholder="email"
                className="mt-2 mb-2 input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <Label htmlFor='pass'>
                Password
              </Label>
              <Input
              id='pass'
                type="password"
                placeholder="password"
                className="mt-2 mb-2 input-bordered"
                required
              />
              <div className="flex justify-between">
                  <Link  href="/login" className='hover:underline'>
                    Already registred? Sign in
                  </Link>
              </div>
            </div>
            <div className="form-control mt-6">
              <Button variant='outline'  className="w-full dark:bg-white border dark:hover:text-white border-white dark:hover:bg-transparent dark:text-black">Signup</Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default signup;
