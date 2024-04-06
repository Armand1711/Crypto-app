import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios';

const LandingDashboard = () => {
  const [topCoins, setTopCoins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://binance43.p.rapidapi.com/ticker/24hr', {
          headers: {
            'X-RapidAPI-Key': '0fe19bfb79msh2b7bf51b23f88b0p1b28a9jsndee7058f229c',
            'X-RapidAPI-Host': 'binance43.p.rapidapi.com',
          },
        });
        // Extracting required data from the response
        const topCoinsData = response.data.map(coin => ({
          name: coin.symbol,
          current_price: parseFloat(coin.lastPrice),
        })).slice(0, 5); // Only take the first 5 coins
        setTopCoins(topCoinsData);
      } catch (error) {
        console.error('Error fetching top coins:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="page">
      <h2>Top 5 Coins</h2>
      <div className="chart-container">
        <BarChart
          width={800}
          height={400}
          data={topCoins}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="current_price"
            name="Price (USD)"
            fill="#8884d8"
          />
        </BarChart>
      </div>
    </div>
  );
};

export default LandingDashboard;
