import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './components/App/App';
import { setupStore } from './store/store';
import './index.scss';

const container = document.getElementById('root')!;
const root = createRoot(container);

const store = setupStore();

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
