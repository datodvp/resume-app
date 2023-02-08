import React, { useContext } from 'react';
import FormHeader from '../../components/FormHeader';
import Resume from '../../components/Resume/Resume';
import TextInput from '../../components/TextInput';
import { Form } from 'formik';
import './styles.scss';
import { UserContext } from '../../context/UserContext';
import experience from '../../schema/initialValues/experienceValues';
import NextButton from './components/NextButton';

const ExperienceForm = () => {
  const formTitle = 'გამოცდილება';
  const formPage = '2/3';

  const { formik } = useContext(UserContext);
  return (
    <div className="experience-form">
      <Form className="form">
        <FormHeader title={formTitle} page={formPage} />
        {/* {console.log(formik.values.experiences)} */}
        {formik.values.experiences.map &&
          formik.values.experiences.map((value, index) => {
            const name = `experiences[${index}]`;
            return (
              <div key={index}>
                <TextInput
                  title="თანამდებობა"
                  name={`${name}.position`}
                  placeholder="თანამდებობა"
                  hint="მინიმუმ 2 სიმბოლო"
                />
                <TextInput
                  title="დამსაქმებელი"
                  name={`${name}.employer`}
                  placeholder="დამსაქმებელი"
                  hint="მინიმუმ 2 სიმბოლო"
                />
              </div>
            );
          })}
        <button
          type="button"
          onClick={() => {
            formik.setFieldValue('experiences', [
              ...formik.values.experiences,
              experience,
            ]);
          }}
        >
          DAAMATE
        </button>
        <NextButton />
      </Form>
      <Resume />
    </div>
  );
};

export default ExperienceForm;
