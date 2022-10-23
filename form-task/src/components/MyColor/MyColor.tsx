import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeColor, deleteColors } from '../../store/redusers/ColorSlice';
import './MyColor.scss';

export interface IMyColorProps {
  id: string;
  color: string;
  index: number;
}

export const MyColor: React.FC<IMyColorProps> = ({ color, id, index }) => {
  const [isDelete, setIsDelete] = useState<boolean>(false);
  const dispatch = useDispatch();

  const deleteItem = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    const selectColor = { id, color, index };
    dispatch(deleteColors(selectColor));
  };

  const changeItem = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectColor = { id, color: event.target.value, index };
    dispatch(changeColor(selectColor));
  };

  return (
    <>
      <input
        id={`input-color-${id}`}
        type={'color'}
        value={color}
        onChange={changeItem}
        style={{ display: 'none' }}
        autoFocus
      />
      <label
        htmlFor={`input-color-${id}`}
        className="my-color__label"
        style={{ backgroundColor: color }}
        onPointerEnter={() => setIsDelete(true)}
        onPointerLeave={() => setIsDelete(false)}
      >
        <div
          className={`${isDelete ? 'my-color__delete' : 'my-color__delete-off'}`}
          onClick={(event) => deleteItem(event)}
        >
          X
        </div>
      </label>
    </>
  );
};
