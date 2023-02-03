import React from 'react';
import { AiOutlineLock, AiOutlineMail } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Signin = () => {
  return (
    <div>
      <div className='max-w-[400px] mx-auto min-h-[600px] px-4 py-20'>
        <h1 className='font-bold text-2xl'>Sign in</h1>
        <form>
          <div className='my-4'>
            <label className='font-bold'>Email</label>
            <div className='my-2 w-full relative rounded-2xl shadow-xl'>
              <input className='w-full py-2 px-4 bg-primary border border-input rounded-2xl' type="email" />
              <AiOutlineMail className='absolute right-2 top-3 text-gray-400' />
            </div>
          </div>
          <div className='my-4'>
            <label className='font-bold'>Password</label>
            <div className='my-2 w-full relative rounded-2xl shadow-xl'>
              <input type="password" className='w-full py-2 px-4 bg-primary border border-input rounded-2xl' />
              <AiOutlineLock className='absolute right-2 top-3 text-gray-400' />
            </div>
          </div>
          <div className='flex justify-center'>
            <button className='w-[180px] my-4 p-3 bg-button text-btnText rounded-2xl shadow-xl font-bold'>Sign in</button>
          </div>
        </form>
        <p className='my-2'>Don't have an account?<Link to='/signup' className='text-accent'> Sign up</Link></p>
      </div>
    </div>
  );
}

export default Signin;