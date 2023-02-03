import './styles.scss';
import ResetButton from '../../components/ResetButton';

const PersonForm = ({ userData, setUserData }) => {
  return (
    <div className="person-form">
      <ResetButton setUserData={setUserData} />
      <form className="form">
        <div className="header">
          <h2 className="header-name">პირადი ინფო</h2>
          <h2 className="page-number">1/3</h2>
        </div>
        <hr></hr>
      </form>
      <div className="resume"></div>
    </div>
  );
};

export default PersonForm;
