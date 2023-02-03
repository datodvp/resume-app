import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PersonForm from './pages/PersonForm/PersonForm';

const App = () => {
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
        element={<PersonForm userData={userData} />}
      ></Route>
    </Routes>
  );
};

export default App;
