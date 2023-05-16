import { createContext, useState } from 'react';
const DataContext = createContext({});

export const DataProvider = ({ children }) => {

    const [nbTokenPlayerTwo, setNbTokenPlayerTwo] = useState();
    const [boardListOpened, setBoardListOpened] = useState(false);
    const [theme, setTheme] = useState("light");
    const getWindowSize = () => {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }


    return (
        <DataContext.Provider value={{
            nbTokenPlayerTwo, setNbTokenPlayerTwo,
            getWindowSize,
            boardListOpened, setBoardListOpened,
            theme, setTheme
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;