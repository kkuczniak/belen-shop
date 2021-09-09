import styled from 'styled-components';
import hoodBack from '../images/hoodBack.jpg';

const DetailsPageContainer = styled.div`
  display: flex;
  width: 100%;
`;
const DetailsProductImage = styled.div`
  border-right: 1px solid #000;
  width: 50%;
`;
const DetailsProductInfos = styled.div`
  width: 50%;
`;

const DetailsProductImageSlider = styled.ul`
  display: block;
  width: 100%;
  height: 100%;
`;
const DetailsProductImageSliderList = styled.li`
  height: 100%;
  position: relative;
  img {
    display: block;
    width: 100%;
    border-bottom: 1px solid #000;
  }
`;

export default function DetailsPage() {
  return (
    <DetailsPageContainer>
      <DetailsProductImage>
        <DetailsProductImageSlider>
          <DetailsProductImageSliderList>
            <img src={hoodBack} alt='' />
            <img src={hoodBack} alt='' />
            <img src={hoodBack} alt='' />
            <img src={hoodBack} alt='' />
          </DetailsProductImageSliderList>
        </DetailsProductImageSlider>
      </DetailsProductImage>
      <DetailsProductInfos></DetailsProductInfos>
    </DetailsPageContainer>
  );
}
