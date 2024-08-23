import { aboutList as aboutHero } from "../journalList";

const AboutEntry = () => {
  return (
    <div className="aboutEntry">
      <div>
        <img src={aboutHero.src} />
      </div>

      <div className="textContainer">
        <h1>{aboutHero.heading}</h1>
        <p>{aboutHero.body}</p>
      </div>
    </div>
  );
};

export default AboutEntry;
