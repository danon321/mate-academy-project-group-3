import './scss/Banner.scss';
import bannerImg from './bannerimg.png';
import polygonImg from './polygon.png';
import bitpandaImg from './bitpanda.png';
import coindeskImg from './coindesk.png';
import tronImg from './tron.png';
import mapboxImg from './mapbox.png';

export const Banner: React.FC = () => {
  console.log(true);
  return (
    <div className="banner">
      <div className="banner__text">
        <h1>
          Join the <span>Crypto</span> Revolution Start <span>Trading</span>{' '}
          Today
        </h1>
        <p>
          The crypto trading revolution has transformed the way we invest,
          trade, and store value. With its decentralized and transparent nature,
          cryptocurrencies offer a more secure and accessible alternative to
          traditional financial systems.
        </p>
      </div>

      <img src={bannerImg} alt="" />
      <button>Get Started</button>
      <div className="banner__partners">
        <img src={polygonImg} alt="" />
        <img src={bitpandaImg} alt="" />
        <img src={coindeskImg} alt="" />
        <img src={tronImg} alt="" />
        <img src={mapboxImg} alt="" />
      </div>
    </div>
  );
};
