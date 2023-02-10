import React, { useEffect, useState } from 'react';
import FormHeader from '../../components/FormHeader';
import Resume from '../../components/Resume/Resume';
import { fetchDegrees } from '../../services/degrees';
import './styles.scss';

const EducationForm = () => {
  const formTitle = 'განათლება';
  const formPage = '3/3';
  const [degrees, setDegrees] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDegrees();
      // console.log(data);
      setDegrees(data);
    };

    fetchData();
  }, []);

  return (
    <div className="experience-form">
      <div className="form">
        <FormHeader title={formTitle} page={formPage} />
      </div>
      <Resume />
    </div>
  );
};

export default EducationForm;
