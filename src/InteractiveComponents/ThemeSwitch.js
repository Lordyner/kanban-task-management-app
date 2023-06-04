import React from 'react';
import { StyledThemeSwitch } from '../components/styled/ThemeSwitch.styled';
import logoDark from '../images/icon-light-theme.svg';
import logoLight from '../images/icon-dark-theme.svg';
import { useStoreActions, useStoreState } from 'easy-peasy';

const ThemeSwitch = () => {

    const theme = useStoreState(state => state.theme);
    const setTheme = useStoreActions(actions => actions.setTheme);
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