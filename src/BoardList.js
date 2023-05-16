import React from 'react';
import { useState } from 'react';
import BoardElement from './BoardElement';
import iconBoard from './images/icon-board.svg';
import ThemeSwitch from './InteractiveComponents/ThemeSwitch';
import logoDark from './images/icon-light-theme.svg';
import logoLight from './images/icon-dark-theme.svg';
import { useEffect } from 'react';

const BoardList = ({ boards }) => {

    const [boardElementSelected, setBoardElementSelected] = useState();

    let [boardList, setBoardList] = useState([]);

    useEffect(() => {
        boards.map((board, index) => {
            if (index === 0) setBoardList([...boardList, true]);
            else setBoardList([...boardList, false]);
        })
    }, [])

    return (

        <div>
            <span className='d-block title-board-list body-m'>ALL BOARDS ({boards.length})</span>
            <div className="board-list-content">
                {boards.map((board, index) => {
                    return (<BoardElement key={board.name} board={board} />)
                })}
                <div className='board-element create-new-board heading-m'>
                    <img src={iconBoard} alt='' />
                    <span>+ Create new board</span>
                </div>
                <div className='themeSwitch'>
                    <img src={logoDark} alt=''></img>
                    <ThemeSwitch />
                    <img src={logoLight} alt=''></img>
                </div>


            </div>
        </div>

    );
};

export default BoardList;