import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useStateValue } from '../state/StateProvider';
import actions from '../state/actions';

const CheckoutProductContainer = styled.div`
  width: 100%;
  display: flex;
  height: 150px;
  border-bottom: 1px solid #000;
`;
const CheckoutProductImageWrapper = styled.div`
  min-height: 9rem;
  width: 150px;
  border-right: 1px solid #000;

  img {
    height: 100%;
  }
`;
const CheckoutProductMainInfo = styled.div`
  width: 100%;
  padding: 1rem;
  h2 {
    text-transform: uppercase;
    font-size: 0.9rem;
    letter-spacing: 0.1rem;
    margin-bottom: 0.9rem;
    font-weight: 700;
  }
  p {
    margin-bottom: 0.5rem;
  }
`;
const CheckoutProductDeleteButton = styled.button`
  width: 30px;
  height: 30px;
  font-size: 15px;
  background: inherit;
  margin: 5px 5px 0 0;
  border: none;
  cursor: pointer;
`;

export default function CheckoutProduct({
  id,
  image,
  price,
  title,
  size,
  hideButton,
}) {
  // eslint-disable-next-line no-unused-vars
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: actions.DELETE_FROM_BASKET,
      id: id,
    });
  };

  return (
    <CheckoutProductContainer>
      <CheckoutProductImageWrapper>
        <img src={image} />
      </CheckoutProductImageWrapper>
      <CheckoutProductMainInfo>
        <h2>{title}</h2>
        <p>Size: {size}</p>
        <p>{price} €</p>
        <p>{id}</p>
      </CheckoutProductMainInfo>
      {!hideButton && (
        <CheckoutProductDeleteButton onClick={removeFromBasket}>
          ╳
        </CheckoutProductDeleteButton>
      )}
    </CheckoutProductContainer>
  );
}

CheckoutProduct.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  size: PropTypes.string,
  id: PropTypes.string,
  hideButton: PropTypes.bool,
};
