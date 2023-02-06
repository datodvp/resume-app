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
        formik.setTouched({
          name: true,
          surname: true,
          image: true,
          email: true,
          phone_number: true,
        });
      }}
    >
      შემდეგი
    </button>
  );
};

export default NextButton;
