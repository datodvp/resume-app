import React from 'react';
import { Link } from 'react-router-dom';
import BackArrowImg from '../../assets/images/BackArrowImg.svg';
import './styles.scss';

const ResetButton = ({ setUserData }) => {
  return (
    <Link className="reset-button" to="/">
      <img src={BackArrowImg} alt="back button"></img>
    </Link>
  );
};

export default ResetButton;
