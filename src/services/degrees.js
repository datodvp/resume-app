import axios from 'axios';

export const fetchDegrees = async () => {
  try {
    const { data } = await axios.get(
      'https://resume.redberryinternship.ge/api/degrees'
    );
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
