import './styles.scss';
import FormHeader from '../../components/FormHeader';
import Resume from '../../components/Resume/Resume';

const PersonForm = ({ userData, setUserData }) => {
  const formTitle = 'პირადი ინფო';
  const formPage = '1/3';
  return (
    <div className="person-form">
      <FormHeader title={formTitle} page={formPage} />
      <Resume />
    </div>
  );
};

export default PersonForm;
