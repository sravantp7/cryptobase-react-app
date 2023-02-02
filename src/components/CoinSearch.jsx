import React, { useState } from 'react';
import CoinItem from './CoinItem';

const CoinSearch = ({coins}) => {
  const [searchCoin, setSearchCoin] = useState('');

  const handleChange = (e) => {
    setSearchCoin(e.target.value);
  }

  return (
    <div className='rounded-div my-4'>
        <div className='flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right'>
            <h1 className='text-2xl font-bold my-2'>Search Crypto</h1>
            <form>
                <input type='text' placeholder='search a coin' onChange={handleChange} className='w-full bg-primary border px-4 py-2 rounded-2xl shadow-xl' />
            </form>
        </div>

        {/* Displaying coin details here */}
        <table className='w-full border-collapse text-center'>
          <thead>
            <tr className='border-b'>
              <th></th>
              <th className='px-4'>#</th>
              <th className='text-left'>Coin</th>
              <th></th>
              <th>Price</th>
              <th>24h</th>
              <th className='hidden md:table-cell'>24h Volume</th>
              <th className='hidden sm:table-cell'>Mkt</th>
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