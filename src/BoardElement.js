import React from 'react';
import { useState } from 'react';
import iconBoard from './images/icon-board.svg';


const BoardElement = ({ board, linkList }) => {

    const [selected, setSelected] = useState(false);

    return (
        <div>
            <div key={board.name} onClick={() => setSelected(!selected)} className={selected ? 'board-element selected heading-m' : 'board-element heading-m'}>
                <img src={iconBoard} alt='' />
                <span>{board.name}</span>
            </div>
        </div>
    );
};

export default BoardElement;