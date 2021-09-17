import React, { useState } from "react";

const AddNote = ({ handalAddNote }) => {
  const [notetext, setNoteText] = useState("");

  const handlChange = (e) => {
    setNoteText(e.target.value);
  };

  const handalSave = () => {
    if (notetext.trim().length > 0) {
      handalAddNote(notetext);
      setNoteText("");
    }
  };

  return (
    <>
      <div className="note_div new_note">
        <textarea
          rows="8"
          col="10"
          placeholder="Type to add a note..."
          value={notetext}
          onChange={handlChange}
        ></textarea>
        <div className="note_footer">
          <button className="save_Btn" onClick={handalSave}>
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default AddNote;
