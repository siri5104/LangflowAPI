# LangflowAPI
City Attractions Finder

Description:
A simple web app that shows popular attractions in a city. Users enter a city name, and the app fetches and displays attractions from an API.

Features:
Enter a city name to find attractions.

Fetches data from an API.

Displays attractions in a list.

Simple and user-friendly design.

How It Works:
User enters a city name in the input box.

Clicks the "Get Attractions" button.

The frontend sends a request to the backend.

The backend fetches attractions using Langflow's JS API and returns them.

The results are displayed.

File Structure:
City-Attractions-Finder/
│-- public/
│   │-- index.html    
│   │-- style.css     
│-- server.js        
│-- package.json    
│-- README.md        

Setup & Run:

Install dependencies:
npm install express body-parser node-fetch

Start the server:
node server.js

Open index.html in a browser.

Enter a city name and click "Get Attractions".
