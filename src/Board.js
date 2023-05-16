import React from 'react';
import { useState } from 'react';
import Header from './Header';
import data from './data.json';
import { useEffect } from 'react';
import useData from './Hooks/useData';
import Button from './InteractiveComponents/Button';
import addTaskIcon from './images/icon-add-task-mobile.svg';


const Board = () => {

    const fetchBoards = async (e) => {
        try {
            setBoards(data.boards);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        fetchBoards();
    }, []);

    const tasks = useState({
        title: '',
        description: '',
        status: '',
        subtasks: [
            {
                title: '',
                isCompleted: false
            }
        ]
    });

    const columns = useState({
        name: '',
        tasks: []
    });

    const [boards, setBoards] = useState([]);
    const { boardListOpened } = useData();

    return (
        <>
            <Header boards={boards} />
            <main className={boardListOpened ? 'main-container dark-filter' : 'main-container'}>
                {boards.length > 0 &&
                    <div className='empty-board'>
                        <p>This board is empty. Create a new column to get started</p>
                        <Button type='primary' icon={addTaskIcon} text={"Add new column"} theme="darkTheme" />
                    </div>
                }
                {/* {boards.length > 0 &&
                    <>
                        <p>This board is empty. Create a new column to get started</p>
                        <Button type='primary' icon={addTaskIcon} text={"Add new column"} />
                    </>
                } */}


            </main>
        </>
    );
};

export default Board;