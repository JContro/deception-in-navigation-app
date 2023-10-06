import React from 'react';
import Navbar from '../components/Navbar';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main>
        <h1>Welcome to My Next.js App</h1>
        <p>This is the home page.</p>
      </main>
    </div>
  );
};

export default Home;