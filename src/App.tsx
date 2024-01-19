import './App.css';
import './sass/style.scss';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { AppRouter } from './Components/AppRouter';

function App() {
  return (
  <div className='container'>
    <Header />
    <main className='content'>
      <AppRouter />
    </main>
    <Footer />
  </div>
  );
}

export default App;
