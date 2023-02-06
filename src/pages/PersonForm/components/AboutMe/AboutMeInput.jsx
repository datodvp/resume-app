import { Field } from 'formik';
import React, { useContext } from 'react';
import { UserContext } from '../../../../context/UserContext';
import './styles.scss';

const AboutMeInput = ({ title, placeholder, name }) => {
  const { formik } = useContext(UserContext);

  return (
    <label className="TextArea-label">
      {title}
      <Field
        as="textarea"
        name={name}
        placeholder={placeholder}
        value={formik.values[name]}
        onChange={formik.handleChange}
        maxLength="200"
      />
    </label>
  );
};

export default AboutMeInput;
