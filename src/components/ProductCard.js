import PropTypes from 'prop-types';
import styled from 'styled-components';

const ProductCardContainer = styled.li`
  border: 1px solid #000;
  border-top: none;
  border-left: none;
  width: 25%;
  /* height: 35.625rem; */
  display: flex;
  flex-direction: column;
`;
const ProductCardInfosTop = styled.div`
  width: 50%;
  position: relative;
  z-index: 1;
  left: 15px;
  top: 12px;
  h2 {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.8125rem;
  }
`;
const ProductCardInfosBottom = styled.div`
  width: 50%;
  position: relative;
  z-index: 1;
  left: 15px;
  bottom: 8px;
`;
const ProductCardImage = styled.div`
  width: 100%;
  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
`;

export default function ProductCard({ name, price, image, size }) {
  return (
    <ProductCardContainer>
      <ProductCardInfosTop>
        <h2>{name}</h2>
        <p>{price} €</p>
      </ProductCardInfosTop>
      <ProductCardImage>
        <img src={image} />
      </ProductCardImage>
      <ProductCardInfosBottom>
        <p>{size}</p>
      </ProductCardInfosBottom>
    </ProductCardContainer>
  );
}

ProductCard.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  size: PropTypes.string,
};
