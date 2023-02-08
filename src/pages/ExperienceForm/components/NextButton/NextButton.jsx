import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../../context/UserContext';

const NextButton = () => {
  const navigate = useNavigate();
  const { formik } = useContext(UserContext);
  console.log(formik.values);
  return (
    <button
      className="next-button"
      type="button"
      onClick={() => {
        const FormikExperiencesTouchedArray = formik.values.experiences.map(
          (experience) => {
            return {
              position: true,
              employer: true,
              start_date: true,
              due_date: true,
            };
          }
        );
        formik
          .setTouched({
            experiences: FormikExperiencesTouchedArray,
          })
          .then((errorsObject) => {
            if (Object.keys(errorsObject).length === 0) {
              // navigate('/EducationForm');
            }
          });
      }}
    >
      შემდეგი
    </button>
  );
};

export default NextButton;