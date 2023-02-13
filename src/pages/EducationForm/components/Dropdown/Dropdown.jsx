import React, { useEffect, useState } from 'react';
import { getDegrees } from '../../../../api/getDegrees';
import { Field } from 'formik';
import './styles.scss';

const Dropdown = ({ name, title }) => {
  const [degrees, setDegrees] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const data = await getDegrees();
      setDegrees(data);
    };
    fetchData();
  }, []);

  return (
    <Field name={name}>
      {({ field, form, meta }) => {
        const validity =
          meta.touched && !meta.error
            ? 'success'
            : meta.touched
            ? 'failure'
            : '';
        return (
          <label className={`dropdown-label ${validity}`}>
            {title}
            <div className="dropdown-container">
              <select
                className={`dropdown ${validity}`}
                {...field}
                name={field.name}
                onChange={(e) => {
                  field.onBlur(e);
                  field.onChange(e);
                }}
              >
                <option value={0} disabled>
                  აირჩიეთ ხარისხი
                </option>
                {degrees &&
                  degrees.map((degree) => {
                    return (
                      <option key={degree.id} value={Number(degree.id)}>
                        {degree.title}
                      </option>
                    );
                  })}
              </select>
            </div>
          </label>
        );
      }}
    </Field>
  );
};

export default Dropdown;
