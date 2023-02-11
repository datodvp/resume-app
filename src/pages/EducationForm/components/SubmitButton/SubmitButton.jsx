import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../../context/UserContext';
import './styles.scss';

const SubmitButton = () => {
  const { formik } = useContext(UserContext);

  const handleClick = () => {
    const FormikEducationsTouchedArray = formik.values.educations.map(
      (education) => {
        return {
          institute: true,
          degree_id: true,
          due_date: true,
          description: true,
        };
      }
    );
    formik.setTouched({
      experiences: FormikEducationsTouchedArray,
    });
  };
  return (
    <button className="submit-button" onClick={handleClick}>
      დასრულება
    </button>
  );
};

export default SubmitButton;
