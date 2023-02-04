import React from 'react';
import FormHeader from '../../components/FormHeader';
import './styles.scss';

const ExperienceForm = () => {
  const formTitle = 'გამოცდილება';
  const formPage = '2/3';
  return (
    <div className="experience-form">
      <FormHeader title={formTitle} page={formPage} />
      <div className="resume"></div>
    </div>
  );
};

export default ExperienceForm;
