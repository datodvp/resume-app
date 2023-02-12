import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PersonForm from './pages/PersonForm';
import ExperienceForm from './pages/ExperienceForm';
import EducationForm from './pages/EducationForm/EducationForm';
import { Form, Formik } from 'formik';
import { UserContext } from './context/UserContext';
import validationSchema from './schema/ValidationSchema';
import initialValues from './schema/initialValues/initialValues';
import { Persist } from 'formik-persist';
import axios from 'axios';

const App = () => {
  const [inputsData, setInputsData] = useState(initialValues);

  const onSubmit = async (values) => {
    const formData = await setFormDataValues(values);

    fetch('https://resume.redberryinternship.ge/api/cvs', {
      method: 'POST', // or 'PUT'
      headers: {
        Accept: 'application/json',
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const setFormDataValues = async (values) => {
    const formData = new FormData(document.querySelector('form'));

    const phoneNumberFormatted = values.phone_number.replace(/\s/, '');
    const imageBlobValue = await base64ToBlob(values.image);

    formData.set('phone_number', phoneNumberFormatted);
    formData.set('image', imageBlobValue);

    return formData;
  };

  const base64ToBlob = async (value) => {
    return await fetch(value)
      .then((res) => res.blob())
      .then((blob) => blob);
  };

  return (
    <Formik
      initialValues={inputsData}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnChange={true}
      validateOnMount
      enableReinitialize // makes possible to change initial values
    >
      {(formik) => (
        <UserContext.Provider value={{ formik, setInputsData }}>
          <Form>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="PersonForm" element={<PersonForm />}></Route>
              <Route path="ExperienceForm" element={<ExperienceForm />}></Route>
              <Route path="EducationForm" element={<EducationForm />}></Route>
            </Routes>
            <Persist name="resume-form" />
          </Form>
        </UserContext.Provider>
      )}
    </Formik>
  );
};

export default App;
