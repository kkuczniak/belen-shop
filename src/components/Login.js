/* eslint-disable no-unused-vars */
import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-width: 48rem;
  margin: 0 auto;
  border-left: 1px solid #000;
  border-right: 1px solid #000;
`;
const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #000;
  justify-content: center;
  align-items: center;
  h4 {
    height: 2.75rem;
    letter-spacing: 0.1rem;
    line-height: 2.75rem;
    text-transform: uppercase;
    text-align: center;
  }
  h5 {
    margin: 5px 0 5px;
    text-transform: uppercase;
  }
  p {
    text-transform: uppercase;
    font-size: 0.8rem;
    margin-bottom: 8px;
  }
  li {
    text-transform: uppercase;
    font-size: 0.8rem;
  }
  form {
    margin: 30px 0 30px;
    display: flex;
    width: 40%;
    flex-direction: column;
    justify-content: center;
    h6 {
      margin-bottom: 5px;
    }
    input {
      margin-bottom: 20px;
      height: 30px;
    }
  }
  button {
    background: ${({ theme }) => theme.color.buttonGreen};
    border: none;
    letter-spacing: 0.1rem;
    font-weight: bold;
    height: 30px;
    cursor: pointer;
  }
  a {
    margin: 30px 0 30px;
    display: flex;
    width: 40%;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    text-decoration: none;
    color: #000;
    background: ${({ theme }) => theme.color.buttonGreen};
    border: none;
    letter-spacing: 0.1rem;
    font-weight: bold;
    height: 30px;
    cursor: pointer;
  }
`;

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate('/');
      })
      .catch((error) => alert(error.message));
  };

  return (
    <LoginContainer>
      <LoginWrapper>
        <h4>Login</h4>
      </LoginWrapper>
      <LoginWrapper>
        <h5>returning customer</h5>
        <p>If you are already registered, please log in.</p>
        <form>
          <h6>E-mail</h6>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h6>Password</h6>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={signIn} type='submit'>
            Sign In
          </button>
        </form>
      </LoginWrapper>
      <LoginWrapper>
        <h5>I&apos;m a new customer</h5>
        <p>Create an account for access to :</p>
        <li>Order delivery updates and return management.</li>
        <li>Personalized recommendations.</li>
        <li> Save items in your Wish List.</li>

        <Link to='/register'>Register</Link>
      </LoginWrapper>
    </LoginContainer>
  );
}
