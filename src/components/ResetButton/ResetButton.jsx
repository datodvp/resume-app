import React from 'react';
import { Link } from 'react-router-dom';
import BackArrowImg from '../../assets/images/BackArrowImg.svg';
import './styles.scss';

const ResetButton = ({ setUserData }) => {
  const handleClick = () => {
    setUserData({
      name: '',
      surname: '',
      email: '',
      phone_number: '',
      experiences: [
        {
          position: '',
          employer: '',
          start_date: '',
          due_date: '',
          description: '',
        },
      ],
      educations: [
        {
          institute: '',
          degree: '',
          due_date: '',
          description: '',
        },
      ],
      image: '',
      about_me: '',
    });
  };
  return (
    <Link className="reset-button" to="/" onClick={handleClick}>
      <img src={BackArrowImg}></img>
    </Link>
  );
};

export default ResetButton;
