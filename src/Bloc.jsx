import React from "react";
import ReactMarkdown from "react-markdown";

function Main ({ activeNote, onUpdateNote }) {
  const onEditField = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
      lastModified: Date.now(),
    })

  };

  if(!activeNote) return <div className="no-active-note">no note selected</div>;


  return (
    <div className="app-main">
    { activeNote ? (
      <>
        <div className="app-main-note-preview">
          <input type="text" id="title" value={activeNote.title} onChange={(e) => onEditField("title", e.target.value)} autoFocus />
          <textarea id="body" placeholder="liste de courses" value={activeNote.body} onChange={(e) => onEditField("body", e.target.value)}/>
        </div>
        <div className="app-main-note-preview">
          <h1 className="preview-title">{activeNote.title}</h1>
          <ReactMarkdown className="markdown-preview">{activeNote.body}</ReactMarkdown>
        </div>
      </>
    ) : (
      <p>No note selected</p>
    )}
  </div>

)

}

export default Main;