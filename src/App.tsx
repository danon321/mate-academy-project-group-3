import React from 'react';
import { MainPage } from './components/MainPage';
import './sass/style.scss';
// import { Header } from './Components/Header';
// import { Footer } from './Components/Footer';
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground';

function App() {
  return (
    <>
      <ParticlesBackground />
      <div className="container">
        {/* <Header /> */}
        <MainPage />
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
