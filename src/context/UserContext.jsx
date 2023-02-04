import { createContext } from 'react';

export const UserContext = createContext({
  name: '',
  surname: '',
  email: '',
  phone_number: '',
  experiences: [
    {
      position: '',
      employer: '',
      start_date: '',
      due_date: '',
      description: '',
    },
  ],
  educations: [
    {
      institute: '',
      degree: '',
      due_date: '',
      description: '',
    },
  ],
  image: '',
  about_me: '',
});
