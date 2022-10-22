import React from 'react';
import './App.scss';
import { Header } from './components/Header/Header';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { FormPage } from './pages/FormPage/FormPage';
import { PATH } from './utils/constants';
import { PalettePage } from './pages/PalettePage/PalettePage';

export function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path={PATH.FORM} element={<FormPage />} />
          <Route path={PATH.NOT_FOUND} element={<NotFoundPage />} />
          <Route path={PATH.PALETTE} element={<PalettePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
