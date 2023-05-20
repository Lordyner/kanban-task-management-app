import React, { useState } from 'react';
import { StyleTask } from './components/styled/Task.styled';
import TaskDetails from './Popup/TaskDetails';
import useData from './Hooks/useData';

const Task = ({ task }) => {

    const [popupOpen, setPopupOpen] = useState(false);
    const { backgroundFilter, setBackgroundFilter } = useData();

    return (
        <StyleTask onClick={() => {
            setPopupOpen(!popupOpen);
            setBackgroundFilter(!backgroundFilter)
        }}>
            <div className={popupOpen ? 'popup-task' : 'popup-task hidden'}>
                <TaskDetails task={task} />
            </div>
            <div className='task-content' key={task.title} >
                <span className='task-title'>{task.title}</span>
                <span>{task.subtasks.filter(subtask => subtask.isCompleted).length} of {task.subtasks.length} subtasks</span>
            </div>

        </StyleTask>
    );
};

export default Task;