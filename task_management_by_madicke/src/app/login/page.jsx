

import  Link from 'next/link'
const login =()=>{
    return(
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Log in and Take Charge</h1>
            <p className="py-6">Your tasks, your way. Unlock the full potential of Zentasker by logging in and managing your workload effortlessly.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" required />
                <div className='flex justify-between'>
                <label className="label">
                  <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                </label> <label className="label">
                  <Link href="/signup" className="label-text-alt link link-hover">Don't have an account? Signup</Link>
                </label>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
}

export default login