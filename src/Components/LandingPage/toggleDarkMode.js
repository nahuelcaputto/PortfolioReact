import React, { useEffect } from "react";
import "./landingPage.css";

const ToggleDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  const changeTheme = () => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <label class="switch">
      <input type="checkbox" value={darkMode} onClick={changeTheme} />
      <span class="slider round"></span>
    </label>
  );
};
export default ToggleDarkMode;
