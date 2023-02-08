import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../../context/UserContext';

const NextButton = () => {
  const navigate = useNavigate();
  const { formik } = useContext(UserContext);
  return (
    <button
      className="next-button"
      type="button"
      onClick={() => {
        console.log(formik.values);
        const FormikExperiencesTouchedArray = formik.values.experiences.map(
          (experience) => {
            return {
              position: true,
              employer: true,
            };
          }
        );
        console.log(FormikExperiencesTouchedArray);
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
