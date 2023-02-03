import React from 'react';
import SavedCoins from '../components/SavedCoins';

const Account = () => {
  return (
    <div>
      {/* Account section */}
      <div>
        <div>
          <h1>Account</h1>
          <div>
            <p>Welcome, User</p>
          </div>
        </div>
        <div>
          <button>Sign out</button>
        </div>
      </div>

      {/* WatchList section */}
      <div>
        <div>
          <h1>Watch List</h1>
          <SavedCoins />
        </div>
      </div>
    </div>
  );
}

export default Account;