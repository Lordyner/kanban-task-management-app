import React from 'react';
import Checkbox from './InteractiveComponents/Checkbox';
const Subtask = ({ subtask }) => {


    return (
        <Checkbox subtask={subtask}></Checkbox>
    );
};

export default Subtask;