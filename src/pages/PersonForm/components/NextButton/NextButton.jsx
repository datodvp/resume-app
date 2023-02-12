import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../../context/UserContext';
import './styles.scss';

const NextButton = () => {
  const navigate = useNavigate();
  const { formik } = useContext(UserContext);
  return (
    <button
      className="next-button"
      type="button"
      onClick={() => {
        formik
          .setTouched({
            name: true,
            surname: true,
            image: true,
            email: true,
            phone_number: true,
          })
          .then((errorsObject) => {
            if (
              !errorsObject.name &&
              !errorsObject.surname &&
              !errorsObject.image &&
              !errorsObject.email &&
              !errorsObject.phone_number
            ) {
              navigate('/ExperienceForm');
            }
          });
      }}
    >
      შემდეგი
    </button>
  );
};

export default NextButton;
