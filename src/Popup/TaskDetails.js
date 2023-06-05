import React from 'react';
import { TaskDetailsStyle } from '../components/styled/TaskDetails.styled';
import verticalElipsis from '../images/icon-vertical-ellipsis.svg';
import Subtask from '../components/Subtask';
import DropdownList from '../InteractiveComponents/DropdownList';

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
            {task.subtasks &&
                <span className='subtasks-title'>
                    Subtasks ({task.subtasks.filter(subtask => subtask.completed).length} of {task.subtasks.length})
                </span>
            }

            {task.subtasks && task.subtasks.map((subtask, index) => {
                return (<Subtask subtask={subtask} key={subtask.title} />)
            })}
            <span className='subtasks-title'>
                Current status
            </span>
            <DropdownList />

        </TaskDetailsStyle>

    );
};

export default TaskDetails;