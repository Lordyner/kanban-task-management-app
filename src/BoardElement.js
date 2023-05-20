import React from 'react';
import { useState } from 'react';
import iconBoard from './images/icon-board.svg';
import useData from './Hooks/useData';


const BoardElement = ({ board, linkList }) => {

    const [selected, setSelected] = useState(false);
    const { selectedBoard, setSelectedBoard } = useData();

    return (
        <div>
            <div key={board.name} onClick={() => setSelectedBoard(board)} className={selectedBoard === board ? 'board-element selected heading-m' : 'board-element heading-m'}>
                <img src={iconBoard} alt='' />
                <span>{board.name}</span>
            </div>
        </div>
    );
};

export default BoardElement;