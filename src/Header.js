import { React, useState } from 'react';
import logoMobile from './images/logo-mobile.svg';
import addTaskIcon from './images/icon-add-task-mobile.svg';
import verticalElipsis from './images/icon-vertical-ellipsis.svg';
import MobileBoardList from './MobileBoardList';
import StyledButton from './InteractiveComponents/Button';
import { StyledHeader } from './components/styled/Header.styled';
import { useWindowSize } from './Hooks/useWindowSize';
import useData from './Hooks/useData';
const Header = () => {

    const { width, height } = useWindowSize();
    const { boards, setBoards } = useData();
    const { selectedBoard } = useData();
    return (

        <StyledHeader>
            <div className='d-flex gap-1 align-center'>
                <img src={logoMobile} alt='' />
                {/* En format mobile on affiche la liste des boards dans une popup */}
                {width <= 1199 && <MobileBoardList />}
                {/* En format tablet, desktop, on affiche simplement le titre du board sélectionné */}
                {width > 1200 && <label className='heading-l'>{selectedBoard && selectedBoard.name}</label>}
            </div>
            <div className='d-flex gap-1 align-center justify-end'>
                <StyledButton type='primary' icon={addTaskIcon} theme="darkTheme"></StyledButton>
                <img src={verticalElipsis} alt='' />
            </div>
        </StyledHeader>

    );
};

export default Header;