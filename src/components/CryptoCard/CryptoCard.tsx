import './scss/CryptoCard.scss';

type Props = {
  currency: string;
  price: never;
};

// eslint-disable-next-line react/prop-types
export const CryptoCard: React.FC<Props> = ({ currency, price }) => {
  return (
    <div className="card">
      <h3>{currency}</h3>
      <p>$ {price}</p>
    </div>
  );
};
