import React, { useContext, useEffect, useState } from 'react';
import { Field } from 'formik';
import { UserContext } from '../../../../context/UserContext';

const ImageInput = () => {
  const { formik, imagePreview, setImagePreview } = useContext(UserContext);

  // this is just to give user upload popup
  const handleUploadClick = (e) => {
    const uploadInput = document.querySelector('#getFile');
    uploadInput.click();
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
            <input name={field.name} id="getFile" type="file" onChange={''} />
          </>
        )}
      </Field>
    </label>
  );
};

export default ImageInput;
