import React, { useState } from 'react';
import { TaskDetailsStyle } from '../components/styled/TaskDetails.styled';
import verticalElipsis from '../images/icon-vertical-ellipsis.svg';
import Subtask from '../components/Subtask';

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
            <span className='subtasks-title'>
                Subtasks ({task.subtasks.filter(subtask => subtask.isCompleted).length} of {task.subtasks.length})
            </span>
            {task.subtasks.map((subtask, index) => {
                return (<Subtask subtask={subtask} key={subtask.title} />)
            })}

        </TaskDetailsStyle>

    );
};

export default TaskDetails;