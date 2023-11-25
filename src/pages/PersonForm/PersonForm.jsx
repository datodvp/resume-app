import './styles.scss';
import FormHeader from '../../components/FormHeader';
import Resume from '../../components/Resume/Resume';
import TextInput from '../../components/TextInput';
import ImageInput from './components/ImageInput/ImageInput';
import TextAreaInput from '../../components/TextAreaInput/TextAreaInput';
import NextButton from './components/NextButton/NextButton';
import PhoneInput from './components/PhoneInput';

const PersonForm = ({ hidden }) => {
  const formTitle = 'Personal Information';
  const formPage = '1/3';

  return (
    <div
      className="person-form"
      style={hidden && { display: 'none', position: 'absolute' }}
    >
      <div className="form">
        <FormHeader title={formTitle} page={formPage} />
        <div className="name-surname">
          <TextInput
            title="Firstname"
            name="name"
            placeholder="John"
            hint="At least 2 symbols"
            size="small"
          />
          <TextInput
            title="Lastname"
            name="surname"
            placeholder="Doe"
            hint="At least 2 symbols"
            size="small"
          />
        </div>
        <ImageInput />
        <TextAreaInput
          title="About me"
          placeholder="I am ect."
          name="about_me"
        />
        <TextInput
          title="Email"
          name="email"
          placeholder="anzori@redberry.ge"
          size="large"
        />
        <PhoneInput
          title="Phone Number"
          name="phone_number"
          placeholder="+995 551 12 34 56"
        />
        <NextButton />
      </div>
      <Resume />
    </div>
  );
};

export default PersonForm;
