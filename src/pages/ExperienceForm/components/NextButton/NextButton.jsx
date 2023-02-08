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
            if (Object.keys(errorsObject).length !== 0) {
              // this if should be REMOVED BUT NOT CONTENT INSIDE OF IT.
              // checks if second form has any errors and if it does returts true (excludes third and first form errors)
              let errorResult = errorsObject.experiences.every(
                (error) =>
                  error.position ||
                  error.employer ||
                  error.start_date ||
                  error.due_date ||
                  error.description
              );
              if (!errorResult) {
                navigate('/EducationForm');
              }
            }
            //// this if MUST be removed after creating third form its just to avoid errors in advance
            if (Object.keys(errorsObject).length === 0) {
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
