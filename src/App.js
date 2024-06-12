import React from 'react';
import './App.css';
import Footer from './Components/Footer'; // Import the Footer component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to The Podcast App</h1>
        <p>
          Explore, listen, and enjoy your favorite podcasts.
        </p>
      </header>
      <main className="App-main">
        {/* Add your podcast list component here */}
        {/* <PodcastList /> */}
      </main>
      <Footer /> {/* Integrate the Footer component here */}
    </div>
  );
}

export default App;
