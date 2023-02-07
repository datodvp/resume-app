import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import BackArrowImg from '../../assets/images/BackArrowImg.svg';
import { UserContext } from '../../context/UserContext';
import './styles.scss';
import initialValues from '../../schema/InitialValues';

const ResetButton = () => {
  const { formik, setFormValues } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClick = (e) => {
    localStorage.clear();
    setFormValues(initialValues);
    formik.resetForm(e);
    navigate('/');
  };
  return (
    <button type="button" className="reset-button" onClick={handleClick}>
      <img src={BackArrowImg} alt="back button"></img>
    </button>
  );
};

export default ResetButton;
