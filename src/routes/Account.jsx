import React from 'react';
import SavedCoins from '../components/SavedCoins';

const Account = () => {
  return (
    <div>
      {/* Account section */}
      <div className='rounded-div my-10 flex justify-between items-center py-4'>
        <div>
          <h1 className='font-bold'>Account</h1>
          <div>
            <p>Welcome, User</p>
          </div>
        </div>
        <div>
          <button>Sign out</button>
        </div>
      </div>

      {/* WatchList section */}
      <div className='rounded-div'>
        <div>
          <h1 className='font-bold'>Watch List</h1>
          <SavedCoins />
        </div>
      </div>
    </div>
  );
}

export default Account;