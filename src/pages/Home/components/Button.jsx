import React from 'react';
import { Link } from 'react-router-dom';

const Button = () => {
  return (
    <Link to={`PersonForm`} className="button">
      რეზიუმეს დამატება
    </Link>
  );
};

export default Button;
