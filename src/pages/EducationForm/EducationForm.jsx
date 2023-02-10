import { Form } from 'formik';
import React, { useEffect, useState } from 'react';
import DateInput from '../../components/DateInput';
import FormHeader from '../../components/FormHeader';
import Resume from '../../components/Resume/Resume';
import TextAreaInput from '../../components/TextAreaInput/TextAreaInput';
import TextInput from '../../components/TextInput';

import './styles.scss';

const EducationForm = () => {
  const formTitle = 'განათლება';
  const formPage = '3/3';

  return (
    <div className="education-form">
      <Form className="form">
        <FormHeader title={formTitle} page={formPage} />

        <TextInput
          title="სასწავლებელი"
          name="educations[0].institute"
          placeholder="სასწავლებელი"
          hint="მინიმუმ 2 სიმბოლო"
        />

        <div className="degree-due-date">
          <TextInput
            title="ხარისხი"
            placeholder="აირჩიეთ ხარისხი"
            name="educations[0].degree_id"
          />
          <DateInput title="დამთავრების რიცხვი" name="educations[0].due_date" />
        </div>
        <TextAreaInput
          title="აღწერა"
          placeholder="განათლების აღწერა"
          name="educations[0].description"
        />
      </Form>
      <Resume />
    </div>
  );
};

export default EducationForm;
