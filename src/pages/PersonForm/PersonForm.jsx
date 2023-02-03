import React from 'react';
import './styles.scss';

const PersonForm = ({ userData }) => {
  console.log(userData);
  return (
    <div className="person-form">
      <form className="form">
        <div className="header">
          <h2 className="header-name">პირადი ინფო</h2>
          <h2 className="page-number">1/3</h2>
        </div>
        <hr></hr>
      </form>
      <div className="resume"></div>
    </div>
  );
};

export default PersonForm;
