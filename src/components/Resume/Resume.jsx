import React, { useContext } from 'react';
import ResumeLogoImg from '../../assets/images/ResumeLogoImg.png';
import { UserContext } from '../../context/UserContext';
import './styles.scss';
import EmailImg from '../../assets/images/EmailImg.png';
import PhoneImg from '../../assets/images/PhoneImg.png';

const Resume = () => {
  // const { formik, imagePreview } = useContext(UserContext);

  return (
    <div className="resume">
      <img className="logo" src={ResumeLogoImg} alt="resume logo"></img>
      <div className="person">
        <div className="info">
          <h1 className="name-surname">
            {/* {formik.values.name} {formik.values.surname} */}
          </h1>
          <div className="email-container">
            {/* {formik.values.email && <img src={EmailImg} alt="email-icon"></img>} */}
            {/* <p className="email">{formik.values.email}</p> */}
          </div>
          <div className="phone-container">
            {/* {formik.values.email && <img src={PhoneImg} alt="phone-icon"></img>} */}
            {/* <p className="phone">{formik.values.phone_number}</p> */}
          </div>
          <div className="about-me-container">
            {/* {formik.values.about_me && <h2 className="title">ჩემს შესახებ</h2>} */}
            {/* <p className="about-me">{formik.values.about_me}</p> */}
          </div>
        </div>

        <img
          className="person-img"
          // src={imagePreview}
          alt="person"
          // style={
          //   formik.values.image ? { display: 'block' } : { display: 'none' }
          // }
        ></img>
      </div>
    </div>
  );
};

export default Resume;
