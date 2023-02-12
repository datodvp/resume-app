export const getDegrees = async () => {
  try {
    const { data } = await fetch(
      'https://resume.redberryinternship.ge/api/degrees'
    );
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
