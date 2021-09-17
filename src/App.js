import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import NoteList from "./Componants/NoteList";
import { v4 as uuidv4, v4 } from "uuid";
import SearchBar from "./Componants/SearchBar";
import Header from "./Componants/Header";
import ThemeContext from "./Componants/Context/ThemeContext";
import "./color";
import AppTheme from "./color";

function App() {
  const ThemeMode = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[ThemeMode];

  const Hook = useState("light");

  const [notes, setNotes] = useState([]);

  const [searchNote, setSearchNote] = useState("");

  useEffect(() => {
    const localNotes = JSON.parse(localStorage.getItem("notes"));

    if (localNotes) {
      setNotes(localNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: uuidv4(),
      text: text,
      date: date.toLocaleDateString(),
    };

    const newNotes = [...notes, newNote];

    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const delNote = notes.filter((note) => note.id !== id);
    setNotes(delNote);
  };

  return (
    <>
      <ThemeContext.Provider value={Hook}>
        <div
          style={{
            backgroundColor: `${currentTheme.backgroundColor}`,
            color: `${currentTheme.color}`,
          }}
        >
          <div className="container">
            <Header />
            <SearchBar handalSearchNote={setSearchNote} />
            <NoteList
              notes={notes.filter((note) =>
                note.text.toLowerCase().includes(searchNote)
              )}
              handalAddNote={addNote}
              handalDeleteNote={deleteNote}
            />
          </div>
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
