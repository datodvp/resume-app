import React, { useContext, useState, useEffect } from 'react';
import ResumeLogoImg from '../../assets/images/ResumeLogoImg.png';
import { UserContext } from '../../context/UserContext';
import './styles.scss';
import EmailImg from '../../assets/images/EmailImg.png';
import PhoneImg from '../../assets/images/PhoneImg.png';
import { getDegrees } from '../../api/getDegrees';
import { useLocation } from 'react-router-dom';

const Resume = ({ response }) => {
  const [degrees, setDegrees] = useState();
  const { formik } = useContext(UserContext);
  const { pathname } = useLocation();
  const data = response ? response : formik.values;
  useEffect(() => {
    const fetchData = async () => {
      const data = await getDegrees();
      setDegrees(data);
    };
    fetchData();
  }, []);

  return (
    <div className="resume">
      <img className="logo" src={ResumeLogoImg} alt="resume logo"></img>
      <div className="person">
        <div className="info">
          <h1 className="name-surname">
            {data.name} {data.surname}
          </h1>
          <div className="email-container">
            {data.email && <img src={EmailImg} alt="email-icon"></img>}
            <p className="email">{data.email}</p>
          </div>
          <div className="phone-container">
            {data.phone_number && <img src={PhoneImg} alt="phone-icon"></img>}
            <p className="phone">{data.phone_number}</p>
          </div>
          <div className="about-me-container">
            {data.about_me && <h2 className="title">ჩემს შესახებ</h2>}
            <p className="about-me">{data.about_me}</p>
          </div>
        </div>

        <img
          className="person-img"
          src={
            response
              ? `https://resume.redberryinternship.ge${data.image}`
              : data.image
          }
          alt="person"
          style={data.image ? { display: 'block' } : { display: 'none' }}
        ></img>
      </div>
      {pathname === '/ExperienceForm' || '/EducationForm' ? <hr></hr> : null}
      <div className="experience">
        {data.experiences.every(
          (experience) =>
            !experience.position &&
            !experience.employer &&
            !experience.start_date &&
            !experience.due_date &&
            !experience.description
        ) ? null : (
          <h2 className="title">გამოცდილება</h2>
        )}
        {data.experiences.map((value, index) => {
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
      <div className="education">
        {data.educations.every(
          (education) =>
            !education.institute &&
            !education.degree_id &&
            !education.due_date &&
            !education.description
        ) ? null : (
          <h2 className="title">განათლება</h2>
        )}
        {data.educations.map((value, index) => {
          return (
            <div key={index}>
              {
                <div className="institute-degree">
                  {value.institute && `${value.institute}, `}
                  {response
                    ? value.degree
                    : value.degree_id &&
                      degrees &&
                      degrees.filter(
                        (degree) =>
                          Number(degree.id) === Number(value.degree_id)
                      )[0].title}
                </div>
              }
              <div className="date">{value.due_date && value.due_date}</div>
              <div className="description">
                {value.description && value.description}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Resume;
