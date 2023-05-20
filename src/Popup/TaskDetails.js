import React from 'react';
import { TaskDetailsStyle } from '../components/styled/TaskDetails.styled';
import verticalElipsis from '../images/icon-vertical-ellipsis.svg';
import Subtask from '../Subtask';

const TaskDetails = ({ task }) => {
    return (
        <TaskDetailsStyle>
            <div className='popup-task-title'>
                {task.title}
                <img src={verticalElipsis} alt='' />
            </div>
            <div className='popup-task-content'>
                {task.description}
            </div>
            {task.subtask && task.subtask.length && task.subtask.map((subtask, index) => {
                return (<Subtask subtask={subtask} key={subtask.title} />)
            })}

        </TaskDetailsStyle>

    );
};

export default TaskDetails;