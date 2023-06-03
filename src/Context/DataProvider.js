import { createContext, useState } from 'react';
const DataContext = createContext({});

export const DataProvider = ({ children }) => {

    const [boardListOpened, setBoardListOpened] = useState(false);
    const [theme, setTheme] = useState("light");
    const [selectedBoard, setSelectedBoard] = useState();
    const [selectedTask, setSelectedTask] = useState();
    const [boards, setBoards] = useState([{}]);
    const [backgroundFilter, setBackgroundFilter] = useState(false);
    const [popupOpen, setPopupOpen] = useState(false);

    return (
        <DataContext.Provider value={{
            boardListOpened, setBoardListOpened,
            selectedBoard, setSelectedBoard,
            theme, setTheme,
            boards, setBoards,
            backgroundFilter, setBackgroundFilter,
            selectedTask, setSelectedTask,
            popupOpen, setPopupOpen
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;