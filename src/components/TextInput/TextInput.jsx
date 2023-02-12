import React from 'react';
import { Field } from 'formik';
import SuccessImg from '../../assets/images/SuccessImg.png';
import FailureImg from '../../assets/images/FailureImg.png';
import './styles.scss';

const sizeValues = {
  // input width in %
  small: 45,
  large: 100,
};

const TextInput = ({ title, name, placeholder, hint, size = 'large' }) => (
  <Field name={name}>
    {({ field, form, meta }) => {
      const validity =
        meta.touched && !meta.error ? 'success' : meta.touched ? 'failure' : '';
      return (
        <label
          className={`text-input-label ${validity}`}
          style={{ width: `${sizeValues[size]}%` }}
        >
          {title}
          <div className="input-container">
            <input
              className={validity}
              name={field.name}
              value={field.value}
              onChange={(e) => {
                // touch input in formik touch object with onBlur method
                field.onBlur(e);
                field.onChange(e);
              }}
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
