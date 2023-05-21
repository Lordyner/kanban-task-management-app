import React, { useState } from 'react';
import chevronUp from '../images/icon-chevron-up.svg';
import chevronDown from '../images/icon-chevron-down.svg';
import BoardList from './BoardList';
import useData from '../Hooks/useData';
import { StyleMobileBoardList } from './styled/MobileBoardList.styled';
const MobileBoardList = () => {

    const { boardListOpened, setBoardListOpened } = useData();
    const { backgroundFilter, setBackgroundFilter } = useData();
    const { selectedBoard, setSelectedBoard } = useData();
    const { boards, setBoards } = useData();
    return (
        <StyleMobileBoardList>
            <div className='mobile-board-list' onClick={() => {
                setBackgroundFilter(!backgroundFilter);
                setBoardListOpened(!boardListOpened);
            }}>

                {selectedBoard && <label className='heading-l'>{selectedBoard.name}</label>}

                {boardListOpened ? <img src={chevronUp} alt='' /> : <img src={chevronDown} alt='' />}
            </div>
            <div className={boardListOpened ? 'dark-filter' : ''}>
                <div className={boardListOpened ? 'popup-board-list' : 'popup-board-list hidden'}>

                    <BoardList />
                </div>

            </div>
        </StyleMobileBoardList>
    );
};

export default MobileBoardList;