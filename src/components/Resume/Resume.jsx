import React, { useContext } from 'react';
import ResumeLogoImg from '../../assets/images/ResumeLogoImg.png';
import { UserContext } from '../../context/UserContext';
import './styles.scss';
import PersonImg from '../../assets/images/PersonImg.png';
import EmailImg from '../../assets/images/EmailImg.png';
import PhoneImg from '../../assets/images/PhoneImg.png';

const Resume = () => {
  const { userData } = useContext(UserContext);
  return (
    <div className="resume">
      <img className="logo" src={ResumeLogoImg} alt="resume logo"></img>
      <div className="person">
        <div className="info">
          <h1 className="name-surname">
            {userData.name} {userData.surname}
          </h1>
          <div className="email-container">
            <img src={EmailImg} alt="email-icon"></img>
            <p className="email">{userData.email}</p>
          </div>
          <div className="phone-container">
            <img src={PhoneImg} alt="phone-icon"></img>
            <p className="phone">{userData.phone_number}</p>
          </div>
          <div className="about-me-container">
            <h2 className="title">ჩემს შესახებ</h2>
            <p className="about-me">{userData.about_me}</p>
          </div>
        </div>

        <img className="person-img" src={PersonImg} alt="person"></img>
      </div>
      <hr></hr>
    </div>
  );
};

export default Resume;
