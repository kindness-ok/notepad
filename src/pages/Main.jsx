import React, { useState, useEffect } from 'react'
import Search from '../components/search';
import Header from '../components/header';
import NoteList from '../components/noteList';
import './main.css';

const Main = () => {
  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [notes, setNotes] = useState(() => {
    return JSON.parse(localStorage.getItem('notes-data')) || []
  });

  const addNote = (note) => {
    const time = new Date();
    const newNote = {
      text: note,
      date: time.toLocaleDateString(),
      id: Math.random(),
    }
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter(note => note.id !== id);
    setNotes(newNotes);
  };
  
  useEffect(() => {
    localStorage.setItem(
      'notes-data', 
      JSON.stringify(notes)
    );
  }, [notes])


  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header
          handleToggleMode={setDarkMode}
        />
        <Search 
          handleSearchValue={setSearchText}
        />
        <NoteList 
          notes={notes.filter(note => 
            note.text.toLowerCase().indexOf(searchText.toLowerCase()) !== -1)
          }
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  )
};

export default Main;
