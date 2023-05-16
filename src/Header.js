import React from 'react';
import logoMobile from './images/logo-mobile.svg';
import Button from './InteractiveComponents/Button';
import addTaskIcon from './images/icon-add-task-mobile.svg';
import verticalElipsis from './images/icon-vertical-ellipsis.svg';
import MobileBoardList from './MobileBoardList';
import StyledButton from './InteractiveComponents/Button';
import { StyledHeader } from './components/styled/Header.styled';
const Header = ({ boards }) => {
    return (

        <StyledHeader>
            <div className='d-flex gap-1 align-center'>
                <img src={logoMobile} alt='' />
                <MobileBoardList boards={boards} />
            </div>
            <div className='d-flex gap-1 align-center justify-end'>
                <StyledButton type='primary' icon={addTaskIcon} theme="darkTheme"></StyledButton>
                <img src={verticalElipsis} alt='' />
            </div>
        </StyledHeader>

    );
};

export default Header;