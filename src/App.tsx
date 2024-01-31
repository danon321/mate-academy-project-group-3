import './App.css';
import './sass/style.scss';
import { Banner } from './components/Banner/Banner';
import { Slider } from './components/Slider/Slider';

function App() {
  return (
    <div className="App">
      <Banner />
      <Slider />
    </div>
  );
}

export default App;
