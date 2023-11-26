import React, { useContext, useRef } from 'react';
import ResumeLogoImg from '../../assets/images/ResumeLogoImg.png';
import { UserContext } from '../../context/UserContext';
import './styles.scss';
import EmailImg from '../../assets/images/EmailImg.png';
import PhoneImg from '../../assets/images/PhoneImg.png';
import { useLocation } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Resume = ({ response }) => {
  const { formik } = useContext(UserContext);
  const { pathname } = useLocation();
  const data = response ? response : formik.values;
  const pdfContent = useRef();
  const degrees = [
    {
      id: 0,
      title: "Bachelor's degree",
    },
    {
      id: 2,
      title: "Masters's degree",
    },
    {
      id: 3,
      title: 'Doctorate',
    },
  ];

  const downloadPDF = () => {
    const input = pdfContent.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4', true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;
      pdf.addImage(
        imgData,
        'PNG',
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save(`Resume.pdf`);
    });
  };

  return (
    <>
      <button onClick={downloadPDF} type="button" className="pdf-button">
        Export PDF
      </button>
      <div className="resume" ref={pdfContent}>
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
              {data.about_me && <h2 className="title">About Me</h2>}
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
        {pathname === '/ExperienceForm' || pathname === '/EducationForm' ? (
          <hr></hr>
        ) : null}
        <div className="experience">
          {data.experiences.every(
            (experience) =>
              !experience.position &&
              !experience.employer &&
              !experience.start_date &&
              !experience.due_date &&
              !experience.description
          ) ? null : (
            <h2 className="title">Experience</h2>
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
            <h2 className="title">Education</h2>
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
    </>
  );
};

export default Resume;
