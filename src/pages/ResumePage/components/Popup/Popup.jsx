import React from 'react';
import CloseImg from '../../../../assets/images/CloseImg.png';
import './styles.scss';

const Popup = () => {
  const handleClick = (e) => {
    e.target.parentNode.classList.add('closed');
  };
  return (
    <div className="popup open">
      <img
        className="close-button"
        src={CloseImg}
        onClick={handleClick}
        alt="close"
      />
      <div className="content">Its final look. 🎉</div>
    </div>
  );
};

export default Popup;
