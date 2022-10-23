import React from 'react';
import './App.scss';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Header } from '../Header/Header';
import { PATH } from '../../utils/constants';
import { FormPage } from '../../pages/FormPage/FormPage';
import { PalettePage } from '../../pages/PalettePage/PalettePage';
import { NotFoundPage } from '../../pages/NotFoundPage/NotFoundPage';

export function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path={PATH.FORM} element={<FormPage />} />
          <Route path={PATH.PALETTE} element={<PalettePage />} />
          <Route path={PATH.NOT_FOUND} element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
