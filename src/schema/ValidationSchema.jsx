import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string()
    .matches(/^([ა-ჰ]){2,}$/, 'მინიმუმ 2 ასო, ქართული ასოები')
    .required(),
  surname: Yup.string()
    .matches(/^([ა-ჰ]){2,}$/, 'მინიმუმ 2 ასო, ქართული ასოები')
    .required(),
  image: Yup.mixed().required(),
  about_me: Yup.string(),
});

export default validationSchema;
