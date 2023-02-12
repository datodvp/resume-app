import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../../context/UserContext';
import './styles.scss';

const NextButton = () => {
  const navigate = useNavigate();
  const { formik } = useContext(UserContext);

  const removeEmptyArray = () => {
    if (formik.values.experiences.length > 1) {
      const filteredExperiences = formik.values.experiences.filter((exp) =>
        Object.values(exp).every((val) => !!val)
      );
      formik.setFieldValue('experiences', filteredExperiences);
    }
  };

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
              description: true,
            };
          }
        );
        formik
          .setTouched({
            experiences: FormikExperiencesTouchedArray,
          })
          .then((errorsObject) => {
            if (!errorsObject.experiences) {
              removeEmptyArray();
              navigate('/EducationForm');
            }
          });
      }}
    >
      შემდეგი
    </button>
  );
};

export default NextButton;
