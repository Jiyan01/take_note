import React from "react";

function Sidebar ({ notes, onAddNote, onDeleteNote, activeNote, setActiveNote,}) {

  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);
  return(
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Bloc<span>Note</span></h1>
        <button onClick={onAddNote}>+</button>
      </div>
      <div className="app-sidebar-notes">
        {sortedNotes.map((note)=>(
        <div className={`app-sidebar-note ${note.id === activeNote && "active"}`} onClick={() => setActiveNote(note.id)}>
          <div className="sidebar-note-title">
            <h2>{note.title}</h2>
            <button onClick={() => onDeleteNote(note.id)}>Suppr</button>
          </div>
          <p>{note.body && note.body.substr(0, 100) + "..."}</p>
          <small>deniere modif : {new Date(note.lastModified).toLocaleDateString("fr-FR", {
            hour: "2-digit",
            minute: "2-digit",
          })}
          </small>
        </div> ))}
        
      </div>
    </div>
  )
}

export default Sidebar