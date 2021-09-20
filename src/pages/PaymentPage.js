import styled from 'styled-components';
// import CurrencyFormat from 'react-currency-format';
// import { Link, useNavigate } from 'react-router-dom';
import CheckoutProduct from '../components/CheckoutProduct';
import { useStateValue } from '../state/StateProvider';
// import { getBasketTotal } from '../state/reducer';

const PaymentPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-width: 48rem;
  margin: 0 auto;
  border-left: 1px solid #000;
  border-right: 1px solid #000;
`;
const PaymentProductSummary = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #000;

  h4 {
    height: 2.75rem;
    letter-spacing: 0.1rem;
    line-height: 2.75rem;
    text-transform: uppercase;

    text-align: center;
  }
`;
const PaymentProductSummaryCost = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #000;
  p {
    font-size: 0.75rem;
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
    strong {
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
    }
  }
  button {
    display: flex;
    position: relative;
    border: none;
    font-weight: bold;
    letter-spacing: 0.1rem;
    border-left: 1px solid #000;
    border-top: 1px solid;
    background: ${({ theme }) => theme.color.buttonGreen};
    top: 0.6rem;
    height: 2.5rem;
    text-align: center;
    justify-content: center;
    text-transform: uppercase;
    width: 9rem;
    cursor: pointer;
  }
`;

export default function PaymentPage() {
  // eslint-disable-next-line no-unused-vars
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <PaymentPageContainer>
      <PaymentProductSummary>
        <h4>Checkout</h4>
      </PaymentProductSummary>
      <PaymentProductSummaryCost>
        <p>email</p>
        <p>awf@gmail.com</p>
        <p>price</p>
        <p>1 500 </p>
      </PaymentProductSummaryCost>
      <PaymentProductSummaryCost>
        <p>Address</p>
        <p>12 Boulevard New York</p>
      </PaymentProductSummaryCost>
      {basket.map((item) => (
        <CheckoutProduct
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          size={item.size}
        />
      ))}
      <PaymentProductSummaryCost>
        <p>Order Total</p>
        <p>Payment</p>
      </PaymentProductSummaryCost>
    </PaymentPageContainer>
  );
}
