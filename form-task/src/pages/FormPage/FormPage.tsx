import React, { useState } from 'react';
import { ResponseCard } from '../../components/ResponseCard/ResponseCard';
import { UserForm } from '../../components/UserForm/UserForm';
import { IResponsData } from '../../types/types';
import './FormPage.scss';

export const FormPage = () => {
  const [responseData, setResponseData] = useState<IResponsData>();

  return (
    <div className="form-page__container">
      <UserForm setResponseData={setResponseData} />
      <ResponseCard responseData={responseData} />
    </div>
  );
};
