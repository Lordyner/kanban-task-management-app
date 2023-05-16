import React from 'react';
import styled from 'styled-components';
import COLORS from '../Constants';

const Button = ({ type, icon, text, className, theme }) => {
    return (
        <button className={className}>
            <img src={icon} alt='' />
            <span className='heading-m'>{text}</span>
        </button>
    );
};

// Define our `fg` and `bg` on the theme
const lightTheme = {
    fg: "palevioletred",
    bg: "white"
};
const darkTheme = {
    fg: "black",
    bg: "white"
};

const StyledButton = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${COLORS.purple400};
    border: none;
    border-radius: 24px;
    padding: 10px 18px 10px 18px;
    cursor: pointer;
    color: #fff;
    width: fit-content;
`;

export default StyledButton;