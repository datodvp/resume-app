import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PersonForm from './pages/PersonForm/components/PersonForm';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="PersonForm" element={<PersonForm />}></Route>
    </Routes>
  );
};

export default App;
