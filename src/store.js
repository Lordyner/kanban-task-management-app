import { createStore, action, thunk, computed } from "easy-peasy";
import { axiosPrivate } from './api/axios';

export default createStore({

    boards: [],
    setBoards: action((state, payload) => {
        state.boards = payload;
    }),
    theme: 'light',
    setTheme: action((state, payload) => {
        state.theme = payload;
    }),
    boardListOpened: false,
    setBoardListOpened: action((state, payload) => {
        state.boardListOpened = payload;
    }),
    backgroundFilter: false,
    setBackgroundFilter: action((state, payload) => {
        state.backgroundFilter = payload
    }),
    popupOpen: false,
    setPopupOpen: action((state, payload) => {
        state.popupOpen = payload;
    }),
    selectedBoard: {},
    setSelectedBoard: action((state, payload) => {
        state.selectedBoard = payload;
    }),
    selectedTask: {},
    setSelectedTask: action((state, payload) => {
        state.selectedTask = payload;
    }),

    fetchBoards: thunk(async (actions, helpers) => {
        try {
            const response = await axiosPrivate.get('/boards', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                responseType: 'json',
                withCredentials: true
            });
            console.log(response);
            console.log(response.data);
            const theBoards = response.data.map(board => board);

            actions.setBoards(theBoards);
            actions.setSelectedBoard(response.data[0]);

        } catch (err) {
            if (err.code === "ERR_NETWORK") {
                console.log('An error occured')
            } else {
                console.log(err?.response?.data?.message);
            }
        }
    }),

    updateTask: thunk(async (actions, payload, helpers) => {
        try {
            const { selectedTask } = helpers.getState();

            const response = await axiosPrivate.patch('/tasks/task', {
                id: selectedTask.id,
                title: selectedTask.title,
                description: selectedTask.description,
                status: selectedTask.status,
                subtasks: selectedTask.subtasks,
                columnId: selectedTask.columnId

            })
            if (response?.status !== 204 || response?.status !== 200) {
                //TODO send error

            }
        } catch (err) {
            console.log(err);
        } finally {
            console.log("task updated");
        }
    }),

    updateBoard: thunk(async (actions, payload, helpers) => {
        try {
            const { selectedBoard } = helpers.getState();
            const { selectedTask } = helpers.getState();

            const response = await axiosPrivate.patch('/boards/board', {
                id: selectedBoard.id,
                name: selectedBoard.name,
                columns: selectedBoard.columns.map(column => {
                    return {
                        id: column.id,
                        name: column.name,
                        task: column.tasks.map(task => task.id === selectedTask.id)
                    }
                })
            })
            if (response?.status !== 204 || response?.status !== 200) {
                //TODO send error

            }
        } catch (err) {
            console.log(err);
        } finally {
            console.log("task updated");
        }
    }),

    updateSubtask: thunk(async (actions, { id, completed, label }, helpers) => {
        const { selectedTask } = helpers.getState();
        const indexSubtaskToUpdate = selectedTask.subtasks.findIndex(subtask => subtask.id === id);
        selectedTask.subtasks[indexSubtaskToUpdate] = { id: id, completed: completed, title: label };
        actions.setSelectedTask(selectedTask);
    })
});