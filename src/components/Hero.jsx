import HeroCSS from './Hero.module.css';

const Hero = () => {
  return (
      <div className={HeroCSS.heroWrapper}>
                    <div className={HeroCSS.heroImage}>
              <img src={'/3.jpg'} />
          </div>
<div className={HeroCSS.heroText}>
              <h1 className={HeroCSS.heading}>Soap for <br></br>every body</h1>
              <button className={HeroCSS.ctaButton}>Shop now</button>
          </div>
    </div>
  )
}

export default Hero