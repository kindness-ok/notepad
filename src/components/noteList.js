import React from 'react';
import Note from './note';
import AddNote from './addNote';

const NoteList = ({notes, handleAddNote, handleDeleteNote}) => {
  return (
    <div className="notes-list">
      {
        notes.map(note => ( 
          <Note 
            key={note.id}
            text={note.text}
            date={note.date}
            id={note.id}
            handleDeleteNote={handleDeleteNote}
          />
        ))
      }
      <AddNote 
        handleAddNote={handleAddNote}
      />
    </div>
  )
};

export default NoteList;