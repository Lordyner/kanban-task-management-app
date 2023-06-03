import React from 'react';
import Checkbox from '../InteractiveComponents/Checkbox';


const Subtask = ({ subtask }) => {

const updateSubtask = () => {
  
}
  return (
    <Checkbox label={subtask.title} checked={subtask.completed} ></Checkbox>
  );
};

export default Subtask;