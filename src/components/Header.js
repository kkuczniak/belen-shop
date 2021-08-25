import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';

const HeaderStyled = styled.header`
  width: 100%;
  height: 2.75rem;
  position: relative;
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
    }
  }
`;
const MenuContainerStyled = styled.div`
  display: flex;
  height: 100%;
`;
const Demo = styled.div`
  background-color: aqua;
  height: 100vh;
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
        <MenuContainerStyled></MenuContainerStyled>
      </HeaderStyled>
      <Demo />
      <Demo />
      <Demo />
      <Demo />
    </>
  );
}

export default Header;
