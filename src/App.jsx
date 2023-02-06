import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PersonForm from './pages/PersonForm';
import ExperienceForm from './pages/ExperienceForm';
import EducationForm from './pages/EducationForm/EducationForm';
import { Formik, useFormik } from 'formik';
import { UserContext } from './context/UserContext';
import validationSchema from './schema/ValidationSchema';
import initialValues from './schema/InitialValues';

const App = () => {
  const [imagePreview, setImagePreview] = useState();
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <UserContext.Provider value={{ imagePreview, setImagePreview }}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnChange={true}
        validateOnBlur={true}
      >
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="PersonForm" element={<PersonForm />}></Route>
          <Route path="ExperienceForm" element={<ExperienceForm />}></Route>
          <Route path="EducationForm" element={<EducationForm />}></Route>
        </Routes>
      </Formik>
    </UserContext.Provider>
  );
};

export default App;
