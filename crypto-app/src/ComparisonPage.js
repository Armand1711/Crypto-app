import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios';

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
        const comparisonData = response.data
          .map(item => ({
            name: item.symbol,
            value1: parseFloat(item.bidPrice),
            value2: parseFloat(item.askPrice),
          }))
          .slice(0, 10); // Only take the first 10 items
        setComparisonData(comparisonData);
      } catch (error) {
        console.error('Error fetching comparison data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <BarChart width={800} height={400} data={comparisonData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value1" name="Bid Price" fill="#8884d8" />
      <Bar dataKey="value2" name="Ask Price" fill="#82ca9d" />
    </BarChart>
  );
};

export default ComparisonPage;
