import React, { createContext } from "react";
import { MdSearch } from "react-icons/md";
// import ThemeContext from "./Context/ThemeContext";
// import AppTheme from "../color";
import "../color";

const SearchBar = ({ handalSearchNote }) => {
  return (
    <>
      <div>
        <div className="search_div">
          <MdSearch className="search_icon" size="1.2rem" />
          <input
            type="text"
            placeholder="Type to search..."
            onChange={(e) => handalSearchNote(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default SearchBar;
