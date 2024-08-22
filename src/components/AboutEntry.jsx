import { aboutList as aboutHero } from '../journalList';
import AboutHeroCSS from './AboutEntry.module.css';

const AboutEntry = () => {
    return (
        <div className={AboutHeroCSS.wrapper} >
                      <div className={AboutHeroCSS.image}>
                <img src={aboutHero.src} />
            </div>  <div className={AboutHeroCSS.text}>
                <div className={AboutHeroCSS.textWrapper}>
                    <h1 className={AboutHeroCSS.heading}>{aboutHero.heading}</h1>
                    <p className={AboutHeroCSS.body}>{aboutHero.body}</p>
                </div>
            </div>

        </div>
    )
}

export default AboutEntry