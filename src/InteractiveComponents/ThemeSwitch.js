import React from 'react';
import useData from '../Hooks/useData';
import { StyledThemeSwitch } from '../components/styled/ThemeSwitch.styled';

const ThemeSwitch = () => {

    const { theme, setTheme } = useData();
    const isDarkTheme = theme === "dark";
    const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");
    return (
        <StyledThemeSwitch>
            <input type="checkbox" onClick={toggleTheme} />
            <span className="slider round"></span>
        </StyledThemeSwitch>
    );
};

export default ThemeSwitch;