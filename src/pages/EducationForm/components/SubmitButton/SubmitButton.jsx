import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../../context/UserContext';
import './styles.scss';

const SubmitButton = () => {
  const { formik } = useContext(UserContext);
  return (
    <button className="submit-button" type="submit">
      დასრულება
    </button>
  );
};

export default SubmitButton;
