import React from 'react';
import { Field } from 'formik';
import SuccessImg from '../../../../assets/images/SuccessImg.png';
import FailureImg from '../../../../assets/images/FailureImg.png';
import './styles.scss';

const PhoneInput = ({ title, name, placeholder, hint }) => {
  const phoneNumberFormatter = (value) => {
    const formattedInputValue = formatPhoneNumber(value);

    return formattedInputValue;
  };

  function formatPhoneNumber(value) {
    if (!value) return value;
    const phoneNumber = value;

    const regex = new RegExp(
      '^\\+(995)\\s?(5\\d{2})\\s?(\\d{2})\\s?(\\d{2})\\s?(\\d{2})$'
    );

    return phoneNumber.replace(regex, '+$1 $2 $3 $4 $5');
  }

  return (
    <Field name={name}>
      {({ field, form, meta }) => {
        const formattedNumber = phoneNumberFormatter(field.value);
        const validity =
          meta.touched && !meta.error
            ? 'success'
            : meta.touched
            ? 'failure'
            : '';
        return (
          <label className={`text-input-label ${validity}`}>
            {title}
            <div className="input-container">
              <input
                className={validity}
                name={name}
                value={formattedNumber}
                id={name}
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
};

export default PhoneInput;
