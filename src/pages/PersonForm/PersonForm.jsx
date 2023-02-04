import './styles.scss';
import FormHeader from '../../components/FormHeader';
import Resume from '../../components/Resume/Resume';

const PersonForm = ({ userData, setUserData }) => {
  const formTitle = 'პირადი ინფო';
  const formPage = '1/3';
  return (
    <div className="person-form">
      <div className="form">
        <FormHeader title={formTitle} page={formPage} />
        <label htmlFor="name" className="name">
          სახელი
        </label>
      </div>
      <Resume />
    </div>
  );
};

export default PersonForm;
