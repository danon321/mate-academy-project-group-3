import { MainPage } from './components/MainPage';
import './sass/style.scss';
import { Header } from './components/Header';
// import { Footer } from './Components/Footer';

function App() {
  return (
    <div className="container">
      <Header />
      <MainPage />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
