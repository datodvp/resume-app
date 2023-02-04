import React from 'react';
import ResetButton from '../ResetButton';
import './styles.scss';

const FormHeader = ({ title, page }) => {
  return (
    <div className="form-header">
      <ResetButton />
      <div className="header">
        <h2 className="name">{title}</h2>
        <h2 className="page-number">{page}</h2>
      </div>
      <hr></hr>
    </div>
  );
};

export default FormHeader;
