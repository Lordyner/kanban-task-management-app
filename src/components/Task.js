import React, { useState } from 'react';
import { StyleTask } from './styled/Task.styled';
import { useStoreActions, useStoreState } from 'easy-peasy';

const Task = ({ task }) => {
    const popupOpen = useStoreState(state => state.popupOpen);
    const setPopupOpen = useStoreActions(actions => actions.setPopupOpen);
    const setSelectedTask = useStoreActions(actions => actions.setSelectedTask);
    const backgroundFilter = useStoreState(state => state.backgroundFilter);
    const setBackgroundFilter = useStoreActions(actions => actions.setBackgroundFilter);

    return (
        <StyleTask key={task.id} onClick={() => {
            setPopupOpen(!popupOpen);
            setBackgroundFilter(!backgroundFilter);
            setSelectedTask(task);
        }}>

            <div className='task-content' key={task.id} >
                <span className='task-title'>{task.title}</span>
                <span>{task.subtasks.filter(subtask => subtask.completed).length} of {task.subtasks.length} subtasks</span>
            </div>

        </StyleTask>
    );
};

export default Task;