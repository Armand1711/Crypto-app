CryptoGraph
CryptoGraph is a comprehensive platform for tracking and analyzing cryptocurrency data. It provides real-time information on various cryptocurrencies, detailed charts, and insights to help users make informed decisions. This README file will guide you through the setup and usage of CryptoGraph.

Table of Contents
Features
Installation
Usage
Landing Dashboard
Comparison Page
Timeline Page
Technologies Used



Features
Real-time data on various cryptocurrencies
Detailed comparison of bid and ask prices
Timeline of price changes for selected cryptocurrencies
User-friendly interface with interactive charts
Installation
To run CryptoGraph locally, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/your-username/cryptograph.git
cd cryptograph
Install dependencies:

bash
Copy code
npm install
Run the application:

bash
Copy code
npm start
The application will run on http://localhost:3000.

Usage
Landing Dashboard
The Landing Dashboard provides an overview of the top-performing cryptocurrencies. It displays a bar chart of the top 5 coins by current price.

Endpoint: /
Description: Displays the top 5 coins and a brief introduction to CryptoGraph.
Charts Used: Bar Chart
Comparison Page
The Comparison Page provides a comparison of bid and ask prices for various symbols in the cryptocurrency market. It includes bar charts, pie charts, and radar charts for a detailed comparison.

Endpoint: /comparison
Description: Displays comparisons of bid and ask prices for the top 10 symbols.
Charts Used: Bar Chart, Pie Chart, Radar Chart
Timeline Page
The Timeline Page shows the timeline of price changes for a specific cryptocurrency symbol over the last few intervals. Users can select the currency they are interested in.

Endpoint: /timeline
Description: Displays a line chart showing the price timeline for a selected cryptocurrency.
Charts Used: Line Chart
Technologies Used
React: Frontend library for building user interfaces
Recharts: Library for rendering charts
Axios: HTTP client for making API requests
CSS: Styling the components
HTML: Markup language for structuring the web pages
