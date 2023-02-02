import React from 'react';
import ThemeToggle from './ThemeToggle';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebookF, FaGithub, FaTwitter, FaReddit } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='rounded-div mt-8 mb-2 pt-8 text-primary'>
      <div className='grid md:grid-cols-2'>
        {/* leftside */}
        <div className='flex justify-evenly w-full md:max-w-[300px]'>
          <div>
            <h2 className='font-bold'>Support</h2>
            <ul>
              <li className='text-sm pt-2'>Help Center</li>
              <li className='text-sm pt-2'>Contact Us</li>
              <li className='text-sm pt-2'>API Status</li>
              <li className='text-sm pt-2'>Documentation</li>
            </ul>
          </div>
          <div>
            <h2 className='font-bold'>Info</h2>
            <ul>
              <li className='text-sm pt-2'>About Us</li>
              <li className='text-sm pt-2'>Careers</li>
              <li className='text-sm pt-2'>Invest</li>
              <li className='text-sm pt-2'>Legal</li>
            </ul>
          </div>
        </div>
        {/* rightside */}
        <div className='text-right'>
          <div className='w-full flex justify-end'>
            <div className='w-full md:w-[300px] py-4 relative'>
              <div className='flex justify-center md:justify-end py-4 md:py-0 md:pb-4 mt-[-1rem]'>
                <ThemeToggle />
              </div>
              <p className='text-center md:text-right'>Sign Up for Crypto News</p>
              <div>
                <form className='flex justify-center md:justify-end py-4 flex-col md:flex-row gap-2'>
                  <input className='border shadow-xl bg-primary rounded-md px-4 py-1 outline-none text-black' type="email" placeholder='Subscribe to Newsletter' />
                  <button className='rounded-xl bg-button text-btnText px-2 font-bold w-[100px] py-1 mx-auto'>Subscribe</button>
                </form>
              </div>
              <div className='flex gap-4 justify-center'> 
                <AiOutlineInstagram />
                <FaFacebookF />
                <FaGithub />
                <FaTwitter />
                <FaReddit />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className='text-center py-4'>Powered by <a href='https://www.coingecko.com/' className='font-bold text-blue-400'>CoinGecko</a></p>
    </div>
  );
}

export default Footer;