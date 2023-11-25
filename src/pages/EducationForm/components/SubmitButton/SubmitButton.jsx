import React, { useContext } from 'react';
import { UserContext } from '../../../../context/UserContext';
import './styles.scss';

const SubmitButton = () => {
  const { formik } = useContext(UserContext);
  return (
    <button
      className="submit-button"
      type="button"
      onClick={() => {
        formik.handleSubmit();
      }}
    >
      Finish
    </button>
  );
};

export default SubmitButton;
