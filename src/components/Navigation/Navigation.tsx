import React, { useState } from 'react';
import './Navigation.scss';

export const Navigation = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.checked) {
      setIsChecked((current) => !current);
      //console.log(isChecked);
      return;
    }

    setIsChecked(false);
  };

  return (
    <header className="header">
      <nav className="navigation">
        <ul className="navigation__list">
          <li className="navigation__list-item">
            <a className="navigation__link" href="#">
              Home
            </a>
          </li>
          <li className="navigation__list-item">
            <a className="navigation__link" href="#">
              About Us
            </a>
          </li>
          <li className="navigation__list-item">
            <a className="navigation__link" href="#">
              Services
            </a>
          </li>
          <li className="navigation__list-item">
            <a className="navigation__link" href="#">
              Cryptocurrencies
            </a>
          </li>
          <li className="navigation__list-item">
            <a className="navigation__link" href="#">
              News
            </a>
          </li>
          <li className="navigation__list-item">
            <a className="navigation__link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <label className="navigation__label">
        <input
          type="checkbox"
          className="navigation__input"
          onChange={handleInput}
        />
      </label>
    </header>
  );
};
