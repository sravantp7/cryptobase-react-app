import React from 'react';
import { AiOutlineLock, AiOutlineMail } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Signin = () => {
  return (
    <div className='rounded-div mt-10'>
      <div className=''>
        <h1>Sign In</h1>
        <form>
          <div>
            <label>Email</label>
            <div>
              <input type="email" />
              <AiOutlineMail />
            </div>
          </div>
          <div>
            <label>Password</label>
            <div>
              <input type="password" />
              <AiOutlineLock />
            </div>
          </div>
          <button>Sign in</button>
        </form>
        <p>Don't have an account?<Link to='/signup' className='text-blue-500'> Sign up</Link></p>
      </div>
    </div>
  );
}

export default Signin;