import React from 'react';
import { MainPage } from './components/MainPage';
import './sass/style.scss';
import { Header } from './components/Header';
// import { Footer } from './Components/Footer';
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground';
import { Banner } from './components/Banner/Banner';

function App() {
  return (
    <>
      <ParticlesBackground />
      <div className="container">
        <Header />
        <Banner />
        <MainPage />
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
