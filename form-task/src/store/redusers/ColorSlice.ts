import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IColor {
  id: string;
  color: string;
  index: number;
}

interface IColorState {
  colors: IColor[];
  initialColor: string;
  initialIndex: number;
}
const initialState: IColorState = {
  colors: [],
  initialColor: '#00F4D0',
  initialIndex: 0,
};

export const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    getColors(state, action: PayloadAction<IColor>) {
      state.colors.push({
        id: action.payload.id,
        color: action.payload.color,
        index: action.payload.index,
      });
    },

    deleteColors(state, action: PayloadAction<IColor>) {
      state.colors.splice(action.payload.index, 1);
    },

    changeColor(state, action: PayloadAction<IColor>) {
      state.colors.splice(action.payload.index, 1, action.payload);
    },
  },
});

export const { getColors, deleteColors, changeColor } = colorSlice.actions;
export default colorSlice.reducer;
