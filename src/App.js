import Board from './Board';
import './index.scss';
import { ThemeProvider } from 'styled-components';
import useData from './Hooks/useData';
import { GlobalStyles, lightTheme, darkTheme } from './components/styled/Global';

function App() {

    const { theme, setTheme } = useData();
    const isDarkTheme = theme === "dark";

    return (
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <GlobalStyles />
            <Board />
        </ThemeProvider>
    );
}

export default App;
