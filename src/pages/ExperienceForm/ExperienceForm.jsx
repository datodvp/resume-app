import React, { useContext } from 'react';
import FormHeader from '../../components/FormHeader';
import Resume from '../../components/Resume/Resume';
import TextInput from '../../components/TextInput';
import './styles.scss';
import { UserContext } from '../../context/UserContext';
import experience from '../../schema/initialValues/experienceValues';
import NextButton from './components/NextButton';
import BackButton from '../../components/BackButton';
import DateInput from '../../components/DateInput';
import TextAreaInput from '../../components/TextAreaInput/TextAreaInput';

const ExperienceForm = ({ hidden }) => {
  const formTitle = 'გამოცდილება';
  const formPage = '2/3';

  const { formik } = useContext(UserContext);
  return (
    <div
      className="experience-form"
      style={hidden && { display: 'none', position: 'absolute' }}
    >
      <div className="form">
        <FormHeader title={formTitle} page={formPage} />

        {formik.values.experiences &&
          formik.values.experiences.map((value, index) => {
            const name = `experiences[${index}]`;

            return (
              <div key={index}>
                <TextInput
                  title="თანამდებობა"
                  name={`${name}[position]`}
                  placeholder="თანამდებობა"
                  hint="მინიმუმ 2 სიმბოლო"
                />
                <TextInput
                  title="დამსაქმებელი"
                  name={`${name}[employer]`}
                  placeholder="დამსაქმებელი"
                  hint="მინიმუმ 2 სიმბოლო"
                />
                <div className="start-end-date-container">
                  <DateInput
                    title="დაწყების რიცხვი"
                    name={`${name}[start_date]`}
                  />
                  <DateInput
                    title="დამთავრების რიცხვი"
                    name={`${name}[due_date]`}
                  />
                </div>
                <TextAreaInput
                  title="აღწერა"
                  placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
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
            formik.setFieldValue('experiences', [
              ...formik.values.experiences,
              experience,
            ]);
          }}
        >
          მეტი გამოცდილების დამატება
        </button>
        <div className="buttons-container">
          <BackButton path={'/PersonForm'} />
          <NextButton />
        </div>
      </div>
      <Resume />
    </div>
  );
};

export default ExperienceForm;
