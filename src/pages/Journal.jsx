import JournalEntry from "../components/JournalEntry";
import JournalCSS from './Journal.module.css';
import { journalList } from "../journalList";
import {useState} from 'react';

const Journal = () => {
  const [journals, setJournals] = useState(journalList);
  return (
    <div className={JournalCSS.wrapper}>
      {journals.map((journal) => (
        <JournalEntry className={JournalCSS.journalEntry} journal={journal} key={journal.id}/>
      ))}

    </div>
  )
}

export default Journal