import React from 'react';
import Resume from '../../components/Resume';
import ResetButton from '../../components/ResetButton';
import Popup from './components/Popup/Popup';
import './styles.scss';

const ResumePage = ({ response }) => {
  return (
    <div className="resume-page">
      <ResetButton grey />
      <Popup />
      <Resume response={response} />
    </div>
  );
};

export default ResumePage;
