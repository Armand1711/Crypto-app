import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import axios from 'axios';
import backgroundImage from './Background.jpg';
import './ComparisonPage.css';

const ComparisonPage = () => {
  const [comparisonData, setComparisonData] = useState([]);
  const [pieData, setPieData] = useState([]);
  const [radarData, setRadarData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://binance43.p.rapidapi.com/ticker/bookTicker', {
          headers: {
            'X-RapidAPI-Key': '0fe19bfb79msh2b7bf51b23f88b0p1b28a9jsndee7058f229c',
            'X-RapidAPI-Host': 'binance43.p.rapidapi.com',
          },
        });

        // Adjusting the data to make it more readable
        const comparisonData = response.data.map(item => ({
          name: item.symbol,
          bidPrice: (parseFloat(item.bidPrice) * 1000000).toFixed(2),
          askPrice: (parseFloat(item.askPrice) * 1000000).toFixed(2),
        })).slice(0, 10);
        setComparisonData(comparisonData);

        const pieData = response.data.map(item => ({
          name: item.symbol,
          value: (parseFloat(item.bidPrice) + parseFloat(item.askPrice)) * 1000000,
        })).slice(0, 10);
        setPieData(pieData);

        const radarData = response.data.map(item => ({
          subject: item.symbol,
          A: (parseFloat(item.bidPrice) * 1000000).toFixed(2),
          B: (parseFloat(item.askPrice) * 1000000).toFixed(2),
          fullMark: (Math.max(parseFloat(item.bidPrice), parseFloat(item.askPrice)) * 1000000).toFixed(2),
        })).slice(0, 10);
        setRadarData(radarData);

      } catch (error) {
        console.error('Error fetching comparison data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="comparison-page" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
      <div>
        <h2>Comparison Page</h2>
        <p>This page displays a comparison of bid and ask prices for various symbols in the cryptocurrency market.</p>
      </div>
      <div className="chart-container">
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
      <div className="chart-container">
        <PieChart width={800} height={400}>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#82ca9d"
            label
          />
          <Tooltip />
        </PieChart>
      </div>
      <div className="chart-container">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" width={800} height={400} data={radarData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar name="Bid Price" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Radar name="Ask Price" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
          <Legend />
          <Tooltip />
        </RadarChart>
      </div>
    </div>
  );
};

export default ComparisonPage;
