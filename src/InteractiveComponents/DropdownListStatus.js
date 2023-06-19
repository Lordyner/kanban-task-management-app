import React, { useEffect, useState } from 'react';
import { StyledDropdownList } from '../components/styled/DropdownList.styled';
import { useStoreActions, useStoreState } from 'easy-peasy';

const DropdownList = ({ columns }) => {

    const setSelectedTask = useStoreActions(actions => actions.setSelectedTask);
    const setSelectedBoard = useStoreActions(actions => actions.setSelectedBoard);
    const selectedTask = useStoreState(state => state.selectedTask);
    const selectedBoard = useStoreState(state => state.selectedBoard);



    const handleColumnChange = (e) => {

        let columnList = [...columns];

        // We remove the task from its old column
        columnList.map(column => {
            if (column.name === selectedTask.status) {
                column.tasks = column.tasks.filter(task => task.id !== selectedTask.id);
                console.log("Task removed from old column " + selectedTask.status);
                console.log(column.tasks);
            }
        })
        console.log(`id column : ${e.target.selectedOptions[0].dataset.columnId}`);
        // We update the status of the task
        setSelectedTask({
            ...selectedTask,
            status: e.target.selectedOptions[0].value,
            columnId: e.target.selectedOptions[0].dataset.columnId
        })
        console.log("selected task : " + selectedTask);
        // We add the task in its new column
        columnList.map(column => {
            if (column.name === e.target.selectedOptions[0].label) {
                column.tasks = [...column.tasks, selectedTask];
            }
        })

        // We udpdate the selected board
        setSelectedBoard({
            ...selectedBoard,
            columns: columnList
        })
        console.log(selectedBoard);
    }


    return (
        <StyledDropdownList>
            <select
                onChange={(e) => handleColumnChange(e)}
                value={selectedTask.status}
            >
                {columns && columns.map((column, index) => {
                    return (<option key={column.id} data-column-id={column.id} value={column.name}>{column.name}</option>)
                })}
            </select>
        </StyledDropdownList>

    );
};

export default DropdownList;