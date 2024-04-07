import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ComparisonPage from './ComparisonPage';
import TimelinePage from './TimelinePage';
import LandingDashboard from './LandingDashboard';
import './styles.css';

const App = () => {
  return (
    <Router>
      <div style={{ backgroundColor: 'black' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingDashboard />} />
          <Route path="/comparison" element={<ComparisonPage />} />
          <Route path="/timeline" element={<TimelinePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
