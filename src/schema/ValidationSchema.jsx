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
  email: Yup.string()
    .matches(/^([A-Za-z0-9])+@redberry.ge$/)
    .required(),
  phone_number: Yup.string()
    .matches(/^(\+995\s?)?\d{3}\s?\d{2}\s?\d{2}\s?\d{2}$/)
    .required(),
  experiences: Yup.array(
    Yup.object({
      position: Yup.string()
        .matches(/^.{2,}/)
        .required(),
      employer: Yup.string()
        .matches(/^.{2,}/)
        .required(),
      start_date: Yup.date().required(),
      due_date: Yup.date().required(),
      description: Yup.string().required(),
    })
  ),
});

export default validationSchema;
