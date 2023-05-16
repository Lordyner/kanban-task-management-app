import React from 'react';
import useData from '../Hooks/useData';
import { StyledThemeSwitch } from '../components/styled/ThemeSwitch.styled';
import logoDark from '../images/icon-light-theme.svg';
import logoLight from '../images/icon-dark-theme.svg';

const ThemeSwitch = () => {

    const { theme, setTheme } = useData();
    const isDarkTheme = theme === "dark";
    const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");
    return (

        <StyledThemeSwitch>
            <img src={logoDark} alt=''></img>
            <label className='switch'>
                <input type="checkbox" onClick={toggleTheme} />
                <span className="slider round"></span>
            </label>
            <img src={logoLight} alt=''></img>
        </StyledThemeSwitch>
    );
};

export default ThemeSwitch;