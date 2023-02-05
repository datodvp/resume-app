import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import './styles.scss';
import FormHeader from '../../components/FormHeader';
import Resume from '../../components/Resume/Resume';
import TextInput from '../../components/TextInput';
import AboutMeInput from './components/AboutMe/AboutMeInput';

const PersonForm = () => {
  const formTitle = 'პირადი ინფო';
  const formPage = '1/3';

  const { formik, setImagePreview } = useContext(UserContext);

  const handleUploadClick = (e) => {
    const uploadInput = document.querySelector('#getFile');
    uploadInput.click();
  };

  const displayImage = () => {
    var fileInput = document.getElementById('getFile');
    var file = fileInput.files[0];
    var reader = new FileReader();
    reader.onload = (e) => {
      setImagePreview(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="person-form">
      <form onSubmit={formik.handleSubmit} className="form">
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
          <input
            type="file"
            name="image"
            id="getFile"
            onChange={(e) => {
              formik.setFieldValue('image', e.target.files[0]);
              displayImage(e);
            }}
          />
        </label>
        <AboutMeInput
          title="ჩემს შესახებ (არასავალდებულო)"
          placeholder="ზოგადი ინფო შენს შესახებ"
          name="about_me"
        />
        <button type="submit">DAACHIRE</button>
      </form>
      <Resume />
    </div>
  );
};

export default PersonForm;
