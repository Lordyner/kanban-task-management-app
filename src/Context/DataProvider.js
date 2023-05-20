import { createContext, useState } from 'react';
const DataContext = createContext({});

export const DataProvider = ({ children }) => {

    const [boardListOpened, setBoardListOpened] = useState(false);
    const [theme, setTheme] = useState("light");
    const [selectedBoard, setSelectedBoard] = useState();
    const [boards, setBoards] = useState();
    const [backgroundFilter, setBackgroundFilter] = useState(false);


    return (
        <DataContext.Provider value={{
            boardListOpened, setBoardListOpened,
            selectedBoard, setSelectedBoard,
            theme, setTheme,
            boards, setBoards,
            backgroundFilter, setBackgroundFilter
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;