import './styles.scss';
import FormHeader from '../../components/FormHeader';
import Resume from '../../components/Resume/Resume';
import TextInput from '../../components/TextInput';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const PersonForm = () => {
  const formTitle = 'პირადი ინფო';
  const formPage = '1/3';

  const { userData } = useContext(UserContext);
  return (
    <div className="person-form">
      <form className="form">
        <FormHeader title={formTitle} page={formPage} />
        <div className="name-surname">
          <TextInput
            title="სახელი"
            placeholder="ანზორი"
            hint="მინიმუმ 2 ასო, ქართული ასოები"
            size="small"
            propertyName="name"
          />
          <TextInput
            title="გვარი"
            placeholder="მუმლაძე"
            hint="მინიმუმ 2 ასო, ქართული ასოები"
            size="small"
            propertyName="surname"
          />
        </div>
      </form>
      <Resume />
    </div>
  );
};

export default PersonForm;
