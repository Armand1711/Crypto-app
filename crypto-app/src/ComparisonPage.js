import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios';
import backgroundImage from './Background.jpg';
import './ComparisonPage.css'; 

const ComparisonPage = () => {
  const [comparisonData, setComparisonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://binance43.p.rapidapi.com/ticker/bookTicker', {
          headers: {
            'X-RapidAPI-Key': '0fe19bfb79msh2b7bf51b23f88b0p1b28a9jsndee7058f229c',
            'X-RapidAPI-Host': 'binance43.p.rapidapi.com',
          },
        });
        // Extracting required data from the response
        const comparisonData = response.data.map(item => ({
          name: item.symbol,
          bidPrice: parseFloat(item.bidPrice),
          askPrice: parseFloat(item.askPrice),
        })).slice(0, 10); // Only take the first 10 items
        setComparisonData(comparisonData);
      } catch (error) {
        console.error('Error fetching comparison data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="comparison-page" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div>
        <h2>Comparison Page</h2>
        <p>This page displays a comparison of bid and ask prices for various symbols in the cryptocurrency market.</p>
      </div>
      <BarChart width={800} height={400} data={comparisonData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="bidPrice" name="Bid Price" fill="#8884d8" />
        <Bar dataKey="askPrice" name="Ask Price" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default ComparisonPage;
