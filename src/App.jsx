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
  const [imagePreview, setImagePreview] = useState();

  const onSubmit = (values) => {
    const formDataHtml = document.querySelector('form');
    const formData = new FormData(formDataHtml);

    formData.set('image', values.image);

    const phoneNumberFormatted = values.phone_number.replace(/\s/, '');
    formData.set('phone_number', phoneNumberFormatted);

    // formData.set('experiences[0][position]', 'back-end developer');
    // formData.set('experiences[0][employer]', 'Redberry');
    // formData.set('experiences[0][description]', 'პოზიცია');
    // formData.set('experiences[0][start_date]', '2000-11-11');
    // formData.set('experiences[0][due_date]', '2000-11-11');

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

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnChange={true}
      validateOnMount
      enableReinitialize // makes possible to change initial values
    >
      {(formik) => (
        <UserContext.Provider value={{ formik, imagePreview, setImagePreview }}>
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
