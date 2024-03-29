import React, { useRef } from 'react';
import Header from './Header';
import Button from '../InteractiveComponents/Button';
import addTaskIcon from '../images/icon-add-task-mobile.svg';
import Column from './Column';
import TaskDetails from '../Popup/TaskDetails';
import { useStoreActions, useStoreState } from 'easy-peasy';

const Board = () => {

    const boards = useStoreState(state => state.boards);
    const selectedBoard = useStoreState(state => state.selectedBoard);
    const selectedTask = useStoreState(state => state.selectedTask);
    const popupOpen = useStoreState(state => state.popupOpen);
    const setPopupOpen = useStoreActions(actions => actions.setPopupOpen);
    const updateTask = useStoreActions(actions => actions.updateTask);
    return (
        <>
            {boards &&
                <>
                    <Header />
                    <main className='main-container'>

                        {selectedBoard && selectedBoard.columns && selectedBoard.columns.length &&

                            selectedBoard.columns.map((column, index) => {
                                return (<Column key={column.id} column={column} />)
                            })
                        }
                        {selectedBoard && selectedBoard.columns && selectedBoard.columns.length === 0 &&
                            <div className='empty-board'>
                                <p>This board is empty. Create a new column to get started</p>
                                <Button type='primary' icon={addTaskIcon} text={"Add new column"} theme="darkTheme" />
                            </div>
                        }

                    </main>

                    {/* Dark-filter */}
                    <div className={popupOpen ? 'full-dark-filter' : ''} onClick={() => {
                        // Save changes at popup closing
                        if (popupOpen) updateTask();
                        setPopupOpen(!popupOpen);
                    }}>
                    </div>

                    {/* Popup task */}
                    <div className={popupOpen ? 'popup-task' : 'popup-task hidden'} onClick={(e) => e.stopPropagation()}>
                        {selectedTask && <TaskDetails task={selectedTask} />}
                    </div>
                </>
            }
        </>
    );
};

export default Board;