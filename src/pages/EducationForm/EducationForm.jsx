import { Form } from 'formik';
import React, { useContext, useEffect, useState } from 'react';
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
import { Persist } from 'formik-persist';

import './styles.scss';

const EducationForm = () => {
  const formTitle = 'განათლება';
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
                  title="სასწავლებელი"
                  name={`${name}[institute]`}
                  placeholder="სასწავლებელი"
                  hint="მინიმუმ 2 სიმბოლო"
                />
                <div className="degree-due-date">
                  <TextInput
                    title="ხარისხი"
                    placeholder="აირჩიეთ ხარისხი"
                    name={`${name}[degree_id]`}
                  />
                  <DateInput
                    title="დამთავრების რიცხვი"
                    name={`${name}[due_date]`}
                  />
                </div>
                <TextAreaInput
                  title="აღწერა"
                  placeholder="განათლების აღწერა"
                  name={`${name}[description]`}
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
          მეტი სასწავლებლის დამატება
        </button>

        <SubmitButton />
      </div>

      <Resume />
    </div>
  );
};

export default EducationForm;
