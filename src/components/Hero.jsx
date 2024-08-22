// import "../styles/hero.css";
import '../styles/hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className='imageContainer'>
        <img src={"/3.jpg"} />
      </div>
      <div className='heroText'>
        <h1>
          Soap for <br></br>every body
        </h1>
        <button>Shop now</button>
      </div>
    </div>
  );
};

export default Hero;
