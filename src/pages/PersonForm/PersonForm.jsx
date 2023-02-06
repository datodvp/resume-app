import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import './styles.scss';
import FormHeader from '../../components/FormHeader';
import Resume from '../../components/Resume/Resume';
import TextInput from '../../components/TextInput';
import AboutMeInput from './components/AboutMe/AboutMeInput';
import { Field, Form } from 'formik';

const PersonForm = () => {
  const formTitle = 'პირადი ინფო';
  const formPage = '1/3';

  const { formik, setImagePreview } = useContext(UserContext);

  const handleUploadClick = (e) => {
    const uploadInput = document.querySelector('#getFile');
    uploadInput.click();
  };

  const handleImageChange = (e, form) => {
    const file = e.target.files[0];
    form.setFieldValue('image', file);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
  };

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
        <label
          className={`photo-upload ${
            formik.touched.image && formik.errors.image ? 'failure' : 'success'
          }`}
        >
          პირადი ფოტოს ატვირთვა
          <button type="button" onClick={handleUploadClick}>
            ატვირთვა
          </button>
          <Field name="image">
            {({ field, form }) => (
              <>
                <input
                  name={field.name}
                  id="getFile"
                  type="file"
                  onChange={(e) => handleImageChange(e, form)}
                />
              </>
            )}
          </Field>
        </label>
        {/* <AboutMeInput
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
        /> */}
        <button className="next-button" type="submit">
          შემდეგი
        </button>
      </Form>
      <Resume />
    </div>
  );
};

export default PersonForm;
