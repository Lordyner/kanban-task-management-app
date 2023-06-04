import React from 'react';
import chevronUp from '../images/icon-chevron-up.svg';
import chevronDown from '../images/icon-chevron-down.svg';
import BoardList from './BoardList';
import { StyleMobileBoardList } from './styled/MobileBoardList.styled';
import { useStoreActions, useStoreState } from 'easy-peasy';
const MobileBoardList = () => {

    const boardListOpened = useStoreState(state => state.boardListOpened);
    const setBoardListOpened = useStoreActions(actions => actions.boardListOpened);
    const backgroundFilter = useStoreState(state => state.backgroundFilter);
    const setBackgroundFilter = useStoreActions(actions => actions.setBackgroundFilter);
    const selectedBoard = useStoreState(state => state.selectedBoard);


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