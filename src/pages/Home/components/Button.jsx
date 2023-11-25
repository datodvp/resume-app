import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = () => {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      className="button"
      onClick={() => {
        localStorage.clear();
        navigate('/PersonForm');
      }}
    >
      Create Your Resume
    </button>
  );
};

export default Button;
