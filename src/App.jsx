import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PersonForm from './pages/PersonForm';
import ExperienceForm from './pages/ExperienceForm';
import EducationForm from './pages/EducationForm/EducationForm';

const App = () => {
  // resets whole user data if reset button is clicked
  const [userData, setUserData] = useState({
    name: '',
    surname: '',
    email: '',
    phone_number: '',
    experiences: [
      {
        position: '',
        employer: '',
        start_date: '',
        due_date: '',
        description: '',
      },
    ],
    educations: [
      {
        institute: '',
        degree: '',
        due_date: '',
        description: '',
      },
    ],
    image: '',
    about_me: '',
  });

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route
        path="PersonForm"
        element={<PersonForm userData={userData} setUserData={setUserData} />}
      ></Route>
      <Route
        path="ExperienceForm"
        element={
          <ExperienceForm userData={userData} setUserData={setUserData} />
        }
      ></Route>
      <Route
        path="EducationForm"
        element={
          <EducationForm userData={userData} setUserData={setUserData} />
        }
      ></Route>
    </Routes>
  );
};

export default App;
