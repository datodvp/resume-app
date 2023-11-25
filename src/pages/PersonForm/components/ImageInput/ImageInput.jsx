import React, { useContext } from 'react';
import { Field } from 'formik';
import { UserContext } from '../../../../context/UserContext';

const ImageInput = () => {
  const { formik, setInputsData } = useContext(UserContext);

  const handleUploadClick = (e) => {
    const uploadInput = document.querySelector('#getFile');
    uploadInput.click();
  };

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = (event) => {
      // I used state to update instead of setFieldValue, because state does re-render. setFieldvalue does not.
      setInputsData({ ...formik.values, image: reader.result });
    };
    reader.readAsDataURL(imageFile);
  };

  return (
    <label
      className={`photo-upload ${
        formik.touched.image && formik.errors.image ? 'failure' : 'success'
      }`}
    >
      Upload your Image
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
              onChange={handleImageChange}
            />
          </>
        )}
      </Field>
    </label>
  );
};

export default ImageInput;
