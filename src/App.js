import { ThemeProvider } from 'styled-components';
import GlobalStyle from './style/GlobalStyles';
import { theme } from './style/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path='/' />
            <Route path='/login' />
            <Route path='/orders' />
            <Route path='/checkout' />
            <Route path='/payment' />
          </Routes>
        </>
      </ThemeProvider>
    </Router>
  );
}

export default App;
