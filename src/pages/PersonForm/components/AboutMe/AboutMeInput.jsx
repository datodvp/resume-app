import React, { useContext } from 'react';
import { UserContext } from '../../../../context/UserContext';
import './styles.scss';

const AboutMeInput = ({ title, placeholder, propertyName }) => {
  const { userData, setUserData } = useContext(UserContext);

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [propertyName]: e.target.value,
    });
  };
  return (
    <label className="TextArea-label">
      {title}
      <textarea
        placeholder={placeholder}
        value={userData[propertyName]}
        onChange={handleChange}
        maxLength="200"
        required
      ></textarea>
    </label>
  );
};

export default AboutMeInput;
