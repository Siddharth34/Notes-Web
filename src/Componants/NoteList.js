import React, { useContext } from "react";
import Note from "./Note";
import AddNote from "./AddNote";
import ThemeContext from "./Context/ThemeContext";
import AppTheme from "../color";
import "../color";

const NoteList = ({ notes, handalAddNote, handalDeleteNote }) => {
  const ThemeMode = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[ThemeMode];

  return (
    <div className="note_list">
      {notes.map((note) => {
        return (
          <>
            <div
              style={{
                backgroundColor: `${currentTheme.backgroundColor}`,
                color: `${currentTheme.color}`,
              }}
            >
              <Note
                id={note.id}
                text={note.text}
                date={note.date}
                handalDeleteNote={handalDeleteNote}
              />
            </div>
          </>
        );
      })}

      <AddNote handalAddNote={handalAddNote} />
    </div>
  );
};

export default NoteList;
