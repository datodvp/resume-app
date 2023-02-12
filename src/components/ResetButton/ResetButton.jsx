import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import BackArrowImg from '../../assets/images/BackArrowImg.svg';
import { UserContext } from '../../context/UserContext';
import initialValues from '../../schema/initialValues/initialValues';
import './styles.scss';

const ResetButton = () => {
  const { formik, setInputsData } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClick = (e) => {
    // reset state, localstorage, formik and navigate to "/"
    formik.resetForm(e);
    setInputsData(initialValues);
    navigate('/');
  };
  return (
    <button type="button" className="reset-button" onClick={handleClick}>
      <img src={BackArrowImg} alt="back button"></img>
    </button>
  );
};

export default ResetButton;
