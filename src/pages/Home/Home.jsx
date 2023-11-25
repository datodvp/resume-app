import './styles.scss';
import BackgroundImg from './Images/BackgroundImg.png';
import SealImg from './Images/SealImg.png';
import Button from './components/Button';

const Home = () => {
  return (
    <div className="home">
      <h1 className="logo">Resume Creator</h1>
      <hr />
      <img className="background-img" src={BackgroundImg} alt="BackgroundImg" />
      <img className="seal-img" src={SealImg} alt="SealImg" />
      <Button />
    </div>
  );
};

export default Home;
