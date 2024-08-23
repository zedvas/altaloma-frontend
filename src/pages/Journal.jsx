import JournalEntry from "../components/JournalEntry";
import { journalList } from "../journalList";
import {useState} from 'react';

const Journal = () => {
  const [journals, setJournals] = useState(journalList);
  return (
    <div className="journals">
      {journals.map((journal) => (
        <JournalEntry journal={journal} key={journal.id}/>
      ))}

    </div>
  )
}

export default Journal