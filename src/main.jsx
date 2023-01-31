import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Sidebar from './Sidebar'
import Main from './Bloc.jsx'
import { useState, useEffect } from 'react';
import uuid from 'react-uuid'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


function App() {
  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );

  const [activeNote, setActiveNote] = useState (false);

  useEffect (() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);


  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitles Note",
      body: "",
      lastModified: Date.now(),
    };

    setNotes([newNote, ...notes])
  } 


  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete));
  };


  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if(note.id === activeNote) {
        return updatedNote;
      }
      return note;
    });
    setNotes(updatedNotesArray);
  }


  return (
    <div className="App">
    <Sidebar notes={notes} onAddNote={onAddNote} onDeleteNote={onDeleteNote} activeNote={activeNote} setActiveNote={setActiveNote}/>
    <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote}/>
    </div>
  );
}
