import React from 'react';
import SavedCoins from '../components/SavedCoins';

const Account = () => {
  return (
    <div className='max-w-[1140px] mx-auto'>
      {/* Account section */}
      <div className='rounded-div my-12 flex justify-between items-center py-8'>
        <div>
          <h1 className='font-bold text-2xl'>Account</h1>
          <div>
            <p>Welcome, User</p>
          </div>
        </div>
        <div>
          <button className='bg-button font-bold text-btnText border px-6 py-2 rounded-2xl shadow-lg hover:shadow-2xl'>Sign out</button>
        </div>
      </div>

      {/* WatchList section */}
      <div className='rounded-div flex justify-between items-center my-12 py-8'>
        <div className='w-full min-h-[300px]'>
          <h1 className='font-bold text-2xl py-4'>Watch List</h1>
          <SavedCoins />
        </div>
      </div>
    </div>
  );
}

export default Account;