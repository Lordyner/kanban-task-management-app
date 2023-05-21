import React from 'react';
import Checkbox from '../InteractiveComponents/Checkbox';
const Subtask = ({ subtask }) => {


    return (
        <Checkbox label={subtask.title} checked={subtask.isCompleted}></Checkbox>
    );
};

export default Subtask;