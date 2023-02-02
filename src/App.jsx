import React, { useState, useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import Signin from './routes/Signin';
import Signup from './routes/Signup';
import Account from './routes/Account';
import axios from "axios";
import CoinPage from "./components/CoinPage";

const App = () => {
  const [coins, setCoins] = useState([]);
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true`;

  // Fetching Coin details
  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data);
    })   
  }, [url]);

  return (
    <ThemeProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home coins={coins} />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/account' element={<Account />} />
        <Route path='/coins/:coinId' element={<CoinPage />}>
          <Route path=':coinId' />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
