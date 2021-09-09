import { ThemeProvider } from 'styled-components';
import GlobalStyle from './style/GlobalStyles';
import { theme } from './style/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import MenPage from './pages/MenPage';
import WomenPage from './pages/WomenPage';
import WinterPage from './pages/WinterPage';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/orders' />
            <Route path='/winter' element={<WinterPage />} />
            <Route path='/men' element={<MenPage />} />
            <Route path='/women' element={<WomenPage />} />
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
