import React, { useContext } from 'react';
import { Field } from 'formik';
import { UserContext } from '../../../../context/UserContext';

const ImageInput = () => {
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
  );
};

export default ImageInput;
