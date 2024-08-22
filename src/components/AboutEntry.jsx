import { aboutList as aboutHero } from "../journalList";

const AboutEntry = () => {
  return (
    <div>
      <div>
        <img src={aboutHero.src} />
      </div>
      <div>
        <div>
          <h1>{aboutHero.heading}</h1>
          <p>{aboutHero.body}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutEntry;
