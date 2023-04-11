import React, { useState } from 'react';

const AddNote = ({handleAddNote}) => {
  const [noteText, setNoteText] = useState('');
  const characterLimit = 200;

  const handleChange = (e) => {
    if (characterLimit - e.target.value.length >= 0) {  
      setNoteText(e.target.value);
    }
  };

  const handleSaveNote = () => {
    if(noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText('');
    }
  };

  return (
    <div className="note new">
      <textarea
        placeholder='Type to add a new note...'
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - noteText.length} remaining</small>
        <button className="save" onClick={handleSaveNote}>Save</button>
      </div>
    </div>
  )
};

export default AddNote;
