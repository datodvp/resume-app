import React from 'react';
import { Field } from 'formik';
import './styles.scss';
import FailureImg from '../../assets/images/FailureImg.png';

const DateInput = ({ title, name }) => (
  <Field name={name}>
    {({ field, form, meta }) => {
      const validity =
        meta.touched && !meta.error ? 'success' : meta.touched ? 'failure' : '';
      return (
        <label className={`date-input-label ${validity}`}>
          {title}
          <div className="input-container">
            <input
              type="date"
              name={name}
              className={validity}
              value={field.value}
              onChange={(e) => {
                field.onBlur(e);
                field.onChange(e);
              }}
            />
            <img src={FailureImg} alt="failure" className={validity} />
          </div>
        </label>
      );
    }}
  </Field>
);

export default DateInput;
