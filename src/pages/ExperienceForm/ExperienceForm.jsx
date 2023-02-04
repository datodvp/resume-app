import React from 'react';
import FormHeader from '../../components/FormHeader';
import Resume from '../../components/Resume/Resume';
import './styles.scss';

const ExperienceForm = () => {
  const formTitle = 'გამოცდილება';
  const formPage = '2/3';
  return (
    <div className="experience-form">
      <div className="form">
        <FormHeader title={formTitle} page={formPage} />
        <label htmlFor="name" className="name">
          სახელი
        </label>
      </div>
      <Resume />
    </div>
  );
};

export default ExperienceForm;
