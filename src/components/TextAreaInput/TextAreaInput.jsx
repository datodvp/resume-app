import { Field } from 'formik';
import React from 'react';
import './styles.scss';

const TextAreaInput = ({ title, placeholder, name }) => (
  <Field name={name}>
    {({ field, form, meta }) => {
      const validity =
        meta.touched && !meta.error ? 'success' : meta.touched ? 'failure' : '';
      return (
        <label className={`textarea-label ${validity}`}>
          {title}
          <textarea
            className={validity}
            name={name}
            placeholder={placeholder}
            value={field.value}
            onChange={(e) => {
              field.onBlur(e);
              field.onChange(e);
            }}
            maxLength="200"
          />
        </label>
      );
    }}
  </Field>
);

export default TextAreaInput;
