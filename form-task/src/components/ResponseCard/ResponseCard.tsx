import React from 'react';
import { IResponsDataProps } from '../../types/types';
import './ResponseCard.scss';

export const ResponseCard: React.FC<IResponsDataProps> = ({ responseData }) => {
  return (
    <div className="response-card__container">
      <h3 className="response-card__title">Response</h3>
      <div className="response-card__response">
        {responseData?.status && (
          <p className="response-card__response-text">{responseData.status}</p>
        )}
      </div>
    </div>
  );
};
