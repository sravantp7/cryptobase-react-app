import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { FaTwitter, FaFacebook, FaReddit, FaGithub } from 'react-icons/fa';
import DOMPurify from 'dompurify';

const CoinPage = () => {
  const [coin, setCoin] = useState({});
  const url = `https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&sparkline=true`;
  
  useEffect(() => {
    axios.get(url).then((response) => {
        setCoin(response.data);
        console.log(response.data);
    })
  }, [url]);
  return (
    <div className='rounded-div my-12 py-8'>
        <div className='flex items-center py-8'>
            <img src={coin.image?.large} alt="coin" className='w-20 mr-6' />
            <div>
                <p className='text-3xl font-bold'>{coin?.name} Price</p>
                <p>({coin.symbol?.toUpperCase()} / USD)</p>
            </div>
        </div>

        <div className='grid md:grid-cols-2 gap-8'>
            {/* Left */}
            <div>
                <div className='flex justify-between'>
                    {coin.market_data?.current_price.usd ? (<p className='font-bold text-2xl'>${coin.market_data?.current_price.usd.toLocaleString()}</p>) : (null) }
                    <p>7 Days</p>
                </div>
                <div>
                    <Sparklines data={coin.market_data?.sparkline_7d.price}>
                        <SparklinesLine color="teal" />
                    </Sparklines>
                </div>
                <div className='flex justify-between py-4'>
                    <div>
                        <p className='text-gray-500 text-sm'>Market Cap</p>
                        {coin.market_data?.market_cap ? (<p>${coin.market_data?.market_cap.usd.toLocaleString()}</p>) : (null)}
                    </div>
                    <div>
                        <p className='text-gray-500 text-sm'>Volume (24h)</p>
                        {coin.market_data?.total_volume ? (<p>${coin.market_data?.total_volume.usd.toLocaleString()}</p>) : (null)}
                    </div>
                </div>
                <div className='flex justify-between py-4'>
                    <div>
                        <p className='text-gray-500 text-sm'>24h High</p>
                        {coin.market_data?.high_24h ? (<p>${coin.market_data?.high_24h.usd.toLocaleString()}</p>) : (null)}
                    </div>
                    <div>
                        <p className='text-gray-500 text-sm'>24h Low</p>
                        {coin.market_data?.low_24h ? (<p>${coin.market_data?.low_24h.usd.toLocaleString()}</p>) : (null)}
                    </div>
                </div>
            </div>

            {/* Right */}
            <div>
                <p className='font-bold text-xl'>Market Stats</p>
                <div className='flex justify-between py-4'>
                    <div>
                        <p className='text-gray-500 text-sm'>Market Rank</p>
                        <p>{coin.market_cap_rank}</p>
                    </div>
                    <div>
                        <p className='text-gray-500 text-sm'>Hashing Algorithm</p>
                        <p>{coin.hashing_algorithm}</p>
                    </div>
                    <div>
                        <p className='text-gray-500 text-sm'>Trust Score</p>
                        <p>{coin.liquidity_score}</p>
                    </div>
                </div>
                <div className='flex justify-between py-4'>
                    <div>
                        <p className='text-gray-500 text-sm'>Price Change (24h)</p>
                        {coin.market_data?.price_change_percentage_24h ? (<p>{coin.market_data?.price_change_percentage_24h.toFixed(2)}%</p>) : (null)}
                    </div>
                    <div>
                        <p className='text-gray-500 text-sm'>Price Change (7d)</p>
                        {coin.market_data?.price_change_percentage_7d ? (<p>{coin.market_data?.price_change_percentage_7d.toFixed(2)}%</p>) : (null)}
                    </div>
                    <div>
                        <p className='text-gray-500 text-sm'>Price Change (14d)</p>
                        {coin.market_data?.price_change_percentage_14d ? (<p>{coin.market_data?.price_change_percentage_14d.toFixed(2)}%</p>) : (null)}
                    </div>
                </div>
                <div className='flex justify-between py-4'>
                    <div>
                        <p className='text-gray-500 text-sm'>Price Change (30d)</p>
                        {coin.market_data?.price_change_percentage_30d ? (<p>{coin.market_data?.price_change_percentage_30d.toFixed(2)}%</p>) : (null)}
                    </div>
                    <div>
                        <p className='text-gray-500 text-sm'>Price Change (60d)</p>
                        {coin.market_data?.price_change_percentage_60d ? (<p>{coin.market_data?.price_change_percentage_60d.toFixed(2)}%</p>) : (null)}
                    </div>
                    <div>
                        <p className='text-gray-500 text-sm'>Price Change (1y)</p>
                        {coin.market_data?.price_change_percentage_1y ? (<p>{coin.market_data?.price_change_percentage_1y.toFixed(2)}%</p>) : (null)}
                    </div>
                </div>
                <div className='flex w-[60%] justify-between items-center mx-auto py-4 text-accent'>
                    <FaTwitter />
                    <FaFacebook />
                    <FaReddit />
                    <FaGithub />
                </div>
            </div>
        </div>

        {/* Coin Details */}
        <div className='mt-4'>
            <p className='font-bold text-xl py-2'>About {coin.name}</p>
            {/* Using dompurify package to get rid of link tags in description */}
            <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(coin.description ? coin.description?.en : ''), }}></p>
        </div>
    </div>
  );
}

export default CoinPage;