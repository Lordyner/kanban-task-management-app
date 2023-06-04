import React from 'react';
import iconBoard from '../images/icon-board.svg';
import { useStoreState, useStoreActions } from 'easy-peasy';

const BoardElement = ({ board }) => {

    const selectedBoard = useStoreState(state => state.selectedBoard);
    const setSelectedBoard = useStoreActions(actions => actions.setSelectedBoard);

    return (
        <div key={board.id}>
            <div key={board.id} onClick={() => setSelectedBoard(board)} className={selectedBoard === board ? 'board-element selected heading-m' : 'board-element heading-m'}>
                <img src={iconBoard} alt='' />
                <span>{board.name}</span>
            </div>
        </div>
    );
};

export default BoardElement;