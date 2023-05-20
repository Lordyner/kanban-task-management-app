import React from 'react';

const Subtask = ({ subtask }) => {
    return (
        <div>
            toto
            <input type='checkbox' checked={subtask.isCompleted}></input>
            {subtask.title}
        </div>
    );
};

export default Subtask;