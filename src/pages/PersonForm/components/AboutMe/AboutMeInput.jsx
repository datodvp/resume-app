import React, { useContext } from 'react';
import { UserContext } from '../../../../context/UserContext';
import './styles.scss';

const AboutMeInput = ({ title, placeholder, name }) => {
  const { formik } = useContext(UserContext);

  return (
    <label className="TextArea-label">
      {title}
      <textarea
        name={name}
        placeholder={placeholder}
        value={formik.values[name]}
        onChange={formik.handleChange}
        maxLength="200"
      ></textarea>
    </label>
  );
};

export default AboutMeInput;
