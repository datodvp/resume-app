import React, { useContext } from 'react';
import ResumeLogoImg from '../../assets/images/ResumeLogoImg.png';
import { UserContext } from '../../context/UserContext';
import './styles.scss';
import EmailImg from '../../assets/images/EmailImg.png';
import PhoneImg from '../../assets/images/PhoneImg.png';
import { useLocation } from 'react-router-dom';

const Resume = () => {
  const { formik, imagePreview } = useContext(UserContext);
  const { pathname } = useLocation();
  return (
    <div className="resume">
      <img className="logo" src={ResumeLogoImg} alt="resume logo"></img>
      <div className="person">
        <div className="info">
          <h1 className="name-surname">
            {formik.values.name} {formik.values.surname}
          </h1>
          <div className="email-container">
            {formik.values.email && <img src={EmailImg} alt="email-icon"></img>}
            <p className="email">{formik.values.email}</p>
          </div>
          <div className="phone-container">
            {formik.values.phone_number && (
              <img src={PhoneImg} alt="phone-icon"></img>
            )}
            <p className="phone">{formik.values.phone_number}</p>
          </div>
          <div className="about-me-container">
            {formik.values.about_me && <h2 className="title">ჩემს შესახებ</h2>}
            <p className="about-me">{formik.values.about_me}</p>
          </div>
        </div>

        <img
          className="person-img"
          src={imagePreview}
          alt="person"
          style={imagePreview ? { display: 'block' } : { display: 'none' }}
        ></img>
      </div>
      {pathname === '/ExperienceForm' || '/EducationForm' ? <hr></hr> : null}
      <div className="experience">
        {formik.values.experiences.every(
          (experience) =>
            !experience.position &&
            !experience.employer &&
            !experience.start_date &&
            !experience.due_date &&
            !experience.description
        ) ? null : (
          <h2 className="title">გამოცდილება</h2>
        )}
        {formik.values.experiences.map((value, index) => {
          return (
            <div key={index}>
              {
                <div className="position-employer">
                  {value.position && `${value.position}, `}
                  {value.employer && value.employer}
                </div>
              }
              <div className="dates">
                {value.start_date && `${value.start_date} - `}
                {value.due_date && value.due_date}
              </div>
              <div className="description">
                {value.description && value.description}
              </div>
            </div>
          );
        })}
      </div>
      {pathname === '/EducationForm' ? <hr></hr> : null}
    </div>
  );
};

export default Resume;
