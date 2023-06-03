import React from 'react';
import Task from './Task';
import { StyleColumn } from './styled/Column.styled';

const Column = ({ column }) => {
    return (
        <StyleColumn key={column.id}>
            <div key={column.id} className='column-title'>
                <span className="dot weird-blue"></span>
                <span className='column-name'>{column.name} ({column.tasks.length})</span>
            </div>
            {column.tasks.map((task, index) => {
                return (<Task key={task.id} task={task} />)
            })}
        </StyleColumn>
    );
};

export default Column;