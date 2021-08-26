import styled from 'styled-components';
import { Link } from 'react-router-dom';
import homeImage from '../images/home.jpg';
import homeImage2 from '../images/home2.jpg';
import homeImage3 from '../images/home3.jpg';

const HomeContainerStyled = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
`;
const HomeImageWrapperStyled = styled.div`
  display: relative;
  height: 100%;
  img {
    width: 100%;
    max-width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ButtonStyled = styled.button`
  position: absolute;
  display: flex;
  text-align: center;
  z-index: 3;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  border: 1px solid #000;
  border-radius: 100vh;
  a {
    text-decoration: none;
    color: black;
    min-height: 2rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 11.5rem;
    font-size: 0.85rem;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    font-weight: 600;
  }
`;

export default function Home() {
  return (
    <>
      <HomeContainerStyled>
        <HomeImageWrapperStyled>
          <img src={homeImage} />
        </HomeImageWrapperStyled>
        <ButtonStyled>
          <Link to='/winter'>Winter 22</Link>
        </ButtonStyled>
      </HomeContainerStyled>
      <HomeContainerStyled>
        <HomeImageWrapperStyled>
          <img src={homeImage2} />
        </HomeImageWrapperStyled>
        <ButtonStyled>
          <Link to='/winter'>Winter 22</Link>
        </ButtonStyled>
      </HomeContainerStyled>
      <HomeContainerStyled>
        <HomeImageWrapperStyled>
          <img src={homeImage3} />
        </HomeImageWrapperStyled>
        <ButtonStyled>
          <Link to='/winter'>Winter 22</Link>
        </ButtonStyled>
      </HomeContainerStyled>
    </>
  );
}
