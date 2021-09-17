import React, { useContext } from "react";
import ThemeContext from "./Context/ThemeContext";
import "../color";
import AppTheme from "../color";

const Header = () => {
  const ThemeMode = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[ThemeMode];

  const [theme, setTheme] = useContext(ThemeContext);

  const handalChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <div
        className="header_div"
        style={{
          backgroundColor: `${currentTheme.backgroundColor}`,
          color: `${currentTheme.color}`,
        }}
      >
        <h1 className="header_div">Notes</h1>
        <button className="Toggle_btn" onClick={handalChange}>
          Toggle Mode
        </button>
      </div>
    </>
  );
};

export default Header;
