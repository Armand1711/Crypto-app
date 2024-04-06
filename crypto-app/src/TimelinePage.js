import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios';

const TimelinePage = () => {
  const [timelineData, setTimelineData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://binance43.p.rapidapi.com/klines', {
          params: {
            symbol: 'ETHBTC',
            interval: '1h', // Example interval (you can adjust as needed)
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
  }, []);

  return (
    <LineChart width={800} height={400} data={timelineData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip labelFormatter={(label) => new Date(label).toLocaleString()} formatter={(value) => `$${value}`} />
      <Legend />
      <Line type="monotone" dataKey="value" name="Price" stroke="#8884d8" />
    </LineChart>
  );
};

export default TimelinePage;
