import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import './scss/Slider.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';
// import 'swiper/scss/pagination';
// import 'swiper/scss/scrollbar';
import { CryptoCard } from '../CryptoCard/CryptoCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

const cards = [
  {
    currency: 'coindesk',
    price: '4,444.17',
  },
  {
    currency: 'mapbox',
    price: '6,666.12',
  },
  {
    currency: 'polygon',
    price: '7,777.32',
  },
  {
    currency: 'tether',
    price: '2,222.65',
  },
  {
    currency: 'bitcoin',
    price: '1,234.32',
  },
];

interface ExchangeRates {
  [key: string]: number;
}

export const Slider: React.FC = () => {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  const [currencies, setCurrencies] = useState<ExchangeRates>();

  const APIKEY = '&x_cg_demo_api_key=CG-cx2Lfu4AWhCnnsvRsMj7B1zP';

  useEffect(() => {
    const promise = axios
      .get(
        `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,ripple,binancecoin,litecoin,dogecoin&vs_currencies=usd`
      )
      .then((res) => setCurrencies(res.data))
      .then(() => console.log(currencies))
      .catch((e) => console.log('error:', e));
  }, []);

  return (
    <section className="container">
      <h2>
        Real time popular <span>Cryptocurrency</span>
      </h2>
      <p>
        Real-time popular cryptocurrencies offer users the ability to track the
        value of digital assets
        <br />
        as they rise and fall in real-time. With this information, traders and
        investors can make
        <br />
        informed decisions about when to buy, sell, or hold their crypto assets.
      </p>

      <div className="slider">
        <button onClick={() => swiper && swiper.slidePrev()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={40}
            fill="white"
            viewBox="0 0 512 512"
          >
            <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" />
          </svg>
        </button>

        <Swiper
          className="swiper"
          onSwiper={(swiperInstance: SwiperClass) => setSwiper(swiperInstance)}
          spaceBetween={40}
          slidesPerView={4}
        >
          {' '}
          {currencies &&
            Object.entries(currencies).map((currency) => {
              console.log(currency);
              return (
                <SwiperSlide key={currency[0]} className="swiper__slide">
                  <CryptoCard
                    currency={currency[0]}
                    price={Object.values(currency[1]) as never}
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
        <button onClick={() => swiper && swiper.slideNext()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={40}
            fill="white"
            viewBox="0 0 512 512"
          >
            <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
          </svg>
        </button>
      </div>
    </section>
  );
};
