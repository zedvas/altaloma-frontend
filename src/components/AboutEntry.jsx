import { aboutList as aboutHero } from '../journalList';
import AboutHeroCSS from './AboutEntry.module.css';

const AboutEntry = () => {
    return (
        <div className={AboutHeroCSS.wrapper} >
            <div className={AboutHeroCSS.left}>
                <div className={AboutHeroCSS.textWrapper}>
                    <h1 className={AboutHeroCSS.heading}>{aboutHero.heading}</h1>
                    <p className={AboutHeroCSS.body}>{aboutHero.body}</p>
                </div>
            </div>
            <div className={AboutHeroCSS.right}>
                <img src={aboutHero.src} />
            </div>
        </div>
    )
}

export default AboutEntry