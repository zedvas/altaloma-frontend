import React from "react";
import "../styles/journalEntry.css";

const JournalEntry = ({ journal }) => {
  return (
    <div className="journalEntry">
      <div className="imageContainer">
        <img src={journal.src} />
      </div>
      <div className="textContainer">
      <p className="date">{journal.date}</p>
      <h1>{journal.title}</h1>
      <p className="description">{journal.description}</p>
    </div></div>
  );
};

export default JournalEntry;
