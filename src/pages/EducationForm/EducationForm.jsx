import React from 'react';
import FormHeader from '../../components/FormHeader';
import Resume from '../../components/Resume/Resume';
import FlatArrayExample from './components/CustomSelect/CustomSelect';
import './styles.scss';

const EducationForm = () => {
  const formTitle = 'განათლება';
  const formPage = '3/3';

  return (
    <div className="experience-form">
      <div className="form">
        <FormHeader title={formTitle} page={formPage} />
        <FlatArrayExample />
      </div>
      <Resume />
    </div>
  );
};

export default EducationForm;
