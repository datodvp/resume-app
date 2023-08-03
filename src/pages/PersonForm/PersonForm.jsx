import './styles.scss';
import FormHeader from '../../components/FormHeader';
import Resume from '../../components/Resume/Resume';
import TextInput from '../../components/TextInput';
import ImageInput from './components/ImageInput/ImageInput';
import TextAreaInput from '../../components/TextAreaInput/TextAreaInput';
import NextButton from './components/NextButton/NextButton';
import PhoneInput from './components/PhoneInput';

const PersonForm = ({ hidden }) => {
  const formTitle = 'ᲞᲘᲠᲐᲓᲘ ᲘᲜᲤᲝ';
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
            title="სახელი"
            name="name"
            placeholder="ანზორი"
            hint="მინიმუმ 2 ასო"
            size="small"
          />
          <TextInput
            title="გვარი"
            name="surname"
            placeholder="მუმლაძე"
            hint="მინიმუმ 2 ასო"
            size="small"
          />
        </div>
        <ImageInput />
        <TextAreaInput
          title="ჩემს შესახებ (არასავალდებულო)"
          placeholder="ზოგადი ინფო შენს შესახებ"
          name="about_me"
        />
        <TextInput
          title="ელ.ფოსტა"
          name="email"
          placeholder="anzori@redberry.ge"
          size="large"
        />
        <PhoneInput
          title="მობილურის ნომერი"
          name="phone_number"
          placeholder="+995 551 12 34 56"
          hint="უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს"
        />
        <NextButton />
      </div>
      <Resume />
    </div>
  );
};

export default PersonForm;
