import React from 'react';
import ResetButton from '../../components/ResetButton';
import FormHeader from '../../components/FormHeader';
import './styles.scss';

const EducationForm = () => {
  const formTitle = 'განათლება';
  const formPage = '3/3';
  return (
    <div className="experience-form">
      <FormHeader title={formTitle} page={formPage} />
      <div className="resume"></div>
    </div>
  );
};

export default EducationForm;
