/* eslint-disable react/prop-types */
import { useParams } from 'react-router-dom';
import actions from '../state/actions';
import { useStateValue } from '../state/StateProvider';
import styled from 'styled-components';

const DetailsPageContainer = styled.div`
  display: flex;
  width: 100%;
`;
//left side
const DetailsProductImage = styled.div`
  border-right: 1px solid #000;
  width: 50%;
`;

const DetailsProductImageSlider = styled.ul`
  display: block;
  width: 100%;
`;
const DetailsProductImageSliderList = styled.li`
  position: relative;
  img {
    display: block;
    width: 100%;
    border-bottom: 1px solid #000;
  }
`;
//right side

const DetailsProductInfos = styled.div`
  width: 50%;
`;
const DetailsRightSticky = styled.div`
  position: sticky;
  top: 0px;
`;
const DetailsProductInfosTopSection = styled.div`
  width: 100%;

  display: flex;
  height: 3rem;
  border-bottom: 1px solid #000;
`;
const DetailsProductPrice = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #000;
`;
// add button
const DetailsProductAddButton = styled.button`
  width: 50%;
  background: #44db5e;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  cursor: pointer;
`;
const DetailsProductInfosMainText = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #000;
  h4 {
    text-transform: uppercase;
    padding-left: 15px;
    margin-top: 10px;
  }
  p {
    padding-left: 15px;
    margin-top: 15px;
    margin-bottom: 15px;
  }
`;
const DetailsProductInfosVariantColor = styled.div`
  border-bottom: 1px solid #000;
  margin-top: 10px;
  h5 {
    word-spacing: 0.6rem;
    margin-bottom: 15px;
    font-size: 0.9rem;
    padding-left: 15px;
    text-transform: uppercase;
    font-weight: 400;
    line-height: 1;
  }
`;
const DetailsProductInfosDescription = styled.div`
  margin-top: 10px;
  padding-left: 15px;
  margin-bottom: 15px;
  font-size: 0.9rem;
  h5 {
    margin-bottom: 15px;
    font-size: 0.9rem;
    text-transform: uppercase;
    font-weight: 400;
    line-height: 1;
  }
  ul {
    padding-left: 5px;
  }
  p {
    margin-top: 10px;
  }
`;

function DetailsPage() {
  let { id } = useParams();

  const [{ basket, products }, dispatch] = useStateValue();

  // const addToBasket = () => {
  //   dispatch({
  //     type: actions.ADD_BASKET,
  //     item: {
  //       id: id,
  //       title: title,
  //       image: image,
  //       price: price,
  //       size: size,
  //     },
  //   });
  // };
  console.log(basket);
  return (
    <DetailsPageContainer>
      {products
        .filter((product) => product.id === id)
        .map(({ title, size, price, image }) => {
          const addToBasket = () => {
            dispatch({
              type: actions.ADD_BASKET,
              item: {
                id: id,
                title: title,
                image: image,
                price: price,
                size: size,
              },
            });
          };
          return (
            <>
              <DetailsProductImage>
                <DetailsProductImageSlider>
                  <DetailsProductImageSliderList>
                    <img src={image} alt='' />
                    <img src={image} alt='' />
                    <img src={image} alt='' />
                    <img src={image} alt='' />
                  </DetailsProductImageSliderList>
                </DetailsProductImageSlider>
              </DetailsProductImage>
              <DetailsProductInfos>
                <DetailsRightSticky>
                  <DetailsProductInfosTopSection>
                    <DetailsProductPrice>{price} €</DetailsProductPrice>
                    <DetailsProductAddButton onClick={addToBasket}>
                      Add to basket
                    </DetailsProductAddButton>
                  </DetailsProductInfosTopSection>
                  <DetailsProductInfosMainText>
                    <h4>{title}</h4>
                    <p>Collage Large Drop Black authentic</p>
                  </DetailsProductInfosMainText>
                  <DetailsProductInfosVariantColor>
                    <h5>Color: Black</h5>
                  </DetailsProductInfosVariantColor>
                  <DetailsProductInfosVariantColor>
                    <h5>Drop: 28.08.2021</h5>
                  </DetailsProductInfosVariantColor>
                  <DetailsProductInfosDescription>
                    <h5>Product {id}</h5>
                    <ul>
                      <li>Size {size}</li>
                      <li>Soft breathable fabric</li>
                      <li>Regular fit</li>
                      <li>Long sleeves</li>
                      <li>Hood with metallic eyelets and drawstring</li>
                      <li>Kangaroo pocket</li>
                      <li>Printed logo at front</li>
                      <li>Handwash</li>
                    </ul>
                    <p>Material: 100% cotton</p>
                  </DetailsProductInfosDescription>
                </DetailsRightSticky>
              </DetailsProductInfos>
            </>
          );
        })}
    </DetailsPageContainer>
  );
}

export default DetailsPage;
