import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';

const HeaderStyled = styled.header`
  width: 100%;
  height: 2.75rem;
  display: flex;
  position: relative;
  border-bottom: 1px solid #000;
`;
const LogoStyled = styled.h1`
  width: 9.375rem;
  height: 2.75rem;
  position: relative;
  a {
    width: 100%;
    display: block;
    img {
      position: fixed;
      max-width: 100%;
      width: 8rem;
      height: auto;
      display: block;
      left: 0.625rem;
      top: 0.9375rem;
      z-index: 2;
    }
  }
`;
const MenuContainerStyled = styled.div`
  display: flex;

  width: 100%;
  height: 100%;
  justify-content: space-between;
  nav {
    display: flex;
  }
  ul {
    display: flex;
    margin: 0 20px 0;
    color: ${({ theme }) => theme.color.fontMenu};
  }
  li {
    margin: 0 8px 0;
    font-size: 0.85rem;
    text-transform: uppercase;
    list-style: none;

    left: 0.625rem;
    top: 0.9375rem;
    padding: 1.0625rem 0.5rem 1.0625rem;
    display: flex;
    align-items: center;
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.fontMenu};
  }
`;

function Header() {
  return (
    <>
      <HeaderStyled>
        <LogoStyled>
          <Link to='/'>
            <img src={logo} alt='' />
          </Link>
        </LogoStyled>

        <MenuContainerStyled>
          <nav>
            <ul>
              <li>
                <Link to='/women'>Women</Link>
              </li>
              <li>
                <Link to='/men'>Men</Link>
              </li>
              <li>
                <Link to='/winter'>New Collection</Link>
              </li>
            </ul>
          </nav>
          <nav>
            <ul>
              <li>Poland</li>
              <li>Client Service</li>
              <li>
                <Link to='/login'>Log In</Link>
              </li>
            </ul>
          </nav>
        </MenuContainerStyled>
      </HeaderStyled>
    </>
  );
}

export default Header;
