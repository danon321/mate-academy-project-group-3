import { MainPage } from './components/MainPage';
import './sass/style.scss';
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground';
import { Footer } from './components/Footer/Footer';
import { Banner } from './components/Banner/Banner';

function App() {
  return (
    <>
      <ParticlesBackground />
      <div className="container">
        <Banner />
        <MainPage />
        <Footer />
      </div>
    </>
  );
}

export default App;
