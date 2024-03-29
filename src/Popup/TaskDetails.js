import React from 'react';
import { TaskDetailsStyle } from '../components/styled/TaskDetails.styled';
import verticalElipsis from '../images/icon-vertical-ellipsis.svg';
import Subtask from '../components/Subtask';
import DropdownListStatus from '../InteractiveComponents/DropdownListStatus';
import { useStoreActions, useStoreState } from 'easy-peasy';

const TaskDetails = ({ task }) => {

    const selectedBoard = useStoreState(state => state.selectedBoard);
    const selectedTask = useStoreState(state => state.selectedTask);

    const setSelectedTask = useStoreActions(actions => actions.setSelectedTask);

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
                    Subtasks ({selectedTask.subtasks.filter(subtask => subtask.completed).length} of {selectedTask.subtasks.length})
                </span>
            }

            {selectedTask.subtasks && selectedTask.subtasks.map((subtask, index) => {
                return (<Subtask subtask={subtask} key={subtask.title} />)
            })}
            <span className='subtasks-title'>
                Current status
            </span>
            <DropdownListStatus columns={selectedBoard.columns} />

        </TaskDetailsStyle>

    );
};

export default TaskDetails;