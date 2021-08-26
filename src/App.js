import { ThemeProvider } from 'styled-components';
import GlobalStyle from './style/GlobalStyles';
import { theme } from './style/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path='/login' />
            <Route path='/orders' />
            <Route path='/winter' />
            <Route path='/checkout' />
            <Route path='/payment' />
            <Route path='/' element={<Home />} />
          </Routes>
        </>
      </ThemeProvider>
    </Router>
  );
}

export default App;
