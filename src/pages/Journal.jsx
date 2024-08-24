import JournalEntry from "../components/JournalEntry";
import { journalList } from "../../journalList.js";
import {useState} from 'react';

const Journal = () => {
  const [journals, setJournals] = useState(journalList);
  return (
    <div>
      {journals.map((journal) => (
        <JournalEntry journal={journal} key={journal.id}/>
      ))}

    </div>
  )
}

export default Journal