import React, { useContext } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import ThemeContext from "./Context/ThemeContext";
import AppTheme from "../color";
import "../color";

const Note = ({ id, text, date, handalDeleteNote }) => {
  const ThemeMode = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[ThemeMode];

  return (
    <div
      className="note_div"
      style={{
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.color}`,
      }}
    >
      <span>{text}</span>
      <div className="note_footer">
        <FaEdit />
        <small>{date}</small>

        <BsFillTrashFill
          className="delete_icon"
          onClick={() => {
            handalDeleteNote(id);
          }}
        />
      </div>
    </div>
  );
};

export default Note;
