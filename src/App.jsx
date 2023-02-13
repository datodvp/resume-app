import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import PersonForm from './pages/PersonForm';
import ExperienceForm from './pages/ExperienceForm';
import EducationForm from './pages/EducationForm/EducationForm';
import ResumePage from './pages/ResumePage/ResumePage';
import { Form, Formik } from 'formik';
import { UserContext } from './context/UserContext';
import validationSchema from './schema/ValidationSchema';
import initialValues from './schema/initialValues/initialValues';
import { postData } from './api/postData';
import { Persist } from 'formik-persist';

const App = () => {
  const [inputsData, setInputsData] = useState(initialValues);
  const [response, setResponse] = useState();
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={inputsData}
      validationSchema={validationSchema}
      onSubmit={(e) => {
        // pass naviage as callback to go on last page after data is posted
        postData(e, navigate, setResponse);
      }}
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
              <Route
                path="ResumePage"
                element={<ResumePage response={response} />}
              ></Route>
            </Routes>
            <Persist name="resume-form" debounce={0} />
          </Form>
        </UserContext.Provider>
      )}
    </Formik>
  );
};

export default App;
