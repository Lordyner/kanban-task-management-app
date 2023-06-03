import React from 'react';
import { useState } from 'react';
import Header from './Header';
import { useEffect } from 'react';
import useData from '../Hooks/useData';
import Button from '../InteractiveComponents/Button';
import addTaskIcon from '../images/icon-add-task-mobile.svg';
import Column from './Column';
import TaskDetails from '../Popup/TaskDetails';
import { axiosPrivate } from '../api/axios';
const Board = () => {

    // const [boards, setBoards] = useState();
    const { boards, setBoards } = useData();
    const [loading, setLoading] = useState();
    const { selectedBoard, setSelectedBoard } = useData();
    const { selectedTask } = useData();
    const { backgroundFilter } = useData();
    const { popupOpen, setPopupOpen } = useData();

    const fetchBoards = async () => {
        try {
            const response = await axiosPrivate.get('/boards', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                responseType: 'json',
                withCredentials: true
            });
            console.log(response.data);
            setBoards(response.data);
            setSelectedBoard(response.data[0])
        } catch (err) {
            if (err.code === "ERR_NETWORK") {
                console.log('An error occured')
            } else {
                console.log(err?.response?.data?.message);
            }
        }
    }

    const updateTask = async () => {
        try {
            const response = await axiosPrivate.patch('/tasks/task', {
                id: selectedTask.id,
                title: selectedTask.title,
                description: selectedTask.description,
                status: selectedTask.status,
                subtasks: selectedTask.subtasks,

            })
            if (response?.status !== 204 || response?.status !== 200) {
                //TODO send error
            }
        } catch (err) { }
    }



    useEffect(() => {
        fetchBoards();
    }, []);

    return (
        <>
            {loading && <p>Chargement en cours</p>}
            {!loading && boards &&
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
                    {/* Pop-up */}
                    <div className={popupOpen ? 'full-dark-filter' : ''} onClick={() => {
                        // Si la popup est ouverte on enregistre ce qui a été changé
                        if (popupOpen) updateTask();
                        setPopupOpen(!popupOpen)

                    }}>
                        <div className={popupOpen ? 'popup-task' : 'popup-task hidden'} onClick={(e) => e.stopPropagation()}>
                            {selectedTask && <TaskDetails task={selectedTask} />}
                        </div>
                    </div>
                </>
            }
        </>
    );
};

export default Board;