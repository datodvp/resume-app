import { Field } from 'formik';
import './styles.scss';

const Dropdown = ({ name, title }) => {
  const degrees = [
    {
      id: 0,
      title: "Bachelor's degree",
    },
    {
      id: 2,
      title: "Masters's degree",
    },
    {
      id: 3,
      title: 'Doctorate',
    },
  ];

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
                <option value={''} disabled>
                  Choose Degree
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
