import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PATH } from '../../utils/constants';
import './Header.scss';

export const Header = () => {
  return (
    <header className="header__container">
      <nav className="header__navigation ">
        <ul className="header__navigation-list">
          <li>
            <Link to={PATH.FORM}>Форма</Link>
          </li>
          <li>
            <Link to={PATH.PALETTE}>Палитра</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
