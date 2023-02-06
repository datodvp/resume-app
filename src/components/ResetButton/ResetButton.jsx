import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import BackArrowImg from '../../assets/images/BackArrowImg.svg';
import { UserContext } from '../../context/UserContext';
import './styles.scss';

const ResetButton = () => {
  const { formik } = useContext(UserContext);
  const navigate = useNavigate();
  const handleClick = (e) => {
    // formik.resetForm(e);
    navigate('/');
  };
  return (
    <button type="button" className="reset-button" onClick={handleClick}>
      <img src={BackArrowImg} alt="back button"></img>
    </button>
  );
};

export default ResetButton;
