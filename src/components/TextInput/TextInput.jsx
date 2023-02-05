import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import SuccessImg from '../../assets/images/SuccessImg.png';
import FailureImg from '../../assets/images/FailureImg.png';
import './styles.scss';

const TextInput = ({ title, name, placeholder, hint, size }) => {
  // checks if text input should be small or large
  switch (size) {
    case 'small':
      size = 371;
      break;
    case 'large':
      size = 798;
      break;
    default:
      size = 798;
  }

  const { formik } = useContext(UserContext);

  return (
    <label
      className={`text-input-label ${
        formik.touched[name] && formik.errors[name]
          ? 'failure'
          : formik.touched[name] && !formik.errors[name] && 'success'
      }`}
      style={{ width: size }}
    >
      {title}
      <div className="input-container">
        <input
          className={
            formik.touched[name] && formik.errors[name]
              ? 'failure'
              : formik.touched[name] && !formik.errors[name] && 'success'
          }
          type="text"
          placeholder={placeholder}
          value={formik.values[name]}
          onChange={formik.handleChange}
          onFocus={formik.handleBlur}
          name={name}
        ></input>
        {/* validation icons of input */}
        {formik.touched[name] && formik.errors[name] ? (
          <img className="failure" src={FailureImg} alt="failure"></img>
        ) : (
          formik.touched[name] &&
          !formik.errors[name] && (
            <img className="success" src={SuccessImg} alt="success"></img>
          )
        )}
      </div>
      <span className="hint">{hint}</span>
    </label>
  );
};

export default TextInput;
