import React from 'react';
import { NavLink } from 'react-router-dom';
import { PATH } from '../../utils/constants';
import './Header.scss';

export const Header = () => {
  const setActive = ({ isActive }: { isActive: boolean }) => (isActive ? 'active-link' : '');

  return (
    <header className="header__container">
      <nav className="header__navigation ">
        <ul className="header__navigation-list">
          <li>
            <NavLink to={PATH.FORM} className={setActive} end>
              Форма
            </NavLink>
          </li>
          <li>
            <NavLink to={PATH.PALETTE} className={setActive}>
              Палитра
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
