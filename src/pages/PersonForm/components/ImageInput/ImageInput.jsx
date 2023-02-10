import React, { useContext, useEffect, useState } from 'react';
import { Field } from 'formik';
import { UserContext } from '../../../../context/UserContext';

const ImageInput = () => {
  const { formik, imagePreview, setImagePreview } = useContext(UserContext);

  const handleUploadClick = (e) => {
    const uploadInput = document.querySelector('#getFile');
    uploadInput.click();
  };

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = (event) => {
      formik.setFieldValue('image', imageFile);
      // const oldPersistStorage = JSON.parse(localStorage.getItem('resume-form'));
      // oldPersistStorage.values.image = imageFile;
      // console.log(JSON.stringify(oldPersistStorage.values.image));
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(imageFile);
  };

  return (
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
              onChange={handleImageChange}
            />
          </>
        )}
      </Field>
    </label>
  );
};

export default ImageInput;
