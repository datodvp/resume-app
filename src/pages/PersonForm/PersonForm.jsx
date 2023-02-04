import './styles.scss';
import FormHeader from '../../components/FormHeader';
import ResetButton from '../../components/ResetButton';

const PersonForm = ({ userData, setUserData }) => {
  const formTitle = 'პირადი ინფო';
  const formPage = '1/3';
  return (
    <div className="person-form">
      <FormHeader title={formTitle} page={formPage} />
      <div className="resume"></div>
    </div>
  );
};

export default PersonForm;
