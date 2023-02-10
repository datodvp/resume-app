import { Form } from 'formik';
import React, { useEffect, useState } from 'react';
import DateInput from '../../components/DateInput';
import FormHeader from '../../components/FormHeader';
import Resume from '../../components/Resume/Resume';
import TextAreaInput from '../../components/TextAreaInput/TextAreaInput';
import TextInput from '../../components/TextInput';
import ExperienceForm from '../ExperienceForm';
import PersonForm from '../PersonForm';
import SubmitButton from './components/SubmitButton/SubmitButton';
import { Persist } from 'formik-persist';

import './styles.scss';

const EducationForm = () => {
  const formTitle = 'განათლება';
  const formPage = '3/3';

  return (
    <div className="education-form">
      <div className="form">
        <PersonForm hidden />
        <ExperienceForm hidden />
        <FormHeader title={formTitle} page={formPage} />

        <TextInput
          title="სასწავლებელი"
          name="educations[0][institute]"
          placeholder="სასწავლებელი"
          hint="მინიმუმ 2 სიმბოლო"
        />

        <div className="degree-due-date">
          <TextInput
            title="ხარისხი"
            placeholder="აირჩიეთ ხარისხი"
            name="educations[0][degree_id]"
          />
          <DateInput
            title="დამთავრების რიცხვი"
            name="educations[0][due_date]"
          />
        </div>
        <TextAreaInput
          title="აღწერა"
          placeholder="განათლების აღწერა"
          name="educations[0][description]"
        />
        <SubmitButton />
      </div>

      <Resume />
    </div>
  );
};

export default EducationForm;
