import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios';
import backgroundImage from './Background.jpg';
import './LandingDashboard.css'; 

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
    <div className="landing-dashboard" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div>
        <h2>Welcome to CryptoGraph</h2>
        <p>CryptoGraph is your go-to platform for comprehensive cryptocurrency tracking and analysis. Here, you can find real-time data on various cryptocurrencies, detailed charts, and insights to help you make informed decisions. Our platform offers an in-depth look at market trends, price changes, and the overall performance of the cryptocurrency market. With CryptoGraph, you can explore the latest trends, track your favorite coins, and stay updated with the top-performing cryptocurrencies. Whether you are a seasoned trader or just starting out, our user-friendly interface and robust data will provide you with everything you need to navigate the dynamic world of cryptocurrencies.</p>
      </div>
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
    </div>
  );
};

export default LandingDashboard;
