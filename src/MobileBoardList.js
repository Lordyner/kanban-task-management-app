import React from 'react';
import chevronUp from './images/icon-chevron-up.svg';
import chevronDown from './images/icon-chevron-down.svg';
import BoardList from './BoardList';
import useData from './Hooks/useData';

const MobileBoardList = ({ boards }) => {

    const { boardListOpened, setBoardListOpened } = useData();

    return (
        <>
            <div className='mobile-board-list' onClick={() => setBoardListOpened(!boardListOpened)}>
                {boards.length && <label className='heading-l'>{boards[0].name}</label>}
                {boardListOpened ? <img src={chevronUp} alt='' /> : <img src={chevronDown} alt='' />}

            </div>
            <div className={boardListOpened ? 'popup-board-list' : 'popup-board-list hidden'}>
                <BoardList boards={boards} />
            </div>

        </>
    );
};

export default MobileBoardList;