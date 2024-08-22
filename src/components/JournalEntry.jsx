import React from 'react';
import JournalEntryCSS from './JournalEntry.module.css';

const JournalEntry = ({ journal }) => {
    return (
        <div className={JournalEntryCSS.wrapper} >
            <div className={JournalEntryCSS.text}>
                <div className={JournalEntryCSS.textWrapper}>
                    <p className={JournalEntryCSS.date}>{journal.date}</p>
                    <h1 className={JournalEntryCSS.title}>{journal.title}</h1>
                                <div className={JournalEntryCSS.image}>
                <img src={journal.src} />
            </div><p className={JournalEntryCSS.description}>{journal.description}</p>
                </div>
            </div>

        </div>
    )
}

export default JournalEntry