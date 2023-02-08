import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PersonForm from './pages/PersonForm';
import ExperienceForm from './pages/ExperienceForm';
import EducationForm from './pages/EducationForm/EducationForm';
import { Formik } from 'formik';
import { UserContext } from './context/UserContext';
import validationSchema from './schema/ValidationSchema';
import initialValues from './schema/initialValues/initialValues';
import axios from 'axios';

const App = () => {
  const [imagePreview, setImagePreview] = useState();

  const onSubmit = (values) => {
    let formData = new FormData(document.querySelector('form'));
    formData.set('image', values.image);
    formData.append('experiences[0]', {});
    formData.append('educations[0]', {});

    axios
      .post('https://resume.redberryinternship.ge/api/cvs', formData)
      .then((response) => {
        console.log(response);
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
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="PersonForm" element={<PersonForm />}></Route>
            <Route path="ExperienceForm" element={<ExperienceForm />}></Route>
            <Route path="EducationForm" element={<EducationForm />}></Route>
          </Routes>
        </UserContext.Provider>
      )}
    </Formik>
  );
};

export default App;
