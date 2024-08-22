import React from 'react';

const JournalEntry = ({ journal }) => {
    return (
        <div >
            <div>
                <div>
                    <p >{journal.date}</p>
                    <h1 >{journal.title}</h1>
                                <div >
                <img src={journal.src} />
            </div><p >{journal.description}</p>
                </div>
            </div>

        </div>
    )
}

export default JournalEntry