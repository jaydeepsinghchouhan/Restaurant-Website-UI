import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import theme from './themes/main.js';
import { ThemeProvider } from '@mui/material';
import Main from './components/Main.js';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <header className="App-header">
        <BrowserRouter>
          <Main/>
        </BrowserRouter>
      </header>
      </ThemeProvider>
    </div>
  );
}

export default App;
