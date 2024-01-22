import React from 'react';
import logo from './logo.svg';
import './App.css';
import './sass/style.scss';
import { Banner } from './components/Banner/Banner';
import { Slider } from './components/Slider/Slider';

function App() {
  const a = 3;

  return (
    <div className="App">
      <Banner />
      <Slider />
    </div>
  );
}

export default App;
