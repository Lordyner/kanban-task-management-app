import React from 'react';
import Checkbox from '../InteractiveComponents/Checkbox';
import { useStoreActions } from 'easy-peasy';


const Subtask = ({ subtask }) => {

  const updateSubtask = useStoreActions(actions => actions.updateSubtask);
  return (
    <Checkbox label={subtask.title} checked={subtask.completed} updateState={updateSubtask} id={subtask.id}></Checkbox>
  );
};

export default Subtask;