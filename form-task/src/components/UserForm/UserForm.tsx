import axios, { AxiosResponse } from 'axios';
import React, { ChangeEvent, DragEventHandler, useState } from 'react';
import { IPostData, IResponsData, IUserFormProps } from '../../types/types';
import { BASE_URL, postDataInitial } from '../../utils/constants';
import './UserForm.scss';

export const UserForm: React.FC<IUserFormProps> = ({ setResponseData }) => {
  const [data, setData] = useState<IPostData>(postDataInitial);
  const [drag, setDrag] = useState<boolean>(false);
  const [previewImg, setPreviewImg] = useState<string>('');

  const dragStartHandler: DragEventHandler<HTMLLabelElement> = (event) => {
    event.preventDefault();
    setDrag(true);
  };

  const dragLeaveHandler: DragEventHandler<HTMLLabelElement> = (event) => {
    event.preventDefault();
    setDrag(false);
  };

  const onDropHandler: DragEventHandler<HTMLLabelElement> = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file.type === 'image/jpeg' || file.type === 'image/png') {
      const linkFile = URL.createObjectURL(file);
      setPreviewImg(linkFile);
      setData({
        ...data,
        image: file,
      });
    }
    setDrag(false);
  };

  const changeFileHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) {
      const file = event.target.files[0];
      if (file.type === 'image/jpeg' || file.type === 'image/png') {
        const linkFile = URL.createObjectURL(file);
        setPreviewImg(linkFile);
        setData({
          ...data,
          image: file,
        });
      }
    }
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('action', data.action);
    formData.append('id', `${data.id}`);
    formData.append('image', data.image as Blob);
    formData.set('contact[name]', `${data.name}`);
    formData.set('contact[surname]', `${data.surname}`);
    formData.set('contact[patronymic]', `${data.patronymic}`);
    const response: AxiosResponse<IResponsData> = await axios.post(BASE_URL, formData);
    setResponseData(response.data);
    setTimeout(() => {
      setResponseData(undefined);
    }, 3000);
    setData(postDataInitial);
    setPreviewImg('');
  };

  return (
    <form className="form__container" onSubmit={(event) => onSubmit(event)}>
      <label className="form__label">
        <p className="form__text">Имя</p>
        <input
          className="form__input"
          type="text"
          value={data.name}
          onChange={(event) => setData({ ...data, name: event.target.value })}
          required
        />
      </label>
      <label className="form__label">
        <p className="form__text">Фамилия</p>
        <input
          className="form__input"
          type="text"
          value={data.surname}
          onChange={(event) => setData({ ...data, surname: event.target.value })}
          required
        />
      </label>
      <label className="form__label">
        <p className="form__text">Отчество</p>
        <input
          className="form__input"
          type="text"
          value={data.patronymic}
          onChange={(event) => setData({ ...data, patronymic: event.target.value })}
          required
        />
      </label>
      <div className="form__img-container">
        <p className="form__text">Фото</p>
        <input
          id="file-input"
          type="file"
          onChange={(event) => changeFileHandler(event)}
          accept="image/jpeg,image/png"
          style={{ display: 'none' }}
          required
        />
        <label
          className={`form__label-img ${drag && 'form__label-img-drag'}`}
          htmlFor="file-input"
          onDragStart={(event) => dragStartHandler(event)}
          onDragLeave={(event) => dragLeaveHandler(event)}
          onDragOver={(event) => dragStartHandler(event)}
          onDrop={(event) => onDropHandler(event)}
        >
          {previewImg ? (
            <img src={previewImg} alt="photo" className="form__img" />
          ) : (
            <img src="./vector.svg" alt="no-photo" />
          )}
        </label>
      </div>
      <button type="submit" className="form__btn">
        Сохранить
      </button>
    </form>
  );
};
