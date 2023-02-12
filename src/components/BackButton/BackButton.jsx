import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.scss';

const BackButton = ({ path }) => {
  const navigate = useNavigate();
  return (
    <button
      className="back-button"
      type="button"
      onClick={() => {
        navigate(path);
      }}
    >
      უკან
    </button>
  );
};

export default BackButton;
