import { MainPage } from './components/MainPage';
import './sass/style.scss';
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <>
      <ParticlesBackground />
      <div className="container">
        <MainPage />
        <Footer />
      </div>
    </>
  );
}

export default App;
