export const postData = async (values, navigate) => {
  const formData = await setFormDataValues(values);
  console.log(values, navigate);

  fetch('https://resume.redberryinternship.ge/api/cvs', {
    method: 'POST', // or 'PUT'
    headers: {
      Accept: 'application/json',
    },
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
      navigate('/ResumePage');
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

const setFormDataValues = async (values) => {
  const formData = new FormData(document.querySelector('form'));

  const phoneNumberFormatted = values.phone_number.replace(/\s/, '');
  const imageBlobValue = await base64ToBlob(values.image);

  formData.set('phone_number', phoneNumberFormatted);
  formData.set('image', imageBlobValue);

  return formData;
};

const base64ToBlob = async (value) => {
  return await fetch(value)
    .then((res) => res.blob())
    .then((blob) => blob);
};
