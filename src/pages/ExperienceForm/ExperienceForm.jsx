import React from 'react';
import ResetButton from '../../components/ResetButton';
import FormHeader from '../../components/FormHeader';
import './styles.scss';

const ExperienceForm = () => {
  const formTitle = 'გამოცდილება';
  const formPage = '2/3';
  return (
    <div className="experience-form">
      <ResetButton />
      <form className="form">
        <FormHeader title={formTitle} page={formPage} />
      </form>
      <div className="resume"></div>
    </div>
  );
};

export default ExperienceForm;
