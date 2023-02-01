import React, { useState } from 'react';
import CoinItem from './CoinItem';

const CoinSearch = ({coins}) => {
  console.log(coins);
  const [searchCoin, setSearchCoin] = useState('');

  const handleChange = (e) => {
    setSearchCoin(e.target.value);
  }

  return (
    <div>
        <div className='flex justify-between items-center'>
            <h1>Search Crypto</h1>
            <form>
                <input type='text' placeholder='search a coin' onChange={handleChange} />
            </form>
        </div>

        {/* Displaying coin details here */}
        <table>
          <thead>
            <tr>
              <th></th>
              <th>#</th>
              <th>Coin</th>
              <th></th>
              <th>Price</th>
              <th>24h</th>
              <th>24h Volume</th>
              <th>Mkt</th>
              <th>Last 7 Days</th>
            </tr>
          </thead>
          <tbody>
            {
              coins.filter((value) => {
                 if (searchCoin === '') {
                    return value;
                 } else if (value.name.toLowerCase().includes(searchCoin.toLowerCase()) || value.symbol.toLowerCase().includes(searchCoin.toLowerCase()) ) {
                    return value;
                 }
              }).map((coin, i) => (
                  <CoinItem coin={coin} key={i} />
              ))
            }
          </tbody>
        </table>
    </div>
  );
}

export default CoinSearch;