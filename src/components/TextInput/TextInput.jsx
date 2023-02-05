import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import SuccessImg from '../../assets/images/SuccessImg.png';
import FailureImg from '../../assets/images/FailureImg.png';
import './styles.scss';

const TextInput = ({ title, placeholder, hint, size, propertyName }) => {
  switch (size) {
    case 'small':
      size = 371;
      break;
    case 'large':
      size = 798;
      break;
    default:
      size = 798;
  }

  const { userData, setUserData } = useContext(UserContext);

  const handleChange = (e) => {
    setUserData({ ...userData, [propertyName]: e.target.value });
    console.log(e.target.checkValidity());

    const labelStyle = e.target.parentElement.style;
    const inputStyle = e.target.style;

    if (!e.target.checkValidity()) {
      labelStyle.color = '#E52F2F';
      inputStyle.border = '1px solid #EF5050';
      inputStyle.backgroundImage = `url(${FailureImg})`;
    } else {
      labelStyle.color = 'black';
      inputStyle.border = '1px solid #98E37E';
      inputStyle.backgroundImage = `url(${SuccessImg})`;
    }
  };

  return (
    <label className="text-input-label" style={{ width: size }}>
      {title}
      <input
        type="text"
        placeholder={placeholder}
        value={userData[propertyName]}
        onChange={handleChange}
        pattern="^[ა-ჰ]{2,}"
        required
      ></input>
      <span className="hint">{hint}</span>
    </label>
  );
};

export default TextInput;
