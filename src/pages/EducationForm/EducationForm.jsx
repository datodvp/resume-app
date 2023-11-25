import React, { useContext } from 'react';
import DateInput from '../../components/DateInput';
import FormHeader from '../../components/FormHeader';
import Resume from '../../components/Resume/Resume';
import TextAreaInput from '../../components/TextAreaInput/TextAreaInput';
import TextInput from '../../components/TextInput';
import ExperienceForm from '../ExperienceForm';
import education from '../../schema/initialValues/educationsValues';
import PersonForm from '../PersonForm';
import SubmitButton from './components/SubmitButton/SubmitButton';
import { UserContext } from '../../context/UserContext';
import Dropdown from './components/Dropdown';
import './styles.scss';
import BackButton from '../../components/BackButton';

const EducationForm = () => {
  const formTitle = 'Education';
  const formPage = '3/3';

  const { formik } = useContext(UserContext);
  return (
    <div className="education-form">
      <div className="form">
        <PersonForm hidden />
        <ExperienceForm hidden />
        <FormHeader title={formTitle} page={formPage} />
        {formik.values.educations &&
          formik.values.educations.map((values, index) => {
            const name = `educations[${index}]`;

            return (
              <div key={index}>
                <TextInput
                  title="School"
                  name={`${name}[institute]`}
                  placeholder="Harward..."
                  hint="At least 2 symbols"
                />
                <div className="degree-due-date">
                  <Dropdown
                    title="Degree"
                    placeholder="Choose Degree"
                    name={`${name}[degree_id]`}
                  />
                  <DateInput title="End Date" name={`${name}[due_date]`} />
                </div>
                <TextAreaInput
                  title="Description"
                  placeholder="I learnt about..."
                  name={`${name}[description]`}
                  required
                />
                <hr></hr>
              </div>
            );
          })}
        <button
          type="button"
          className="multiply-button"
          onClick={() => {
            formik.setFieldValue('educations', [
              ...formik.values.educations,
              education,
            ]);
          }}
        >
          Add More Education
        </button>
        <div className="buttons-container">
          <BackButton path={'/ExperienceForm'} />
          <SubmitButton />
        </div>
      </div>

      <Resume />
    </div>
  );
};

export default EducationForm;
