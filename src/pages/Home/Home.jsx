import React from 'react';
import './styles.scss';
import BackgroundImg from './Images/BackgroundImg.png';
import SealImg from './Images/SealImg.png';
import RedberryImg from './Images/RedberryImg.png';
import Button from './components/Button';

const Home = () => {
  return (
    <div className="home">
      <img className="redberry-img" src={RedberryImg} alt="RedberryImg" />
      <hr />
      <img className="background-img" src={BackgroundImg} alt="BackgroundImg" />
      <img className="seal-img" src={SealImg} alt="SealImg" />
      <Button />
    </div>
  );
};

export default Home;
