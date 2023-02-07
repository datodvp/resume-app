import './styles.scss';
import FormHeader from '../../components/FormHeader';
import Resume from '../../components/Resume/Resume';
import TextInput from '../../components/TextInput';
import ImageInput from './components/ImageInput/ImageInput';
import AboutMeInput from './components/AboutMe/AboutMeInput';
import { Form } from 'formik';
import NextButton from './components/NextButton/NextButton';
import { Persist } from 'formik-persist';

const PersonForm = () => {
  const formTitle = 'პირადი ინფო';
  const formPage = '1/3';

  // console.log(JSON.parse(localStorage.getItem('userData')));

  return (
    <div className="person-form">
      <Form className="form">
        <FormHeader title={formTitle} page={formPage} />
        <div className="name-surname">
          <TextInput
            title="სახელი"
            name="name"
            placeholder="ანზორი"
            hint="მინიმუმ 2 ასო, ქართული ასოები"
            size="small"
          />
          <TextInput
            title="გვარი"
            name="surname"
            placeholder="მუმლაძე"
            hint="მინიმუმ 2 ასო, ქართული ასოები"
            size="small"
          />
        </div>
        <ImageInput />
        <AboutMeInput
          title="ჩემს შესახებ (არასავალდებულო)"
          placeholder="ზოგადი ინფო შენს შესახებ"
          name="about_me"
        />
        <TextInput
          title="ელ.ფოსტა"
          name="email"
          placeholder="anzori@redberry.ge"
          hint="უნდა მთავრდებოდეს @redberry.ge-ით"
          size="large"
        />
        <TextInput
          title="მობილურის ნომერი"
          name="phone_number"
          placeholder="+995 551 12 34 56"
          hint="უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს"
          size="large"
        />
        <NextButton />
        <Persist name="userData" />
      </Form>
      <Resume />
    </div>
  );
};

export default PersonForm;
