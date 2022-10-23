import { combineReducers, configureStore } from '@reduxjs/toolkit';
import colorReduser from './redusers/ColorSlice';

const rootReduser = combineReducers({
  colorReduser,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReduser,
  });
};

export type RootState = ReturnType<typeof rootReduser>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
