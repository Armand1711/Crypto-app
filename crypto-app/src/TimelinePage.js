import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios';
import backgroundImage from './Background.jpg';
import './TimelinePage.css'; 

const currencyNames = {
  BTCUSDT: 'Bitcoin',
  ETHBTC: 'Ethereum',
  BNBUSDT: 'Binance Coin',
  ADABTC: 'Cardano',
  XRPBTC: 'Ripple',
  LTCBTC: 'Litecoin',
  BCHBTC: 'Bitcoin Cash',
  DOGEUSDT: 'Dogecoin',
  DOTUSDT: 'Polkadot',
  UNIUSDT: 'Uniswap',
};

const TimelinePage = () => {
  const [timelineData, setTimelineData] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState('ETHBTC'); // Default currency

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://binance43.p.rapidapi.com/klines', {
          params: {
            symbol: selectedCurrency,
            interval: '1h', //interval 
            limit: '500',
          },
          headers: {
            'X-RapidAPI-Key': '0fe19bfb79msh2b7bf51b23f88b0p1b28a9jsndee7058f229c',
            'X-RapidAPI-Host': 'binance43.p.rapidapi.com',
          },
        });
        // Extracting required data from the response
        const timelineData = response.data
          .map(item => ({
            date: new Date(item[0]), // Assuming the first value in the array is the timestamp
            value: parseFloat(item[4]), 
          }))
          .slice(0, 10); // Only take the first 10 items
        setTimelineData(timelineData);
      } catch (error) {
        console.error('Error fetching timeline data:', error);
      }
    };

    fetchData();
  }, [selectedCurrency]); // Fetch data whenever selectedCurrency changes

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  return (
    <div className="timeline-page" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div>
        <h2>Timeline Page</h2>
        <p>This page displays the timeline of price changes for a specific cryptocurrency symbol over the last few intervals.</p>
        <div>
          <label htmlFor="currency-select">Select a currency:</label>
          <select id="currency-select" value={selectedCurrency} onChange={handleCurrencyChange}>
            {Object.entries(currencyNames).map(([code, name]) => (
              <option key={code} value={code}>{name}</option>
            ))}
          </select>
        </div>
      </div>
      <LineChart width={800} height={400} data={timelineData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip 
          labelFormatter={(label) => new Date(label).toLocaleString()} 
          formatter={(value) => `$${value}`} 
        />
        <Legend />
        <Line type="monotone" dataKey="value" name="Price" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default TimelinePage;
