import React from 'react';
import { useState } from 'react';
import BoardElement from './BoardElement';
import iconBoard from '../images/icon-board.svg';
import ThemeSwitch from '../InteractiveComponents/ThemeSwitch';
import { StyledBoardList } from './styled/BoardList.styled';
import { useEffect } from 'react';
import useData from '../Hooks/useData';

const BoardList = () => {

    const [boardElementSelected, setBoardElementSelected] = useState();
    const { boards, setBoards } = useData();

    let [boardList, setBoardList] = useState();


    return (

        <StyledBoardList>
            <span className='d-block title-board-list body-m'>ALL BOARDS ({boards.length})</span>
            <div className="board-list-content">
                {boards.map((board, index) => {
                    return (<BoardElement key={board.id} board={board} />)
                })}
                <div className='board-element create-new-board heading-m'>
                    <img src={iconBoard} alt='' />
                    <span>+ Create new board</span>
                </div>
                <ThemeSwitch />
            </div>
        </StyledBoardList>

    );
};

export default BoardList;