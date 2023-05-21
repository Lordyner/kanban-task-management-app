import React from 'react';
import { useState } from 'react';
import Header from './Header';
import data from '../data.json';
import { useEffect } from 'react';
import useData from '../Hooks/useData';
import Button from '../InteractiveComponents/Button';
import addTaskIcon from '../images/icon-add-task-mobile.svg';
import Column from './Column';
import TaskDetails from '../Popup/TaskDetails';


const Board = () => {

    // const [boards, setBoards] = useState();
    const { boards, setBoards } = useData();
    const [loading, setLoading] = useState();
    const { selectedBoard, setSelectedBoard } = useData();
    const { selectedTask } = useData();
    const { backgroundFilter } = useData();
    // console.log(boards)
    const { popupOpen, setPopupOpen } = useData();
    useEffect(() => {
        const fetchBoards = (e) => {
            setLoading(true);
            return new Promise((resolve, reject) => {
                try {
                    resolve(data.boards);
                } catch (err) {
                    reject(err);
                } finally {
                    setLoading(false);
                }
            })
        }

        if (boards) return
        fetchBoards()
            .then((boards) => {
                setBoards(boards)
                setSelectedBoard(boards[0])
            })

            .catch(console.error)
    }, [boards, selectedBoard]);

    return (
        <>
            {loading && <p>Chargement en cours</p>}
            {!loading && boards &&
                <>
                    <Header />
                    <main className='main-container'>

                        {selectedBoard && selectedBoard.columns && selectedBoard.columns.length &&

                            selectedBoard.columns.map((column, index) => {
                                return (<Column key={column.name} column={column} />)
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
                    <div className={popupOpen ? 'full-dark-filter' : ''} onClick={() => setPopupOpen(!popupOpen)}>
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