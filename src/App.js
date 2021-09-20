/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './style/GlobalStyles';
import { theme } from './style/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import MenPage from './pages/MenPage';
import WomenPage from './pages/WomenPage';
import WinterPage from './pages/WinterPage';
import DetailsPage from './pages/DetailsPage';
import CheckoutPage from './pages/CheckoutPage';
import PaymentPage from './pages/PaymentPage';
import { auth } from './firebase';
import actions from './state/actions';
import { useStateValue } from './state/StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Element, Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(
  'pk_test_51JblwLGcgWhBsiYxaskujEc0AJfTvPVi1fN4WX5UZ90T6CMrHNhFfKQ2gskbhQEYsL6Rs7pG6zlMThKppNVcluim00sBYzFtdw'
);

function App() {
  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: actions.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: actions.SET_USER,
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/orders' />
            <Route path='/winter' element={<WinterPage />} />
            <Route path='/men' element={<MenPage />} />
            <Route path='/women' element={<WomenPage />} />
            <Route path='/details/:id' element={<DetailsPage />} />
            <Route path='/checkout' element={<CheckoutPage />} />
            <Route
              path='/payment'
              element={
                <Elements stripe={stripePromise}>
                  <PaymentPage />
                </Elements>
              }
            />
            <Route path='/' element={<Home />} />
          </Routes>
        </>
      </ThemeProvider>
    </Router>
  );
}

export default App;
