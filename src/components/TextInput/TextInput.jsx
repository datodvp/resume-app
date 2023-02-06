import React from 'react';
import { Field } from 'formik';
import SuccessImg from '../../assets/images/SuccessImg.png';
import FailureImg from '../../assets/images/FailureImg.png';
import './styles.scss';

const sizeValues = {
  small: 371,
  large: 798,
};

const TextInput = ({ title, name, placeholder, hint, size = 'large' }) => (
  <Field name={name}>
    {({ field, form, meta }) => {
      const validity =
        meta.touched && !meta.error ? 'success' : meta.touched ? 'failure' : '';
      return (
        <label
          className={`text-input-label ${validity}`}
          style={{ width: sizeValues[size] }}
        >
          {title}
          <div className="input-container">
            <input
              className={validity}
              {...field}
              id={name}
              onFocus={form.handleBlur}
              placeholder={placeholder}
            />
            <img
              className={validity}
              src={
                validity === 'failure'
                  ? FailureImg
                  : validity === 'success'
                  ? SuccessImg
                  : ''
              }
              alt={validity}
            />
          </div>
          <span className="hint">{hint}</span>
        </label>
      );
    }}
  </Field>
);

export default TextInput;
