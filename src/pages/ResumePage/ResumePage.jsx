import React from 'react';
import Resume from '../../components/Resume';
import ResetButton from '../../components/ResetButton';
import './styles.scss';

const ResumePage = ({ response }) => {
  return (
    <div className="resume-page">
      <ResetButton grey />
      <Resume response={response} />
    </div>
  );
};

export default ResumePage;
