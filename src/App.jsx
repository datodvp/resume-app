import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PersonForm from './pages/PersonForm';
import ExperienceForm from './pages/ExperienceForm';
import EducationForm from './pages/EducationForm/EducationForm';
import { Form, Formik } from 'formik';
import { UserContext } from './context/UserContext';
import validationSchema from './schema/ValidationSchema';
import initialValues from './schema/initialValues/initialValues';
import { postData } from './api/postData';
import { Persist } from 'formik-persist';

const App = () => {
  const [inputsData, setInputsData] = useState(initialValues);

  return (
    <Formik
      initialValues={inputsData}
      validationSchema={validationSchema}
      onSubmit={postData}
      validateOnChange
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
            <Persist name="resume-form" debounce={0} />
          </Form>
        </UserContext.Provider>
      )}
    </Formik>
  );
};

export default App;
