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
    .matches(/^(\+995\s?)(5\d{2})\s?\d{2}\s?\d{2}\s?\d{2}$/)
    .required(),
  experiences: Yup.array()
    .of(
      Yup.object().shape(
        {
          position: Yup.string().when(
            ['employer', 'start_date', 'due_date', 'description'],
            {
              is: (employer, start_date, due_date, description) =>
                employer || start_date || due_date || description,
              then: Yup.string()
                .matches(/^.{2,}/)
                .required(),
            }
          ),
          employer: Yup.string().when(
            ['position', 'start_date', 'due_date', 'description'],
            {
              is: (position, start_date, due_date, description) =>
                position || start_date || due_date || description,
              then: Yup.string()
                .matches(/^.{2,}/)
                .required(),
            }
          ),
          start_date: Yup.date().when(
            ['position', 'employer', 'due_date', 'description'],
            {
              is: (employer, position, due_date, description) =>
                employer || position || due_date || description,
              then: Yup.date().required(),
            }
          ),
          due_date: Yup.date().when(
            ['position', 'employer', 'start_date', 'description'],
            {
              is: (employer, position, start_date, description) =>
                employer || position || start_date || description,
              then: Yup.date().required(),
            }
          ),
          description: Yup.string().when(
            ['position', 'employer', 'start_date', 'due_date'],
            {
              is: (employer, start_date, due_date, position) =>
                employer || start_date || due_date || position,
              then: Yup.string().required(),
            }
          ),
        },
        [
          ['position', 'employer'],
          ['position', 'start_date'],
          ['position', 'due_date'],
          ['position', 'description'],
          ['employer', 'start_date'],
          ['employer', 'due_date'],
          ['employer', 'description'],
          ['start_date', 'due_date'],
          ['start_date', 'description'],
          ['due_date', 'description'],
        ]
      )
    )
    .required()
    .test((experiences, ctx) => {
      const Filled = experiences.some((exp) =>
        Object.values(exp).every((val) => {
          return !!val;
        })
      );
      if (!Filled) {
        return ctx.createError({
          message: 'needs 1 object filled',
        });
      }
      return true;
    }),
  educations: Yup.array()
    .of(
      Yup.object().shape(
        {
          institute: Yup.string().when(
            ['degree_id', , 'due_date', 'description'],
            {
              is: (degree_id, due_date, description) =>
                degree_id || due_date || description,
              then: Yup.string().required(),
            }
          ),
          degree_id: Yup.string().when(
            ['institute', 'due_date', 'description'],
            {
              is: (degree_id, due_date, description) =>
                degree_id || due_date || description,
              then: Yup.string().required(),
            }
          ),

          due_date: Yup.date().when(['institute', 'degree_id', 'description'], {
            is: (degree_id, due_date, description) =>
              degree_id || due_date || description,
            then: Yup.date().required(),
          }),

          description: Yup.string().when(
            ['institute', 'degree_id', 'due_date'],
            {
              is: (degree_id, due_date, description) =>
                degree_id || due_date || description,
              then: Yup.string().required(),
            }
          ),
        },
        [
          ['institute', 'degree_id'],
          ['institute', 'due_date'],
          ['institute', 'description'],
          ['degree_id', 'due_date'],
          ['degree_id', 'description'],
          ['due_date', 'description'],
          ['description', 'description'],
        ]
      )
    )
    .required()
    .test((educations, ctx) => {
      const Filled = educations.some((exp) =>
        Object.values(exp).every((val) => {
          return !!val;
        })
      );
      if (!Filled) {
        return ctx.createError({
          message: 'needs 1 object filled',
        });
      }
      return true;
    }),
});

export default validationSchema;
