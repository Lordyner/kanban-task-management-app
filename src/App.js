import Board from './components/Board';
import './index.scss';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, lightTheme, darkTheme } from './components/styled/Global';
import { useEffect } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import useAxiosFetch from './Hooks/useAxiosFetch';
function App() {

    const theme = useStoreState(state => state.theme);
    const setTheme = useStoreActions(actions => actions.setTheme);
    const isDarkTheme = theme === "dark";
    const setBoards = useStoreActions((actions) => actions.setBoards);
    const boards = useStoreActions((actions) => actions.boards);
    const setSelectedBoard = useStoreActions((actions) => actions.setSelectedBoard);
    const fetchBoards = useStoreActions((actions) => actions.fetchBoards);
    // const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:8080/kanban-task-manager/api/v1/boards');
    useEffect(() => {
        fetchBoards();
    }, [boards, setBoards]);

    return (
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <GlobalStyles />
            <Board />
        </ThemeProvider>
    );
}

export default App;
