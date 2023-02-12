import { Field } from 'formik';
import React from 'react';
import SuccessImg from '../../assets/images/SuccessImg.png';
import FailureImg from '../../assets/images/FailureImg.png';
import './styles.scss';

const TextAreaInput = ({ title, placeholder, name, required }) => (
  <Field name={name}>
    {({ field, form, meta }) => {
      const validity =
        meta.touched && !meta.error ? 'success' : meta.touched ? 'failure' : '';
      return (
        <label className={`textarea-label ${validity}`}>
          {title}
          <div className="textarea-container">
            <textarea
              className={validity}
              name={name}
              placeholder={placeholder}
              value={field.value}
              onChange={(e) => {
                if (required) field.onBlur(e);
                field.onChange(e);
              }}
              maxLength="200"
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
        </label>
      );
    }}
  </Field>
);

export default TextAreaInput;
