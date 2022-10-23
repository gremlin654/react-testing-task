import React from 'react';
import { useDispatch } from 'react-redux';
import { MyColor } from '../../components/MyColor/MyColor';
import { useAppSelector } from '../../hooks/redux';
import { getColors } from '../../store/redusers/ColorSlice';
import './PalettePage.scss';

export const PalettePage = () => {
  const { colors, initialColor, initialIndex } = useAppSelector((state) => state.colorReduser);
  const dispatch = useDispatch();

  const getInitialColor = () => {
    dispatch(
      getColors({
        id: Date.now().toString(),
        color: initialColor,
        index: initialIndex,
      })
    );
  };

  return (
    <div className="palette-page__container">
      <div className="palette-page__colors-container">
        <div className="palette-page__colors-items">
          {colors.map((item, index) => (
            <MyColor key={item.id} color={item.color} id={item.id} index={index} />
          ))}
        </div>
      </div>
      <button
        className="palette-page__btn"
        onClick={getInitialColor}
        disabled={colors.length === 12}
      >
        Добавить цвет
      </button>
    </div>
  );
};
