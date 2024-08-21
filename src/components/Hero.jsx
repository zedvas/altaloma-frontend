import HeroCSS from './Hero.module.css';

const Hero = () => {
  return (
      <div className={HeroCSS.heroWrapper}>
          <div className={HeroCSS.heroLeft}>
              <h1 className={HeroCSS.heading}>Soap for <br></br>every body</h1>
              <button className={HeroCSS.ctaButton}>Shop now</button>
          </div>
          <div className={HeroCSS.heroRight}>
              <img src={'/1.jpg'} />
          </div>
    </div>
  )
}

export default Hero